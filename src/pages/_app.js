import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'
// import _ from 'lodash'
import random from 'lodash/random'
import Header from 'components/generic/Header'
import Sidebar from 'components/generic/Sidebar'
import Footer from '@cmp/generic/Footer'

import '../styles/global.css'

const App = ({ Component, pageProps }) => {

    // const router = useRouter()
    // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     router.events.on('routeChangeStart', ()=>{setLoading(true)})
    //     router.events.on('routeChangeComplete', ()=>{setLoading(false)})
    //     return ()=> {
    //       router.events.off('routeChangeStart', ()=>{setLoading(true)})
    //       router.events.off('routeChangeComplete', ()=>{setLoading(false)})
    //     }
    //   }, [])

    return (
        <>
            {/* {loading && 'LOADING...'} */}
            <NextNprogress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
                options={{ easing: 'ease', speed: 500 }}
            />


            {/* {_.random(0, 100)} */}
            {random(0, 100)}

            <Header />
            <section style={{ display: 'flex' }}>
                <Sidebar />
                <article>
                    <Component {...pageProps} />
                </article>
            </section>
            <Footer />

        </>
    )
}

export default App
