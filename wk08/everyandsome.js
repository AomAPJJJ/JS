const names = ["alice", "John", "Bob", "Ann"]

const isStartWithALetter = names.every((name) =>
  name.toLowerCase().startsWith("a")
)

console.log(isStartWithALetter)
//atleast start with a

console.log("-------------------------------")

const SomeStartWithALetter = names.some((name) =>
  name.toLowerCase().startsWith("a")
)

console.log(SomeStartWithALetter)

console.log('--------------------------------------------')




















