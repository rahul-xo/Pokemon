import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

const CardBox = ({Search}) => {
  const [Pokemons, setPokemon] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [error,setError]=useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon?offset=24&limit=50";
  const fetchAPI = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const All_data = data.results.map(async (currEle) => {
        const res = await fetch(currEle.url);
        const data = await res.json();
        return data;
      });
      const Real_Data = await Promise.all(All_data);
      console.log(Real_Data);
      setPokemon(Real_Data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  const searchData=Pokemons.filter((currPokemon)=> currPokemon.name.toLowerCase().includes(Search))

  useEffect(() => {
    fetchAPI(API);
  }, []);

  if (Loading) {
    return <Loader/>;
  } 
  else if(error){
    return <h1>{error.message}</h1>
  }
  return (
    <div className="w-full flex flex-wrap gap-3 justify-around py-6">
      {searchData.map((currEle) => {
        return <Card key={currEle.id} pokemon={currEle} />;
      })}
    </div>
  );
};

export default CardBox;
