import { render, fireEvent, waitFor } from '@testing-library/svelte'
import Exercise from '../solutions/01-a-formal-greeting.svelte'
// import Exercise from '../exercises/01-a-formal-greeting.svelte'

test('defaults to world', async () => {
  const { getByText } = render(Exercise)
  expect(getByText('Hello, world!')).toBeInTheDocument()
})

test('changing the name updates the greeting', async () => {
  const { getByLabelText, getByTestId } = render(Exercise)
  const input = getByLabelText(/name/i)

  fireEvent.input(input, { target: { value: 'Bob' } })

  await waitFor(() => {
    expect(getByTestId('greeting')).toHaveTextContent('Hello, Bob!')
  })
})

test('name defaults to "unknown" when input is empty', async () => {
  const { getByLabelText, getByTestId } = render(Exercise)
  const input = getByLabelText(/name/i)

  fireEvent.input(input, { target: { value: '' } })

  await waitFor(() => {
    expect(getByTestId('greeting')).toHaveTextContent('Hello, unknown!')
  })
})
