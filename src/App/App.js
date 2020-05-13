import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';

import Basket from '../components/Basket/Basket';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
state = {
  mushrooms: [],
  basket: [],
}

componentDidMount() {
  const mushrooms = mushroomData.getMushrooms();
  const basket = mushroomData.getBasket();
  this.setState({ mushrooms, basket });
}

render() {
  return (
      <div className="App">
        <h1>Macabre Mushroom Marsh</h1>
        <button className="btn btn-dark">Pick A Mushroom</button>
        <div>
          <Basket basket={this.state.basket} />
        </div>
        <div className='forest'>
          <Forest mushrooms={this.state.mushrooms} />
        </div>
      </div>
  );
}
}

export default App;
