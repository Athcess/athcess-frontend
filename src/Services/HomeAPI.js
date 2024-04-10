import axios from "axios";

export const getPost = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const getProfilePic = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const getComment = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const getEvent = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const getFriend = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const getFriendRequest = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const getNotification = async () => {
    try {
        const res = await axios.get('');
    }catch(error) {
        console.log(error);
    }
}

export const postPost = async (e) => {
    try {
        const res = await axios.post('', {
            data : e
        });
    }catch(error) {
        console.log(error);
    }
}

export const postComment = async (e) => {
    try {
        const res = await axios.post('', {
            data : e
        });
    }catch(error) {
        console.log(error);
    }
}

