const sqlite3 = require('sqlite3');
const { open } = require('sqlite');


(async() => 
{
    const db = await open({
        filename: 'database.db',
        driver: sqlite3.Database
    })
//    await db.exec(`CREATE TABLE Users(id INTEGER PRIMARY KEY AUTOINCREMENT,
//       name NVARCHAR(15),
//        number NVARCHAR(12)
//        )` )

    // await db.exec(`INSERT INTO Users VALUES (NULL, 'alex', '87768221419')`)
    // await db.exec(`INSERT INTO Users VALUES (NULL, 'frodo', '87980930290')`)
    // await db.exec(`INSERT INTO Users VALUES (NULL, 'golum', '87804937294')`)
    // await db.exec(`INSERT INTO Users VALUES (NULL, 'gendalf', '87132404985')`)
    // await db.exec(`INSERT INTO Users VALUES (NULL, 'sam', '87394029430')`)

    // await db.exec(`CREATE TABLE Subjects(id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     name NVARCHAR(40)
    //      )` )
    //      await db.exec(`INSERT INTO Subjects VALUES (NULL, 'философия')`)
    //      await db.exec(`INSERT INTO Subjects VALUES (NULL, 'переводоведение')`)
    //      await db.exec(`INSERT INTO Subjects VALUES (NULL, 'основы языкознания')`)
    //      await db.exec(`INSERT INTO Subjects VALUES (NULL, 'история языков')`)
    //      await db.exec(`INSERT INTO Subjects VALUES (NULL, 'история древнего рима')`)


         
    // await db.exec(`CREATE TABLE Teachers(id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     name NVARCHAR(60)
    // )` )

    // await db.exec(`INSERT INTO Teachers VALUES (NULL, 'Марк Аврелий')`)
    // await db.exec(`INSERT INTO Teachers VALUES (NULL, 'Августин Блаженный')`)
    // await db.exec(`INSERT INTO Teachers VALUES (NULL, 'Туллий Варон')`)
    // await db.exec(`INSERT INTO Teachers VALUES (NULL, 'Туллий Цицерон')`)
    // await db.exec(`INSERT INTO Teachers VALUES (NULL, 'Тиберий Юлий Цезарь')`)

    
    const result = await db.all('SELECT name, number FROM Users')
    const result1 = await db.all('SELECT name FROM Subjects')
    const result2 = await db.all('SELECT name FROM Teachers')




    console.log(result);
    console.log(result1);
    console.log(result2);



    // await db.exec("Delete from users where name like '%'");
    await db.close();
})();