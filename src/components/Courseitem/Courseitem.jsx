import React from 'react';
import './CourseItem.css';

function CourseItem({ name, category, price, image, onAddToCart }) {
  return (
    <article className="course-item">
      <div className="product-image">
        <img src={image} alt={name} />
        <span className="product-label">DIOR BEAUTY</span>
      </div>

      <div className="product-info">
        <p className="product-category">{category}</p>
        <h3>{name}</h3>
        <p className="product-price">{price.toLocaleString('ru-RU')} сом</p>

        <button
          className="add-to-cart"
          onClick={() => onAddToCart(name)}
        >
          Добавить в корзину
        </button>
      </div>
    </article>
  );
}

export default CourseItem;
