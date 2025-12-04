import style from "./Images.module.css"

function Images({img1,img2,img3,onClick,id}){
    return(
        <div className={style.cont}>
            <p id={id}></p>
            <div className={style.buttons}><button value="dont" onClick={onClick} >Don't Starve</button><button value="terr" onClick={onClick} >Terraria</button><button value="mine" onClick={onClick}>Minecraft</button></div>
            <div className={style.images}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            
        </div>
    )
}

export default Images;