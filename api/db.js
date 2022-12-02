import mysql from "mysql"

export const db = mysql.createConnection({
    host: "bdlaura.c6ysxerdawbm.us-east-2.rds.amazonaws.com",
    user: "root",
    password: "root1234",
    database: "crud2"
})