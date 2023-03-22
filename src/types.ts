export interface FormState {
  name: string;
  birthdate: string;
  country: string;
  confirm: boolean;
  sex: string;
  profilePicture: File | null;
  errors: {
    [key: string]: string;
  };
}
