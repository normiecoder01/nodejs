const path = require("path")
const filepath = path.join("folder","students","text.txt")
console.log("filepath");

const resolevPath = path.resolve(filepath)
const extname = path.extname(filepath)
const basename = path.basename(filepath)
const dirname = path.dirname(filepath)
const parsedPath = path.parse(filepath)

console.log("resolved path = " + resolevPath +"\n"+
            "extname = " + extname + "\n" +
            "basename = " + basename + "\n" +
            "dirname = " + dirname + "\n" +
            "parsedPath = " + JSON.stringify(parsedPath, null , 2) +"\n" +
            "__dirname = " +  __dirname +"\n" +
            "__filename = " + __filename 

)
