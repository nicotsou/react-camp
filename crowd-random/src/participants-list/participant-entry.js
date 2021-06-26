const ParticipantEntry = (props) => {
    const {name, surname, isChosen, key} = props;

    const style = {
        color: isChosen ? 'red' : 'black'
    };

    return (
        <span className="participant-entry" style={style} key={key}>
            {name} {surname}
        </span>
    )
}

export default ParticipantEntry;