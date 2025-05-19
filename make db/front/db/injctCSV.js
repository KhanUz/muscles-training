const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')

const csvFilePath = path.join(__dirname, './megaGymDataset.csv')
const jsonFilePath = path.join(__dirname, './megaGymDataset.json')


async function main() {

    let result = []
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            delete row['']
            delete row['rating']
            delete row['ratingDesc']

            if (
                Object.values(row).every(value => value !== '')
            ) {
                result.push(row)
            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            fs.writeFileSync(jsonFilePath, JSON.stringify(result))
        });

}



function getMuscleTypes() {
    const exercises = require('./megaGymDataset.json')
    let types = new Set()

    for (let i = 0; i < exercises.length; i++) {
        types.add(exercises[i]['muscle'])

    }
    console.log(types);

}
main()
