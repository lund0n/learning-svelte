<script>
  let name = 'world'

  function changeName({ target: { value } }) {
    name = value
  }
</script>

<div>
  <label>
    Name:
    <input
      type="text"
      value={name}
      on:input={changeName}
      placeholder="unknown" />
  </label>
  <h2 data-testid="greeting">Hello, {name || 'unknown'}!</h2>
</div>
