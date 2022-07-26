import { ChangeEvent, HTMLProps, ReactNode } from "react";

type Time = [number, number];
export interface Course {
  id: string;
  image: string;
  name: string;
  instructor: string | { name: string; image: string };
  score: number;
  time: string | Time;
}

export type InputChange = ChangeEvent<HTMLInputElement>;

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  label?: ReactNode;
}

export interface Inputs {
  [key: string]: { value: string; inputProps?: InputProps };
}
