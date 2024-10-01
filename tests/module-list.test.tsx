import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ModuleList } from '@/components/module-list';
import * as api from '../lib/services';

jest.mock('../lib/services');

const mockModules = [
  { name: 'React', owner: 'facebook', stars: 180000 },
  { name: 'Vue', owner: 'vuejs', stars: 190000 },
  { name: 'Angular', owner: 'google', stars: 70000 },
];

describe("Module list test", () => {
  beforeEach(() => {
    (api.getModules as jest.Mock).mockImplementation(async () => mockModules);
  });

  test('renders search input and sort select', () => {
    render(<ModuleList />);

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('displays no results message initially', () => {
    render(<ModuleList />);

    expect(screen.getByText('No results, please try different query')).toBeInTheDocument();
  });

  test('should display searched module', async () => {
    render(<ModuleList />);

    fireEvent.change(screen.getByPlaceholderText('Search...'), {
      target: { value: 'test' },
    });

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.queryByText('Vue')).toBeInTheDocument(); // Ensure other modules are not displayed
      expect(screen.queryByText('Angular')).toBeInTheDocument(); // Ensure other modules are not displayed
    });
  });
})

