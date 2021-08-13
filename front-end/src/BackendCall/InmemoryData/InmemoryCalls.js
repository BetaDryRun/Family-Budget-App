import { AsyncStorage } from 'react-native'

export const storeData = async(STORAGE_KEY,data) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY,toString(data))
        console.log("Successful save in "+ STORAGE_KEY)
    } catch (e) {
        console.log('Failed to save the data to the storage: '+e)
    }
}


export const readData = async (STORAGE_KEY) => {
    try {
        const userAge = await AsyncStorage.getItem(STORAGE_KEY)
        console.log("Successfully fetched!")
    } catch (e) {
        console.log('Failed to fetch the data from storage: '+e)
    }
}