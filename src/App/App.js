import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Basket from '../components/Basket/Basket';
import Forest from '../components/Forest/Forest';
import mushroomShape from '../helpers/propz/mushroomShape';


class App extends React.Component {
state = {
  mushrooms: [],
  basket: [],
  mushroom: mushroomShape.mushroomShape,
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
  return (
      <div className="App">
        <h1>Macabre Mushroom Marsh</h1>
        <button className="btn btn-dark" onClick={this.pickAMushroom}>Pick A Mushroom</button>
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
