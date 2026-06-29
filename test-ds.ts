import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()

const models = [
  'ds/deepseek-v4-pro',
  'cmc/deepseek/deepseek-v4-pro'
]

for (const modelId of models) {
  const result = lookupModelsDevData(modelId, cache)
  console.log(`\n${modelId}:`)
  console.log('  Found:', !!result)
  console.log('  Reasoning:', result?.reasoning)
}
