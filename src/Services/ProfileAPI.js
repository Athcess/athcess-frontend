import axios from "axios";

export const profileAthlete = async () => {
    try {
      const response = await axios.get("url");
      console.log(response);
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
      const response = await axios.put("url",{ data : e });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

export const editProfile_Information = async (e) => {
    try {
      const response = await axios.put("url",{ data : e });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };