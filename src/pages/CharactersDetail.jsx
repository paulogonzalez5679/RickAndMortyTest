import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { loadCharacters } from '../store/actions';
import { searchCharacter } from '../store/actions';

import Pagination from '../components/Pagination';
import Search from '../components/Search';
import LogError from '../components/LogError';
import BoxCharacterContent from '../components/BoxCharacterContent';
import { Link } from "react-router-dom";
import './styles.scss';

const CharactersPage = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  //const images = useSelector((state) => state.images);

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-5">
    <div className="d-flex flex-column gap-3">
      <h1 className="text-center">{name}</h1>

      <img className="img-fluid" src={image} alt="" />
      {(() => {
        if (status === "Dead") {
          return <div className="badge bg-danger fs-5">{status}</div>;
        } else if (status === "Alive") {
          return <div className=" badge bg-success fs-5">{status}</div>;
        } else {
          return <div className="badge bg-secondary fs-5">{status}</div>;
        }
      })()}
      <div className="content">
        <div className="">
          <span className="fw-bold">Gender : </span>
          {gender}
        </div>
        <div className="">
          <span className="fw-bold">Location: </span>
          {location?.name}
        </div>
        <div className="">
          <span className="fw-bold">Origin: </span>
          {origin?.name}
        </div>
        <div className="">
          <span className="fw-bold">Species: </span>
          {species}
        </div>
      </div>
    </div>
  </div>
  );
};

export default CharactersPage;
