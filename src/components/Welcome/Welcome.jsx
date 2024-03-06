import './Welcome.css'
import animaisCover from '../../assets/animais-cover.png';


function Welcome() {

    return (
        <>
            <div className='welcome'>
                <div className='welcome-countainer'>
                    <h1 className='tonin'>Bem-Vindo</h1>
                    <p>Seja bem-vindo ao zoológico.</p>
                    <p>Aqui você pode conhecer melhor</p>
                    <p>Nossa estrutura e nossas atrações.</p>

                </div>


                <div className='direita'>
                    <img className="welcome-image" src={animaisCover} />
                </div>

            </div>

            <h1 className='tonin'>Atrações</h1>

        </>

    );
}

export default Welcome;