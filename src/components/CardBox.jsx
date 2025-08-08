import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardBox = () => {
  const [Pokemons,setPokemon]=useState([]);
  const [Loading,setLoading]=useState(true);
  const API = "https://pokeapi.co/api/v2/pokemon?offset=24&limit=20";
  const fetchAPI = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const All_data=data.results.map(async (currEle)=>{
        const res=await fetch(currEle.url);
        const data=await res.json();
        return data;   
      })
      const Real_Data=await Promise.all(All_data);
      console.log(Real_Data);
      setPokemon(Real_Data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI(API);
  }, []);

  if(Loading){
    <div className="text-6xl">Loading...</div>
  }
  return (
    <div className="w-full flex flex-wrap gap-3 justify-around py-6">
      {Pokemons.map((currEle)=>{
        return <Card key={currEle.id} pokemon={currEle}/>
      })}
    </div>
  );
};

export default CardBox;
