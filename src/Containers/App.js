import React, { Component } from 'react';
import './App.css';

const ingredients = [{
  id: '01', 
  name: 'Salad', 
  unitPrice: 1.20, 
  num: 0, 
}, {
  id: '02', 
  name: 'Bacon', 
  unitPrice: 1.50, 
  num: 0, 
}, {
  id: '03', 
  name: 'Cheese', 
  unitPrice: 1.40, 
  num: 0, 
}, {
  id: '04', 
  name: 'Meat', 
  unitPrice: 1.60, 
  num: 0, 
}, 
]; 
  
class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      ingredients: ingredients, 
    };
    this.decreaseHandler = this.decreaseHandler.bind(this); 
    this.increaseHandler = this.increaseHandler.bind(this); 
    this.resetHandler = this.resetHandler.bind(this); 
  }

  decreaseHandler(id) {
    const ingredient = this.state.ingredients.find(i => {
      return i.id === id; 
    }); 
    if(ingredient.num > 0) {
      ingredient.num = ingredient.num - 1; 
    }
    this.setState({
      ingredients: this.state.ingredients, 
    })
  }; 

  increaseHandler(id) {
    const ingredient = this.state.ingredients.find(i => {
      return i.id === id; 
    }); 
    if(ingredient.num < 3) {
      ingredient.num = ingredient.num + 1; 
    }
    this.setState({
      ingredients: this.state.ingredients, 
    })
  }

  resetHandler() {
    this.state.ingredients[0].num = 0; 
    this.state.ingredients[1].num = 0; 
    this.state.ingredients[2].num = 0; 
    this.state.ingredients[3].num = 0; 
    this.setState({
      ingredients: this.state.ingredients, 
    });
  }

  renderIngredients(ingredients) {
    return ingredients.map((ingredient) => {
      return (
        <div className='ingredient'>
          <p className='ingredient-name'>{ingredient.name}</p>
          <i onClick={()=>this.decreaseHandler(ingredient.id)} className="far fa-minus-square"></i> <span className='numberOfOrder'>{ingredient.num}</span> <i onClick={()=>this.increaseHandler(ingredient.id)} className="far fa-plus-square"></i>
        </div>
      )
    }
    )
  }

  getExtendedState(state) { 
    let layers = [];
    for(let i = 0; i < state.ingredients[0].num; i++) {
      layers.push('salad')
    }
    for(let i = 0; i < state.ingredients[1].num; i++) {
      layers.push('bacon')
    } 
    for(let i = 0; i < state.ingredients[2].num; i++) {
      layers.push('cheese')
    } 
    for(let i = 0; i < state.ingredients[3].num; i++) {
      layers.push('meat')
    }
    return { 
      layers: layers, 
      currentPrice: (2.00 + state.ingredients[0].num * state.ingredients[0].unitPrice + state.ingredients[1].num * state.ingredients[1].unitPrice + state.ingredients[2].num * state.ingredients[2].unitPrice + state.ingredients[3].num * state.ingredients[3].unitPrice).toFixed(2)
    };
  }

  render () {
    const extendedState = this.getExtendedState(this.state);
    const divLayers = extendedState.layers.map((className) => (<div className={'layer ' + className}></div>));
    return (
      <div className="App">
        <nav>
          <img className='logo' src='http://clipart-library.com/image_gallery/149336.png' alt='Logo' /> 
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
          <div id='current-price'> Current Price:&nbsp; <span className='total-price-num'>${extendedState.currentPrice}</span></div>
        </div>
        <div className='ingredient-control'>
          {this.renderIngredients(this.state.ingredients)}
        </div>
        <div className='buttons'>
          <button onClick={this.resetHandler}> Redo </button>
          <button> Order </button>
        </div>
        <footer>
          <p>Designed and coded by</p>
          <p><a href="https://hannayang.github.io/my_resume/" target="_blank" rel="noopener noreferrer">Hanna Yang</a></p>
        </footer>
      </div>
    );
  }; 
}

export default App;
