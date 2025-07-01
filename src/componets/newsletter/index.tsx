import './newsletter.scss'

export default function Newsletter(){
    return (
        <div className='newsletter'>

        <div className='newsletter-container'>
            <div className="newsletter-texts">
                <h2>Inscreva-se na nossa newsletter</h2>
                <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
            </div>
            <div className="newsletter-inputs">
                <div className='inputs'>
                    <input type="text" name="nome" id="nome"  placeholder='Digite seu nome'/>
                    <input type="email" name="email" id="email" placeholder='Digite seu e-mail' />
                    <button>INSCREVER</button>
                </div>
                <div className='newsletter-checkbox'>
                    <input type="checkbox" name="termos" id="termos" />
                    <label htmlFor="termos">Aceito os termos e condições</label>
                </div>
            </div>
        </div>
        </div>
    )
}