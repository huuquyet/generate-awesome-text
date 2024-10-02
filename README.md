[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml "Generate awesome text with Gemini")
[![Generate on issues](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml "Generate when new issue created")
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md "Contributor Covenant 2.1")

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_CHAT -->
<p class="from-me">Please tell me how to be funny and creative</p>
    Alright, listen up, my comedic comrades! You wanna be funny and creative? It's like trying to catch a unicorn riding a unicycle, but with less glitter and more awkward laughter. You gotta be observant,  you know?  Look at the world around you and find the funny in the ordinary.  And don't be afraid to be silly!  Embrace your inner goofball, my friend. It's the key to unlocking your comedic potential. 

<p class="from-them">But remember, humor is subjective. What cracks me up might make you roll your eyes. So, find your own voice and stick with it, even if it's a little... off-key. The more you practice, the more you'll discover what makes you laugh, and what makes others laugh along with you.  </p> 

<p class="from-them">And last but not least, don't take yourself too seriously.  Have fun with it, and if you mess up, just laugh it off.  That's what makes it all so darn entertaining! </p> 

<!-- END_CHAT -->

<div align="center">
  <img alt="Speech bubbles" src="./assets/speech-bubbles.svg">
</div>

**Want to chat with Gemini as a stand-up comedian?** Just click [this](https://github.com/huuquyet/generate-awesome-text/issues/new?assignees=&labels=generate&projects=&title=Please+tell+me+how+to+be+more+funny+and+creative&body=Feel+free+to+change+the+title+then+Press+Submit%21)

## API TOKEN

### GEMINI_API_TOKEN

**Required** You can get your API key at [Google's Gemini](https://aistudio.google.com/app/apikey)

Then add to the [secrets for the repository](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)

## Outputs

### `result`

The generated result to use later

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
<!-- START_CHAT -->
<!-- END_CHAT -->
```
