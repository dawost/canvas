import axios from "axios";

export const onGetRandomData = async () => {
  return axios
    .get("https://recruitment01.vercel.app/api/init")
    .then((response) => response.data)
    .catch((error) => {
      console.log("Error: ", error.response);
      return { ...error.response.data };
    });
};

export const onGetDataByProjectId = async (projectId) => {
  return axios
    .get(`https://recruitment01.vercel.app/api/project/${projectId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log("Error: ", error.response);
      return { ...error.response.data, id: projectId };
    });
};
