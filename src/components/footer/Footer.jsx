import style from "./../footer/Footer.module.css";
import pick from "/src/assets/pickaxe.svg";


function Footer() {
    return (
    <nav className={style.nav}>
        <div className={style.footerLeft}>
            <img src={pick} alt="pickaxe" className={style.pickaxe}/>
            <p className={style.navTitle}>Sandbox <span className={style.yellowText}>Games</span></p>
        </div>
        <div className={style.footerRight}>
            <p>All rights reserved</p>
            <a href="https://www.minecraft.net/en-us/usage-guidelines">Minecraft</a>
            <a href="https://terraria.wiki.gg/hu/wiki/Terraria_Wiki:Szerz%C5%91i_jogok">Terraria</a>
            <a href="https://www.klei.com/games/dont-starve-together">Don't Starve Together</a>
            <p></p>
        </div>
    </nav>
    )
}


export default Footer;
