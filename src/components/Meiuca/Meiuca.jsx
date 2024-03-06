import './Meiuca.css'
import animaisCover from '../../assets/animais-cover.png';


function Meiuca() {

    return (
        <>
        <div className='tudo'>
            <div className='esquerda'>
                <h1 className='tonin'>Bem-Vindo</h1>
                <p>Seja bem-vindo ao zoológico.</p>
                <p>Aqui você pode conhecer melhor</p>
                <p>Nossa estrutura e nossas atrações.</p>
                
            </div>


            <div className='direita'>
                <img className = "batatonese" src={animaisCover} />
            </div>

        </div>

            <h1 className='tonin'>Atrações</h1>

        </>

    );
}

export default Meiuca;