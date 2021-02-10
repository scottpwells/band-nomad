
import React, { Component } from 'react'
// import axios from 'axios';
import "../Search/Search.css"

class Search extends Component {
  state = { term: '' };

runsearch = (term) => {
  
  console.log(term)
}

  render() {
    return (

    <div>

        <div className="container">
          <div className="Row">
            <div className="col-sm-12">
              <form>
                <div className="input-field" >
                  <i className="material-icons" style={{ marginLeft: "2vh", }}>search</i>
                  <input className="if" id="search" type="text" 
                  value={this.state.searchTerms} 
                  onChange={e => {
                    this.setState({ term: e.target.value })
                    this.runsearch(e.target.value)
                    }}
               
                  required 
                 
                  />

                  <label className="label-icon" htmlFor="search"><i className="material-icons"></i></label>
                  <i className="material-icons"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )



  }
}



export default Search;







