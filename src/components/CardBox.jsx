import React, { useEffect } from "react";
import Card from "./Card";

const CardBox = () => {
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
    } catch (error) {}
  };

  useEffect(() => {
    fetchAPI(API);
  }, []);
  return (
    <div className="w-full flex justify-around py-6">
      <Card />
      <Card />
    </div>
  );
};

export default CardBox;
