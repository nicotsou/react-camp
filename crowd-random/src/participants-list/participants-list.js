import ParticipantEntry from "./participant-entry";
import {Component} from "react";

class ParticipantList extends Component {

    render() {
        let {participants, chosenIndex} = this.props;
        return (            
            <ul>
            {
                participants.map((participant, index) => (
                    <li key={participant.id}>
                        <ParticipantEntry name={participant.name} surname={participant.surname}
                                          isChosen={chosenIndex === index} />
                    </li>
                    )
                   
                )            
            }
            </ul>
        )
    }
}

export default ParticipantList;