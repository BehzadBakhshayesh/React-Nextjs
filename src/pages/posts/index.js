import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Heade from 'next/head'

const Posts = ({ posts = [] }) => {

    // const [posts, setPosts]= useState([])
    // useEffect(() => {
    //     axios('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => setPosts(response.data))
    // }, [])

    return (
        <>


            <Heade>
                <title>
                    next |  Posts page
                </title>
            </Heade>

            <h2>posts list</h2>
            <ol>
                {posts.map(post => (
                    <Link key={post.id} href={`/posts/${post.id}`}><a>
                        <li>{post.title}</li>
                    </a></Link>
                ))}
            </ol>
        </>
    )
}

export default Posts


export async function getServerSideProps() {

    const { data: posts } = await axios('https://jsonplaceholder.typicode.com/posts')
    return {
        props: {
            posts
        }
    }
}
