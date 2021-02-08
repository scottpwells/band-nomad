import React from 'react';
import './Search.css';
// import searchImage from '../../assets/images/search.png'

const Search = () => {
    return (

        <div>
        <div className="container">
            <div className="col-sm-12">
      <form>
            <div className="input-field" >
            
              <input className="if" id="search" type="search" required/>
              <label className="label-icon" htmlFor="search"><i className="fas fa-search"></i></label>
              
              <i className="material-icons"></i>
            </div>
          </form>
          </div>
          </div>
      </div>
  

    
    );
};

export default Search;