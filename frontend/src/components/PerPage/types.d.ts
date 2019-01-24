export type Props = {
  label?: string;
  name?: string;
  id?: string;
  value: number;
  handleChange: ChangeEvent<HTMLSelectElement>;
};

export type State = {
  perPage: number;
};
