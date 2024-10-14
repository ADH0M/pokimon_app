import React, { useEffect, useState } from 'react';
import styles from './pokemon.module.css'
import { useGetPokemons } from '../hooks/useGetPokemons';
import SrearchPokemon from './SearchPokemon';
export default function PokemonBox(){
    
    const [linke , setLinke ] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    const { pokemon , next , prev  } = useGetPokemons(linke);
    const [currentPage , setCurrentPage ] = useState(0)
    const [newPokemon , setNewPokemon]    = useState([])
    const [search ,setSearch] = useState('')
    const [range ,setRange] = useState(20)
    const [sort ,setSort] =useState('')



    // useEffect(()=>{
//     if (next ){
//         const url = new URL( next )
//         const offUrl = parseInt( url.searchParams.get('offset') / 20)
//         setCurrentPage( offUrl - 1 )
//         console.log(next);
//     }
// }, [next])




    useEffect( ()=>{ 
        setNewPokemon(pokemon)
    } , [pokemon] )

 console.log(search);

 useEffect( ()=>{
    const filterd = pokemon.filter( (item) =>{ 
        return String(item.name).includes(search)
    }).filter( (item)=>{
        return item.height <= range
    }).sort((item1 , item2)=>{
        if(sort==='ASC'){
            return item1.height - item2.height
        }
        else {
            return item2.height - item1.height
        }
    })

    setNewPokemon(filterd)
} , [search ,range ,sort] )


    useEffect( ()=>{ 
        if( next ){

            const url  = new URL( linke )  
            const offset = parseInt(url.searchParams.get('offset') )
            const limit = parseInt(url.searchParams.get('limit') )
            setCurrentPage( offset / limit )

        }
    },[next])

const getPrevious=()=>{
    let myArr=[]
    for(let i = Math.max(currentPage - 2 , 0 ) ; i < currentPage ;i++  ){
        myArr.push(i)
    }
    return myArr
}

const getNewLink =(item)=>{
    let linke =`https://pokeapi.co/api/v2/pokemon/?offset=${ item * 20 }&limit=20`
    setLinke(linke)
}

const getNext=()=>{
    let myArr=[]
    for(let i = currentPage + 1; i < Math.min(currentPage + 3, Math.ceil( 1302 / 20) ) ;i++  ){
        myArr.push(i)
    }
    return myArr
}









    return (
        <div className={ styles.pokemonPage }> 

            <nav className={styles.nav}>
                <SrearchPokemon search={search} setSearch={setSearch} 
                range={range} setRange={setRange}
                sort={sort} setSort={setSort} />
            </nav>

            <div className={styles.aside}>
                <ul>
                    <li>Home </li>
                    <li>Contact  </li>
                    <li>About </li>
                </ul>
            </div>

            <div className={styles.pokemonBox}> 
                {newPokemon.map((item) =>(
                
                <div key={item.id} className={styles.card}>
                        <div className={styles.images}>

                            <img className={styles.front } src={item.sprites.front_default } alt={`pokemon name${item.name}`} />
                            <img className={styles.back  } src={item.sprites.back_default  } alt={`pokemon name${item.name}`} />
                    </div>
                    <ul className={styles.cardText}>
                        <li> {item.name}</li>
                        <li> Heghit :{item.height}</li>
                    </ul>

                </div>                
                

            ))}
            
            <footer>
                <button onClick={()=>{setLinke(prev) }} disabled={prev === null} className={styles.btn}>previous</button>
                
                <div>

                    {getPrevious().map((ele)=>(
                        <button className={styles.go} onClick={()=>{getNewLink(ele)}} >{ ele + 1 }</button>
                        ) )}

                </div>

                <span className={styles.mainPage}>{ currentPage + 1  }</span>

                                
                <div>

                    {getNext().map((ele)=>(
                        <button className={styles.go}  onClick={()=>{getNewLink(ele)}}>{ ele + 1 }</button>
                        ) )}

                </div>

                <button onClick={()=>{setLinke(next) }} disabled={next === null} className={styles.btn}>next</button>
            </footer>


            </div>

            
        </div>
    )
}
