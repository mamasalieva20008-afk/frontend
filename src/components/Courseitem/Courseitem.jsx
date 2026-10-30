
import React from 'react';
import './Courseitem.css';

function CourseItem({ name, category, price, image, onAddToCart }) {
  return (
    <div className="course-item">

      <div className="product-image">
        <img src={image} alt={name} />
        <span className="product-label">DIOR BEAUTY</span>
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>

        <h2>{name}</h2>

        <p className="product-price">
          {price.toLocaleString('ru-RU')} сом
        </p>

        <button
          className="add-to-cart"
          onClick={() => onAddToCart(name)}
        >
          Добавить в корзину
        </button>
      </div>

    </div>
  );
}

export default CourseItem;
