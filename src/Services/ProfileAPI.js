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
        firstName: e.firstName,
        lastName: e.lastName,
        description: e.description,
        age: e.age,
        birth_date: e.birthdate,
        hometown: e.location,
        position: e.position,
        height: e.height,
        weight: e.weight,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const put_achievement = async (e) => {
  try {
    const response = await axios.put("url", { data: e });
    console.log(response);
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
        date: "2000-02-02",
        achievement: e.topic,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const del_achievement = async () => {
  try {
    const res = await axios.delete("");
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
