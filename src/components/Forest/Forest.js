import React from 'react';

import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
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
