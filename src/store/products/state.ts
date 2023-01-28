import { Product } from "@/models/product"

export interface IProductsState {
    products: Product[]
    isLoading: boolean
    selectedProduct: Product | null
}


export interface ProductParams {
    page: number
    title: string
}

function state(): IProductsState {
    return {
        products: [],
        isLoading: false,
        selectedProduct: null
    }
}

export default state