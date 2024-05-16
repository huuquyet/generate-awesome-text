import { env } from 'node:process'
import * as core from '@actions/core'
import OpenAI from 'openai'

// You can find your API key at https://platform.openai.com/account/api-keys
const API_TOKEN = env.OPENAI_API_TOKEN

const openai = new OpenAI({ apiKey: API_TOKEN })

export async function run() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You are a friendly chatbot who always responds in the style of a wise oldman.',
      },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
}
