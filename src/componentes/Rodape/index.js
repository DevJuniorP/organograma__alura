import './rodape.css'

const Rodape = () => {
    return(
        <div>
            <footer className='footer'>
                <section>
                    <ul>
                        <li>
                            <a href="facebook.com" target='_blank'>
                                <img src="/imagens/instagram.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                </section>
                <section>
                    <img src="/imagens/logo.png" alt="" />
                </section>
                <p>
                    Desenvolvido por Alura
                </p>
            </footer>
        </div>
    )
}

export default Rodape;