import React, { Component } from 'react'

import Home from './Components/Home'
import Navbar from './Components/Navbar'

export class App extends Component {
  //Creating state
  state = ({ mode: 'light', myStyle: {color: 'black',backgroundColor:'white'}, btn: 'Enable Dark Mode' });

  //Creating the toggle mode button to change the colors
  toggleMode = () => {
    if (this.state.mode === 'light') {      
      this.setState({ btn:'Enable Light Mode', mode:'dark',myStyle: {color:'white',backgroundColor:'gray'} })
    }

    else {
      this.setState({ btn:'Enable Dark Mode' ,mode:'light',myStyle: {color:'white',backgroundColor:'gray'} })
    }
  }
  render() {
    return (
      <>
        {/* Navbar component  */}
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode}  btn={this.state.btn} />

        {/* Home Component  */}
        <Home myStyle={this.state.myStyle} mode={this.state.mode} alert={this.state.alert}/>

      </>
    )
  }
}

export default App

