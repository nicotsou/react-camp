import './App.css';
import ParticipantList from './participants-list/participants-list';
import {Component} from "react";

class App extends Component {
    state = {
        participants: [
            {name: "Pinco", surname:"palino"}
        ],
        chosenIndex : undefined
    }

    render() {
        return (
            <div className="App">
                <ParticipantList participants={this.state.participants} chosenIndex={this.state.chosenIndex}/>
            </div>
        );
    }
}

export default App;
