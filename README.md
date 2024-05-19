[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

# Generate awesome text with Google's Gemini model

*Ready for a joke generated with Gemini model?*

<!-- START_JOKE -->
<p class="from-me">Please explain like I am five about dinosaurs</p>
<p class="from-them">
Alright, imagine a lizard... but HUGE! Like, bigger than your house huge!  We're talkin' T-Rex  chompin' on trees,  long-necked Brachiosaurus munchin' on leaves way up high. They roamed the Earth way before us, like waaaay before.  Then *boom*, something big happened and most of them disappeared.  Now we find their bones and put 'em in museums.  Cool, right?  
</p> 
<!-- END_JOKE -->

<div align="center" width="100%">
  <img alt="Speech bubbles" src="./assets/speech-bubbles.svg" width="100%">
</div>

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
