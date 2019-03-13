import React, { Component } from 'react';
import {Modal} from 'react-materialize';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalState : false,
            name: "/",
            phone : "/"
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
                phone : "/"
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
                phone : "/"
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
                </div>
                <div className = "input-field col s6">
                    <input placeholder = "Phone" name = "phone" value = {this.state.phone !== "/" ? this.state.phone : this.props.phone} onChange = {this.handleChange} />
                </div>
            </div>
            <div className = "row">
                <button className = "btn" onClick = {this.handleUpdateClick}>Update</button>
                <button className = "btn" onClick = {this.handleDeleteClick}>Delete</button>
            </div>
            </Modal>    
            <tr onClick = {() => {this.setState({
                modalState : !this.state.modalState
                });
            return this.state.modalState;
            } }>
                <td>{this.props.id+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>Edit</td>
            </tr>
            </>
        );
    }
}

export default Lists;