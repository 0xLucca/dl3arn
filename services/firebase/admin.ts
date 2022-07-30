import * as admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";

try {
  admin.initializeApp({
    credential: applicationDefault(),
  });
} catch (e) {}

export const store = admin.firestore();
export const auth = admin.auth();
