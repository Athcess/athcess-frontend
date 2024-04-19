import axios from "axios";
import Cookies from "js-cookie";

const access_token = Cookies.get("auth_token");
const auth_username = Cookies.get("auth_username");

export const profileAthlete = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/services/users/" + auth_username + "/",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const profilePic = async () => {
  try {
    const response = await axios.get("url");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const editProfile_Pic = async (e) => {
  try {
    const response = await axios.put("url", { data: e });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const editProfile_athleteInformation = async (e) => {
  try {
    const response = await axios.put(
      "http://127.0.0.1:8000/services/users/" + auth_username + "/",
      {
        username: auth_username,
        description: e.description,
        age: e.age,
        birth_date: e.birthdate,
        hometown: e.location,
        position: e.position,
        education: e.education
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const put_achievement = async (e) => {
  try {
    const res = await axios.put(
      "http://127.0.0.1:8000/services/achievement/"+e.id+"/",
      {
        username: auth_username,
        created_at: e.created_at,
        date: e.date,
        topic: e.topic,
        sub_topic : e.subTopic,
        description: e.description

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

export const post_achievement = async (e) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/services/achievement/",
      {
        username: auth_username,
        date: e.date,
        topic: e.topic,
        sub_topic : e.subTopic,
        description: e.description

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

export const del_achievement = async (e) => {
  try {
    const res = await axios.delete(
      "http://127.0.0.1:8000/services/achievement/"+e.id+"/",
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


export const profileScout = async () => {
  try {
    const response = await axios.get("url");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const editProfile_scoutInformation = async (e) => {
  try {
    const response = await axios.put("url", { data: e });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
