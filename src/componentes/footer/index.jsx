import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="www.linkedin.com/in/américa-ramírez-mauricio">
                <img src="/img/facebook.png" alt="Facebook"></img>
            </a>
            <a href="www.linkedin.com/in/américa-ramírez-mauricio">
                <img src="/img/twitter.png" alt="Twitter"></img>
            </a>
            <a href="www.linkedin.com/in/américa-ramírez-mauricio">
                <img src="/img/instagram.png" alt="instagram"></img>
            </a>
        </div>
        <img src="/img/Logo.png" alt="Ame" />
        <strong>Desarrollado por América Ramírez</strong>
    </footer>
}

export default Footer