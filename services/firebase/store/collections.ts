import {
  collection,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import Course from "utils/types/Course";
import { db } from "..";

const collectionFactory = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const coursesCollection = collectionFactory<Course>("test-courses");
