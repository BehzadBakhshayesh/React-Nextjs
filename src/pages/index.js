import React from 'react'
import Heade from 'next/head'


const Home = () => {
    return (
        <div>

            <Heade>
                <title>
                    next |  Home page
                </title>
            </Heade>

            <h2>
            Home
            </h2>
            <p>my home page</p>
            <img src='./images/ax.jpg' style={{width:'100px'}}/>
        </div>
    )
}

export default Home
