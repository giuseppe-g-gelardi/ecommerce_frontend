import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import searchBar from './SearchBar.css';

class SearchBar extends Component {


    render() {
        return(
            <div class="input-group">
                <div class="input-group-append"><label style={{color: "white", fontSize: "18px", paddingTop: "6px"}}>Search</label></div>
                <input type="text" id="searchbar"></input>
                <div class="input-group-append"><Button variant='info' id="GoButton" type="submit">Go</Button></div>
            </div>
        ); 
    }
}

export default SearchBar;