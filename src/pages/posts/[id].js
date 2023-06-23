import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Post = ({ post = {} }) => {

    // const { query } = useRouter()

    return (
        <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr/>
            <Link href='/posts'><a>return to posts list</a></Link>
        </>
    )
}

export default Post

export async function getServerSideProps({ params }) {
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    return {
        props: {
            post
        }
    }
}