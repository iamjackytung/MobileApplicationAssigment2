import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "./firebase-setup";

export async function writeToDB(entry) {
  try {
    const docRef = await addDoc(collection(firestore, "entries"), entry);
  } catch (err) {
    // console.log(err);
  }
}

export async function deleteFromDB(id) {
  try {
    await deleteDoc(doc(firestore, "entries", id));
  } catch (err) {
    // console.log(err);
  }
}

export async function updateToDB(id) {
  try {
    const docRef = await updateDoc(doc(firestore, "entries", id), {
      reviewed: true,
    });
    // console.log(docRef.id);
  } catch (err) {
    // console.log(err);
  }
}
