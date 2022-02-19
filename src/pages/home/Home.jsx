import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const canvasData = useSelector((state) => state.canvas.data);

  return canvasData ? (
    <>
      <div>{`${
        canvasData.project ? canvasData.project.name : canvasData.error.message
      } - ${canvasData.id}`}</div>
    </>
  ) : (
    <div>Empty</div>
  );
};

export default Home;
