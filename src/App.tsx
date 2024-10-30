import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  const [carrinho, setCarrinho] = useState<Game[]>([])

  function adicionarAoCarrinho(jogo: Game) {
    if (carrinho.find((game: { id: number }) => game.id === jogo.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, jogo])
    }
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header itensNoCarrinho={carrinho} />
        <Produtos adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </>
  )
}

export default App
