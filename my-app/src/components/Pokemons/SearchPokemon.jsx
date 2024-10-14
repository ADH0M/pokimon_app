import React from "react";
import styles from'./pokemon.module.css'
export default function SrearchPokemon(props) {
  
  
    return (
    <>
      <input type="text" name="text" style={{color:'red'}} placeholder="search"
       value={props.sreach}  onChange={(e) =>{
       return props.setSearch(e.target.value)} }/>

      <div className={styles.slidecontainer}>
        <input type="range" 
         min="1" step='2' max="21"  
         value={props.range}
         onChange={(e)=>{
          props.setRange(e.target.value)
         }}
         className={styles.slider} id={styles.myRange} />
        <p>Value:{props.range} <span id={styles.demo}></span></p>
      </div>
  
      <div >
      <select style={{width:'100px'}} value={props.sort} 
      onChange={
        (e)=>{props.setSort(e.target.value)} 
        }> 
        <option value="ASC"> sroted by ASC</option>
        <option value="DASC">sroted by DASC</option>
      </select>
    </div>
          
    </>
  );
}
