

// !!! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

//Jquery up and running
$(document).ready(()=>{
  
})


//React up and running

const drumPadArr = [
    {
        id:"Q",
        keyCode: 81,
        name:"Heater-1",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        id:"W",
        keyCode: 87,
        name:"Heater-2",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        id:"E",
        keyCode: 69,
        name:"Heater-3",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        id:"A",
        keyCode: 65,
        name:"Heater-4",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        id:"S",
        keyCode: 83,
        name:"Clap",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        id:"D",
        keyCode: 68,
        name:"Open-HH",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        id:"Z",
        keyCode: 90,
        name:"Kick-n'-Hat",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        id:"X",
        keyCode: 88,
        name:"Kick",
        source:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        id:"C",
        keyCode: 67,
        name:"Closed-HH",
        source:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    },
]

//display component
const DisplayComponent = (props) =>{
  return (
    <div id="display" class="col">
      <h2 class="">{props.audioClipName}</h2>
    </div>
  )
};


//DrumPad Component
class DrumPadComponent extends React.Component {
  constructor(props){
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playAudio();
    }
  }

  playAudio(){
    const sound = document.getElementById(this.props.id); //grabs onto the audio element and stores it in sound
    sound.play();
    this.props.updateDisplay(this.props.name.replace(/-/g, ' '));

  }

  render(){
    return(
      <button id={this.props.name} className="drum-pad" onClick={this.playAudio}> 
        <p>{this.props.id}</p>
        <audio id={this.props.id} src={this.props.source} className="clip"></audio>
      </button>
    )
  }
}

//drumPad container component
const DrumPadContainerComponent = (props) =>{
    const drumPadList = props.item.map((item)=>(
      <DrumPadComponent 
        id={item.id} 
        name={item.name} 
        source={item.source} 
        keyCode={item.keyCode}
        updateDisplay={props.updateDisplay} /> //for every element in array, create a drumPad and store passing props id, name and source to the component.
    )
    )
    return (
        <div>{drumPadList}</div> //div is necessary because ele tranforms to multiple elements and multiple elements must be wrapped in one to be returned in JSX
    )
}

//story 4

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      display: 'click a button'
    }

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(name){
    this.setState({
      display: name
    })
  }
  
  render(){
    return(
      <div id="drum-machine" >
        <DisplayComponent audioClipName={this.state.display}/>
        <DrumPadContainerComponent item={drumPadArr} updateDisplay={this.updateDisplay}/>
      </div>
    ) 
  }
}

//react-redux

const mapStateToProps = (state)=>({
  value: state //value is a prop of app in react now, while state is a string state from redux
});

const mapDispatchToProps = (dispatch)=>({
  update: (newtext)=>{
    dispatch(update(newtext)); //update is a prop of app in react, dispatch is from redux, newtext is the 
  }
});

const Provider = ReactRedux.Provider;//connects react to store
const connect = ReactRedux.connect; //connects state and dispatch of store to react app props

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App) //app now has props that include value-connecting redux state, and update-connecting redux action creator, update, which are all just js.

class AppWrapper extends React.Component {
  
  render() {
      return (
        <Provider store={store}>
          <ConnectedComponent/>
        </Provider>
      );
    }

};

ReactDOM.render(<App/>, document.querySelector('#root'));


//style, implement redux and react redux, make it do a little more like fast response?