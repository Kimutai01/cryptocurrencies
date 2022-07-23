import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCrypto } from "../feature/cryptoSlice";
import Nav from "../pages/Navbar";

const Popular = () => {
  const dispatch = useDispatch();
  const crypt = useSelector((state) => state.crypto);
  console.log(crypt);
  useEffect(() => {
    dispatch(getCrypto());
  }, [dispatch]);
  return (
    <div>
      <Nav />
      {crypt.map((cryp, i) => (
        <div key={i}>
          <h1>{cryp.companyName}</h1>
          <img src={cryp.ticker} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Popular;