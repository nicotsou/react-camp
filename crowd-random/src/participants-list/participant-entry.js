const ParticipantEntry = (props) => {
    const { name, surname, isChosen } = props;

    const style = {
        color: isChosen ? 'red' : 'black'
    };

    return (
        <span className="participant-entry" style={style}>
            {name} {surname}
        </span>
    )
}

export default ParticipantEntry;