import LoadingBar from 'react-top-loading-bar'
import { useEffect, useState } from 'react'
import { useRouter,router } from 'next/router'
import NavBar from './components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)


  useEffect(()=>{
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
  })
  return (
    <>
    <LoadingBar
      color='#f11946'
      waitingTime= {400}
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
    <NavBar />
    <hr />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
