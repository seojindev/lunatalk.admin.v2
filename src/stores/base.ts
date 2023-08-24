import { getBase } from '@/utils/api/base'
import type { BaseApi } from '@/utils/interface/base'
import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

export const useBaseStore = defineStore('base', () => {
  interface Base {
    init: boolean
    loading: boolean
    data: BaseApi
  }
  const base = reactive<Base>({
    init: false,
    loading: false,
    data: {
      codes: null,
      product_category: [],
      products: null
    }
  })

  const getBaseData = async () => {
    if (base.init) return

    base.loading = true

    const response = await getBase()
    base.loading = false
    if (response.status === 200 && response.data.result) {
      base.init = true

      const { codes, product_category, products } = response.data.result

      base.data.codes = codes
      base.data.product_category = product_category
      base.data.products = products
    }
  }

  const baseData = computed(() => base.data)

  return { base: baseData, getBaseData }
})
