
async function ApiFetcher(url){
    const data = await fetch(`${url}`).then(res=>res.json())  
    return data
}
export default ApiFetcher