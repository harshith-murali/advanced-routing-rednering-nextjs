export default async function Reviews({params}){
    const {id , reviewId} = await params;
    return(
        <div>
            <h1>Product {id} </h1>
            <h2>Review {reviewId}</h2>
        </div>
    )
}