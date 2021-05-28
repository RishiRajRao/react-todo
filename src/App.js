import React,{useState,useEffect} from 'react';
// import TimeContainer from './Timer';


function AddPetForm(props) {

  const [name,setName] = useState()
  const [species,setSpecies] = useState()
  const [age,setAge] = useState()

  function handleSubmit(e){
    e.preventDefault()
    //New Js we can replace the keys with the value only if both have same "name"
     props.setPets(prev=>prev.concat({name,species,age,id:Date.now()}))
     setName("")
     setSpecies("")
     setAge("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
        <input value={species} onChange={e=>setSpecies(e.target.value)} placeholder="species" />
        <input value={age} onChange={e=>setAge(e.target.value)} placeholder="age in years" />
        <button>Add Pet</button>
      </fieldset>
    </form>
  )
}

function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id != props.id))
  }
  
  return (
    <li>{props.name} is a {props.species} and is {props.age} years old.
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}




  



function App()
{

  const [pets,setPets]=useState([]
    )
//Ist part is always a function of useEffect which is triggered.
 useEffect(()=>{
   if(localStorage.getItem("examplePetData")){
     setPets(JSON.parse(localStorage.getItem("examplePetData")))
   }
   
 },[]) //Only one time rendered for the first inception of render of whole component.out of this whole functional component this small part will render one time and will remain oblivious of any time of render or anything.
 //Examplepetdata is the name of data that is being stored for reference.

 useEffect(()=>{
 localStorage.setItem("examplePetData",JSON.stringify(pets))
 },[pets]) 
 //run everytime pet state or given state changes






 

return(
    <div>
    
    <AddPetForm setPets={setPets} />
  
    <ul>
      {pets.map(data=>{
        return(
          <Pet setPets={setPets} id={data.id} name={data.name} species={data.species} age={data.age} key={data.id}/>
        );
      })}
    </ul>
    
    
    <br/>
  
    </div>
  )

  
}
export default App;


// function Timearea(){
//  const [time,setTime] = useState(new Date().toLocaleTimeString())
  
 
 
//  useEffect(()=>{
  
//  const clear =setInterval(()=>setTime(new Date().toLocaleTimeString())
//    ,1000)
//    console.log("again")

//    return ()=>clearInterval(clear)
   
//  },[])
// function fun(){
//   setTime(new Date().toLocaleTimeString())
// }

// setTimeout(fun,1000)
// fun()

// return(
  
//   <div>
//   <div>{time}</div>
    
//   </div>
   

// )


// function LikeArea(){

//   const [count,setCount] =useState(0);


//   return(
   
//     <div>
//     <button onClick={()=>setCount(count+1)}>Increased Likes</button>
//     <button onClick={()=>count===0?setCount(0):setCount(count-1)}>Decreased Likes</button>
//     <h2>This has been liked [{count}] times</h2>
//   </div>
//   )
// }