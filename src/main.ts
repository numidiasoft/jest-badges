import * as core from '@actions/core'
import fs from 'fs'

async function run(): Promise<void> {
  try {
    const coverageResult: string = core.getInput('coverage-json-file')

    const content = fs.readFileSync(coverageResult, {encoding: 'utf8'})
    core.info(content)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
