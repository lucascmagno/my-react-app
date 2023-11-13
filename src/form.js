import './form.css';

function form(){
    return(
        <section>
            <form className='form'>
                <h2 className='h2-form'>Formulário de Cadastro</h2>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input className='form__input' id="name" type="text" />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input className='form__input' id="email" type="email" />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input className='form__input' id="password" type="password" />
                </div>

                <div>
                    <label htmlFor="passwordConfirm">Confirmar Senha:</label>
                    <input className='form__input' id="passwordConfirm" type="password" />
                </div>

                <div>
                    <label htmlFor="date">Data de Nascimento:</label>
                    <input className='form__input' id="date" type="date" />
                </div>


                <div>
                    <label className='generoLabel' htmlFor="sexo">Sexo:</label>
                    <div className="genero">
                        <label htmlFor="feminino">Feminino</label>
                        <input className='form__input' id="feminino" type="radio" />
                        <label htmlFor="masculino">Masculino</label>
                        <input className='form__input' id="masculino" type="radio" />
                        <label htmlFor="outro">Outro</label>
                        <input className='form__input' id="outro" type="radio" />
                    </div>
                </div>

                <button className='form__button' type="submit">Submit</button>
                            
            </form>
        </section>
    );
}
export default form;