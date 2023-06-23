import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Heade from 'next/head'

const Users = ({ users = [] }) => {
    return (
        <>

            <Heade>
                <title>
                    next |  Users page
                </title>
            </Heade>

            <h2>Users List</h2>
            <ol>
                {users.map(user => (
                    <Link href={`/users/${user.id}`} key={user.id}><a>
                        <li>{user.name}</li>
                    </a></Link>
                ))}
            </ol>
        </>
    )
}

export default Users

export async function getStaticProps() {

    const { data: users } = await axios('https://jsonplaceholder.typicode.com/users')
    users.length = 5
    return {
        props: { users },
        revalidate: 60
    }
}
