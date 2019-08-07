<script>
  import { onDestroy } from 'svelte'

  const fetchDog = breed =>
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(resp => resp.json())
      .then(({ message }) => message)
  let promise = fetchDog('akita')

  let interval = setInterval(() => {
    promise = fetchDog('akita')
  }, 10000)
  onDestroy(() => {
    clearInterval(interval)
  })
</script>

<style>
  .error {
    color: red;
  }
</style>

<div>
  <h1>Dog Photos</h1>
  {#await promise}
    <div>Loading...</div>
  {:then src}
    <img {src} alt="A dog" />
  {:catch err}
    <div class="error">Sometimes, dog fetches you!</div>
  {/await}
</div>
