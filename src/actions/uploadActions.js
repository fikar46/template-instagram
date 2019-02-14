import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { PHOTO_UPDATE, PHOTO_CREATE, PHOTO_GETLIST_SUCCESS } from './types';

export const photoUpdate = (prop, value) => {
    return {
        type: PHOTO_UPDATE,
        payload: { prop, value }
    };
};

export const photoCreate = (photo, caption,email) => {
    return (dispatch) => {
        firebase.database().ref(`/users/photo`)
        .push({ photo, caption,email })
        .then(() => {
            dispatch({ type: PHOTO_CREATE });
        });
    };
};

export const getPhotoList = () => {
    return (dispatch) => {
        firebase.database().ref(`/users/photo`)
            .on('value', snapshot => {
                dispatch({ type: PHOTO_GETLIST_SUCCESS, payload: snapshot.val() });
            });
    };
};


export const photoSave = (photo, caption, uid) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/photo/${uid}`)
            .set({ photo, caption })
            .then(() => {
                dispatch({ type: PHOTO_CREATE });
            });
    };
};

export const photoDelete = (uid) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/photo/${uid}`)
        .remove()
        .then(() => {
            dispatch({ type: PHOTO_CREATE });
        });
    };
};