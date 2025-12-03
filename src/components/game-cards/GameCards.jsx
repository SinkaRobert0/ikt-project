import { useState } from "react";
import style from "./../game-cards/GameCards.module.css";

function GameCards({ image, title, description, tag1, tag2, tag3, tag4, longDesc, cardID }) {
const [open,setOpen] = useState(false);
  function handleClick(){
    setOpen(!open)
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.contentContainer}>
        <img src={image} alt="" className={style.gameCardImage} />
        <div className={style.textContainer}>
        <p className={style.gameTitle}>{title}</p>
        <p className={style.gameDescription}>{description}</p>
        </div>
        <div className={style.tagContainer}>
          <p className={style.tags}>{tag1}</p>
          <p className={style.tags}>{tag2}</p>
          <p className={style.tags}>{tag3}</p>
          <p className={style.tags}>{tag4}</p>
        </div>
      </div>
      <p className={style.learnMore} onClick={handleClick}>{!open ? <p>Click to open</p> : <p>Click to close</p> }</p>
      {open && <div>
        <p className={style.gameDescription}>{longDesc}</p>
      </div>}
    </div>
  );
}
export default GameCards;
