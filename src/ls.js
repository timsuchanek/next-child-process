// import { execSync } from 'child_process'
import fs from 'fs'

export function ls() {
  // return execSync('ls')
  return fs.readDirSync('.')
}
