import * as core from '@actions/core'
import { execSync } from 'child_process'

const REPO_URL = 'https://github.com/fonttools/fontspector'

export async function build(version, features) {
  // Let's make sure we have rustc / cargo installed
  let hasRust = true
  execSync('cargo --version', (error, stdout, stderr) => {
    if (error) {
      core.error(`Error running Cargo: ${error.message}`)
      hasRust = false
      return
    }
  })
  if (!hasRust) {
    core.error('Cargo is not installed. Cannot build from source without Rust.')
    return
  }

  let cargoCmd = 'cargo install '
  if (features) {
    cargoCmd += `--features "${features}" `
  }

  if (version == 'head') {
    cargoCmd += '--git ' + REPO_URL
  } else if (version == 'latest' || !version) {
    core.info('Using latest version')
    cargoCmd += 'fontspector'
  } else {
    cargoCmd += 'fontspector --version ' + version
  }

  core.info('Running ' + cargoCmd)
  execSync(cargoCmd, (error, stdout, stderr) => {
    if (error) {
      core.error(`Error: ${error.message}`)
      return
    }
    if (stderr) {
      core.error(`stderr: ${stderr}`)
      return
    }
    core.debug(`stdout: ${stdout}`)
  })
}
