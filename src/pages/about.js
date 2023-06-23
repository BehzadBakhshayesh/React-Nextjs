import React from 'react'
import Heade from 'next/head'

const About = () => {
    return (
        <div>

            <Heade>
                <title>
                    next |  About page
                </title>
            </Heade>



            <h2>
                About us
            </h2>
            <p>
                about us describtion
            </p>

            <style global jsx>{`
                h2{
                    color:blue
                }
                p{
                    color:red;
                    padding:10px 20px
                }
            `}</style>
        </div>
    )
}

export default About
