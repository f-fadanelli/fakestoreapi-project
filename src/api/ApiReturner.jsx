 import ApiFetcher from './ApiFetcher';

export async function ApiReturnAllProducts(){
    return await ApiFetcher(`https://fakestoreapi.com/products`)
}

export async function ApiReturnSingleProduct(id){
    return await ApiFetcher(`https://fakestoreapi.com/products/${id}`)
}

export async function ApiReturnAllCategories(){
    return await ApiFetcher(`https://fakestoreapi.com/products/categories`)
}

export default ApiReturnAllProducts


