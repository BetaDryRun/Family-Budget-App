import axios from "axios";
import { useToken } from "native-base";
import {baseUrl} from './config'

const header = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic',
    'Accept': 'application/json'
}

export const postCall=({action, body})=>{
    try{
        header['Authorization']='Basic '+accessToken;
        let url = baseUrl+action;
        const res = axios.post(url,body,{headers: headers});
    }
    catch(error){
        console.log("There was some error : "+error)
    }
}