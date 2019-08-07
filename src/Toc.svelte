<script>
  import { ROUTES } from './routes'
</script>

<style>
  section {
    margin: 0;
    padding: 20px;
    height: 100%;
  }
</style>

<svelte:head>
  <title>Learning Svelte</title>
</svelte:head>
<section>
  <h1>Learning Svelte</h1>
  <ol>
    {#each ROUTES as { title, file }}
      <li>
        <a href={`/${file}`}>{title}</a>
      </li>
    {/each}
  </ol>
</section>
