[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

# Generate awesome text with Google's Gemini model

Ready for a dad joke generated with Gemini model?

<!-- START_JOKE -->

  Ah, you seek a joke, young one? Very well... 

***Why do programmers prefer dark mode?***

*Because light attracts bugs!* 

Heh heh heh. I remember back in my day... we didn't have any "dark modes".  Just flickering green text on a black screen, and we liked it!  Now scoot along, you whippersnapper, before I fall asleep and forget what we were talking about! 

<!-- END_JOKE -->

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
