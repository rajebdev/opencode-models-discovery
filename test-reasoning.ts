import { lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = new Map([
  ['deepseek/deepseek-v4-pro', { 
    id: 'deepseek/deepseek-v4-pro', 
    reasoning: true,
    limit: { context: 128000, output: 8192 }
  }]
])

const modelId = 'cmc/deepseek/deepseek-v4-pro'
const result = lookupModelsDevData(modelId, cache)

console.log('Input modelId:', modelId)
console.log('Lookup result:', result)
console.log('Reasoning:', result?.reasoning)
