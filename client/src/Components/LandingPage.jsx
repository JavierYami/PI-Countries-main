import {Link} from 'react-router-dom'
export default function LandingPage (props) {
    return (
        <div>
            <img src='https://cdn.shopify.com/s/files/1/0330/3129/1016/products/FORWEBWorldMap_lines_cool_200x115cmcopy.jpg?v=1635401202' alt="Globe" />
            <h1>Countries</h1>
            <Link to='homepage'><h4>Explore the world</h4></Link>
        </div>

    )
}