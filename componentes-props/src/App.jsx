import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o que aconteceu")
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
    <div className="container border mt-2">
      <div className="row">

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao cabecalho="22/03/2024">
            <Pedido
              icone="headset"
              titulo="Headset"
              descricao="Headset Bluetooth"/> 
              {componenteFeedback}
          </Cartao>         
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao cabecalho="22/04/2024">
            <Pedido
                icone="gamepad"
                titulo="Gamepad"
                descricao="Gamepad Nintendo"/>
                {componenteFeedback}
          </Cartao>          
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
        <Cartao cabecalho="22/01/2024">
          <Pedido
            icone="hippo"
            titulo="Hipopótamo"
            descricao="Hipopótamo Fêmea"/>
            {componenteFeedback}
          </Cartao>          
        </div>

        <div className="col-sm-12 col-lg-6 col-xxl-3">
          <Cartao cabecalho="22/03/2024">
            <Pedido
              icone="snowman"
              titulo="Boneco de neve"
              descricao="Boneco de neve balançando"/>
              {componenteFeedback}
          </Cartao>          
        </div>


      </div>
    </div>
  )
}

export default App