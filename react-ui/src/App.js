import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubUserComp from './GithubUserComp';

/*let userData =[
          {
            avatar_url: "https://avatars1.githubusercontent.com/u/717947?v=4",
            company:'Facebook',
            login:'sundar'
          },
          {
            avatar_url: "https://avatars0.githubusercontent.com/u/1592?v=4",
            company:'Facebook',
            login:'ganesh'
          },
          {
            avatar_url: "https://avatars1.githubusercontent.com/u/717947?v=4",
            company:'Facebook',
            login:'raja'
          }
        ]*/

const UserDisplay =(props)=>{
  return(
     <div>
      <img width={100} height={30} src={props.avatar_url} alt="userName"></img>
      <div> {props.login}</div>
     </div>
  );
};

const UsersDisplayComp = (props)=>{
     return(
        <div>
          {props.dataList.map(data=> <UserDisplay {...data}/>)}
        </div>
     );
};

class App extends Component {
  constructor(){
    super();
    this.state={dataList:[]};
  }; 
  addNewUser = (userInfo)=>{
     this.setState(prevState=>({
          dataList:prevState.dataList.concat(userInfo)
     }));
  };
  restFormComp =(inputfield)=>{
    inputfield.value='';
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
             React with Github
        </p>
        <GithubUserComp OnSubmit={this.addNewUser} OnReset={this.restFormComp}/>
        <UsersDisplayComp dataList={this.state.dataList}/>
      </div>
    );
  }
}

export default App;


