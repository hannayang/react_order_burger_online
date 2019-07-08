import React, { Component } from 'react';
import './App.css';

const priceList = {
  salad: 1.20, 
  bacon: 1.50, 
  cheese: 1.40, 
  meat: 1.60, 
  bread: 2.00, 
}
  
class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      saladNum: 0, 
      baconNum: 0, 
      cheeseNum: 0, 
      meatNum: 0, 
    }; 
    this.saladDecreaseHandler = this.saladDecreaseHandler.bind(this); 
    this.saladIncreaseHandler = this.saladIncreaseHandler.bind(this); 
    this.baconDecreaseHandler = this.baconDecreaseHandler.bind(this); 
    this.baconIncreaseHandler = this.baconIncreaseHandler.bind(this); 
    this.cheeseDecreaseHandler = this.cheeseDecreaseHandler.bind(this); 
    this.cheeseIncreaseHandler = this.cheeseIncreaseHandler.bind(this); 
    this.meatDecreaseHandler = this.meatDecreaseHandler.bind(this);
    this.meatIncreaseHandler = this.meatIncreaseHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this); 
  }; 

  saladDecreaseHandler() {
    if(this.state.saladNum > 0) {
      this.setState({
        saladNum: this.state.saladNum - 1, 
      })
    }
  }; 

  saladIncreaseHandler() {
    if(this.state.saladNum < 3) {
      this.setState({
        saladNum: this.state.saladNum + 1, 
      })
    }
  }; 

  baconDecreaseHandler() {
    if(this.state.baconNum > 0) {
      this.setState({
        baconNum: this.state.baconNum - 1, 
      })
    }
  }; 

  baconIncreaseHandler() {
    if(this.state.baconNum < 3) {
      this.setState({
        baconNum: this.state.baconNum + 1, 
      })
    }
  }; 

  cheeseDecreaseHandler() {
    if(this.state.cheeseNum > 0) {
      this.setState({
        cheeseNum: this.state.cheeseNum - 1, 
      })
    }
  }; 

  cheeseIncreaseHandler() {
    if(this.state.cheeseNum < 3) {
      this.setState({
        cheeseNum: this.state.cheeseNum + 1, 
      })
    }
  }; 

  meatDecreaseHandler() {
    if(this.state.meatNum > 0) {
      this.setState({
        meatNum: this.state.meatNum - 1, 
      })
    }
  }; 

  meatIncreaseHandler() {
    if(this.state.meatNum < 3) {
      this.setState({
        meatNum: this.state.meatNum + 1, 
      })
    }
  }; 

  resetHandler() {
    this.setState({
      saladNum: 0, 
      baconNum: 0, 
      cheeseNum: 0, 
      meatNum: 0, 
    })
  }; 

  getExtendedState(state) { 
    let layers = [];
    for(let i = 0; i < state.saladNum; i++) {
      layers.push('salad')
    }
    for(let i = 0; i < state.baconNum; i++) {
      layers.push('bacon')
    } 
    for(let i = 0; i < state.cheeseNum; i++) {
      layers.push('cheese')
    } 
    for(let i = 0; i < state.meatNum; i++) {
      layers.push('meat')
    }
    return { 
      layers: layers, 
      currentPrice: (2.00 + state.saladNum * priceList.salad + state.baconNum * priceList.bacon + state.cheeseNum * priceList.cheese + state.meatNum * priceList.meat).toFixed(2)
    }
  }; 


  render () {
    const extendedState = this.getExtendedState(this.state);
    const divLayers = extendedState.layers.map((className) => (<div className={'layer ' + className}></div>));
    return (
      <div className="App">
        <nav>
          <img className='logo' src='http://clipart-library.com/image_gallery/149336.png' alt='Burger Logo' /> 
          <p>Welcome to Order Burger Online!</p>
        </nav>
        <div className='burger-builder'> 
          <div className='layer top'>
            <div className='seed'></div>
          </div>
          {divLayers}
          <div className='layer bottom'></div>
        </div>
        <div className='current-price'>
          <h3 id='current-price'> Current Price:&nbsp; <span className='price-num'>${extendedState.currentPrice}</span></h3>
        </div>
        <div className='ingredient-control'>
          <div className='ingredient'>
            <p className='ingredient-name'>Salad </p> 
            <i onClick={this.saladDecreaseHandler} className="far fa-minus-square"></i> <span className='number'>{this.state.saladNum}</span> <i onClick={this.saladIncreaseHandler} className="far fa-plus-square"></i>
          </div>
          <div className='ingredient'>
            <p className='ingredient-name'>Bacon </p> 
            <i onClick={this.baconDecreaseHandler} className="far fa-minus-square"></i> <span className='number'>{this.state.baconNum}</span> <i onClick={this.baconIncreaseHandler} className="far fa-plus-square"></i>
          </div>
          <div className='ingredient'>
            <p className='ingredient-name'>Cheese </p> 
            <i onClick={this.cheeseDecreaseHandler} className="far fa-minus-square"></i> <span className='number'> {this.state.cheeseNum}</span> <i onClick={this.cheeseIncreaseHandler} className="far fa-plus-square"></i>
          </div>
          <div className='ingredient'>
            <p className='ingredient-name'>Meat </p> 
            <i onClick={this.meatDecreaseHandler} className="far fa-minus-square"></i> <span className='number'> {this.state.meatNum}</span> <i onClick={this.meatIncreaseHandler} className="far fa-plus-square"></i>
          </div>
        </div>
        <div className='buttons'>
          <button onClick={this.resetHandler}> Redo </button>
          <button> Order </button>
        </div>
        <footer>
          <p>Designed and coded by</p>
          <p><a href="https://hannayang.github.io/my_resume/" target="_blank">Hanna Yang</a></p>
        </footer>
      </div>
    );
  }; 
}

export default App;
