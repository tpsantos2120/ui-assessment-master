import { render, screen } from '@testing-library/react';
import AccountOverview from './AccountOverview';

test('renders learn react link', () => {
  render(<AccountOverview />);
  const element = screen.getByText(/Build your components here/i);
  expect(element).toBeInTheDocument();
});
