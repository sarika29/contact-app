import React from 'react';

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui main">
               <h2>Add contact</h2>
               <form className="ui form">
                  <div className="feild">
                      <label>Name</label>
                      <input type="text" name="name" placeholder="Name"></input>
                  </div>

                  <div className="feild">
                      <label>Email</label>
                      <input type="text" name="email" placeholder="Email"></input>
                  </div>
               </form>
            </div>
        )
    }
}