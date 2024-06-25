import { render, screen } from '@testing-library/react';
import { ContactSupport } from './ContactSupport';

describe('ContactSupport Component', () => {
  it('renders correctly with name and email props', () => {
    render(<ContactSupport name="John Doe" email="john@example.com" />);

    expect(screen.getByText('J')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('020 3362 4208')).toBeInTheDocument();
  });

  it('throws an error if no props are provided', () => {
    console.error = jest.fn();

    expect(() => render(<ContactSupport />)).toThrowError();
    expect(console.error).toHaveBeenCalled();
  });
});