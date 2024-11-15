const connector = require("@willsofts/will-sql");

async function testdb(section="MSSQL") {
    let knsql = new connector.KnSQL();
    knsql.append("select * from EQ_GENERAL ");
    const db = connector.getDBConnector(section);
    let rs = await knsql.executeQuery(db);
    console.log("rs",rs);
    db.close();
}
let section = "MSSQL2";
let args = process.argv.slice(2);
if(args.length>0) section = args[0];
testdb(section);
