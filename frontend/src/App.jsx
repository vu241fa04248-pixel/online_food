import { useState } from 'react'
import './App.css'

const dishes = [
  { id: 1, name: 'Classic Burger', detail: 'Juicy burger with cheese', price: 8, image: '🍔' },
  { id: 2, name: 'Margherita Pizza', detail: 'Tomato, mozzarella & basil', price: 12, image: '🍕' },
  { id: 3, name: 'Fresh Salad', detail: 'Greens, avocado & tomato', price: 7, image: '🥗' },
]

function App() {
  const [cart, setCart] = useState([])

  function addToCart(dish) {
    setCart((items) => [...items, dish])
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="food-app">
      <header className="topbar">
        <a className="logo" href="#">QuickBite<span>.</span></a>
        <div className="cart-count">🛒 {cart.length}</div>
      </header>

      <section className="hero">
        <p className="eyebrow">GOOD FOOD, DELIVERED</p>
        <h1>What are you craving?</h1>
        <p>Fresh favorites, made with love and delivered to your door.</p>
      </section>

      <section className="menu">
        <h2>Popular dishes</h2>
        <div className="dish-list">
          {dishes.map((dish) => (
            <article className="dish" key={dish.id}>
              <div className="dish-image" aria-hidden="true">{dish.image}</div>
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>{dish.detail}</p>
                <strong>${dish.price}</strong>
              </div>
              <button onClick={() => addToCart(dish)}>Add</button>
            </article>
          ))}
        </div>
      </section>

      <footer className="order-bar">
        <span>{cart.length} {cart.length === 1 ? 'item' : 'items'} in your order</span>
        <button disabled={!cart.length} onClick={() => window.alert(`Order placed! Total: $${total}`)}>
          Place order · ${total}
        </button>
      </footer>
    </main>
  )
}

export default App