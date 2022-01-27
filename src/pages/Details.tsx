import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();

  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Details;
