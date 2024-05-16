import { env } from 'node:process'
import * as core from '@actions/core'

// Envinroment secrets get from https://huggingface.co/settings/tokens
const API_TOKEN = env.HF_API_TOKEN

/** Fetch dialoGPT model with inference api */
async function query(data: any) {
  const API_URL =
    'https://api-inference.huggingface.co/models/r3dhummingbird/DialoGPT-medium-joshua'

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
  const data = {
    inputs: {
      past_user_inputs: ['Hello, how are you?'],
      generated_responses: ["I'm doing great. How can I help you today?"],
      text: 'Please tell a dad joke about developer',
    },
    options: {
      wait_for_model: true,
    },
  }
  try {
    query(data).then(async (response) => {
      console.log(JSON.stringify(response))
    })
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
