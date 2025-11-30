import style from "./../header/Header.module.css";
import pick from "/src/assets/pickaxe.svg";


function Header() {
    return (
    <nav className={style.nav}>
        <div className={style.headerLeft}>
            <img src={pick} alt="pickaxe" className={style.pickaxe}/>
            <p className={style.navTitle}>Bányászós <span className={style.yellowText}>Játékok</span></p>
        </div>
        <div className={style.headerRight}>
            <p>Játékok</p>
            <p>Miért pont bányászás?</p>
            <p>Érdekességek</p>
            <button className={style.playNowButton}>Játssz most!</button>
        </div>
    </nav>
    )
}


export default Header;
