import React,{Component} from 'react' ;
import axios from 'axios';

export default class GithubUserComp extends Component{
    constructor(){
        super();
        this.state={userName:''};
    };
    callOnSubmit=(event)=>{
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`).then(response=>{
             this.props.OnSubmit(response.data)
        });
        this.inputField.value='';      
    };
    render(){
        return(
            <div style={{margin:'10px'}} >
            <form onSubmit={this.callOnSubmit}>
                <input type='text'  style={{margin:'10px'}} ref={input=>this.inputField=input} onChange={(event)=>{this.setState({userName:event.target.value})}} placeholder='enter name'/>
                <button type='submit' name='submit' text='submit'>Submit</button>
            </form>
            </div>
        );
    }
}

