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

pickAMushroom = (e) => {
  e.preventDefault();
  mushroomData.pickAMushroom();
  const basket = mushroomData.getBasket();
  this.setState({ basket });
}

render() {
  const { mushrooms } = this.state;
  return (
      <div className="App">
        <h1>Macabre Mushroom Marsh</h1>
        {mushrooms.length === 0 ? (
        <button className="btn btn-dark" onClick={this.pickAMushroom} id="pickButton" disabled>Pick A Mushroom</button>)
          : (
        <button className="btn btn-dark" onClick={this.pickAMushroom} id="pickButton">Pick A Mushroom</button>)
        }
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-6">
            <h2 className="divTitleForest">Forest</h2>
            <Forest mushrooms={this.state.mushrooms} />
            </div>
            <div className="col-6">
            <h2 className="divTitleBasket">Basket</h2>
            <Basket mushrooms={this.state.basket} />
            </div>
          </div>
        </div>
      </div>
  );
}
}

export default App;
