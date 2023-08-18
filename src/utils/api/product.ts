import instance from '../axios'

export function getCategoryList() {
  return instance.get('/api/admin-front/v1/product/show-product-category')
}

export function deleteCategory(uuid: string) {
  return instance.delete(`/api/admin-front/v1/product/${uuid}/delete-product-category`)
}

export function createCategory(name: string) {
  return instance.post('/api/admin-front/v1/product/create-product-category', { name })
}
