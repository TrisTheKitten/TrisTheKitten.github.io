import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')

  const calculateVAT = () => {
    const priceNum = parseFloat(price) || 0
    const discountNum = parseFloat(discount) || 0
    return (priceNum - discountNum) * 0.07
  }

  const calculateTotal = () => {
    const priceNum = parseFloat(price) || 0
    const discountNum = parseFloat(discount) || 0
    const afterDiscount = priceNum - discountNum
    const vat = afterDiscount * 0.07
    return afterDiscount + vat
  }

  return (
    <div className="app">
      <div className="calculator-container">
        <h1>VAT Calculator</h1>
        
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            step="0.01"
            min="0"
          />
        </div>

        <div className="input-group">
          <label htmlFor="discount">Discount:</label>
          <input
            type="number"
            id="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Enter discount"
            step="0.01"
            min="0"
          />
        </div>

        <div className="results">
          <div className="result-item">
            <span className="label">Price after discount:</span>
            <span className="value">฿{((parseFloat(price) || 0) - (parseFloat(discount) || 0)).toFixed(2)}</span>
          </div>
          
          <div className="result-item">
            <span className="label">VAT (7%):</span>
            <span className="value">฿{calculateVAT().toFixed(2)}</span>
          </div>
          
          <div className="result-item total">
            <span className="label">Total (including VAT):</span>
            <span className="value">฿{calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App