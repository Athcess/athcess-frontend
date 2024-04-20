import axios from "axios";
import Cookies from "js-cookie";

const fileToBinary = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const binaryData = reader.result;
      resolve(binaryData);
    };
    reader.onerror = () => {
      reject(new Error("Unable to read the file as binary data"));
    };
    reader.readAsArrayBuffer(file);
  });
};

const access_token = Cookies.get("auth_token");
const auth_username = Cookies.get("auth_username");
export const getPost = async (e) => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/services/post/" + e + "/",
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

export const del_post = async (e) => {
  try {
    const response = await axios.delete(
      "http://127.0.0.1:8000/services/post/" + e + "/",
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

export const getFeed = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/services/post/", {
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

export const postPost = async (e) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/services/post/",
      {
        username: auth_username,
        description: e.description,
        has_attachment: e.hasfile,
        highlight: e.highlight,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postBlob = async (e) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/services/upload/",
      {
        content_type: e.form.file.type,
        description: "test",
        file_name: e.form.file.name,
        is_profile_picture: false,
        file_size: e.form.file.size,
        skill_type: null,
        post: e.postid,
        verify: null,
        club_name: null,
        physical_attribute: null,
        status: e.status,
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

export const getBlobPost = async (e) => {
  try {
    console.log(e);
    const res = await axios.get(
      "http://127.0.0.1:8000/services/upload/?post_id=" + e,
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
export const uploadedBlob = async (e) => {
  try {
    const res = await axios.put(
      "http://127.0.0.1:8000/services/upload/" + e + "/",
      {
        status: "uploaded",
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

export const putBlob = async (e) => {
  try {
    console.log(e);
    const binaryData = await fileToBinary(e.file);
    console.log(binaryData);
    const res = await axios.put(e.url, binaryData, {
      headers: {
        "x-ms-blob-type": "BlockBlob",
      },
    });

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
    const res = await axios.get(
      "http://127.0.0.1:8000/services/calendar/get/",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

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
export const postPhyAttVid = async (e) => {
  try {
    const postResponse = await axios.post(
      "http://127.0.0.1:8000/services/upload/",
      {
        file_name: e.file_name,
        content_type: e.content_type,
        file_size: e.file_size,
        username: e.username,
        description: e.file_name + "video",
        physical_attribute_type: e.physical_attribute_type,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const postResponseData = postResponse.data;
    console.log(postResponseData);
    console.log(e.file);

    //-------------------------------------------------------

    const putResponse = await axios.put(
      postResponseData.signed_url,
      e.file,

      {
        headers: {
          "content-type": e.content_type,
          "x-ms-blob-type": "BlockBlob",
        },
      }
    );
    console.log(putResponse.data);

    //-------------------------------------------------------

    const getResponse = await axios.get(
      `http://127.0.0.1:8000/services/analytics/?player_name=${e.username}&analytic_type=${e.physical_attribute_type}`
    );
    console.log(getResponse.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const getPhyAttVid = async ({ player_name, analytic_type }) => {
//   try {
//     const response = await axios.get(
//       `http://127.0.0.1:8000/services/analytics/?player_name=${player_name}&analytic_type=${analytic_type}`
//     );
//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }
//     const data = await response.json();
//     return data || {}; // Return the data, or an empty object if data is undefined
//   } catch (error) {
//     console.error("Error fetching video data:", error);
//     // Return a default value such as an empty object or array
//     return {}; // Adjust as needed based on your expected data structure
//   }
// };
