import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()
const modelId = 'kr/claude-sonnet-4.5'
const result = lookupModelsDevData(modelId, cache)

console.log('Input:', modelId)
console.log('Found:', !!result)
console.log('Result:', result)
