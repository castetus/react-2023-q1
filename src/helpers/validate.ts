import { FormState } from '@/types';

export const validate = (fields: FormState) => {
  const { name, birthdate, country, confirm, sex, file } = fields;
  const errors: {
    [key: string]: boolean;
  } = {};

  if (!name.length) {
    errors.name = true;
  }

  if (!birthdate.length) {
    errors.birthdate = true;
  }

  if (!country.length) {
    errors.country = true;
  }

  if (!confirm) {
    errors.country = true;
  }

  if (!sex) {
    errors.sex = true;
  }

  if (!file) {
    errors.file = true;
  }

  return errors;
};
