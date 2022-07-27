import { useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCrypto, selectFilteredStocks } from '../redux/cryptoSlice';
import Home from '../pages/Home';
import './popular.css';
import Search from './Search';

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
            <div className="pop-class">
              <h3 className="name">{popular.name}</h3>
              <BsArrowRightCircle className="arr" />
            </div>
            <img src={popular.image} alt="crypto" />
            <div className="details">
              <p className="change">{popular.symbol}</p>
              <p className="price">
                {popular.current_price}
                $
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
