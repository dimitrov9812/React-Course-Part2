import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});


// google sign in
export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = (uid) => ({
    type: 'LOGOUT'
});

// google sign out
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}