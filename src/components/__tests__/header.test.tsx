import { render, screen } from '@testing-library/react'
import Header from '../Header'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Teste p/ comp. Header', () => {
  test('Renderizar corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header></Header>
      </Provider>
    )

    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
