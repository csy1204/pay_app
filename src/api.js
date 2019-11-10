import axios from "axios"

// 기본 URL 설정
// BACKEND_SERVER 환경변수 존재시 대체됨
// axios.defaults.baseURL = process.env.BACKEND_SERVER || "http://10.113.69.206:7000/api"

axios.defaults.baseURL = process.env.REACT_APP_BACKEND || "http://169.56.98.100:8080/api"

// api.
export default {


    queryToGetState(params) {
        return ajax("/query", "get", params)
    },

    invokeToPutState(data) {
        return ajax("/invoke/invoke", "put", data)
    },


    getLengthByCategory(params) {
        return ajax("/recog/length", "get", params)
    },
    


}

function ajax(url, method, options) {
    if (options !== undefined) {
        var {params= {}, data = {}} = options
    } else {
        params = data = {}
    }
    console.log({url, method, params, data})

    return new Promise((resolve, reject) => {
        axios({ url, method, params, data
        }).then(res => {
            resolve(res.data)
        }, res => {
          reject(res)
        })
      })
    // try {
    //     const promise =  await axios({url, method, params, data})
    //     const status = promise.status;
    //     // console.log(promise.data)
    //     if (status === 200) {
    //         return promise.data
    //     }
    // } catch (error) {
    //     return error.message
    // }
}