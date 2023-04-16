import style from '../Footer/Footer.module.css'

const Footer = () => {

    return (
        <footer className={style.container}>
         <a href="https://github.com/JavierYami"><img src="https://res.cloudinary.com/dvldakcin/image/upload/v1681611897/Countries/github_uihy1p.png" className={style.footerImg}/></a>
         <a href="https://www.linkedin.com/in/javier-ignacio-rivera-valencia-22b19525a/"><img src="https://res.cloudinary.com/dvldakcin/image/upload/v1681612281/Countries/linkedin_jfyi7s.png" className={style.footerImg}/></a>
        </footer>
    )
}

export default Footer;