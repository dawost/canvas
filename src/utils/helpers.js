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
    .then((response) => {
      if (validateReceivedData(response.data)) return response.data;
      else return { message: "Invalid project data", id: projectId };
    })
    .catch((error) => {
      console.log("Error: ", error.response);
      return { ...error.response.data, id: projectId };
    });
};

const validateReceivedData = (data) => {
  function checkItemsInArray(items) {
    let isValid = true;
    for (let i = 0; items.length > i && isValid; i++) {
      if (
        typeof items[i].id !== "string" ||
        typeof items[i].color !== "string" ||
        typeof items[i].height !== "number" ||
        typeof items[i].width !== "number" ||
        typeof items[i].rotation !== "number" ||
        typeof items[i].x !== "number" ||
        typeof items[i].y !== "number"
      )
        isValid = false;
    }
    return isValid;
  }

  if (
    typeof data?.id === "string" &&
    typeof data?.project?.height === "number" &&
    typeof data?.project?.width === "number" &&
    typeof data?.project?.id === "string" &&
    typeof data?.project?.name === "string" &&
    typeof data?.project?.name === "string" &&
    checkItemsInArray(data.project.items)
  )
    return true;
  else return false;
};
