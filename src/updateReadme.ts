import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// The patterns to set the dad joke
const START_JOKE = '<!-- START_JOKE -->'
const END_JOKE = '<!-- END_JOKE -->'

/** Update ReadMe file with the dad joke */
export async function updateReadme(joke: string) {
  try {
    const filePath = resolve('./README.md')
    const contents = await readFile(filePath, { encoding: 'utf8' })
    const firstRemains = contents.substring(0, contents.indexOf(START_JOKE)).concat(START_JOKE)
    const lastRemains = contents.substring(contents.indexOf(END_JOKE))
    const rawJoke = String.raw`${joke}`
    const result = `${firstRemains}\n${rawJoke}\n${lastRemains}`
    await writeFile(filePath, result)
  } catch (error: any) {
    throw new Error(error.message)
  }
}
