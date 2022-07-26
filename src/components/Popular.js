import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCrypto, selectFilteredStocks } from "../feature/cryptoSlice";
import Home from "../pages/Home";
import "./popular.css";
import Search from "./Search";

const Popular = () => {
  const dispatch = useDispatch();
  const allPopular = useSelector(selectFilteredStocks);
  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);
  return (
    <div className="main">
      <Home />
      <Search />
      <div className="popular-div">
        {allPopular.map((popular) => (
          <Link
            to={`/popularDetail/${popular.id}`}
            key={popular.id}
            className="pop"
          >
            <h3 className="name">{popular.name}</h3>
            <img src={popular.image} alt="crypto" />
            <div className="details">
              <p className="change">{popular.symbol}</p>
              <p className="price">{popular.current_price}$</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
