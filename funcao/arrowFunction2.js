function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}
new Pessoa

//O 'this' não varia em uma arrow function!
