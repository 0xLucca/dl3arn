import {
  collection,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import { Course, UID, Video } from "utils/types/Course";
import { db } from "..";

const collectionFactory = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const coursesCollection = collectionFactory<Course>("courses");
export const videosCollection = collectionFactory<Video | UID>("videos");
