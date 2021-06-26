import './App.css';
import ParticipantList from './participants-list/participants-list';
import {Component} from "react";

class App extends Component {
    state = {
        participants: [
            {name: "Pinco", surname:"palino" , numberOfSelections: 0, id: 1},
            {name: "Pinco1", surname:"palino1", numberOfSelections: 0, id: 2},
            {name: "Pinco2", surname:"palino2",numberOfSelections: 0, id: 3}
        ],
        chosenIndex : undefined
    }

    chooseNext = () => {

      let nextIndex = this.getRandom();
      while (nextIndex === this.state.chosenIndex) {
        nextIndex = this.getRandom();
      }  

      this.setState({chosenIndex: nextIndex});
    }    

    getRandom = () => {
       return Math.floor(Math.random() * this.state.participants.length);
    }

    onFinish = () => {
      this.setState({chosenIndex : undefined})
    }

    render() {
        return (
            <div className="App">
                <ParticipantList participants={this.state.participants} chosenIndex={this.state.chosenIndex}/>
                <button onClick={this.chooseNext}> Choose next</button>
                <button onClick={this.onFinish}>Finish</button>
            </div>
        );
    }
}

export default App;
