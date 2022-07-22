import React from "react";
import { useSelector } from "react-redux";

const Crypto = () => {
  const crypto = useSelector((state) => state.crypto);
  console.log(crypto);
  return (
    <div>
      {crypto.map((crypt) => (
        <div key={crypt.id}>
          <h1>{crypt.name}</h1>
          <p>{crypt.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Crypto;
