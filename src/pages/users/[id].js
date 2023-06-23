import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Error from 'next/error'

const User = ({user={}, statusCode}) => {

    if(statusCode){
        return(
            <Error statusCode={statusCode}/>
        )
    }

    return (
        <>
           <h3>{user.name}</h3> 
           <p>email : {user.email}</p>
           <hr/>
           <Link href='/users'><a>return to users list</a></Link>
        </>
    )
}

export default User


export async function getStaticPaths () {

    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users`)
    users.length =5
    return{
        paths:users.map(user =>({params : {id: `${user.id}`}})),
        fallback: true 
    }
}

export async function getStaticProps({ params }) {
    const response = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .catch(error => '')

    const user = response?.data
    return {
        props: {
            user,
            statusCode: user? false : 404
        },
        revalidate:60
    }
}

