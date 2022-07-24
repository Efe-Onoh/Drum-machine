

//React up and running

const HeaderComponent = (props) =>{
  return (
    <header id="header" class="row g-0 justify-content-center">
      <h1 id="title" class="col-4 p-3 text-center ">Markdown Previewer</h1>
    </header>
  )
};
//editor child component 

const EditorComponent = (props) =>{
  return (
    <div  class="col">
      <h2 class="">Editor</h2>
      <textarea id="editor" class="w-100 h-50"  onChange={props.update}>{props.content}</textarea>
      {//updateEditor fxn is passed as a prop called update to child EditorComponent via parent App.
      }
    </div>
  )
};

//content is passed as props to PreviewComponent from the app which gets it from the redux state after connection is made
const PreviewComponent = (props)=>{
  return (
    <div className="col">
      <h2 className="">Preview</h2>
      <div  id="preview" className="p-3" dangerouslySetInnerHTML={{__html: marked(props.content)}}></div>
    </div>
  )
};

class App extends React.Component{
  constructor(props){
    super(props);

  }
  
  render(){
    return(
      <div id="drum-machine" className="row m-3">
        <HeaderComponent/>
        <EditorComponent content={this.props.value} update={this.updateEditor}/>
        <PreviewComponent content={this.props.value}/>
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

ReactDOM.render(<AppWrapper/>, document.querySelector('#root'));