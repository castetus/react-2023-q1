import { FormState } from '@/types';

export const validate = (fields: FormState) => {
  const { name, birthdate, country, confirm, sex, profilePicture } = fields;
  const errors: {
    [key: string]: string;
  } = {};

  if (!name.length) {
    errors.name = 'Name is required';
  }

  if (!birthdate.length) {
    errors.birthdate = 'Birthday is required';
  }

  if (!country) {
    errors.country = 'Country is required';
  }

  if (!confirm) {
    errors.confirm = 'You must consent to your personal data';
  }

  if (!sex) {
    errors.sex = 'Gender is required';
  }

  if (!profilePicture) {
    errors.profilePicture = 'Please select a profile picture to upload';
  }

  return errors;
};
