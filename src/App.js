import React, { Component } from 'react';
import axios from 'axios';


export default class App extends Component {
 state = {
   screenshot:null
 }


  makeThumbnail = (e) => {
    e.preventDefault();
    const link = e.target.elements.link.value;
    axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${link}&token=8RAK9GNCPR3ZLOQK1K5C8LISRDBI39GU`)
    .then((res) => {
      const screenshot = res.data.screenshot;
      this.setState({screenshot})
      console.log(screenshot);
    });
  }
  render() {
    return (
      <div>
        <form className="site" onSubmit={this.makeThumbnail}>
        <input type="text" name="link" placeholder="Enter your Url here..."/>
        <button type="submit">Submit</button>
        </form>
        { this.state.screenshot ? <img src={ this.state.screenshot } alt="link"/> : <p>Please enter your link.</p> }
      </div>
    )
  }
}