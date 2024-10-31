import { screen } from '@testing-library/react'
import Header from '../Header'
import { renderizarComProvider } from '../../utils/tests'

describe('Teste p/ comp. Header', () => {
  test('Renderizar corretamente', () => {
    renderizarComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizarComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'Categ1',
              imagem: 'Imagem1',
              plataformas: ['PS5', 'Xbox Series X'],
              preco: 100,
              precoAntigo: 120,
              titulo: 'Titulo1'
            },
            {
              id: 2,
              categoria: 'Categ2',
              imagem: 'Imagem2',
              plataformas: ['PS5', 'Xbox Series X'],
              preco: 90,
              precoAntigo: 120,
              titulo: 'Titulo2'
            }
          ]
        }
      }
    })

    // expectativas
    expect(screen.getByTestId('id-qtd-carrinho').innerHTML).toContain('2')
  })
})
