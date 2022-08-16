import '../styles/globals.css'
import Router from 'next/router'
import nProgress from 'nprogress'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', ()=> nProgress.start())
Router.events.on('routeChangeComplete', ()=> nProgress.done())
Router.events.on('routeChangeError', ()=> nProgress.done())

nProgress.configure({showSpinner: false})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
