import React from "react";
import './App.css';
import { CardList } from "./components/card-list/card-list.components";
import { Search } from "./components/search-box/search-box.components";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
    .then(users => this.setState({monsters : users}));
    console.log("App " , this.state)
  }

render(){
  const { monsters, searchField } = this.state;
  const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className = "App">
        <h1>Monsters App</h1>
        <Search placeholder='search monsters' handleChange={e => this.setState({'searchField' : e.target.value})}></Search>
        <CardList monsters={filteredMonster}>
        </CardList>
          
      </div>
    );
  }
}

export default App;
