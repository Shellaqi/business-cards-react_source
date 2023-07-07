import { Component } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import "./card.scss";
import EditCard from "./EditCard";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Not Specified",
      position: "Not Specified",
      phone: "Not Specified",
      email: "Not Specified",
      photo: "/AdvancedReact/business-cards-react/assets/image/no-photo.png",
      show: true,
      isPopupOpen:false,
      isFavorite: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      name: props.name || state.name,
      position: props.position || state.position,
      phone: props.phone || state.phone,
      email: props.email || state.email,
    };
  }

  deleteCard = () => {
    this.setState({ show: false });

    const cards = document.querySelectorAll(".card");
    if (cards.length === 1) {
      document.querySelector(".message").style.display = "inline";
    }
  };

  toggleFavorite = () => {
    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite,
    }));
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({...this.state, [name]: value})
  }  

  render() {
    const starIcon = this.state.isFavorite ? <BsStarFill /> : <BsStar />;
    return (
      <>
      {this.state.show && (
        <div className="card">
          <div className="card__img"
                onClick={() => {
                  this.setState({...this.state
                    , show: !this.state.show
                    ,isPopupOpen: !this.state.isPopupOpen})
                }}             
          >
            <img src={this.state.photo} alt="photo" />
          </div>
          <p className="card__name">{this.state.name}</p>
          <h2 className="card__position">{this.state.position}</h2>
          <a className="card__phone" href={`tel:${this.state.phone}`}>
            {this.state.phone}
          </a>
          <a className="card__mail" href={` mailto: ${this.state.email} `}>
            {this.state.email}
          </a>
          <button className="card__btn" onClick={this.deleteCard}>
            Delete
          </button>
          <a className="card__favorite" onClick={this.toggleFavorite}>
            {starIcon}
          </a>
        </div>
      )}
      {
          // this.state.isPopupOpen && <EditCard updateUser={this.state}/>  
          this.state.isPopupOpen && <EditCard/>   
      }         
      {/* {
        this.state.isPopupOpen && (
          <div className="card" style={{zIndex: 9999}}>
               <div className="card__img">
                  <img src={this.state.photo} alt="photo"/>
              </div>
          <form style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridGap:'1rem'}}>

              <label name='name'>Name:</label>
              <input name='name' type="text" value={this.state.name} onChange={this.handleChange}/>
              
              <label name='position'>Position:</label>
              <input name='position' type="text" value={this.state.position} onChange={this.handleChange}/>
                  
              <label name='phone'>Phone:</label>
              <input name='phone' type="text"  value={this.state.phone} onChange={this.handleChange}/>
              
              <label name='email'>Email: </label>
              <input name='email' type="text"  value={this.state.email} onChange={this.handleChange}/>
  
              <button className="card__btn" onClick={() => {
                  const newUsers = this.props.searchedUsers?.filter((user) => {
                    const fullName = `${user.name}`;
                    if (
                      fullName
                        .toLowerCase()
                        .replace(" ", "")
                        .includes(this.state.searchText.replace(" ", ""))
                    ) {
                      return true;
                    }
                    return false;
                  });
                  this.props.setSearchedUsers(newUsers);                
              }}>
                  Update
              </button> 
              <button style={{marginLeft:'10px'}} className="card__btn" 
                  onClick={() => {
                      this.setState({
                          ...this.state,
                          isPopupOpen: false,
                      })
                      setSearchedUsers
                  }}
              >
                  Cancel
              </button>
          </form>
      </div>          
        )}       */}
      </>
    );
  }
}

export default Card;
