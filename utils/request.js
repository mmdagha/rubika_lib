import axios from "axios"
import {getRequestHeader, getApi} from "../helpers/index.js"
const request = async (body)=>{
  return await axios.post(getApi("api"),body,{
    headers:getRequestHeader()
  })
}
export default request