import './asset/card-info.css';
import MusicIcon from '../img/icon-music.svg'

function Info(){
    return(
        <div class='card-info'>
            <img src={MusicIcon}/>
            <div className='plan'>
                <h4>Annual Plan</h4>
                <p>$59.99/year</p>
            </div>
            <div className='change'>
                <a href="#">Change</a>
            </div>
        </div>
    );
}

export default Info;

