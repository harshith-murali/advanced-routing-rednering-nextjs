export default async function Products({params}){
    const {id} = await params;
    return(
        <div>
            <h1>Product {id}</h1>
        </div>
    )
}