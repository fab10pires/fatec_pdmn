import React from 'react'
import Busca from './components/busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'

class App extends React.Component{

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient(env.PEXELS_KEY)
    console.log(this.pexelsClient)
  }

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }
  render(){
    console.log(env.PEXELS_KEY)
    console.log(window.env.PEXELS_KEY)
    return (
      <div
        className='grid justify-content-center'>
          <div>
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className='col-12'>
            <Busca dica='Busca imagens de...' 
            onBuscaRealizada={this.onBuscaRealizada}/>  
          </div>    
      </div>
    )
  }
}

export default App