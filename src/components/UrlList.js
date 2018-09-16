import React, { Component } from 'react';
import './../css/main.css';



class UrlList extends Component {


    


  render() {

    console.log(this.props.workspaceUrls);    

    let workspaceUrls = this.props.workspaceUrls;

    const urls = workspaceUrls.map((url, id) =>
        <li  
            key = {id}
        >
            <div className="screenshot">
            
            </div>
            <span className="domain">{url.domain}</span>
        </li>
    );
    
    
    
    return (
        <ul className="ws-list__urls">
            {urls}
        </ul>
    );
  }
}

export default UrlList;