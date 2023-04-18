import style from '../About/About.module.css'
const About = () => {

    return (
        <div className={style.mainContainer}>
            <p>Hi, i'm Javier, a 22-year-old computer science student from Mexico, currently seeking opportunities to become a full stack developer. I'm currently enrolled in the Soy Henry bootcamp, where I've been learning and applying technologies like React, Redux, React Router DOM, Express, Sequelize, Node.js, PostgreSQL, JavaScript, and CSS to build full-fledged web applications. I'm also pursuing my bachelor's degree in computer science online at the National Autonomous University of Mexico (UNAM), which has allowed me to improve my skills and knowledge in this constantly evolving field. I'm passionate about software development and solving complex problems, and I'm excited about the opportunity to put my skills into practice in a professional environment.</p>
            <p>I developed this full-stack single-page application using the following technologies:"</p>
            <div className={style.imgContainer}>
                <img src="https://res.cloudinary.com/dvldakcin/image/upload/v1681749767/css-3_wbnlcn.svg" alt="postgres" />
                <img src="https://res.cloudinary.com/dvldakcin/image/upload/v1681749745/git_bsapgo.svg" alt="git" />
                <img src="https://res.cloudinary.com/dvldakcin/image/upload/v1681749763/nodejs-icon_bsjqbu.svg" alt="nodejs" />
                <img src="https://res.cloudinary.com/dvldakcin/image/upload/v1681749760/express-109_k0itwu.svg" alt="express" />
            </div>
        </div>
    )
}

export default About;
