import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';

test('Links exists', () => {
  render(<App />);
  const HomeLinkElement = screen.getAllByText(/Home/i)[0];
  expect(HomeLinkElement).toBeInTheDocument();
  const AboutLinkElement = screen.getByText(/About/i);
  expect(AboutLinkElement).toBeInTheDocument();
});
