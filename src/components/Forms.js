import React, { Component } from 'react';
import uuid from 'uuid';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            nameErr: false,
            phoneErr: false,
            phoneRep: false
        }

        this.handleChange = (e) => {
            this.setState({
                nameErr: false,
                phoneErr: false,
                phoneRep: false,
                [e.target.name]: e.target.value
            });
        }

        this.handleVerify = (e) => {
            e.preventDefault();
            if(this.state.name !== "" && !(isNaN(this.state.phone) || this.state.phone === "")) {
                if(!this.props.checkNumber(this.state.phone)) {
                    this.handleAdd();
                }
                else {
                    this.setState({
                        phoneRep: true
                    });
                }
            }
            if(this.state.name === "" ) {
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
        this.handleAdd = () => {
            this.props.handleNewPhone({id: uuid(), ...this.state});
            this.setState({
                name: "",
                phone: "",
                nameErr: false,
                phoneErr: false,
                phoneRep: false
            });
        }
       
    }
    
    render() {
        return (
            <div className = "row">
                <form className = "col s12" onSubmit = {this.handleVerify}>
                    <div className = "row">
                        <div className = "input-field col s5">
                            <input placeholder = "Name" name = "name" onChange = {this.handleChange} value = {this.state.name}/>
                            {this.state.nameErr && <span className = "helper-text red-text" >Please enter a valid Name</span>}
                        </div>
                        <div className = "input-field col s5">
                            <input placeholder = "Phone Number" name = "phone" onChange ={this.handleChange} value = {this.state.phone}/>
                            {this.state.phoneErr && <span className = "helper-text red-text" >Please enter a valid Phone number</span>}
                            {this.state.phoneRep && <span className = "helper-text red-text" >Number already exists in the directory!</span>}
                        </div>
                        <button type = "submit" className = "btn waves-effect waves-orange">Add</button>    
                    </div>
                </form>
                <form className = "col s12">
                    <div className = "row">
                        <div className = "input-field col s10">
                            <input placeholder = "Search" name = "search" onChange = {this.props.handleSearch} value = {this.props.search}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;