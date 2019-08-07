/* eslint-env node */
const fs = require('fs-extra')
const path = require('path')
const globby = require('globby')
const titleCase = require('title-case')

const TITLE_REGEXP = /^\d+-(.+)$/
const FILE_REGEXP = /\/(.*?\.svelte)$/

const globCwd = path.join(process.cwd(), 'src')

module.exports = () => {
  return Promise.all([
    globby(['exercises/*.svelte', '!exercises/*-extra*.svelte'], {
      cwd: globCwd,
    }),
    globby(['solutions/*.svelte', '!solutions/*-extra*.svelte'], {
      cwd: globCwd,
    }),
  ])
    .then(([exercises, solutions]) => {
      return solutions.map(solution => {
        const [, solutionFile] = solution.match(FILE_REGEXP)
        const exercise = exercises.filter(file => file.endsWith(solutionFile))
        return {
          solution,
          exercise: exercise[0],
        }
      })
    })
    .then(files =>
      files.map(({ exercise, solution }) => {
        const baseFile = path.basename(solution, '.svelte')
        const [, title] = baseFile.match(TITLE_REGEXP)
        return `{
          title: '${titleCase(title)}',
          file: '${baseFile}',
          ${exercise ? `Exercise: () => import ('./${exercise}'),` : ''}
          ${solution ? `Solution: () => import ('./${solution}'),` : ''}
        }`
      }),
    )
    .then(exerciseList =>
      fs.writeFile(
        './src/exercise-list.js',
        `export const EXERCISES = [${exerciseList.join(',\n')}]`,
      ),
    )
}
