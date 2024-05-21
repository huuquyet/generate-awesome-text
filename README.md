[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml "Generate awesome text with Gemini")
[![Generate on issues](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml "Generate when new issue created")
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md "Contributor Covenant 2.1")

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_JOKE -->
<p class="from-me">Please tell what is the dragons look like?</p>
<p class="from-them">
Alright, folks, dragons! You wanna know what they look like? Picture this: giant, scaly lizards with wings, basically the rockstars of the reptile world! 
</p>

<p class="from-them">
We're talking massive claws, razor-sharp teeth, and breath that could melt your face off... or at least cook a mean steak. It's all about the fire, you know?  
</p>

<p class="from-them">
And the colors! We're not just talking green, folks. We've got reds, blues, blacks, even sparkly gold ones.  They're like flying, fire-breathing disco balls!
</p>

<p class="from-them">
But hey, don't take my word for it.  Look up some pictures, you won't be disappointed. Unless you're scared of awesome, then maybe stick to kittens.   
</p> 
<!-- END_JOKE -->

<div align="center" width="100%">
  <img alt="Speech bubbles" src="./assets/speech-bubbles.svg" width="100%">
</div>

**Want to chat with Gemini as a stand-up comedian?** Just click [this](https://github.com/huuquyet/generate-awesome-text/issues/new?assignees=&labels=generate&projects=&title=Please+tell+me+how+to+be+more+funny+and+creative&body=Feel+free+to+change+the+title+then+Press+Submit%21)

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
