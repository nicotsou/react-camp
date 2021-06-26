import "./App.css";
import ParticipantList from "./participants-list/participants-list";
import { Component } from "react";

class App extends Component {
  state = {
    participants: [
      { name: "Pinco", surname: "palino", wasSelected: false, id: 1 },
      { name: "Pinco1", surname: "palino1", wasSelected: false, id: 2 },
      { name: "Pinco2", surname: "palino2", wasSelected: false, id: 3 },
    ],
    chosenIndex: undefined,
  };

  chooseNext = () => {
    const nextId = this.getRandomParticipantId();
    const nextIndex = this.state.participants.findIndex(p => p.id === nextId);

    const updatedParticipants = this.state.participants.map((p) => {
      if(p.id !== nextId) {
        return p;
      }
      return {
        ...p,
        wasSelected: true,
      }
    });
    
    this.setState({ chosenIndex: nextIndex, participants: updatedParticipants});
  };

  getRandomParticipantId = () => {
    let partipantsNotYetChosen = this.state.participants.filter(p => p.wasSelected === false);
    if (partipantsNotYetChosen.length===0) {
      partipantsNotYetChosen = this.state.participants;
    }
    const index = Math.floor(Math.random() * partipantsNotYetChosen.length);
    return partipantsNotYetChosen[index].id;
  };

  onFinish = () => {
    this.setState({ chosenIndex: undefined });
  };

  render() {
    return (
      <div className="App">
        <ParticipantList
          participants={this.state.participants}
          chosenIndex={this.state.chosenIndex}
        />
        <button onClick={this.chooseNext}> Choose next</button>
        <button onClick={this.onFinish}>Finish</button>
      </div>
    );
  }
}

export default App;
