const knexConfig = require("./knexfile")
const db = require("knex")(knexConfig.development);


let input = process.argv[2]


function printPeople (result){
  output = result[0]

  console.log("Searching ...")
  console.log(`Found: ${result.length} person(s) by the name of '${input}':`)
  console.log(`${output.id}: ${output.first_name} ${output.last_name}, born ${output.birthdate
    .toISOString().slice(0,10)}`);

  db.destroy()
}


db.select('id', 'first_name', 'last_name', 'birthdate')
  .from('famous_people')
  .where('famous_people.first_name', input)
  .orWhere('famous_people.last_name', input)
.then((result) => {
  printPeople(result)
})
.catch((err) => {
  console.log(err)
  console.log("Uh oh! Spaghetti-Oh!")
  db.destroy()
})