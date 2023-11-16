const page = (
    { params } : 
    { params: { id: number }}) => {

    return (
        <h1>PRODUCT ID is - {params.id}</h1>
    )
}

export default page