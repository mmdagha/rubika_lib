import axios from "axios"
import {getRequestHeader, getApi} from "../helpers/index.js"
const rubinoRequest = async (body)=>{
  return await axios.post(getApi("rubino"),body)
}
export default rubinoRequest