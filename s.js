/*import fs from 'fs'
const first=fs.readFileSync('./content/f1.txt', 'utf-8')
const second=fs.readFileSync('./content/f2.txt', 'utf-8')
console.log(first)
console.log(second)*/
import fs from'fs'
fs.writeFile('./content/f1.txt','shall we meet', (err, data)=>{
    if(err){
        console.log(err)
        return
    }
})
