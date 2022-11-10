import ethpic from '../icon-ethereum.svg';
import clock from '../icon-clock.svg';
import EthCSS from './Eth.module.css';

function Eth(){
    return (
        <div className={EthCSS.flex1}>
            <div className={EthCSS.flex2}>
                <img src={ethpic} alt='eth'className={EthCSS.pad}/>
                <p>0.041 ETH</p>
            </div>
            <div className={EthCSS.col}>
                <img src={clock} alt='clock' className={EthCSS.pad}/>
                <p>3 days left</p>
            </div>
        </div>
    )
};

export default Eth;