import { useEffect, useState } from 'react'
import { Game } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  adicionarAoCarrinho: (jogo: Game) => void
}

const Produtos = ({ adicionarAoCarrinho }: Props) => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => res.json())
      .then((res) => setGames(res))
  }, [])

  return (
    <>
      <S.Produtos>
        {games.map((game) => (
          <Produto key={game.id} game={game} aoComprar={adicionarAoCarrinho} />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
