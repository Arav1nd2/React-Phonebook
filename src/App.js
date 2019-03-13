import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Forms from './components/Forms';
import Lists from './components/List';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : "",
      items: [],
      searchRes : []
    }
    this.handleSearch = (e) => {
      e.preventDefault();
      this.setState({
        search: e.target.value
      });
    }
    this.handleAdd = (data) => {
        let newItems = this.state.items;
        newItems.push(data);
        this.setState({
          items : newItems
        });
        localStorage.setItem('phonebook',JSON.stringify(newItems));
    }
    this.checkNumber = (num) => {
      let {items} = this.state
      for(var i=0;i<items.length;i++) {
        if(items[i].phone === num) {
          return true;
        }
      }
      return false;
    }
    this.updateData = (prop) => {
      let data = this.state.items;
      if(prop.type === "Delete") {
          data = data.filter((item) => (item.id !== prop.id));
      }else if(prop.type === "Update") {
        data.forEach((item) => {
          if(item.id === prop.id) {
            item.name = prop.name;
            item.phone = prop.phone
          }
        })
      }
      this.setState({
        items : data
      });
      localStorage.setItem('phonebook',JSON.stringify(data));
  }
  }
  componentDidMount() {
    let data = localStorage.getItem('phonebook');
    if(data) {
      this.setState({
        items : JSON.parse(data)
      });
    }
  }
  render() {
    let data = this.state.items;
    let jsx = [];
    data.forEach((item , id) => {
      let str =(item.name + " " + item.phone).toLowerCase();
          if(str.indexOf((this.state.search.toLowerCase())) !== -1) {
            jsx.push(           
                <Lists id = {id} name = {item.name} phone = {item.phone} uid = {item.id} updateData = {this.updateData} key = {item.id}/>
            );      
          }
    }); 
    return (
      <div>
          <NavBar/>
          <br/><br/>
          <div className = "container">
                <Forms search = {this.state.search} handleSearch = {this.handleSearch} handleNewPhone = {this.handleAdd} checkNumber = {this.checkNumber}/>
                  <table >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jsx}
                    </tbody>
                  </table>
            <br/><br/>
            <p className = "grey-text">You have {jsx.length} contact(s).</p>
          </div>
      </div>
    );
  }
}

export default App;
