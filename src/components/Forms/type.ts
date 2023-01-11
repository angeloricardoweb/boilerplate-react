export interface InputProps {
  type: 'text' | 'email' | 'password' | 'number';
  placeholder: string;
  label: string;
  name: string;
  rules: any;
  register: (name: string, rules: any) => void;
}
