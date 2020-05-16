// Implementação de um Middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

//Função para executar todos 3 middlewares e chamar o next
const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares && indice < middlewares.length && 
    middlewares[indice](ctx, () => execPasso(indice + 1))
  }
  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)