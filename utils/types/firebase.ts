import {
  AuthCredential,
  EmailAuthCredential,
  User,
  UserCredential,
} from "firebase/auth";

/* -------------------- PROVIDERS -------------------- */
export type Provider = "email" | "google" | null;

/* -------------------- PARAMS -------------------- */
export interface RegisterParams {
  email: string;
  password: string;
  validate: string;
}

export interface LoginParams {
  email?: string;
  password?: string;
}

export type UserUpdateParams = Partial<User>;

export type Credentials = {
  email?: string;
  password?: string;
};

export type AuthResponse = Promise<UserCredential | null> | void;

/* -------------------- FUNCTIONS -------------------- */
export type EmailRegister = (_: RegisterParams) => AuthResponse;
export type Login = (_: LoginParams, provider: Provider) => AuthResponse;
export type GetEmailCredentials = (
  email: string,
  password: string
) => EmailAuthCredential;
export type UpdateCredentials = (
  password: string,
  _: Credentials
) => Promise<void>;
export type Reauthenticate = (
  _: AuthCredential
) => Promise<UserCredential | null>;
export type UpdateUser = (_: UserUpdateParams) => Promise<void | null>;

/* -------------------- CONTEXT -------------------- */
export interface UserData {
  user: User | null;
  isLoading: boolean;
}

export interface FirebaseContext {
  auth: {
    data: UserData;
    logout: () => void;
    signUp: EmailRegister;
    login: Login;
    updateCredentials: UpdateCredentials;
    updateUser: UpdateUser;
  };
}
