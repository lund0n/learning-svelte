<script>
  let name = 'world'
</script>

<div>
  <label>
    Name:
    <input type="text" bind:value={name} placeholder="unknown" />
  </label>
  <h2 data-testid="greeting">Hello, {name || 'unknown'}!</h2>
</div>
