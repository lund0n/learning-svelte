import { EXERCISES } from './exercise-list'

export const ROUTES = EXERCISES.map((exerciseRoute, i, exerciseArray) => {
  const prev = exerciseArray[i - 1]
  const next = exerciseArray[i + 1]
  return {
    ...exerciseRoute,
    links: {
      prevTitle: prev && prev.title,
      prevFile: prev && prev.file,
      nextTitle: next && next.title,
      nextFile: next && next.file,
    },
  }
})
