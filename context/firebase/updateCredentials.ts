import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import auth from "services/firebase/auth";
import {
  GetEmailCredentials,
  Reauthenticate,
  UpdateCredentials,
} from "utils/types/firebase";

const getCredential: GetEmailCredentials = (email, password) =>
  EmailAuthProvider.credential(email, password);

const reauthenticate: Reauthenticate = async (credential) => {
  if (!auth.currentUser) return null;
  return await reauthenticateWithCredential(auth.currentUser, credential);
};

export const updateCredentials: UpdateCredentials = async (
  password,
  credentials
) => {
  if (!auth?.currentUser?.email) return;

  const { email, password: new_password } = credentials;
  if (!email && !new_password) return;

  const credential = getCredential(auth.currentUser.email, password);
  const res = await reauthenticate(credential);
  if (!res) return;

  const updates = [];
  if (email) updates.push(updateEmail(auth.currentUser, email));
  if (new_password)
    updates.push(updatePassword(auth.currentUser, new_password));

  await Promise.all(updates);
  auth.signOut();
};
