import {
    useParams
} from "react-router-dom";

const DetailsScreen = () => {

    let { id } = useParams();

    return (
        <div>
            Check if it works {id}
        </div>
    )
}

export default DetailsScreen;