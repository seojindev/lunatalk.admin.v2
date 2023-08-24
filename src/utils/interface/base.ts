import type { Category, Product, ProductOption } from './common'

export interface BaseApi {
  codes: {
    code_group: {
      [key: string]: { code_id: string; code_name: string }[]
    }
    code_name: {
      [key: string]: string
    }
  } | null
  product_category: Category[]
  products: {
    badge: any[] // 규칙 모름
    category: Category[]
    color_options: ProductOption[]
    wireless_options: ProductOption[]
    list: Product[] | []
  } | null
}
