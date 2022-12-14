import { Provider } from 'jotai'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import '../public/fonts/Vazir/font.css'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  )
}

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Vazir !important;
    .swal2-styled {
      font-family: Vazir !important;

    }
  }
  .swal2-confirm {
    background-color: #0095ff !important;
  }
  .swal2-deny {
    background-color: #fff !important;
    border: 1px solid #0095ff !important;
    color: #0095ff !important;
  }
`
export default appWithTranslation(App)
