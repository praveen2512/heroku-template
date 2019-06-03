import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Customers from './components/customers';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div className="container">
          {/* <Customers /> */}
          <ItemModal />
          <ShoppingList />
        </div>
      </div>
    )
  }
}

export default App;
