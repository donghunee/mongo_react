import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailComponent from "../../components/post/DetailComponent";

const baseURL = "http://localhost:3000";

function DetailContainer() {
  const params = useParams();
  const { postId } = params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios
  }, []);

  return <DetailComponent />;
}

export default DetailContainer;
