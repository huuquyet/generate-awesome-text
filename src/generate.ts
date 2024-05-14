import { env } from 'node:process'
import * as core from '@actions/core'

// Envinroment secrets get from https://huggingface.co/settings/tokens
const API_TOKEN = env.HF_API_TOKEN

/** Fetch text-to-image models with inference api */
async function query(data: any) {
  const API_URL = `https://api-inference.huggingface.co/models/HuggingFaceH4/starchat2-15b-v0.1`

  const response = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
    method: 'POST',
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error(`Failed to fetch API: ${response.statusText}`)
  }

  const result = await response.json()
  return result
}

/** Get random prompt and query the inference api, then save the image */
export async function run(): Promise<void> {
  try {
    query({
      inputs: "Please tell a dad joke, just the content of the joke",
      options: {
        wait_for_model: true
      }
    }).then(async (response) => {
      console.log(response)
    })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
