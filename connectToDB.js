const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
class User{
    constructor(name, age, number){
        this.name=name;
        this.age = age;
        this.number = number;
    }

}

(async() =>
{
    const db = await open({
        filename: 'database.db',
        driver: sqlite3.Database
    })
    await db.exec( `CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT,
        name NVARCHAR(15),
        number NVARCHAR(12)
        )` )
    await db.exec(`INSERT INTO Users VALUES (NULL, 'alex', '87768221419')`)

    const result = await db.get('SELECT * FROM Users WHERE name = ?', 'alex')
    console.log(result);
    await db.close()
})();
    // CREATE
    //await db.exec('CREATE TABLE tbl (col TEXT)')
    //INSERT
    //await db.exec('INSERT INTO tbl VALUES ("asd")')

    //SELECT ONE
    //const result = await db.get('SELECT col FROM tbl WHERE col = ?', 'test')
    //const result = await db.get('SELECT col FROM tbl WHERE col = ?', ['test'])

    //SELECT MANY
    //const result = await db.all('SELECT col FROM tbl')

    //INSERT
    // const result = await db.run(
    //     'INSERT INTO tbl (col) VALUES (?)',
    //     'foo'
    //   )

    //UPDATE
    // const result = await db.run(
    //     'UPDATE tbl SET col = ? WHERE col = ?',
    //     'foo',
    //     'test'
    //   )

    //CLOSE CONNECTION TO DB
    //await db.close()