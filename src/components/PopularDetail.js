import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCrypto } from "../feature/cryptoSlice";
import "./Details.css";

const PopularDetail = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);
  const { id } = useParams();
  const det = useSelector((state) => state.crypto);
  const index = det.findIndex((item) => item.id === id);
  return (
    <div className="details-page">
      <button>Go back</button>
      <div className="details-page-container">
        <div className="image-div">
          <img src={det[index].image} alt="crypto" />
          <h3>{det[index].name}</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularDetail;
