[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml "Generate awesome text with Gemini")
[![Generate on issues](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-on-issues.yml "Generate when new issue created")
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md "Contributor Covenant 2.1")

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_JOKE -->
<p class="from-me">Please tell me how to become a musician?</p>
<p class="from-them">Alright, so you wanna be a musician, huh?  A rockstar, a guitar hero, a maestro of the microphone! Well, first you gotta learn an instrument.  It's like trying to tell jokes without knowing any words! You could try, but it'd probably just be awkward silence and confused looks.</p>
<p class="from-them"> Next, you gotta practice! I'm talking hours every day, honing your craft, making those fingers bleed... well, not literally, hopefully.  But you gotta put in the time, just like a comedian workshopping their jokes.  Can't get laughs if you don't put in the work! </p>
<p class="from-them"> Finally, you gotta get out there and perform! Open mics, coffee shops, even just busking on the street. It's like trying out new material on stage – you'll bomb sometimes, but you'll also get those moments where the crowd goes wild! And that's what it's all about! So get out there, make some noise, and become the rockstar you were born to be!  </p> 
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
