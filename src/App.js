import React, { Component } from 'react';
import { Provider } from './components/context';
import { createBrowserHistory } from "history";
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
import PageNotFound from './components/PageNotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photo: [],
      loading: true
    }
  }

  componentDidMount() {
    const history = createBrowserHistory();
    let url = history.location.pathname.replace(/[^\w\s]/gi, '').replace("search", '');
    this.performSearch(url);
  }

  performSearch = (query = "waterfalls") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type=1&per_page=24&format=json&nojsoncallback=1`)
      .then(resData => {
        console.log(resData)
        this.setState({
          photo: resData.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      // we use the <Provider> to send the current state of the data and the function performSearch
      <Provider value={{
        data: this.state.photo,
        loading: this.state.loading,
        performSearch: this.performSearch
      }}>
        <BrowserRouter basename = "/search/waterfalls">
          <div className="container">
            <SearchForm />
            <Nav />
            <Switch>
              <Route exact path="/" render={() => <Redirect to='/search/waterfalls' /> } />
              <Route path="/search/:query" render={(props) => // if loading is true h3 is displayed, else the gallery is shown
                (this.state.loading) ? <h3 className="loading">Loading....</h3> : <Gallery {...props} />
              } />
              <Route component={PageNotFound} /> {/*only appears when no route matches*/}
            </Switch>
          </div>
        </BrowserRouter>
    </Provider>
    );
  }
}


export default App;
