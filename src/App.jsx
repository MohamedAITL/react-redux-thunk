import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './containers/Header'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import './App.css';

function App() {
  return (
    <div className='App'>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<ProductListing />}/>
                <Route path='/product/:product_id' element={<ProductDetails />}/>
                <Route>404 NOT FOUND!</Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App