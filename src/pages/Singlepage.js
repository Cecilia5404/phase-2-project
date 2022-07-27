import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Context
import ShowsContext from "../context/shows/showsContext";

// Components
import Loader from "../components/Loader";

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

  const params = useParams()
  useEffect(() => {
    getSingleShow(params.id);
    console.log(params);

    // eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === ".") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow.image
                ? singleShow.image.medium
                : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/review-race3-main.jpeg?8pWF0XJmDoXuZ.n9BxLHYdhduykmdi_8&size=770:433"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Singlepage;