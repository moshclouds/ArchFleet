import HttpType from "./HttpTypes.js";


const response = (res,code, data) => {
    const status = HttpType.getStatus(code)
    const success = code>=200 && code <300
    const payLoad = {
        code,
        success,
        status,
        data
    }
    return res.status(code).json(payLoad);
}
export default response