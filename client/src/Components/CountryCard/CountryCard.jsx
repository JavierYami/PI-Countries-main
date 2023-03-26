import { Link } from "react-router-dom";

const CountryCard = ({id, name, img, continent}) => {
    return (
        <div>
            <Link to={`/homepage/${id}`}>
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <h2>{continent}</h2>
            </Link>
        </div>
        
    )
}
export default CountryCard;