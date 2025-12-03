import style from "./Spacing.module.css";

function Spacing() {
    return (
        <div className={style.gridContainer}>
            <h1><span className={style.yellowText}>Explore</span> Sandbox</h1>
            <p className={style.shortDescription}>Sandbox games give the player a high degree of freedom in setting goals exploring, and manipulating the environment, without rigid, linear storytelling.</p>
        </div>
    )
}   
export default Spacing;