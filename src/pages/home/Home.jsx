import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  drawBoundingBox,
  drawLabel,
  drawPolygon,
} from "../../utils/canvas.utils";

import "./styles.css";

const Home = () => {
  const canvasData = useSelector((state) => state.canvas.data);
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (canvasData.project) {
        canvas.width = canvasData.project.width;
        canvas.height = canvasData.project.height;
        canvas.style = "max-width:100%; max-height:100%;";

        canvasData.project.items.forEach((item) => {
          ctx.save();

          drawPolygon(ctx, item);
          drawBoundingBox(ctx, item);
          drawLabel(ctx, item);

          ctx.restore();
        });
      } else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [canvasData]);

  return canvasData ? (
    <>
      <>
        <div>{`${
          canvasData.project
            ? canvasData.project.name
            : canvasData.message || canvasData.error.message
        } - ${canvasData.id}`}</div>

        <canvas ref={canvasRef} className="canvas-container" />
      </>
    </>
  ) : (
    <div>Empty</div>
  );
};

export default Home;
