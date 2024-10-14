import React, { useEffect, useState } from 'react';

export const useGetPokemons = (url='https://pokeapi.co/api/v2/pokemon' )=> {

    const [pokemon , setPokemon ] = useState([]  )
    const [loading , setLoading ] = useState(true)
    const [errors  , setErrors  ] = useState(null)
    const [next    , setNext    ] = useState(null)
    const [prev    , setPrev    ] = useState(null)
    

    
    const fetchData = async ( ) => {

try{    const response = await fetch(url)
        .then((res) =>{ return res.json() } )
        
        // const container = []
        // response.results.map( ( item ) => { 
        //     container.push(
        //         fetch(item.url)
        //         .then((res )=>{return res.json()}))
        // } )

        const data = response.results.map( async (item) => {
            const res = await fetch(item.url);
            return res.json();
        });

        const pokemonData = await Promise.all( data )
        setPokemon(pokemonData)
        setNext(response.next)
        setPrev(response.previous)

    }catch(err){
        setErrors(err)
    }finally{
        setLoading(false)
    }

    }

    useEffect ( ()=>{ fetchData() } , [ url ])

    return { pokemon , next , prev , loading , errors }
}













