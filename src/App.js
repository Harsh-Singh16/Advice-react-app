import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state = {advice: ''};
    componentDidMount(){
        this.fetchAdv();
        console.log("component did mount");
    }
    fetchAdv =()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const advice = response.data.slip.advice;
console.log(advice);
this.setState({advice:advice});
        })
        .catch((error)=>{
console.log(error);
        })
    }

    render(){
        return(
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{this.state.advice}</h1>
                <button className='button' onClick={this.fetchAdv}>
                    <span>Give Advice !!</span>
                </button>
            </div>
        </div>
        );
    }
}
export default App;