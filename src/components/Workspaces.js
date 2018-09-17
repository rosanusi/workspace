import React, { Component } from 'react';
import WorkspaceList from './WorkspaceList';
import UrlList from './UrlList';
import AddWorkspace from './AddWorkspace';
import './../css/main.css';



class Workspaces extends Component {

    constructor(props){
        super(props);

        this.state = {
            workspaceList : [],
            showWorkspaceForm : false,
            workspaceUrls : []
        }
    }

    componentWillMount(){
        this.setState({
           workspaceList: [{
            label : "office workspace",
            key: "35743",
            urls : [
                {
                domain: "gmail",
                address: "http://www.booking.gmail.com"
                },
                {
                domain: "adium",
                address: "http://www.booking.adium.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                },
                {
                domain: "adium",
                address: "http://www.booking.adium.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                },
                {
                domain: "adium",
                address: "http://www.booking.adium.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                }
            ],
            dateCreated : "0945738573875"
            }, 
            {
                label : "office workspace",
                key: "35743",
                urls : [
                    {
                    domain: "gmail",
                    address: "http://www.booking.gmail.com"
                    },
                    {
                    domain: "adium",
                    address: "http://www.booking.adium.com"
                    },
                    {
                    domain: "something else",
                    address: "http://www.something.com"
                    },
                    {
                    domain: "adium",
                    address: "http://www.booking.adium.com"
                    },
                    {
                    domain: "something else",
                    address: "http://www.something.com"
                    },
                    {
                    domain: "something else",
                    address: "http://www.something.com"
                    },
                    {
                    domain: "something else",
                    address: "http://www.something.com"
                    },
                    {
                    domain: "adium",
                    address: "http://www.booking.adium.com"
                    },
                    {
                    domain: "something else",
                    address: "http://www.something.com"
                    }
                ],
                dateCreated : "0945738573875"
                }, 
                {
                    label : "office workspace",
                    key: "35743",
                    urls : [
                        {
                        domain: "gmail",
                        address: "http://www.booking.gmail.com"
                        },
                        {
                        domain: "adium",
                        address: "http://www.booking.adium.com"
                        },
                        {
                        domain: "something else",
                        address: "http://www.something.com"
                        },
                        {
                        domain: "adium",
                        address: "http://www.booking.adium.com"
                        },
                        {
                        domain: "something else",
                        address: "http://www.something.com"
                        },
                        {
                        domain: "something else",
                        address: "http://www.something.com"
                        },
                        {
                        domain: "something else",
                        address: "http://www.something.com"
                        },
                        {
                        domain: "adium",
                        address: "http://www.booking.adium.com"
                        },
                        {
                        domain: "something else",
                        address: "http://www.something.com"
                        }
                    ],
                    dateCreated : "0945738573875"
                    }, 
                    {
                        label : "office workspace",
                        key: "35743",
                        urls : [
                            {
                            domain: "gmail",
                            address: "http://www.booking.gmail.com"
                            },
                            {
                            domain: "adium",
                            address: "http://www.booking.adium.com"
                            },
                            {
                            domain: "something else",
                            address: "http://www.something.com"
                            },
                            {
                            domain: "adium",
                            address: "http://www.booking.adium.com"
                            },
                            {
                            domain: "something else",
                            address: "http://www.something.com"
                            },
                            {
                            domain: "something else",
                            address: "http://www.something.com"
                            },
                            {
                            domain: "something else",
                            address: "http://www.something.com"
                            },
                            {
                            domain: "adium",
                            address: "http://www.booking.adium.com"
                            },
                            {
                            domain: "something else",
                            address: "http://www.something.com"
                            }
                        ],
                        dateCreated : "0945738573875"
                        }, 
                        {
                            label : "office workspace",
                            key: "35743",
                            urls : [
                                {
                                domain: "gmail",
                                address: "http://www.booking.gmail.com"
                                },
                                {
                                domain: "adium",
                                address: "http://www.booking.adium.com"
                                },
                                {
                                domain: "something else",
                                address: "http://www.something.com"
                                },
                                {
                                domain: "adium",
                                address: "http://www.booking.adium.com"
                                },
                                {
                                domain: "something else",
                                address: "http://www.something.com"
                                },
                                {
                                domain: "something else",
                                address: "http://www.something.com"
                                },
                                {
                                domain: "something else",
                                address: "http://www.something.com"
                                },
                                {
                                domain: "adium",
                                address: "http://www.booking.adium.com"
                                },
                                {
                                domain: "something else",
                                address: "http://www.something.com"
                                }
                            ],
                            dateCreated : "0945738573875"
                            }, 
            {
            label : "Homespace",
            key: "5698",
            urls : [
                {
                domain: "adium",
                address: "http://www.booking.adium.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                },
                {
                domain: "adium",
                address: "http://www.booking.adium.com"
                },
                {
                domain: "something else",
                address: "http://www.something.com"
                }
            ],
            dateCreated : "0945738573875"
            }, 
            {
            label : "Beatmaking Session",
            key: "4535",
            urls : [
                {
                domain: "something else",
                address: "http://www.something.com"
                }
            ],
            dateCreated : "0945738573875"
            }, 
            {
            label : "Job Search Session",
            key: "7435",
            urls : [
                {
                domain: "something else",
                address: "http://www.something.com"
                },
                {
                domain: "adium",
                address: "http://www.booking.adium.com"
                },
            ],
            dateCreated : "0945738573875"
            }]
        });
    }

    showWorkspaceForm(e){

        this.setState({
            showWorkspaceForm : true
        });

        console.log(this.state.showWorkspaceForm);
        console.log(this.state.workspaceList);
    }

    handleAddNewWorkspace(newWorkspace){
        console.log(newWorkspace);
        let workspaceList = this.state.workspaceList;
        workspaceList.unshift(newWorkspace);

        this.setState({
            workspaceList : workspaceList,
            showWorkspaceForm: false
        });

        console.log(workspaceList);

    }

    handleSetUrls(urls){
        console.log(urls);

        this.setState({
            workspaceUrls : urls 
        });

        console.log(this.state.workspaceUrls);
    }


  render() {

    if(this.state.showWorkspaceForm === true){
        return (
            <AddWorkspace 
                handleAddNewWorkspace = {this.handleAddNewWorkspace.bind(this)} 
            />
        );
    } else {
        return (
            <div className="mw8 ws-block flex flex-wrap">
                <h3 className="ws-block__title">Workspaces</h3>
                <WorkspaceList 
                    workspaceList =  {this.state.workspaceList}
                    handleSetUrls =  {this.handleSetUrls.bind(this)}
                />
                <button 
                    type="button" 
                    className="ws-addnew"
                    onClick={((e) => this.showWorkspaceForm(e))}
                    >
                    Add new workplace
                </button>
                {/* <UrlList 
                    workspaceUrls = {this.state.workspaceUrls}
                /> */}
            </div>
        );
    }
  }
}

export default Workspaces;