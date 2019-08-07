<script>
  import ExercisePanel from './ExercisePanel.svelte'
  import NavBar from './NavBar.svelte'
  export let title = ''
  export let Exercise = undefined
  export let links = {}
</script>

<style>
  section {
    margin: 0;
    padding: 20px;
    display: grid;
    gap: 20px 20px;
    grid-template-columns: 1fr;
    grid-template-rows: 30px 30px 1fr;
    height: 100%;
  }
  h1 {
    text-align: center;
  }
</style>

<svelte:head>
  <title>Learning Svelte - {title}</title>
</svelte:head>
<section>
  <NavBar {...links} />
  <h1>Learning Svelte - {title}</h1>
  <ExercisePanel {Exercise} />
</section>
