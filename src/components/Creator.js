import Creator from '../image-avatar.png';
import CreatorCSS from './Creator.module.css';


function Credits() {
    return (
        <div>
            <div className={CreatorCSS.line}></div>
            <div className={CreatorCSS.credits}>
                <img src={Creator} className={CreatorCSS.avatar} alt='the creator'/>
                <p className={CreatorCSS.create}>Creation of</p>
                <a href='https://www.google.com' className={CreatorCSS.namelink}>Jules Wyvern</a>
            </div>

        </div>
    )
};


export default Credits;