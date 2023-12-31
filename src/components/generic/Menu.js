import React from 'react'
import Link from 'next/link'

const Menu = () => {
    return (
        <div>
             <menu>
                <ul>
                <li>
                        <Link href='/'>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/posts'>
                            <a>
                                Posts
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/users'>
                            <a>
                                Users
                            </a>
                        </Link>
                    </li>
                </ul>
            </menu>
        </div>
    )
}
export default Menu

