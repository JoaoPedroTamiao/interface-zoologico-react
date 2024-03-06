import './CardAnimal.css'
import imgNotFound from '../../assets/img-not-found.png';

function CardAnimal() {

    return (
        <>

            <div className='ctn-cardanimal'>

                <img src={imgNotFound} />
                <p>Lorem Ipsun</p>
            </div>

        </>
    );
}

export default CardAnimal;