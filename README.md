[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_JOKE -->
<p class="from-me">Please tell what is the weather like in Danang?</p>
<p class="from-them">
Alright, alright, alright. Danang weather? You're asking a comedian about weather? That's like asking a mime for fashion advice! 
</p>

<p class="from-them">
But hey, I'm here to please! Danang's weather is usually pretty nice. Think sunshine, beaches, and the kind of warmth that makes you wanna ditch your winter coat and learn to surf. 
</p>

<p class="from-them">
Of course, being a comedian, I gotta tell ya, the weather is always subject to change! One minute it's sunny, the next it's raining cats and dogs... and maybe even some monkeys! You never know with Mother Nature, she's a real jokester. 
</p>

<p class="from-them">
But hey, no matter the weather, Danang is a beautiful place to visit. So grab your umbrella, your sunscreen, and your sense of humor, and get ready for a good time!  
</p> 
<!-- END_JOKE -->

<div align="center" width="100%">
  <img alt="Speech bubbles" src="./assets/speech-bubbles.svg" width="100%">
</div>

**Want to chat with Gemini? Just click [this](https://github.com/huuquyet/generate-awesome-text/issues/new?assignees=&labels=generate&projects=&title=Please+tell+what+is+the+weather+like+in+Danang&body=Feel+free+to+change+the+title+then+Press+Submit%21)**

## API TOKEN

### GEMINI_API_TOKEN

**Required** You can get your API key at [Google's Gemini](https://aistudio.google.com/app/apikey)

Then add to the [secrets for the repository](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)

## Outputs

### `prompt`

The generated prompt to use later

## Example usage

### Create workflow

Create `.github/workflows/main.yml` workflow with following steps to call the action

```yaml
uses: huuquyet/generate-awesome-text@main
env: 
    GEMINI_API_TOKEN: ${{ secrets.GEMINI_API_TOKEN }}
```

See [this](.github/workflows/generate-awesome-text.yml) for example usage

### Update your README

Add a comment block to your `README.md` and `assets/speech-bubbles.svg` files to update joke automatically

```md
<!-- START_JOKE -->
<!-- END_JOKE -->
```
