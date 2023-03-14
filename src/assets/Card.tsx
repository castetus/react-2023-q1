import React from 'react';
import Card from '../components/Card/Card';
import { ICard } from '../components/Card/types';
import { fireEvent, render, screen } from '@testing-library/react';

const cardData = {
  data: {
    imgSrc: 'boot',
    title: 'testTitle',
    description: '',
  },
};

// const makeSut = (props: Partial<ICard>) => {
//   return render(<Card data={cardData.data} />);
// };

test('renders learn react link', () => {
  render(<Card data={cardData.data} />);
  const linkElement = screen.getByText(/testTitle/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('<Card />', () => {
//   test('Should render label correctly', () => {
//     const { getByText } = makeSut({ data: cardData.data });

//     expect(getByText(/My Button/)).toBeInTheDocument();
//   });

//   test('Should call onClick successfully', () => {
//     const spy = jest.fn();

//     const { getByText } = makeSut({ onClick: spy });

//     fireEvent.click(getByText(/label/));

//     expect(spy).toHaveBeenCalled();
//   });
// });
