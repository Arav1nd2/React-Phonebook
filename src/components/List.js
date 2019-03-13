import React, { Component } from 'react';
import {Modal} from 'react-materialize';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalState : false,
            name: "/",
            phone : "/",
            nameErr: false,
            phoneErr: false,
            phoneRep: false
        }

        this.handleVerify = () => {
            if((this.state.name !== "" || this.state.name !== "/") && !(isNaN(this.state.phone) || (this.state.phone === "" || this.state.phone === "/"))) {
                if(!this.props.checkNumber(this.state.phone)) {
                    this.handleUpdateClick();
                }
                else {
                    this.setState({
                        phoneRep: true
                    });
                }
            }
            if(this.state.name === "") {
                this.setState({
                    nameErr : true
                });
            }
            if(isNaN(this.state.phone) || this.state.phone === "") {
                this.setState({
                    phoneErr : true
                });
            }   
        }

        this.handleChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        }
        this.handleDeleteClick = () => {
            let prop = {
                type : "Delete",
                id : this.props.uid
            }
            this.props.updateData(prop);
            this.setState({
                modalState : false,
                name: "/",
                phone : "/",
                nameErr: false,
                phoneErr: false,
                phoneRep: false
            });
        }
        this.handleUpdateClick = () => {
            let prop = {
                type : "Update",
                id : this.props.uid,
                name : this.state.name === "/" ? this.props.name : this.state.name,
                phone : this.state.phone === "/" ? this.props.phone : this.state.phone
            }
            this.props.updateData(prop);
            this.setState({
                modalState : false,
                name: "/",
                phone : "/",
                nameErr: false,
                phoneErr: false,
                phoneRep: false
            });
        }
    }
    componentDidMount() {
        this.setState({
            name : this.props.name,
            phone : this.props.phone
        });
    }
    render() {
        return (
            <>
            <Modal header = "Edit Entry"
                open = {this.state.modalState}>
            <div className = "row">
                <div className = "input-field col s6">
                    <input placeholder = "Name" name = "name" value = {this.state.name !== "/" ? this.state.name : this.props.name} onChange = {this.handleChange} />
                    {this.state.nameErr && <span className = "helper-text red-text" >Please enter a valid Name</span>}
                </div>
                <div className = "input-field col s6">
                    <input placeholder = "Phone" name = "phone" value = {this.state.phone !== "/" ? this.state.phone : this.props.phone} onChange = {this.handleChange} />
                    {this.state.phoneErr && <span className = "helper-text red-text" >Please enter a valid Phone number</span>}
                    {this.state.phoneRep && <span className = "helper-text red-text" >Number already exists in the directory!</span>}
                </div>
            </div>
            <div className = "row">
                <button className = "btn modal-btn" onClick = {this.handleUpdateClick}>Update</button>
                <button className = "btn delete-btn" onClick = {this.handleDeleteClick}>Delete</button>
            </div>
            </Modal>    
            <tr onClick = {() => {this.setState({
                modalState : !this.state.modalState
                });
            return this.state.modalState;
            } } className = 'row-wrapper'>
                <td>{this.props.id+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td><i class="fas fa-pencil-alt" aria-hidden="true"></i></td>
            </tr>
            </>
        );
    }
}

export default Lists;