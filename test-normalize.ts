import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()
const tests = [
  'kr/claude-sonnet-4.5',
  'gpt-4.0',
  'gpt-4o',
  'claude-3.5-sonnet'
]

for (const modelId of tests) {
  const result = lookupModelsDevData(modelId, cache)
  console.log(`${modelId}: ${result ? '✅ ' + result.id : '❌ not found'}`)
}
