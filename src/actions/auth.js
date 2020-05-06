import { firebase, googleAuthProvider } from '../firebase/firebase';

// google sign in
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

// google sign out
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}