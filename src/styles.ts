import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  fundo: '#FFF8F2',
  fundoSecundario: '#FFEBD9',
  branco: '#FFFFFF',
  amarelo: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
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
