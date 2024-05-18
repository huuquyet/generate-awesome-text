[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

# Generate awesome text with Google's Gemini model

Ready for a dad joke generated with Gemini model?

<!-- START_JOKE -->
Ah, you seek humor in the realm of the digital, young one.  Very well...

Why did the programmer quit his job? 

> Because he didn't get arrays! 

*chuckles softly*  You see, sonny, "arrays" can refer to both a data structure in programming AND a feeling of displeasure.  A double meaning, eh?  Clever, isn't it? 

<!-- END_JOKE -->

<div align="center">

![Speech bubbles](./assets/speech-bubbles.svg)
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

Add a comment block to your `README.md` file to update joke automatically

```md
<!-- START_JOKE -->
<!-- END_JOKE -->
```
