import { renderizarComProvider } from '../../utils/tests'
import Produtos from '../Produtos'
import { screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const itens = [
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
  },
  {
    id: 3,
    categoria: 'Categ3',
    imagem: 'Imagem3',
    plataformas: ['PS5', 'Xbox Series X'],
    preco: 110,
    precoAntigo: 115,
    titulo: 'Titulo3'
  }
]

const server = setupServer(
  rest.get('http://localhost:4000/produtos', (req, res, contexto) => {
    return res(contexto.json(itens))
  })
)

describe('testes p/ produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('deve renderizar corretamente', () => {
    const { debug } = renderizarComProvider(<Produtos />)

    debug()
    // expectativas
    //expect(screen.getByText('Titulo2')).toBeInTheDocument()
  })
})
