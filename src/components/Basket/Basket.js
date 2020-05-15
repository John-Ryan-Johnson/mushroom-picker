import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';
import './Basket.scss';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const buildBasket = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));

    return (
      <div className="Basket d-flex flex-wrap">
        {buildBasket}
      </div>
    );
  }
}

export default Basket;
