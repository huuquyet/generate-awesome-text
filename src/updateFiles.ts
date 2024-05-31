import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

// The patterns to set the chat
const START_CHAT: string = '<!-- START_CHAT -->'
const END_CHAT: string = '<!-- END_CHAT -->'

/** Update Readme and svg files with funny joke */
export async function updateFiles(prompt: string, joke: string) {
  await update('./README.md', prompt, joke)
  await update('./assets/speech-bubbles.svg', prompt, joke)
}

/** Update file with the funny joke */
async function update(fileName: string, prompt: string, joke: string) {
  try {
    const filePath = resolve(fileName)
    const contents = await readFile(filePath, { encoding: 'utf8' })
    const regex = new RegExp(`(${START_CHAT})[\\s\\S]*?(${END_CHAT})`, '')

    // Check if patterns exist to insert the joke
    if (!regex.test(contents)) {
      console.log(`Please add comment blocks in ${fileName} file and try again ⚠️`)
    }

    const result = String.raw`
        <p class="from-me">${prompt}</p>
        ${joke}`

    // Replace string with regex
    const newContents = contents.replace(regex, `$1${result}\n$2`)
    await writeFile(filePath, newContents)
  } catch (error: any) {
    throw new Error(error.message)
  }
}
