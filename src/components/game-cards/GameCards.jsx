import style from "./../game-cards/GameCards.module.css";
function GameCards({ image, title, description, tag1, tag2, tag3, tag4 }) {
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
      <p className={style.learnMore}>Learn More</p>
    </div>
  );
}
export default GameCards;
