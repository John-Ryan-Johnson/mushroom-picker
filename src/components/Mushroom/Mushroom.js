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
      <div className='Mushroom d-flex flex-wrap col-3 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
        <div class="card mushroomCard text-center">
         <img class="mushroom-image card-img-top mt-5" src={mushroom.imgUrl} alt="Mushroom Pic" />
          <div class="card-body">
           <h5 class="card-title">{mushroom.name}</h5>
           <p class="card-text">{mushroom.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
