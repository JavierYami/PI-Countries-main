import {Link} from 'react-router-dom'
import style from './LandingPage.module.css'

export default function LandingPage (props) {
    return (
        <div className={style.container}>
            <h1 className={style.font}>Countries</h1>
            <Link to='homepage' className={style.buttonLink}><button className={style.button}>Explore the world</button></Link>
        </div>

    )
}