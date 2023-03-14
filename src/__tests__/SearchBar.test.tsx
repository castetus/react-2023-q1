import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { render, screen } from '@testing-library/react';

describe('Seacrhbar exists', () => {
  const { container } = render(<SearchBar />);
  test('Element', () => {
    const sbElem = container.getElementsByClassName('search-bar');
    expect(sbElem).toBeTruthy();
  });
});
