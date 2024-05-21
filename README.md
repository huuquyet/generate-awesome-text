[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml "Generate awesome text with Gemini")
[![Generate on issues](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml "Generate when new issue created")
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md "Contributor Covenant 2.1")

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_JOKE -->
<p class="from-me">Please tell what is the weather like in Danang?</p>
<p class="from-them">
Alright, alright, hold on to your hats folks! You wanna know about the weather in Danang? That's like asking a comedian to tell you a joke – it's all about timing! 
</p>

<p class="from-them">
Seriously though, I'm just a front-end guy, not a weatherman. My expertise is in HTML, CSS, and JavaScript – not sunshine, rain, and typhoons. You need a real meteorologist for that, someone who can predict if you'll need a raincoat or sunscreen.  
</p>

<p class="from-them">
But hey, I'm a team player! You want Danang weather? I'll get you Danang weather! Just head over to a reliable weather website or app. You know, the ones with all the fancy maps and radar thingamajigs. 
</p>

<p class="from-them">
And remember, no matter the forecast, always pack a good sense of humor. It's the best accessory for any weather! You've been a great audience, tip your waitresses, try the veal!  
</p> 
<!-- END_JOKE -->

<div align="center" width="100%">
  <img alt="Speech bubbles" src="./assets/speech-bubbles.svg" width="100%">
</div>

**Want to chat with Gemini as a stand-up comedian?** Just click [this](https://github.com/huuquyet/generate-awesome-text/issues/new?assignees=&labels=generate&projects=&title=Please+tell+what+is+the+dragons+look+like&body=Feel+free+to+change+the+title+then+Press+Submit%21)

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
