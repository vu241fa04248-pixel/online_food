const express = require('express')
const cors = require('cors')

const app = express()
const menu = [
  { id: 1, name: 'Classic Burger', price: 8 },
  { id: 2, name: 'Margherita Pizza', price: 12 },
  { id: 3, name: 'Fresh Salad', price: 7 },
]

app.use(cors())
app.use(express.json())

app.get('/api/menu', (req, res) => res.json(menu))

app.post('/api/orders', (req, res) => {
  const items = req.body.items
  if (!Array.isArray(items) || !items.length) {
    return res.status(400).json({ error: 'Order is empty' })
  }

  const total = items.reduce((sum, item) => {
    const dish = menu.find((food) => food.id === item.id)
    return dish && Number.isInteger(item.quantity) && item.quantity > 0
      ? sum + dish.price * item.quantity
      : sum
  }, 0)

  res.status(201).json({ message: 'Order placed', total })
})

app.listen(5000, () => console.log('Server running on port 5000'))
