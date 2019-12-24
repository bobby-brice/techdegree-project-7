import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
      .then(resData => {
        this.setState({
          photos: resData.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <h1>Hello World!</h1>
    )
  }

}


export default App;
