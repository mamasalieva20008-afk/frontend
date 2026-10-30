import React, { useState } from 'react';
import './App.css';
import CourseItem from './components/CourseItem';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Rouge Dior',
      category: 'Помада для губ',
      price: 4500,
      image:
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      name: 'Forever Skin Glow',
      category: 'Тональное средство',
      price: 5800,
      image:
        'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 3,
      name: 'Miss Dior',
      category: 'Парфюмерия',
      price: 7200,
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80',
    },
  ];

  function addToCart(productName) {
    setCart((previousCart) => [...previousCart, productName]);
  }

  return (
    <div className="dior-shop">
      <header className="header">
        <a href="#home" className="logo">
          DIOR
        </a>

        <nav className="navigation">
          <a href="#home">Главная</a>
          <a href="#catalog">Каталог</a>
          <a href="#about">О бренде</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="cart">
          Корзина <span>{cart.length}</span>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">DIOR BEAUTY</p>

            <h1>
              Красота
              <br />
              в каждой детали
            </h1>

            <p className="hero-description">
              Открой для себя мир Dior — коллекцию косметики
              и ароматов для твоей неповторимой красоты.
            </p>

            <a href="#catalog" className="hero-button">
              Перейти к каталогу
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85"
              alt="Коллекция косметики"
            />
          </div>
        </section>

        <section className="catalog" id="catalog">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ТВОЯ КОЛЛЕКЦИЯ КРАСОТЫ</p>
              <h2>Популярные продукты</h2>
            </div>

            <p className="catalog-count">
              {products.length} продукта
            </p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <CourseItem
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <p className="eyebrow">MAISON DIOR</p>
          <h2>Искусство быть собой</h2>
          <p>
            Открой для себя красоту, стиль и элегантность
            в каждой детали.
          </p>
        </section>
      </main>

      <footer className="footer" id="contacts">
        <a href="#home" className="footer-logo">
          DIOR
        </a>
        <p>Красота в каждой детали.</p>
        <p>© 2026 DIOR BEAUTY — учебный проект</p>
      </footer>
    </div>
  );
}

export default App;
