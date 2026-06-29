import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()
const modelId = 'cmc/deepseek/deepseek-v4-pro'
const result = lookupModelsDevData(modelId, cache)

console.log('Cache size:', cache.size)
console.log('Input modelId:', modelId)
console.log('Lookup result:', result)
console.log('Has reasoning field:', 'reasoning' in (result || {}))
console.log('Reasoning value:', result?.reasoning)
