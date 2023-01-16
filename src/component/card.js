import './asset/card.css';
import Illustration from '../img/illustration-hero.svg';
import Title from './title';
import Info from './card-info';
import Proceed from './proceed';
import Cancel from './cancel-btn';

function Card(){
    return(
        <div class="card">
            <div class="top">
                <img src={Illustration} width="400px"/>
            </div>

            <div class="bottom">
                <Title/>
                <Info/>
                <Proceed/>
                <Cancel/>
            </div>
        </div>
    );
}

export default Card;