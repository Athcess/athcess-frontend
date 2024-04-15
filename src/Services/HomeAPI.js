import axios from "axios";
import Cookies from 'js-cookie'


export const getPost = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const getProfilePic = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const getComment = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const getEvent = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const getFriend = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const getFriendRequest = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const getNotification = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};

export const postPost = async (e) => {
  try {
    const access_token = Cookies.get('auth_token')
    const res = await axios.post("http://127.0.0.1:8000/services/post/", {
      username: e.username,
      description: e.description,
      has_attachment: true,
    },{
        headers: {
          'Authorization': `Bearer ${access_token}` 
        }
      })
      console.log(res)
  } catch (error) {
    console.log(error);
  }
};

export const postComment = async (e) => {
  try {
    const res = await axios.post("", {
      data: e,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postSearch = async (e) => {
  try {
    const res = await axios.post("", {
      type: e.type,
      filter: {
        age: e.age,
        location: e.location,
        sport: e.sports,
        contenttype: e.contenttype,
        date: e.date,
        sort: e.sort,
        organization: e.organization,
        height: e.height,
        weight: e.weight,
      },
      search_info: e.keyword,
    });
  } catch (error) {
    console.log(error);
  }
};
