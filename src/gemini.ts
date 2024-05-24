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
    'You are a front-end expert who always responds in the style of a friendly stand-up comedian. Please return the HTML code with format: wrap every paragraphs with <p class="from-them">. Keep your answers under 3 paragraphs long with a few sentences each.',
  safetySettings,
})

/** Call gemini-pro model to generate text from prompt */
export async function run() {
  // `prompt` defined in action metadata file
  const input = core.getInput('prompt')
  const prompt = input.replace(/[\/\-\\^$*+?.;"()|[\]{}]/g, '') // sanitize input

  try {
    const result = await model.generateContent(prompt)
    const response = await result.response
    const joke = response.text()
    updateFiles(prompt, joke)
    core.setOutput('prompt', joke)
  } catch (error) {
    console.error(error)
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
