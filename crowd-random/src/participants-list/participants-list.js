import ParticipantEntry from "./participant-entry";
import {Component} from "react";

class ParticipantList extends Component {

    render() {
        let {participants, chosenIndex} = this.props;
        return (
            <> {
                participants.map((participant, index) => (
                        <ParticipantEntry name={participant.name} surname={participant.surname}
                                          isChosen={chosenIndex === index} key={""}/>
                    )
                )
            }
            </>
        )
    }
}

export default ParticipantList;