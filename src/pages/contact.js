import React from 'react'
import styles from '../styles/contact.module.css'
import Heade from 'next/head'

const Contact = () => {
    console.log(styles);
    return (
        <div>

            <Heade>
                <title>
                    next |  Contact page
                </title>
            </Heade>

            <h2 className={styles.contactHeader}>
                Contact us
            </h2>
            <p className={styles.contactParagraph}>
                Contact us information
            </p>
        </div>
    )
}

export default Contact
