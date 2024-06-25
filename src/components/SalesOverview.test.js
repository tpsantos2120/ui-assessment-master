import { render, screen } from '@testing-library/react';
import { SalesOverview } from './SalesOverview';

jest.mock('date-fns', () => ({
  format: jest.fn(() => '01/01/2020'),
}));

describe('SalesOverview Component', () => {
  it('renders correctly with provided data', () => {
    const mockData = {
      uploads: 10,
      successfulUploads: 2,
      linesAttempted: 50,
      linesSaved: 20,
      lastUploadDate: Date.now().valueOf(),
    };

    render(<SalesOverview data={mockData}/>);

    expect(screen.getByText('10 uploads')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
  });

  it('throws an error if no data prop is provided', () => {
    console.error = jest.fn();

    expect(() => render(<SalesOverview />)).toThrowError();
    expect(console.error).toHaveBeenCalled();
  });
});