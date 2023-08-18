import instance from '../axios'

export function getCategoryList() {
  return instance.get('/api/admin-front/v1/product/show-product-category')
}
