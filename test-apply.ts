import { fetchModelsDevData, lookupModelsDevData } from './src/utils/models-dev-fetcher.ts'

const cache = await fetchModelsDevData()
const modelId = 'cmc/deepseek/deepseek-v4-pro'
const modelsDevData = lookupModelsDevData(modelId, cache)

const info = { supports_reasoning: null }
const modelConfig: any = {}

if (info.supports_reasoning === true) {
  modelConfig.reasoning = true
  console.log('Branch 1: LiteLLM true')
} else if (modelsDevData?.reasoning !== undefined) {
  modelConfig.reasoning = modelsDevData.reasoning
  console.log('Branch 2: models.dev fallback')
} else {
  console.log('Branch 3: no reasoning set')
}

console.log('Final reasoning:', modelConfig.reasoning)
console.log('modelsDevData.reasoning:', modelsDevData?.reasoning)
