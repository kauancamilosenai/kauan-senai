import './App.css'
import logosenai from '../src/assets/senailogo.png'
import bannersenai from '../src/assets/senaibanner.png'
import users from '../src/assets/users.png'
import ico02 from '../src/assets/ico-02.png'
import ico03 from '../src/assets/ico-03.png'
import ico04 from '../src/assets/ico-04.png'
import group from '../src/assets/group.png'
import group2 from '../src/assets/group2.png'
import facebook from '../src/assets/faFacebookSquare.png'
import linkedin from '../src/assets/faLinkedin.png'
import instagram from '../src/assets/faInstagram.png'
import youtube from '../src/assets/faYoutube.png'

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
        <p className='texto1'>Referência no país inteiro, o SENAI trabalha todos os dias para estimular a inovação e a competitividade da indústria, por meio de serviços de educação, consultorias, pesquisas aplicadas e serviços tecnológicos.</p>

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

        <div className='caixaGrande'>
          <div className='duasCaixas'>
            <img src={group}/>
            <h2> Para você </h2>
            <p> Cursos profissionalizantes, graduações e especializações desenhadas para acelerar sua carreira na indústria. </p>
            <br/>
            <div className='textoadd'>
              <h2>Eduação Profissional</h2>
              <p>Formação para quem deseja construir carreira na indústria.</p>
            </div>
            <br/>
            <div className='textoadd'>
              <h2>Ensino Superior</h2>
              <p>Formação superior voltada para qualificar profissionais na indústria.</p>
            </div>
          </div>

          <div className='duasCaixas'>
            <img src={group2}/>
            <h2> Para empresas </h2>
            <p> Capacitações personalizadas e outras soluções inovadoras para impulsionar a competitividade do seu negócio. </p>
            <br/>
            <div className='textoadd'>
              <h2>Educação Corporativa</h2>
              <p>Capacitações customizadas para melhorar a produtividade da sua empresa.</p>
            </div>
            <br/>
            <div className='textoadd'>
              <h2>Inovação e Tecnologia</h2>
              <p>PD&I, consultorias e metrologia para uma indústria mais competitiva.</p>
            </div>
          </div>
        </div>

       <div>
        <div className='container'>
          <h2>Seu próximo curso a um clique</h2>
          <br/>
          <p>Conheça o portal com as ofertas de cursos da Educação Profissional e Ensino Superior do SENAI.</p>
          <br/>
          <button>Garanta sua vaga</button>
        </div>
       </div>
      </about>

      <hero>
        <div className='um'>
          <img src={logosenai} className='logosenai'/>
        </div>
        <div className='dois'>
          <img src={facebook}/>
          <img src={linkedin}/>
          <img src={instagram}/>
          <img src={youtube}/>
        </div>
      </hero>
    </>
  )
}

export default App
