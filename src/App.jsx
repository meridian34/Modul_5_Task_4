import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { userData } from './userData';
import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'

const users = userData.map(user=>{
  return{
    id: user._id, 
    name: user.name,       
    time: user.age
  }
});

const UserCard = (props, calback) =>{
  const myEvent = ()=>{
    calback(props);
  }
  return(
    <div className="UserCard" onClick={myEvent}>
      <p>id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Time: {props.time}</p>
      <button>Delete</button>
    
  </div> 
  )
}
const i = {
  _id:12345678,
  name:'',
  time:0  
};


function App() {
  const [state, setState] = useState(users);
  const [show, setShow] = useState(false);
  const [modalUser, setModal] = useState(i);

  const handleChange = (event) => {
    const result = [];
    users.forEach(users => {
      if(Number.isInteger(parseInt(event.target.value)) && users.id.toString().includes(event.target.value))
      {
        result.push(users)
      }
      if(users.name.toLowerCase().includes(event.target.value.toLowerCase())){
         result.push(users)
      }
   });
    setState(result)
  }

  const handleModalClose = () => {
    setShow(false);
  };
  
  const handleModalOpen = () => {
    setShow(true);
  };

  const handleClickItem = (users)=>{
    setModal(users);
    handleModalOpen();   
  }
  
  return (
    
    <div className="App">      
      <div hidden={!show}>
        <div className="modal-background" onClick={handleModalClose}>
          <div className="modal-card">
            <p>......</p>
            {UserCard(modalUser,handleClickItem)}                
          </div>
        </div>
      </div>
      
      <div className="View">
      <input className="Input" type="text" placeholder="Enter name" onChange={handleChange}/>
        <div className="CardContainer">
          {state.map(user=>UserCard(user,handleClickItem))}      
        </div>
      </div>
      <div className="RightBar">
        <div className="RegistrationBlock">
          <div className="TitleReg">
            <h2>Registration user</h2>
          </div>
          <div className="ContentReg">
            <div className="someContent" >
              <p>First name:</p>
              <input className="Input" type="text" placeholder="Enter first name" onChange={handleChange}/>
              <p>Second name:</p>
              <input className="Input" type="text" placeholder="Enter Second name" onChange={handleChange}/>
            </div>
          </div>
          <div className="BottomReg">
            <button> Registration </button>
          </div>
          
          
        </div>
        <div className="WinnerBlock">
            <h2>Total participants: {}</h2>
            <button> Show winner </button>          
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
