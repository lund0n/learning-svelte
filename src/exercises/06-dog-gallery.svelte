<script>
  // 06-dog-gallery.svelte
  // We'll make a variation of our last exercise, but allow the user:
  // - change the breed of dog to fetch images for.
  // - change how often the image is changed.
  // 1. Create a writable store, named breed, whose initial value is 'akita'
  //    Docs: https://svelte.dev/docs#writable
  // 2. Create a writable store, named frequency, whose initial value is 10.
  //    Docs: https://svelte.dev/docs#writable
  // 3. Bind the breed store to the breed dropdown.
  //    Docs: https://svelte.dev/docs#bind_element_property
  //    Hint: remember it's a store. How you do you subscribe to a store?
  // 4. Bind the frequency store to the frequency dropdown.
  //    Docs: https://svelte.dev/docs#bind_element_property
  // 5. Create a derived store, called dogs, whose values are the result
  //    of calling fetchDog with the selected breed. The derived store
  //    should accept breed and frequency as dependencies. The store should
  //    create an interval that fetches a dog with the selected breed at the
  //    selected frequency (times 1000, since interval is in ms). It should
  //    also clear the interval any time either parameter is changed.
  //    Docs: https://svelte.dev/docs#derived
  //    Hint: the declaration should look something like:
  //    const dogs = derived([breed, frequency], ([$breed, $frequency], set) => {
  //    ...your code here...
  //    })
  // 6. Once you think you have your stores set up correctly, uncomment
  //    the #await block to see your pictures.
  // Extra credit:
  //    Each time a new image is fetched the current one is removed, so there's
  //    some time when no image is shown.
  //    Why is this the case?
  //    How might we change it so that the image is not changed until next
  //    image has been fetched?
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

  // TODO create writable stores for each of these.
  //   const breed =
  //   const frequency =
  // TODO create a derived store here.
  //   const dogs =
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
        <select>
          {#each Object.entries(BREEDS) as [value, name]}
            <option {value}>{name}</option>
          {/each}
        </select>
      </label>
    </fieldset>
    <fieldset>
      <label>
        Fetch Frequency:
        <select>
          {#each FREQUENCIES as freq}
            <option value={freq}>{freq} seconds</option>
          {/each}
        </select>
      </label>
    </fieldset>
  </form>
  <!-- TODO uncomment the next set of lines once your derived store is set -->
  <!-- {#await $dogs}
    <div>Loading...</div>
  {:then src}
    <img {src} alt="A dog" />
  {:catch err}
    <div class="error">Sometimes, dog fetches you!</div>
  {/await} -->
</div>
