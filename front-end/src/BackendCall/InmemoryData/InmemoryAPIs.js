import {storeData, readData} from './InmemoryCalls'
import {USERS} from './STORAGE_KEY'

export const registerUser = async(user) => {
    console.log("In function :"+user)
    let users = await readData(USERS);
    console.log("Got Data: "+users)
    console.log(users===undefined)
    if(users===null || users===undefined){
        users=[];
    }
    users.push(user);
    await storeData(USERS, users);
}