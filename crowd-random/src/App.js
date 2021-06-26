import './App.css';
import ParticipantList from './participants-list/participants-list';
import {Component} from "react";

class App extends Component {
    state = {
        participants: [
            {name: "Pinco", surname:"palino" , numberOfSelections: 0},
            {name: "Pinco1", surname:"palino1", numberOfSelections: 0},
            {name: "Pinco2", surname:"palino2",numberOfSelections: 0}
        ],
        chosenIndex : undefined
    }

    chooseNext = () => {

        const nextIndex =  Math.floor(Math.random() * 3);


    }

    render() {
        return (
            <div className="App">
                <ParticipantList participants={this.state.participants} chosenIndex={this.state.chosenIndex}/>
                <button onClick={this.chooseNext}> Choose next</button>
            </div>
        );
    }
}

export default App;
