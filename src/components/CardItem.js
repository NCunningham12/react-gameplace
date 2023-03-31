import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <div className="cards__item__wrapper">
            <img
              src={props.src}
              alt="game"
              className="cards__item__img"
            />
          </div>
          <div className="cards__item__info">
            <h5 className="cards__item__title">{props.title}</h5>
            <div className="cards__item__price__wrapper">
              <div className="add__cart__wrapper price-item">
                <Link className="cart" to="/cart">
                  <i className="fa fa-cart-arrow-down" />
                </Link>
              </div>
              <div className="cards__item__price price-item">
                <p className="cards__item__original">{props.original}</p>
                <p className="cards__item__sale">{props.sale}</p>
              </div>
              <div className="cards__item__discount__wrapper price-item">
                <p className="cards__item__discount">{props.discount}</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default CardItem;
