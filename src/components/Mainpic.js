import image from '../image-equilibrium.jpg';
import MainCSS from './Mainpic.module.css';


function Picture() {
    return (
        <div className='name'>
        <img src={image} className={MainCSS.mainpic} alt="surati"/>
        </div>
    )
  };


export default Picture;