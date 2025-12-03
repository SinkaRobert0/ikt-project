import style from "./../header/Header.module.css";
import pick from "/src/assets/pickaxe.svg";


function Header() {
    return (
    <nav className={style.nav}>
        <div className={style.headerLeft}>
            <img src={pick} alt="pickaxe" className={style.pickaxe}/>
            <p className={style.navTitle}>Sandbox <span className={style.yellowText}>Games</span></p>
        </div>
        <div className={style.headerRight}>
            <p>Games</p>
            <p>Why Sandbox?</p>
        </div>
    </nav>
    )
}


export default Header;
