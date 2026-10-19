import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  fundo: '#FFF8F2',
  fundoSecundario: '#FFEBD9',
  branco: '#FFFFFF',
  textLight: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
