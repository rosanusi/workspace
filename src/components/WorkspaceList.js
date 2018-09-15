import React, { Component } from 'react';
import './../css/main.css';



class WorkspaceList extends Component {


    openWorkspaceUrls(e, workspace){
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

    editWorkspaceUrls(e, workspace){
        // console.log(e.target);
        // console.log(workspace);
        console.log("working");
    }


  render() {
    
    let workspaceList = this.props.workspaceList;

    const workspaces = workspaceList.map((workspace) =>
        <li  
            className="ws-list__space"
            key={workspace.key}
        >
            <span className="ws-list__label">{workspace.label}</span>
            <div className="ws-list__actions">
                <span
                    className="ws-list__url"
                    onClick={((e) => this.openWorkspaceUrls(e, workspace))}
                >
                    open workspace
                </span>
                <span
                    className="ws-list__edit"
                    onClick={((e) => this.editWorkspaceUrls(e, workspace))}
                >
                 edit workspace
                </span>

            </div>
        </li>
    );
    
    
    
    return (
        <ul className="ws-list">
            {workspaces}
        </ul>
    );
  }
}

export default WorkspaceList;