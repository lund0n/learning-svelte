<script>
  import ExercisePanel from './ExercisePanel.svelte'
  import NavBar from './NavBar.svelte'
  export let title = ''
  export let file = ''
  export let Exercise = undefined
  export let Solution = undefined
  export let links = {}
</script>

<style>
  section {
    margin: 0;
    padding: 20px;
    display: grid;
    gap: 20px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30px 30px 1fr;
    height: 100%;
  }
  section > *:first-child {
    grid-column: span 2 / auto;
  }

  h1 {
    grid-column: span 2 / auto;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  h2 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Learning Svelte - {title}</title>
</svelte:head>
<section>
  <div>
    <NavBar {...links} />
  </div>
  <h1>Learning Svelte - {title}</h1>
  <div class="container">
    <h2>
      <a href={`/${file}/exercise`}>Exercise</a>
    </h2>
    <ExercisePanel {Exercise} />
  </div>
  <div class="container">
    <h2>
      <a href={`/${file}/solution`}>Solution</a>
    </h2>
    <ExercisePanel Exercise={Solution} />
  </div>
</section>
