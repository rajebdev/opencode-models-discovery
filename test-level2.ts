import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()

const tests = [
  'anthropic/claude-sonnet-4.5',
  'anthropic/claude-sonnet-4-5',
  'deepseek/deepseek-v4-pro'
]

for (const modelId of tests) {
  const result = lookupModelsDevData(modelId, cache)
  console.log(`${modelId}: ${result ? '✅ ' + result.id : '❌'}`)
}
