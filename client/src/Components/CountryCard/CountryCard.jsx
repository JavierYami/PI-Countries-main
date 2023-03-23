
const CountryCard = ({id, name, img, continent}) => {
    return (
        <div>
            <img src={img} alt={name} />
            <h1>{name}</h1>
            <h2>{continent}</h2>
        </div>
    )
}
export default CountryCard;