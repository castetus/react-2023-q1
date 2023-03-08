import { ICard } from '@/components/Card/types';

const names = ['bird', 'boot', 'blouse', 'cat', 'chick', 'chicken', 'coat', 'cry'];

export const cardsData = names.map((item) => {
  return {
    data: {
      imgSrc: item,
      title: item,
      description: `${item} description`,
    },
  };
}) as unknown as ICard[];
