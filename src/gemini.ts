import { env } from 'node:process'
import * as core from '@actions/core'
import { GoogleGenerativeAI } from '@google/generative-ai'

// You can get your API key at https://aistudio.google.com/app/apikey
const API_KEY = env.GEMINI_API_TOKEN as string

const genAI = new GoogleGenerativeAI(API_KEY)

// For text-only input, use gemini-pro model
const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

/** Call gemini-pro model to generate text from prompt */
export async function run() {
  const prompt = 'Please tell a dad joke about programming'

  const result = await model.generateContent(prompt)
  const response = await result.response
  const text = response.text()
  console.log(text)
}
