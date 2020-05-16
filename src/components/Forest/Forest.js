import React from 'react';
import PropTypes from 'prop-types';
import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';
import mushroomShape from '../../helpers/propz/mushroomShape';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const buildMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom} />
    ));

    return (
      <div className="Forest col-12 d-flex flex-wrap">
         {buildMushrooms}
      </div>
    );
  }
}

export default Forest;
