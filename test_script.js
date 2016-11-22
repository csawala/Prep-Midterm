const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function printPeople (result, input){
  output = result.rows[0]

  console.log("Searching ...")
  console.log(`Found: ${result.rows.length} person(s) by the name of '${input}':`)
  console.log(`${output.id}: ${output.first_name} ${output.last_name}, born ${output.birthdate.toISOString().slice(0,10)}`);
}

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  let input = process.argv[2]
  let search = `SELECT id, first_name, last_name, birthdate
                FROM famous_people
                WHERE $1::text = first_name OR $1::text = last_name;`

  client.query(search, [input], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }

    printPeople(result, input)

    client.end();
  });
});