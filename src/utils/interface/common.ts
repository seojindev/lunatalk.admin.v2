export interface BaseResponse<T> {
  message?: string
  result?: T
  error_message?: string
}

export interface Category {
  id?: number
  uuid: string
  name: string
}

interface defaultCountObject {
  number: number
  string: string
}

export interface ProductOption {
  id: number
  name: string
  eng_name?: string
}

export type ProductPrice = defaultCountObject

export type ProductQuantity = defaultCountObject

export interface Product {
  id: number
  name: string
  new_item: boolean
  best_item: boolean
  badge: any[]
  category: Category[]
  original_price: ProductPrice
  price: ProductPrice
  quantity: ProductQuantity
  color: ProductOption[]
  uuid: string
}
