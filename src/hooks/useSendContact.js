import { async } from "@firebase/util"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import {db} from '../config/firebase';


export const useSendContact = () => {
    const transactionCollectionRef = collection(db, "contact");


    const sendContact = async ({firstName, lastName, email, message}) => {
        await addDoc(transactionCollectionRef, {
            firstName,
            lastName,
            email,
            message,
            createdAt: serverTimestamp(),
        } );
    };

    return{
        sendContact
    };
}