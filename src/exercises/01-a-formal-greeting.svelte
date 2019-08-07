<script>
  // 01-a-formal-greeting.svelte
  // Modify the code so that the value in the input is
  // the person addressed in the greeting.
  // (e.g., if the value in the input is "world", then the greeting should say "Hello, world!")
  // 1. Attach the "name" variable to the input.
  //     Docs: https://svelte.dev/docs#Attributes_and_props
  // 2. Create a function that accepts an event object, and assigns the
  //     value of the input element to the name variable.
  // 3. Create an event handler that sets the name variable to the input element's
  //     value when the input event is triggered on the input element.
  //     Docs: https://svelte.dev/docs#on_element_event
  // 4. When the name value is empty/falsy, show the greeting as
  //    "Hello, unknown!".
  //    Docs: https://svelte.dev/docs#Text_expressions
  // Extra credit:
  // Creating an event handler function to keep the name variable in sync
  // with the input element seems tedious. Is there a shorter way to do it?

  let name
</script>

<div>
  <label>
    Name:
    <input type="text" placeholder="unknown" />
  </label>
  <h2 data-testid="greeting">Hello, {name}!</h2>
</div>

<!--
    Hints:
    1. You can assign the value of name to the input via the 
        value attribute of the input element
        (add "value={name}")
    2. Add the following function within the script block:
        function changeName({ target: { value } }) {
            name = value
        })
    3. There is a "on:event" directive that can listen to events. 
        "event" is replaced with the event type you want to listen to.
        (add "on:input={changeName}")
    4. Expression in the template can contain any JavaScript expression.
-->
