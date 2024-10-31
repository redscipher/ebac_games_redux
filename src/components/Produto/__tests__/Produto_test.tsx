import { renderizarComProvider } from '../../../utils/tests'
import Produto from '../index'
import { fireEvent, screen } from '@testing-library/react'

const jogo = {
  id: 2,
  categoria: 'Categ2',
  imagem: 'Imagem2',
  plataformas: ['PS5', 'Xbox Series X'],
  preco: 90,
  precoAntigo: 120,
  titulo: 'Titulo2'
}

describe('testes p/ produot', () => {
  test('deve renderizar corretamente', () => {
    renderizarComProvider(<Produto game={jogo} />)

    // expectativas
    expect(screen.getByText('Titulo2')).toBeInTheDocument()
  })

  test('deve adicionar no carrinho', () => {
    const { store } = renderizarComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('id-btn-comprar')
    fireEvent.click(botao)
    // expectativas
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
