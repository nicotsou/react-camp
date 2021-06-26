import './App.css';
import ParticipantList from './participants-list/participants-list';
import {Component} from "react";

class App extends Component {
    state = {
        participants: [
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0},
            {name: "Pinco", surname: "palino", numberOfSelection: 0}
        ],
        chosenIndex: undefined
    }

    chooseNext = () => {
        let total = this.state.participants.filter((el, index) => index != this.state.chosenIndex).map(el => 1.0 / (1.0 + el.numberOfSelection)).reduce((a, b) => a + b, 0);
        let rnd = Math.random() * total;
        let i = 0;
        for (; i < this.state.participants.length; i++) {
            if (this.state.chosenIndex != i) {
                rnd -= 1.0 / (1.0 + this.state.participants[i].numberOfSelection);
                if (rnd <= 0) {
                    return i;
                }
            }
        }
        console.log("nooooo")
        return i;
    }

}

export default App;
