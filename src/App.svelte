<script>
  import { onDestroy } from 'svelte'
  import Navaid from 'navaid'
  import CombinedView from './CombinedView.svelte'
  import ExerciseView from './ExerciseView.svelte'
  import Toc from './Toc.svelte'
  import NotFound from './NotFound.svelte'
  import { ROUTES } from './routes'

  let Route,
    params = {}

  const updateRoute = (nextRoute, nextParams = {}) => {
    params = nextParams
    Route = nextRoute
  }

  const onMatch = fn => params => {
    const [match] = ROUTES.filter(({ file }) => file === params.file)
    if (match) {
      fn(match)
    } else {
      updateRoute(NotFound)
    }
  }

  const appendToLinks = (links, text, file) => ({
    ...links,
    homeTitle: 'Combined View',
    homeFile: file,
    prevFile: links.prevFile && `${links.prevFile}${text}`,
    nextFile: links.nextFile && `${links.nextFile}${text}`,
  })

  const router = Navaid('/', () => updateRoute(NotFound))
    .on('/', () => updateRoute(Toc))
    .on(
      '/:file',
      onMatch(match => {
        updateRoute(CombinedView, match)
      }),
    )
    .on(
      '/:file/exercise',
      onMatch(match => {
        updateRoute(ExerciseView, {
          title: `${match.title} (exercise)`,
          Exercise: match.Exercise,
          links: appendToLinks(match.links, '/exercise', match.file),
        })
      }),
    )
    .on(
      '/:file/solution',
      onMatch(match => {
        updateRoute(ExerciseView, {
          title: `${match.title} (solution)`,
          Exercise: match.Solution,
          links: appendToLinks(match.links, '/solution', match.file),
        })
      }),
    )
    .listen()

  onDestroy(router.unlisten)
</script>

<style>
  main {
    background-color: white;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
  }
</style>

<main>
  <svelte:component this={Route} {...params} />
</main>
