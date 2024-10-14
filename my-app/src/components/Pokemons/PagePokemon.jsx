import React, {  useState } from "react";
import PokemonBox from "./PokemonBox";
import { useGetPokemons } from "../hooks/useGetPokemons";






export default function PagePokemon() {

  const {  loading , errors  } = useGetPokemons();
  const [  show    , setShow ] =  useState(false)

  if (loading) {
    return <div> loading... </div>;
  }
  if (errors) {
    return <div> {errors.massage} </div>;
  }

  return (
    <>
      {show ? <PokemonBox /> : null }
      <button onClick={()=>{setShow(!show)}}>{ show ? 'Headin' : 'Show' }</button>
    </>
  );
}
