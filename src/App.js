import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  
  render() {

    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>loading...</div>;
    }
    else {
      return (
        <div className="App" >
          <ul>
            {
              items.map(item => (
                <li key={item.id}>
                  id: {item.id},
                name:{item.name}
                  status:{item.status},
                  species:{item.species}
                  type:{item.type}
                  gender: {item.gender},
                  
                  {/* origin:{item.origin} */}
                </li>
              ))
            };
          </ul>
        </div>
      );
    }
  }
}



export default App;
