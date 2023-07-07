import React, { Component, useState,useContext } from 'react'
import './popupCard.scss'
import CardsContext from './CardsContext';

function EditCard () {

    const{user, searchedUsers, updatedCardList} = useContext(CardsContext);
    const [state, setState] = useState({
            name: user.name,
            position: user.position,
            phone: user.phone,
            email: user.email,
            photo: "/AdvancedReact/business-cards-react/assets/image/no-photo.png",
            isPopupOpen: true,         
    })
    // constructor(props) {
    //     super(props);
    //     const {user} = props;

    //     this.state = {
    //         name: user.name,
    //         position: user.position,
    //         phone: user.phone,
    //         email: user.email,
    //         photo: "/AdvancedReact/business-cards-react/assets/image/no-photo.png",
    //         isPopupOpen: true,            
    //     }
    // }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({...state, [name]: value})
    }    

   
        return (
          
            <div className="card" style={{zIndex: 9999}}>
            <div className="card__img">
               <img src={state.photo} alt="photo"/>
           </div>
       <form style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'1rem'}}>

           <label name='name'>Name:</label>
           <input name='name' type="text" value={state.name} onChange={handleChange}/>
           
           <label name='position'>Position:</label>
           <input name='position' type="text" value={state.position} onChange={handleChange}/>
               
           <label name='phone'>Phone:</label>
           <input name='phone' type="text"  value={state.phone} onChange={handleChange}/>
           
           <label name='email'>Email: </label>
           <input name='email' type="text"  value={state.email} onChange={handleChange}/>
           <CardsContext.Consumer>  
            {({searchedUsers, updatedCardList}) => (
                <button className="card__btn" onClick={() => {
                    const newUsers = searchedUsers?.map((oldUser) => {
                    if(state?.email === oldUser.email) {
                    return state;
                    }
                    return oldUser ;          
                    });
                    console.log('newUsers', newUsers)                    
                    updatedCardList(newUsers);                
                }}>
                    Update
                </button> 
            )}
           </CardsContext.Consumer>
           <button style={{marginLeft:'10px'}} className="card__btn" 
               onClick={() => {
                   this.setState({
                       ...state,
                       isPopupOpen: false,
                   })
                   
               }}
           >
               Cancel
           </button>
       </form>
            </div>
           
        )
   
}

export default EditCard