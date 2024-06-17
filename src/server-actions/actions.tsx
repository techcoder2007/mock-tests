"use server";

import { db } from "@/services/firebase";
import { UserProps } from "@/types";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";

/**
 * This function updates the isPaid status of a user in a Firestore database and then revalidates the
 * path to the dashboard.
 * @param {UserProps} singleUser - The `singleUser` parameter is an object of type `UserProps`
 * representing a single user. It contains properties such as `id` and `isPaid`.
 */
export async function updateUserIsPaidStatus(singleUser: UserProps) {
  const updateDocCollection = doc(db, "users", singleUser?.id);
  try {
    await updateDoc(updateDocCollection, {
      ...singleUser,
      isPaid: !singleUser?.isPaid,
    }).then((doc) => {
      return doc;
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
}

export async function deleteDocumentField(collectionName: string, id: string) {
  try {
    await deleteDoc(doc(db, collectionName, id)).then((document) => {
      return document;
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
  revalidatePath("/dashboard");
}

export async function getDocumentById(collectionName: string, id: string) {
  try {
    const document = await getDoc(doc(db, collectionName, id));
    if (document.exists()) {
      return document?.data();
    }
    return null;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
}

export async function handleLogOut(id: string) {
  try {
    await deleteDoc(doc(db, "users", id)).then((document) => {
      return document;
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
  revalidatePath("/auth/profile");
}

export async function updataUserEmailAndPassword(singleUser: UserProps) {
  const updateDocCollection = doc(db, "users", singleUser?.id);
  try {
    await updateDoc(updateDocCollection, {
      ...singleUser,
      email: singleUser?.email,
      password: singleUser?.password,
    }).then((doc) => {
      return doc;
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
  revalidatePath("/dashboard");
}
