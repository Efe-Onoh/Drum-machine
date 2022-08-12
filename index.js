

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
        priName:"Heater-1",
        secName: "Chord-1",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
        id:"W",
        keyCode: 87,
        priName:"Heater-2",
        secName: "Chord-2",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
        id:"E",
        keyCode: 69,
        priName:"Heater-3",
        secName: "Chord-3",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
        id:"A",
        keyCode: 65,
        priName:"Heater-4",
        secName: "Shaker",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
        id:"S",
        keyCode: 83,
        priName:"Clap",
        secName: "Open-HH",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
        id:"D",
        keyCode: 68,
        priName:"Open-HH",
        secName: "Closed-HH",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
        id:"Z",
        keyCode: 90,
        priName:"Kick-n'-Hat",
        secName: "Punchy-Kick",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
        id:"X",
        keyCode: 88,
        priName:"Kick",
        secName: "Side-Stick",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
        id:"C",
        keyCode: 67,
        priName:"Closed-HH",
        secName: "Snare",
        priSource:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        secSource:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
]

//power indicator component
// const powerIndicatorComponent = (props) =>{
//   return (
//     <div id="power-indicator">
//       <h3>Power</h3>
//       <input type="radio" id="power-LED" name="power-led" value="power">
//       <label for="power-LED">{props.power}</label><br>
//     </div>
//   )
// };

//power indicator component
const PowerIndicatorComponent = (props) =>{

  const powerOn = {
    width: '7px',
    height: '7px',
    border: '2px #444 solid',
    borderRadius: '50%',
    background: 'lime'
  }

  const powerOff = {
    width: '7px',
    height: '7px',
    border: '2px #444 solid',
    borderRadius: '50%',
    background: '#f40'
  }

  const powerDefault = {
    width: '7px',
    height: '7px',
    border: '2px #444 solid',
    borderRadius: '50%',
    background: '#222'
  }

  return (
    <div id="power-indicator">
      <h5 class="">Power</h5>
      <div id="group-power-LED">
        <div id="power-on-LED" className="power-LED" style={props.power ? powerOn : powerDefault}></div>
        <label for="power-LED">on</label>
        <div id="power-off-LED" className="power-LED" style={props.power ? powerDefault : powerOff}></div>
        <label for="power-LED">off</label><br/>
      </div>

      <button className="button-class" id="toggle-power-button" onClick={props.togglePower}>Power</button>
      
    </div>
  )
};

//Bank Component
const BankComponent = (props) =>{
  return (
    <div id="bank-component">
      <div id="bank-display">
        <h5>{props.bank}</h5>
      </div>
      <button className="button-class" id="toggle-bank-button" onClick={props.toggleBank}>Bank</button>
    </div>
  )
}

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
      switch (e.keyCode) {
        case 32:
          this.props.toggleBank();
          break;
        case 13:
          this.props.togglePower();
          break;
        default:
          if (e.keyCode === this.props.keyCode) {
            this.playAudio();
          }
          break;
      }
  }


  playAudio(){
    
    if(this.props.power){
      const sound = document.getElementById(this.props.id); //grabs onto the audio element and stores it in sound
      sound.currentTime = 0;
      sound.play();

      if(this.props.bank === "Piano-kit"){
        this.props.updateDisplay(this.props.secName.replace(/-/g, ' '));
      }
      else{
        this.props.updateDisplay(this.props.priName.replace(/-/g, ' '));
      }
      
    }    

  }

  render(){
    return(
      <div id="drum-pad-gradient">
        <button id={(this.props.bank === "Piano-kit")? this.props.secName : this.props.priName} className="drum-pad button-class" onClick={this.playAudio}> 
        <p>{this.props.id}</p>
        {(this.props.bank === "Piano-kit") ? <audio id={this.props.id} src={this.props.secSource} className="clip"></audio> : <audio id={this.props.id} src={this.props.priSource} className="clip"></audio>} 
        </button>
      </div>
      
    )
  }
}

//drumPad container component
const DrumPadContainerComponent = (props) =>{
    const drumPadList = props.item.map((item)=>(
      <DrumPadComponent 
        id={item.id}
        secId={item.id+props.bank}
        priName={item.priName} 
        secName={item.secName}
        priSource={item.priSource}
        secSource={item.secSource} 
        keyCode={item.keyCode}
        updateDisplay={props.updateDisplay}
        bank={props.bank}
        power={props.power} 
        toggleBank={props.toggleBank}
        togglePower={props.togglePower}/> //for every element in array, create a drumPad and store passing props id, name and priSource to the component.
    )
    )
    return (
        <div id="drum-pad-container">{drumPadList}</div> //div is necessary because ele tranforms to multiple elements and multiple elements must be wrapped in one to be returned in JSX
    )
}

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      power: false,
      bank: "Heater-kit",
      display: "Click a button"
    }

    this.togglePower = this.togglePower.bind(this);
    this.toggleBank = this.toggleBank.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  togglePower(){
    this.setState(state =>({
      power: !state.power
    }))
  }

  toggleBank(){
    this.setState(state =>{
      if(state.power){
        if(state.bank === "Heater-kit"){
          return({
            bank: "Piano-kit",
            display: "Piano-kit"
          })
        }
        else{
          return({
            bank: "Heater-kit",
            display: "Heater-kit"
          })
        }
      }
      
    })

  }

  updateDisplay(name){
    this.setState({
      display: name
    })
  }
  
  render(){
    return(
      <div id="drum-machine" >
        <h3>MP1513-EO</h3>
        <DisplayComponent audioClipName={this.state.display}/>
        <DrumPadContainerComponent item={drumPadArr} togglePower={this.togglePower} toggleBank={this.toggleBank} updateDisplay={this.updateDisplay} bank={this.state.bank} power={this.state.power}/>
        <PowerIndicatorComponent power={this.state.power} togglePower={this.togglePower}/>
        <BankComponent power={this.state.power} toggleBank={this.toggleBank} bank={this.state.bank}/>
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

//implement power key and bank keys
//implement redux and react redux, make it do a little more like fast response?