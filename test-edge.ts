import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()

const tests = [
  'gpt-4o',
  'gpt-4.0-turbo',
  'claude-3.5-sonnet',
  'deepseek-v3.2'
]

for (const modelId of tests) {
  const result = lookupModelsDevData(modelId, cache)
  console.log(`${modelId}: ${result ? result.id : 'not found'}`)
}
