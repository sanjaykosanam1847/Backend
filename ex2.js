import os from 'os'
const os1=os.userInfo()
console.log(os1)
const obj1={
    name:os.type(),
    version:os.version(),
    platform:os.platform(),
    memory:os.totalmem(),
    release:os.release()

}
console.log(obj1)
