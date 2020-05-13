import React from 'react';
import mushroomShape from '../../helpers/propz/mushroomShape';


import './Mushroom.scss';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className='Mushroom ml-5'>
        <img src={mushroom.imgUrl} className="mushroomImg" alt="Mushroom pic" />
      </div>
    );
  }
}

export default Mushroom;
