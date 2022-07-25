import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCrypto } from "../feature/cryptoSlice";
import Nav from "../pages/Navbar";
import "./popular.css";

const Popular = () => {
  const dispatch = useDispatch();
  const allPopular = useSelector((state) => state.crypto);
  console.log(allPopular);
  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);
  return (
    <div>
      <Nav />
      <div className="popular-div">
        {allPopular.map((popular, i) => (
          <Link to={`/popularDetail/${popular.id}`} key={i} className="pop">
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
