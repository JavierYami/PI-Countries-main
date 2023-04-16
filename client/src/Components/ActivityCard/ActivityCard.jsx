import style from '../ActivityCard/ActivityCard.module.css'

const ActivityCard = ({name, difficulty, season, duration}) => {

    name = name.toUpperCase();
    
    return(

    <div className={style.mainContainer}>
        <h2 className={style.name}>{name}</h2>
        <h2 className={style.season}>Season: {season}</h2>
        <h2 className={style.duration}>Duration: {duration} hours</h2>
    </div>
    
    )
}

export default ActivityCard;