import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Input } from "../../components";
import { setData } from "../../stores/canvasStore";
import { onGetDataByProjectId, onGetRandomData } from "../../utils/helpers";

import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();
  const [projectIdValue, setProjectIdValue] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  const getDataByProjectId = async (projectId) => {
    if (!isDownloading) setIsDownloading(true);

    const projectData = await onGetDataByProjectId(projectId);
    if (projectData) dispatch(setData(projectData));

    setIsDownloading(false);
  };

  const getRandomData = async () => {
    setIsDownloading(true);

    const randomData = await onGetRandomData();
    if (randomData) getDataByProjectId(randomData.id);

    setIsDownloading(false);
  };

  return (
    <div className="app-header">
      <label>Project ID:</label>
      <Input
        value={projectIdValue}
        onChange={(e) => setProjectIdValue(e.target.value)}
      />
      <Button
        label="Fetch"
        onClick={() => getDataByProjectId(projectIdValue)}
        disabled={isDownloading || !projectIdValue}
      />
      <Button label="Random" onClick={getRandomData} disabled={isDownloading} />
    </div>
  );
};

export default Header;
