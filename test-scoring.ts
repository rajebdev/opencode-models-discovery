import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()

const tests = [
  'claude-sonnet-4.5-thinking',
  'claude-sonnet-4-5-thinking',
  'kr/claude-sonnet-4.5-thinking'
]

for (const modelId of tests) {
  const result = lookupModelsDevData(modelId, cache)
  console.log(`${modelId}:`)
  console.log('  Found:', !!result)
  if (result) console.log('  Matched:', result.id)
  console.log()
}
