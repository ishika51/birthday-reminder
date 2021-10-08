import React,{useState} from 'react';
import data from './data';
const List = () => {
  const [people,setpeople] = useState(data);
  const removeId = (id) => {
   let newpeople = data.filter((i)=>i.id!==id )
    setpeople(newpeople);
  }
  const reset = (data) => {
    setpeople(data);
  };
  const adult = (age) =>{
    let adults = people.filter((i)=>i.age>18)
    setpeople(adults); 
  };
  console.log(data);
  console.log(data.e);
  //const countries = (country) => {
    //console.log(country);
  // let countrys = country.filter((i) => i.country!=='india' );
    //setpeople(countrys);
  //};
  return (
    <>
     <h3>{people.length} bithdays today</h3>
      {
      people.map((i)=>{
      const {id,image,name,age,country} = i;
      return(
       <article key={id} className="person">
         <img src={image}/>
         <div>
           <h4>{name}</h4>
           <p>{age} years</p>
           <button onClick={()=>removeId(id)} className="button">remove</button>
       </div>
       </article>
      );
      })  
      }
      <button onClick={() => setpeople([])} className="btn">clear all</button>
      <button onClick={() => reset(data)}>Reset</button>
      <button onClick={() => adult(data.age)} className="btn">18+</button>
      {/*<button onClick={() => countries(data.c)} className="btn">india</button>*/}
    </>
  );
};

export default List;
