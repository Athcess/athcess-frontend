import axios from "axios";
import Cookies from "js-cookie";

const access_token = Cookies.get("auth_token");
const auth_username = Cookies.get("auth_username");
const orgname = Cookies.get("orgname");
import { APIURL } from "../env";

export const profileAthlete = async (username) => {
  try {
    const response = await axios.get(`${APIURL}/services/users/${username}/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getOrg = async (username) => {
  try {
    const response = await axios.get(
      `${APIURL}/services/organization/${username}/`,
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

export const getPostProfile = async (e) => {
  try {
    const response = await axios.get(`${APIURL}/services/post/?username=${e}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getEventProfile = async (e) => {
  try {
    const response = await axios.get(
      `${APIURL}/services/calendar/byname/?org_name=${e}`,
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

export const getHighlight = async (e) => {
  try {
    const response = await axios.get(
      `${APIURL}/services/post/?username=${e}&highlight=True`,
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
      `${APIURL}/services/users/${auth_username}/`,
      {
        username: auth_username,
        description: e.description,
        age: e.age,
        birth_date: e.birthdate,
        hometown: e.location,
        position: e.position,
        education: e.education,
        tier: e.tier,
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

export const puttier = async (e) => {
  try {
    const response = await axios.put(
      `${APIURL}/services/users/${auth_username}/`,
      {
        tier: e,
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
      `${APIURL}/services/achievement/${e.id}/`,
      {
        username: auth_username,
        created_at: e.created_at,
        date: e.date,
        topic: e.topic,
        sub_topic: e.subTopic,
        description: e.description,
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
      `${APIURL}/services/achievement/`,
      {
        username: auth_username,
        date: e.date,
        topic: e.topic,
        sub_topic: e.subTopic,
        description: e.description,
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
    const res = await axios.delete(`${APIURL}/services/achievement/${e.id}/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const put_background = async (e) => {
  try {
    const res = await axios.put(
      `${APIURL}/services/experience/${e.id}/`,
      {
        username: auth_username,
        created_at: e.created_at,
        start_date: e.start_date,
        end_date: e.end_date,
        topic: e.topic,
        description: e.description,
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

export const post_background = async (e) => {
  try {
    const res = await axios.post(
      `${APIURL}/services/experience/`,
      {
        username: auth_username,
        start_date: e.start_date,
        end_date: e.end_date,
        topic: e.topic,
        description: e.description,
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

export const del_background = async (e) => {
  try {
    const res = await axios.delete(`${APIURL}/services/experience/${e.id}/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
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
