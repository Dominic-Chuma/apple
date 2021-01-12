// import logo from './logo.svg';
// import './App.css';
import React from "react"


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      people:{}
    };
  }

  componentDidMount(){
    fetch("https://api.enye.tech/v1/challenge/records")
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        this.setState({
          people:data
        });
        // console.log(data);
      })
  }
  render(){
    return(
      <div>{this.state.people.records.profiles}</div>
    )
  }
}

export default App;
