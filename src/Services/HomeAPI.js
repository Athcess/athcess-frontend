import axios from "axios";
import Cookies from "js-cookie";

const access_token = Cookies.get("auth_token");
const auth_username = Cookies.get("auth_username");
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
    const res = await axios.post(
      "http://127.0.0.1:8000/services/post/",
      {
        username: auth_username,
        description: e.description,
        has_attachment: true,
        highlight: e.highlight,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const postBlob = async (e) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/services/upload/",
      {
        content_type: e.file.type,
        description: "test",
        file_name: e.file.name,
        is_profile_picture: true,
        file_size: e.file.size,
        skill_type: null,
        post: null,
        verify: null,
        club_name: null,
        physical_attribute: null,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postEvent = async (e) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/services/calendar/",
      {
        club: e.club,
        description: e.description,
        has_attachment: true,
        start_time: e.start_time,
        end_time: e.end_time,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log(res);
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

export const getCalendar = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/services/calendar/get", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    // if (res.status < 200 || res.status >= 300 || res.name == "AxiosError") {
    //   console.log("ERROR");
    //   throw new Error("Failed to fetch data");
    // }

    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPhyAtt = async () => {
  try {
    const res = await axios.get("");
  } catch (error) {
    console.log(error);
  }
};
