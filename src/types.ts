export interface FormState {
  name: string;
  birthdate: string;
  country: string;
  confirm: boolean;
  sex: string;
  profilePicture: string | null;
  errors: {
    [key: string]: string;
  };
}
export interface FormProps {
  onSubmit: (formState: FormState) => void;
}
