import React from 'react'

const Gallery = ({params}) => {
    console.log(params);
    return (
        <>
            <div>
                Catch all routes: ===> {params?.slug?.join(' / ')}
            </div>   
        </>
    )
}

export default Gallery


export async function getServerSideProps({params}) {
    
    return{
        props :{params}
    }
}