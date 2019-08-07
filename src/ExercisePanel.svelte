<script>
  import ExerciseNotFound from './ExerciseNotFound.svelte'
  export let Exercise = () => Promise.resolve({ default: ExerciseNotFound })

  function loadExercise() {
    return Exercise
      ? Exercise().then(loaded => loaded.default)
      : Promise.resolve(ExerciseNotFound)
  }
</script>

<style>
  div {
    flex: 1 1 0%;
    padding: 20px;
    border: solid 1px #ff3e00;
    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>

<div>
  {#await loadExercise() then LoadedExercise}
    <svelte:component this={LoadedExercise} />
  {/await}
</div>
