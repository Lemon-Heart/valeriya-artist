function middlewarePipeline (context, middleware, index, debug = false) {
  if (debug) {
    console.warn(`Router middleware ${index}:`)
    console.log(middleware[index - 1])
  }
  const nextMiddleware = middleware[index]

  if (!nextMiddleware) return context.next

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1, debug)
    nextMiddleware({ ...context, nextMiddleware: nextPipeline })
  }
}

export default middlewarePipeline
