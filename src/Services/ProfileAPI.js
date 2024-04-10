import axios from "axios";

export const profileAthlete = async () => {
    try {
      const response = await axios.get("url");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

export const profilePic = async () => {
    try {
      const response = await axios.get("url");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

export const editProfile_Pic = async (e) => {
    try {
      const response = await axios.put("url",{ data : e });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

export const editProfile_athleteInformation = async (e) => {
    try {
      const response = await axios.put("url",{ data : e });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

export const put_achievement= async (e) => {
    try {
      const response = await axios.put("url",{ data : e });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

export const post_achievement = async (e) => {
    try {
        const res = await axios.post('', {
            data : e
        });
    }catch(error) {
        console.log(error);
    }
}

export const del_achievement = async () => {
  try {
      const res = await axios.delete('');
  }catch(error) {
      console.log(error);
  }
}






export const profileScout = async () => {
  try {
    const response = await axios.get("url");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export const editProfile_scoutInformation = async (e) => {
  try {
    const response = await axios.put("url",{ data : e });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}