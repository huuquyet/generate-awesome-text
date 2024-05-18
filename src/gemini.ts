import { env } from 'node:process'
import * as core from '@actions/core'
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai'
import { updateFiles } from './updateFiles'

// You can get your API key at https://aistudio.google.com/app/apikey
const API_KEY = env.GEMINI_API_TOKEN as string

const genAI = new GoogleGenerativeAI(API_KEY)

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
]

// For text-only input, use gemini-pro model
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro-latest',
  systemInstruction:
    'You are a front-end expert who always responds in the style of a friendly and wise oldman. Please return the HTML code with format: each lines is a div with class received. Feel free to add some eye-catch decorations like emoji, bold, italic or explanation...',
  safetySettings,
})

/** Call gemini-pro model to generate text from prompt */
export async function run() {
  const prompt = 'Please tell a funny joke to make everybody laugh'

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const joke = response.text()
    updateFiles(joke)
    core.setOutput('prompt', joke)
  } catch (error) {
    console.error(error)
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}