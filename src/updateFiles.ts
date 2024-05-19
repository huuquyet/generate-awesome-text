import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// The patterns to set the dad joke
const START_JOKE = '<!-- START_JOKE -->'
const END_JOKE = '<!-- END_JOKE -->'

/** Update Readme and svg files with funny joke */
export async function updateFiles(prompt: string, joke: string) {
  update('./README.md', prompt, joke)
  update('./assets/speech-bubbles.svg', prompt, joke)
}

/** Update file with the funny joke */
async function update(fileName: string, prompt: string, joke: string) {
  try {
    const filePath = resolve(fileName)
    const contents = await readFile(filePath, { encoding: 'utf8' })
    const startIndex = contents.indexOf(START_JOKE)
    const endIndex = contents.indexOf(END_JOKE)

    // Check if patterns exist to insert the joke
    if (startIndex > 0 && endIndex > startIndex) {
      const firstRemains = contents.substring(0, startIndex).concat(START_JOKE)
      const lastRemains = contents.substring(endIndex)
      const fromMe = String.raw`<p class="from-me">${prompt}</p>`
      const rawJoke = String.raw`${joke}`
      const result = `${firstRemains}\n${fromMe}\n${rawJoke}${lastRemains}`
      await writeFile(filePath, result)
    } else {
      throw new Error(`Please insert the comment blocks to ${fileName}`)
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
