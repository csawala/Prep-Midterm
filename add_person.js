const knexConfig = require("./knexfile")
const db = require("knex")(knexConfig.development);


let inFirst = process.argv[2]
let inLast = process.argv[3]
let inBirth = process.argv[4]


function selectPeople(last) {

  db.select('first_name', 'last_name', 'birthdate')
    .from('famous_people')
    .where('first_name', last)
    .orWhere('last_name', last)
    .returning(last)
  .then(function (result) {
    printPeople(result)
  })
  .catch((err) => {
    console.log("YOU BROKE ME!")
    console.log(err)
    db.destroy()
  })
}


function printPeople (result){
  output = result[0]

  console.log("Searching ...")
  console.log(`${output.first_name} ${output.last_name}, ${output.birthdate.toISOString().slice(0,10)}`);

  db.destroy()
}


function addPeople(first, last, dob) {
  db('famous_people').insert([{
    first_name: first,
    last_name: last,
    birthdate: dob
  }])
  .then(selectPeople(last))

}

addPeople(inFirst,inLast,inBirth)
