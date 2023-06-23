import React from 'react'

const Article = ({params}) => {
    console.log(params);
    return (
        <>
            <div>
                Catch all routes: ===> {params.slug.join(' / ')}
            </div>   
        </>
    )
}

export default Article


export async function getServerSideProps({params}) {
    
    return{
        props :{params}
    }
}