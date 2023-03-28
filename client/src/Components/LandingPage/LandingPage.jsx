import {Link} from 'react-router-dom'

import style from './LandingPage.module.css'

export default function LandingPage (props) {
    return (
        <div>
            <h1>Countries</h1>
            <Link to='homepage'><h4>Explore the world</h4></Link>
        </div>

    )
}