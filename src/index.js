import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SearchBar from './components/search-bar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Route exact path="/:id">
      <SearchBar />
    </Route>
  </Router>
);