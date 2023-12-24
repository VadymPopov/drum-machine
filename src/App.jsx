import './App.css'
import { Component } from 'react';
import { keys } from './keys';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      text: "",
    }
   this.handleKeyPress = this.handleKeyPress.bind(this); 
  }
  
  handleKeyPress(e){
    this.play(`${e.key.toUpperCase()}`);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress)
  }
  
  play(e){
    const audio = document.getElementById(e);
    if(audio) {
      audio.play();
      this.setState({
        text: audio.innerHTML,
      })
    }   
  }
  
render() {
    return (
    <div className='wrapper'>
      <div id="drum-machine">
        {keys.map(({key,id,url})=>
        <button key={key}  id={id} className='drum-pad' onClick={this.play.bind(this,key)}>
          {key}<audio className="clip" id={key} src={url}>{id}</audio>
        </button>)
        }
      </div>
      <p id="display">{this.state.text}</p>
      <div className="dev">by <a href="https://github.com/VadymPopov/drum-machine">Vadym Popov</a></div>
    </div>
    )
  }
};

export default App;
