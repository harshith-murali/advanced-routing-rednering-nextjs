export default async function Docs({params}){
    const {slug} = await params;
    return(
        <div>
            <h1>Docs {slug}</h1>
        </div>
    )
}