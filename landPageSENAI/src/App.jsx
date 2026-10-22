import './App.css'
import logosenai from '../src/assets/senailogo.png'
import bannersenai from '../src/assets/senaibanner.png'
import users from '../src/assets/users.png'
import ico02 from '../src/assets/ico-02.png'
import ico03 from '../src/assets/ico-03.png'
import ico04 from '../src/assets/ico-04.png'

function App() {

  return (
    <>
      <header>
        <div className='empresas'>
          <span>FIESC</span> <span>CIESC</span> <span>SESI</span> <span>SENAI</span> <span>IEL</span>
        </div>
        <div className='senaiBotoes'>
          <img className='logosenai' src={logosenai} alt="logo do senai"/>
          <div>
            <p><span>Institucional</span> <span>Para você</span> <span>Para empresas</span> <span>Já sou aluno</span> <span>Transparência</span></p>
          </div>
        </div>
      </header>

      <about>
        <img className='bannersenai' src={bannersenai} alt="banner do senai"/>

        <h1>A instituição que tem o <span>DNA da indústria</span> </h1>
        <p>Referência no país inteiro, o SENAI trabalha todos os dias para estimular a inovação e a competitividade da indústria, por meio de serviços de educação, consultorias, pesquisas aplicadas e serviços tecnológicos.</p>

        <div className='sessaoCaixas'>
          <div className='caixa'>
            <img src={users}/>
            <p>Mais de <span>200.000</span> alunos formados.</p>
          </div>
          <div className='caixa'>
            <img src={ico02}/>
            <p><span>Maior complexto de educação</span> profissional da América Latina.</p>
          </div>
          <div className='caixa'>
            <img src={ico03}/>
            <p>Referência mundial em <span>qualidade de ensino</span>.</p>
          </div>
          <div className='caixa'>
            <img src={ico04}/>
            <p>Alunos SENAI são <span>preferência no mercado de trabalho</span>.</p>
          </div>
        </div>
      </about>

      <hero>
        <></>
      </hero>
    </>
  )
}

export default App
