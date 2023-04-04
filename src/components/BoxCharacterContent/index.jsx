import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const BoxCharacterContent = ({
  name,
  status,
  species,
  gender,
  type,
  imageSource,
  originLocation,
  actualLocation,
  moreInfo,
}) => {
  return (
    <div className="box">
      <img className="box__image" alt={name} src={imageSource} />
      <div className="description">
        <div className="description__left">
          <p>
            <Link className="name" to={`/characters/?q=${name}`}>
              {name}
            </Link>
          </p>
          <p>
            {status} - {species}
          </p>
          <p>{gender}</p>
          <p>{type}</p>
        </div>
        <div className="description__right">
          <p>Origin: {originLocation}</p>
          <p>Location: {actualLocation}</p>
        </div>
        <div className="more-info">
          <a className="more-info" href={moreInfo}>
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxCharacterContent;
