import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';

test('Links exists', () => {
  render(<App />);
  const HomeLinkElement = screen.getByText(/Home/i);
  expect(HomeLinkElement).toBeInTheDocument();
  const AboutLinkElement = screen.getByText(/About/i);
  expect(AboutLinkElement).toBeInTheDocument();
});
