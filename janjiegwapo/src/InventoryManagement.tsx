import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

interface Product {
  id: number;
  name: string;
  amount: number;
  barcode: string;
}

const InventoryManagement: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
    } else {
      navigate('/login-register');
    }

    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      const initialProducts: Product[] = [
        { id: 1, name: 'Product 1', amount: 100, barcode: '1234567890' },
        { id: 2, name: 'Product 2', amount: 200, barcode: '0987654321' },
        { id: 3, name: 'Product 3', amount: 150, barcode: '1122334455' },
      ];
      setProducts(initialProducts);
      localStorage.setItem('products', JSON.stringify(initialProducts));
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return (
      <div className="inventory-management-page">
        <div className="inventory-management-container">
          <h1>Inventory Management</h1>
          <p>You need to log in first to manage and check your inventory.</p>
          <Link to="/login-register" className="create-account-link">Click here to create an account first</Link>
          <Link to="/" className="back-home-link">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="inventory-management-page">
      <div className="inventory-management-container">
        <h1>Inventory Dashboard</h1>
        <div className="dashboard">
          <div className="dashboard-item">
            <h2>Total Products</h2>
            <p>{products.length}</p>
          </div>
          <div className="dashboard-item">
            <h2>Total Amount</h2>
            <p>{products.reduce((total, product) => total + product.amount, 0)}</p>
          </div>
          <div className="dashboard-item">
            <h2>Products</h2>
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Barcode</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.amount}</td>
                    <td>{product.barcode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Link to="/" className="back-home-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default InventoryManagement;