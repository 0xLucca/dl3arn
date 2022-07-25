import { HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
}
export function Button({ children, ...other }: ButtonProps) {
  return <button {...other}>{children}</button>;
}

export function PrimaryButton({ children, ...others }: ButtonProps) {
  return (
    <Button className={styles.primary} {...others}>
      {children}
    </Button>
  );
}

export function SecondaryButton({ children, ...others }: ButtonProps) {
  return (
    <Button className={styles.secondary} {...others}>
      {children}
    </Button>
  );
}
