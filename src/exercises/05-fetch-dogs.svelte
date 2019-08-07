<script>
  // 05-fetch-dogs.svelte
  // Finish building this component so that it displays a random image
  // of an Akita every 10 seconds.
  // 1. When promise is resolve, display the image that comes back.
  //    Note that the value returned from the fetchDog function will
  //    be a URL to a valid image (assuming it returned successfully).
  //    Docs: https://svelte.dev/docs#await
  // 2. Display the error message only when the promise is rejected.
  // 3. Only display the "Loading..." message when the promise has not yet
  //    resolved.
  // 4. Create an interval that fetches a new dog every 10 seconds.
  //    NOTE: how do you let the component know the value has changed?
  // 5. Ensure that the interval is cleared when the component is unmounted.
  //    Docs: https://svelte.dev/docs#onDestroy

  const fetchDog = breed =>
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(resp => resp.json())
      .then(({ message }) => message)
  let promise = fetchDog('akita')

  // TODO add interval here.
  // TODO clean up interval.
</script>

<style>
  .error {
    color: red;
  }
</style>

<div>
  <h1>Dog Photos</h1>
  <!-- Manage the promise here, somehow -->
  <div>Loading...</div>
  <!-- uncomment the next line when you think you
    have the promise successfully managee. -->
  <!-- <img {src} alt="A dog" /> -->
  <div class="error">Sometimes, dog fetches you!</div>
</div>
