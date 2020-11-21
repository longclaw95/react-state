import React, { Component } from 'react'
import './App.css';
import Image from './photo.png'
import { Card , Button } from 'react-bootstrap';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      
        
          name :"Wassim Zeddini",
          bio : "A passionate web developer seeking hands on experience to design websites  ,I am a good communicator and can build positive, cohesive relationships with all levels of staff.",
          profession : "Fullstack JS Web developer",
          showMe: true,
          count : 0,
          imgSrc : Image
        
      
    }
    
  }

  

  render() {
    const buttonText = this.state.showMe ? "hide" : "show" ;
    const count = this.state.count ;
    
    return (
      <div className="App" style={{ width: '20rem' }}>
        {this.state.showMe ? 
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src = {this.state.imgSrc} />
              <Card.Body>
              <Card.Title>{this.state.name}</Card.Title>
              <Card.Title>{this.state.profession}</Card.Title>
              <Card.Text>
                {this.state.bio}
                <br></br>
                current count : {count}
              </Card.Text>
              
            </Card.Body>
          </Card> : 
      <div>I am hidden</div> }
        <button onClick={() => {this.setState({showMe : !this.state.showMe })}} >{buttonText}</button>
      </div>
      
    )
  }

  componentDidMount() {
    this.myInterval = setInterval(()=> {
      this.setState({
        count: this.state.count + 1
      })
    },1000)
    
  }
}

