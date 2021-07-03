import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";

const DetailsScreen = () => {
  const [details, setDetails] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,
      language: "en-US",
    });
    fetch(`https://api.themoviedb.org/3/tv/${id}?${params}`)
      .then((data) => data.json())
      .then((data) => {
        const { genres, name, overview } = data;
        setDetails({ genres, name, overview });
      })
      .catch((error) => console.error(error));
  }, [id, setDetails]);

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Details</Breadcrumb.Section>
      </Breadcrumb>
      <ul>
        <li>{details.name}</li>
        <li>{details.genres}</li>
        <li>{details.overview}</li>
      </ul>
    </div>
  );
};

export default DetailsScreen;
