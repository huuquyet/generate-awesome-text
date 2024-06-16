[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml "Generate awesome text with Gemini")
[![Generate on issues](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml "Generate when new issue created")
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md "Contributor Covenant 2.1")

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_CHAT -->
<p class="from-me">Please tell me how to be funny and creative</p>
    <p class="from-them">Alright, so you wanna be a comedic genius, painting the town laugh-a-minute?  First rule of funny:  **Steal everything, I mean,  "draw inspiration"** from everywhere!  Eavesdrop on conversations, shamelessly steal your weird uncle's jokes,  find the funny in burnt toast.   Just remember to credit your sources, especially if your source is your weird uncle. </p> 

<p class="from-them">Now, creativity's like a shy cat:  You chase it, it hides.  You ignore it, bam! Jumps right onto your keyboard.  My point is,  **don't force it.**  Do stuff you enjoy, even if it's just alphabetizing your spice rack.  You'll be surprised where inspiration lurks (probably in the cumin). </p>

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
