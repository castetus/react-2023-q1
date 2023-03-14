import React from 'react';
import Card from '../components/Card/Card';
import { render, screen } from '@testing-library/react';

const cardData = {
  data: {
    imgSrc: 'boot',
    title: 'testTitle',
    description: 'testDescription',
  },
};

beforeEach(() => render(<Card data={cardData.data} />));

describe('Title & description exists', () => {
  test('Title exists', () => {
    const titleElement = screen.getByText(/testTitle/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('Description exists', () => {
    const descriptionElement = screen.getByText(/testDescription/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});
