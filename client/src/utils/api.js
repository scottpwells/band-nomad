// import axios from "axios";

// export default {
//   // Gets all instruments
//  searchMusician: function(instrument) {
//      return axios.get("/")
//  }
// };


import axios from "axios";
export default {
    session: function() {
        return axios.get("/api/data/session");
    },
    registerUser: function(userData){
        return axios.post("/api/data/new", userData)
    },
    loginAttempt: function(fieldData){
        return axios.post("/api/data", fieldData)
    }
}