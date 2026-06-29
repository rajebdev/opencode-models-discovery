const tests = [
  'claude-sonnet-4.5',
  'gpt-4.0',
  'model.name.v1.0',
  'deepseek-v3.2.1'
]

for (const input of tests) {
  const normalized = input.replace(/\b(\d+)\.(\d+)\b/g, '$1-$2')
  console.log(`${input} → ${normalized}`)
}
