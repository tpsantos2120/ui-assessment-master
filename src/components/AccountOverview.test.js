import {render, screen} from '@testing-library/react';
import AccountOverview from './AccountOverview';

const mockData = {
  supportContact: {
    name: 'Jona jones',
    email: 'jona.jones@feefo.com'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  }
}

describe('AccountOverview Component', () => {

  beforeEach(() => {
    render(<AccountOverview data={mockData}/>);
  });

  test('displays Account Overview header', () => {
    const headerEl = screen.getByText('Account Overview');
    expect(headerEl).toBeInTheDocument();
  });

  test('renders the ContactSupport component', () => {
    const contactSupportEl = screen.getByText('YOUR FEEFO SUPPORT CONTACT');
    expect(contactSupportEl).toBeInTheDocument();
  });

  test('renders the SalesOverview component', () => {
    const salesOverviewEl = screen.getByText('Sales');
    expect(salesOverviewEl).toBeInTheDocument();
  });
});