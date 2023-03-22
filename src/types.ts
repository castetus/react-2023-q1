export interface FormState {
  name: string;
  birthdate: string;
  country: string;
  confirm: boolean;
  sex: string;
  file: null;
  errors: {
    [key: string]: boolean;
  };
}
