import React, { Component } from 'react';

class Workspace extends Component {
    render() {
      return (
      <iframe title="Code Sample" src="http://euvsvirus.code.webtech-superheroes.net" style={{width:"100%", height:"800px",border:0, "border-radius": "4px", overflow:"hidden"}} sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
      )
    }
  }

export default Workspace