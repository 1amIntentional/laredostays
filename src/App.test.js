import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock Vercel Analytics
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null
}));

// Mock fetch for Formspree
global.fetch = jest.fn();

describe('Contact Form', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders contact form with all fields', () => {
    render(<App />);
    
    // Navigate to contact page
    const contactButton = screen.getByText('Contact Us');
    fireEvent.click(contactButton);
    
    // Check form elements exist
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell us about your needs/)).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  test('validates required fields', () => {
    render(<App />);
    
    // Navigate to contact page
    fireEvent.click(screen.getByText('Contact Us'));
    
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const messageInput = screen.getByPlaceholderText(/Tell us about your needs/);
    
    // Check required attributes
    expect(nameInput).toHaveAttribute('required');
    expect(emailInput).toHaveAttribute('required');
    expect(messageInput).toHaveAttribute('required');
  });

  test('handles form submission successfully', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<App />);
    
    // Navigate to contact page
    fireEvent.click(screen.getByText('Contact Us'));
    
    // Fill form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Tell us about your needs/), {
      target: { value: 'I need a place for 2 weeks' }
    });
    
    // Submit form
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    // Check loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument();
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/)).toBeInTheDocument();
    });
    
    // Verify fetch was called with correct data
    expect(fetch).toHaveBeenCalledWith(
      'https://formspree.io/f/xrbkpwey',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'I need a place for 2 weeks'
        })
      })
    );
  });

  test('handles form submission error', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<App />);
    
    // Navigate to contact page
    fireEvent.click(screen.getByText('Contact Us'));
    
    // Fill and submit form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Tell us about your needs/), {
      target: { value: 'Test message' }
    });
    
    fireEvent.click(screen.getByText('Send Message'));
    
    // Wait for error message
    await waitFor(() => {
      const errorMessage = screen.getByText(/Failed to send message/);
      expect(errorMessage).toBeInTheDocument();
      // Check that the error message contains the phone number
      expect(errorMessage.textContent).toContain('(929) 268-6011');
    });
  });

  test('disables form during submission', async () => {
    fetch.mockImplementation(() => new Promise(() => {})); // Never resolves

    render(<App />);
    
    // Navigate to contact page
    fireEvent.click(screen.getByText('Contact Us'));
    
    // Fill and submit form
    fireEvent.change(screen.getByPlaceholderText('Your Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByPlaceholderText('Your Email'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByPlaceholderText(/Tell us about your needs/), {
      target: { value: 'Test message' }
    });
    
    const submitButton = screen.getByText('Send Message');
    fireEvent.click(submitButton);
    
    // Check inputs are disabled
    expect(screen.getByPlaceholderText('Your Name')).toBeDisabled();
    expect(screen.getByPlaceholderText('Your Email')).toBeDisabled();
    expect(screen.getByPlaceholderText(/Tell us about your needs/)).toBeDisabled();
    expect(screen.getByText('Sending...')).toBeDisabled();
  });

  test('clears form after successful submission', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<App />);
    
    // Navigate to contact page
    fireEvent.click(screen.getByText('Contact Us'));
    
    const nameInput = screen.getByPlaceholderText('Your Name');
    const emailInput = screen.getByPlaceholderText('Your Email');
    const messageInput = screen.getByPlaceholderText(/Tell us about your needs/);
    
    // Fill form
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    // Submit
    fireEvent.click(screen.getByText('Send Message'));
    
    // Wait for success
    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/)).toBeInTheDocument();
    });
    
    // Check form is cleared
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageInput.value).toBe('');
  });

  test('shows SMS fallback link', () => {
    render(<App />);
    
    // Navigate to contact page
    fireEvent.click(screen.getByText('Contact Us'));
    
    // Check SMS link exists
    const smsLink = screen.getByText(/text us at/i);
    expect(smsLink).toBeInTheDocument();
    expect(smsLink.closest('a')).toHaveAttribute('href', 'sms:+19292686011?body=Hi, I\'m interested in LaredoStays properties.');
  });
});
