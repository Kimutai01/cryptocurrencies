import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
      <Link to="/popular">
        <button className="back">Go back</button>
      </Link>
      <div className="details-page-container">
        <div className="image-div">
          <img src={det[index].image} alt="crypto" />
          <h3>{det[index].name}</h3>
        </div>
        <div className="details-div">
          <h4>Current price</h4>
          <p>{det[index].current_price}$</p>
        </div>
        <div className="details-div">
          <h4>Market price</h4>
          <p>{det[index].market_cap}</p>
        </div>
        <div className="details-div">
          <h4>Market cap rank</h4>
          <p>{det[index].market_cap_rank}</p>
        </div>
        <div className="details-div">
          <h4>Price change percentage</h4>
          <p
            className={
              det[index].price_change_percentage_24h < 0 ? "less" : "more"
            }
          >
            {det[index].price_change_percentage_24h}%
          </p>
        </div>
        <div className="details-div">
          <h4>Price change</h4>
          <p
            className={
              det[index].price_change_percentage_24h < 0 ? "less" : "more"
            }
          >
            {det[index].price_change_24h}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularDetail;
