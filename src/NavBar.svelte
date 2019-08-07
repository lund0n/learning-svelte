<script>
  export let homeTitle = 'Exercise List'
  export let homeFile = ''
  export let prevTitle = ''
  export let prevFile
  export let nextTitle = ''
  export let nextFile
</script>

<style>
  nav {
    display: flex;
  }
  nav > div {
    flex: 1 1 0%;
  }
  .toc {
    text-align: center;
  }
  .next {
    text-align: right;
  }
</style>

<nav>
  <div class="prev">
    {#if prevFile}
      &lArr;
      <a href={`/${prevFile}`}>{prevTitle}</a>
    {/if}
  </div>
  <div class="toc">
    &uArr;
    <a href={`/${homeFile}`}>{homeTitle}</a>
  </div>
  <div class="next">
    {#if nextFile}
      <a href={`/${nextFile}`}>{nextTitle}</a>
      &rArr
    {/if}
  </div>
</nav>
