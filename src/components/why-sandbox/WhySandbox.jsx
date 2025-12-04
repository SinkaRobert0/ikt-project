import style from "./../why-sandbox/WhySandbox.module.css";
import diamond from "./../../assets/diamond.svg";
import hammer from "./../../assets/hammer.svg";
import group from "./../../assets/group.svg";
import star from "./../../assets/star.svg";
function WhySandbox({id}) {
    return (
        <div id={id}className={style.mainContainer}>
            <div className={style.whySandbox}>
            <p className={style.whySandboxTitle}>Why <span className={style.blueText}>Sandbox Games?</span></p>
            <p className={style.whySandboxDesc}>These games capture something primal – the thrill of discovery, the satisfaction of creation, and the joy of exploration.</p>
            </div>
            <div className={style.itemsContainer}>
                <div className={style.itemDiv}>
                    <img src={diamond} alt="diamond_image" className={style.image}/>
                    <p className={style.title}>Endless Discovery</p>
                    <p className={style.description}>Every world is unique. Procedurally generated environments mean no two mining expeditions are ever the same.</p>
                </div>
                <div className={style.itemDiv}>
                    <img src={hammer} alt="hammer_image" className={style.image}/>
                    <p className={style.title}>Satisfying Progression</p>
                    <p className={style.description}>Start with basic tools and work your way up to legendary equipment. The journey from pickaxe to power drill is incredibly rewarding.</p>
                </div>
                <div className={style.itemDiv}>
                    <img src={group} alt="group_image" className={style.image}/>
                    <p className={style.title}>Community & Co-op</p>
                    <p className={style.description}>Mine with friends or join thriving communities. Share discoveries, trade resources, and tackle challenges together.</p>
                </div>
                <div className={style.itemDiv}>
                    <img src={star} alt="star_image" className={style.image}/>
                    <p className={style.title}>Creative Freedom</p>
                    <p className={style.description}>Build underground bases, create elaborate mines, or reshape entire worlds. Your imagination is the only limit.</p>
                </div>
            </div>
        </div>
    )
}

export default WhySandbox;