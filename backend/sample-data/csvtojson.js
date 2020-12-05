const csv = require('csvtojson')
const fs = require('fs');

(async () => {
    let data = await csv().fromFile('./teams_2020.csv')
    console.log(data)

    let teams = data.map(el => {return {"name": el['Echipa'], "projectRepo": el['Adresa URL repository GIT']}})

    fs.writeFileSync('./teams_2020.json', JSON.stringify(teams))
})()