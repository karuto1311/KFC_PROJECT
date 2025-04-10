import React from "react";
import { useParams } from "react-router-dom";

function UpdateAdmin() {
  const { id } = useParams();
  return <div>UpdateAdmin: {id}</div>;
}

export default UpdateAdmin;
