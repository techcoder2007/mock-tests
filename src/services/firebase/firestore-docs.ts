import {
  collection,
  getDocs,
  QuerySnapshot,
  DocumentData,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { uuid } from "uuidv4";
import { db } from "../firebase";

export async function getFirestoreCollections<T>(
  collectionName: string
): Promise<any | T> {
  try {
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
      collection(db, collectionName)
    );
    const docsSnap = querySnapshot?.docs?.map((doc) => ({
      ...doc?.data(),
      id: doc.id,
    }));

    return docsSnap;
  } catch (error: unknown) {
    console.error("Error getting documents", error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function addUsersToUsersDatabase(email: string, password: string) {
  try {
    const user = await addDoc(collection(db, "users"), {
      appId: uuid(),
      email,
      password,
      isPaid: false,
    });
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function deleteUsersFromUsersDatabase(
  collectionId: string,
  documentId: string
) {
  await deleteDoc(doc(db, collectionId, documentId)).then((doc) => {
    return doc;
  });
}
