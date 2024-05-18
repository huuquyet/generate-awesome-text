[![Generate awesome text](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml/badge.svg)](https://github.com/huuquyet/generate-awesome-text/actions/workflows/generate-awesome-text.yml) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](.github/CODE_OF_CONDUCT.md)

# Generate awesome text with Google's Gemini model

Ready for a dad joke generated with Gemini model?

<!-- START_JOKE -->
Well, you know, sonny, 😄  a good chuckle is always good for the soul.  👴 Let me see... Ah, I got one!

Why don't scientists trust atoms? 

Because they make up everything! 😜 

<br> 

Now, let me lay that out nice and clear for ya, like a freshly paved sidewalk: 

<div class="joke-setup">
Why don't scientists trust atoms? 
</div> 
<div class="punchline">
Because they make up everything! 😜 
</div> 

There ya go!  Hope that tickled your funny bone! 😉 

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

Add a comment block to your `README.md` and `assets/speech-bubbles.svg` files to update joke automatically

```md
<!-- START_JOKE -->
<!-- END_JOKE -->
```
