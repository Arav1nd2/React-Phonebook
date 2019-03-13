import React, { Component } from 'react';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phNo: "",
            search: ""
        }

        this.handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
        this.handleAdd = (e) => {
            console.log("Phone number added!");
            e.preventDefault();
            // Do something here
            this.setState({
                name: "",
                phNo: ""
            });
        }
    }
    
    render() {
        return (
            <div className = "row">
                <form className = "col s12" onSubmit = {this.handleAdd}>
                    <div className = "row">
                        <div className = "input-field col s5">
                            <input placeholder = "Name" name = "name" onChange = {this.handleChange} value = {this.state.name}/>
                        </div>
                        <div className = "input-field col s5">
                            <input placeholder = "Phone Number" name = "phNo" onChange ={this.handleChange} value = {this.state.phNo}/>
                        </div>
                        <div className = "col s2">
                            <button type = "submit" className = "btn waves-effect waves-orange">Add</button>                    
                        </div>
                    </div>
                </form>
                <form className = "col s12">
                    <div className = "row">
                        <div className = "input-field col s10">
                            <input placeholder = "Search" name = "search" onChange = {this.handleChange} value = {this.state.search}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Forms;