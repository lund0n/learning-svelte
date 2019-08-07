<script>
  import { derived, writable } from 'svelte/store'
  const BREEDS = {
    akita: 'Akita',
    boxer: 'Boxer',
    pug: 'Pug',
    'terrier/yorkshire': 'Yorkshire Terrier',
  }
  const FREQUENCIES = [5, 10, 30, 60]

  const fetchDog = breed =>
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(resp => resp.json())
      .then(({ message }) => message)

  const breed = writable(Object.keys(BREEDS)[0])
  const frequency = writable(10)
  const dogs = derived([breed, frequency], ([$breed, $frequency], set) => {
    set(fetchDog($breed))
    const interval = setInterval(() => {
      set(fetchDog($breed))
    }, $frequency * 1000)

    return () => {
      clearInterval(interval)
    }
  })
</script>

<style>
  fieldset {
    border: none;
  }
</style>

<div>
  <h1>Dog Gallery</h1>
  <form>
    <fieldset>
      <label>
        Select your dog breed:
        <select bind:value={$breed}>
          {#each Object.entries(BREEDS) as [value, name]}
            <option {value}>{name}</option>
          {/each}
        </select>
      </label>
    </fieldset>
    <fieldset>
      <label>
        Fetch Frequency:
        <select bind:value={$frequency}>
          {#each FREQUENCIES as freq}
            <option value={freq}>{freq} seconds</option>
          {/each}
        </select>
      </label>
    </fieldset>
  </form>
  {#await $dogs}
    <div>Loading...</div>
  {:then src}
    <img {src} alt="A dog" />
  {:catch err}
    <div class="error">Sometimes, dog fetches you!</div>
  {/await}
</div>
