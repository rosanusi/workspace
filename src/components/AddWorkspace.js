import React, { Component } from 'react';
import './../css/main.css';



class AddWorkspace extends Component {


    addNewWorkspace(e){
        e.preventDefault();

        let date = Date.now();
        let wsInput = this.refs.wslabel;

        if(wsInput.value !== '' ){
            let newWorkspace = {
                label : wsInput.value,
                key : "djgdj",
                urls : {},
                dateCreated: date
            }
            this.props.handleAddNewWorkspace(newWorkspace);

        } else {
            console.log('you need to type something')
        }
    }


    render() {    
        return (
            <div className="ws-addnewForm">
                <form 
                    onSubmit={((e) => this.addNewWorkspace(e))}
                >
                    <label>
                        Enter new Workspace label
                        <input type="text" ref="wslabel" id="ws-label" name="ws-label" autoFocus />
                    </label>
                </form>
            </div>
        );
    }


}

export default AddWorkspace;