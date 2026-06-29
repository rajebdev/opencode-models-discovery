import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()
const modelId = 'kr/claude-sonnet-4.5-thinking'
const result = lookupModelsDevData(modelId, cache)

console.log('Input:', modelId)
console.log('Found:', !!result)
if (result) console.log('Matched:', result.id)
