import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {


    render() {
        return(
            <div>
                <label style={{color: "white"}}>Search</label>
                <input type="text" id="searchbar"></input>
                <Button variant='info' size='sm' type="submit">Go</Button>
            </div>
        ); 
    }
}

export default SearchBar;