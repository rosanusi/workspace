import React, { Component } from 'react';
import './../css/main.css';
import "tachyons";

import deleteIcon from './../images/close.svg';
import openIcon from './../images/open.svg';



class WorkspaceList extends Component {


    GotoWorkspaceUrls(e, workspace){
        // console.log(e.target);
        // console.log(workspace);

        let urls = workspace.urls;
        
        if(urls.length > 0 ){
            for (const url of urls) {
                window.open(url.address);
            }
        } else {
            console.log("this has no urls in it");
        }
        

    }

    setUrls(e, workspace){
        // console.log(e.target);
        // console.log(workspace);


        let urls = workspace.urls; 
        this.props.handleSetUrls(urls);
    }


    deleteWorkspaceUrls(e, workspace){
        // console.log(e.target);
        // console.log(workspace);
        e.stopPropagation();
        console.log("working");
    }


  render() {
    
    let workspaceList = this.props.workspaceList;

    const workspaces = workspaceList.map((workspace) =>
        <li  
            className="ws-list__space outline w-25 h4-ns pa2 mr2"
            key={workspace.key}
            onClick={((e) => this.setUrls(e, workspace))}
        >
            <span className="ws-list__label">{workspace.label}</span>
            <span className="ws-list__actions">
                <button type="button"
                    className="ws-list__url"
                    onClick={((e) => this.GotoWorkspaceUrls(e, workspace))}
                >
                    <img src={openIcon} alt="" />
                </button>
                <button type="button"
                    className="ws-list__delete"
                    onClick={((e) => this.deleteWorkspaceUrls(e, workspace))}
                >
                 
                 <img src={deleteIcon} alt="" />

                </button>

            </span>
        </li>
    );
    
    
    
    return (
        <ul className="ws-list flex flex-wrap">
            {workspaces}
        </ul>
    );
  }
}

export default WorkspaceList;