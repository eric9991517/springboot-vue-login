import axios from "axios";
import router from "@/router";
import {ElMessage} from "element-plus";
import "element-plus/theme-chalk/index.css";// 添加这一行

// axios.defaults.baseURL="http://localhost:8081"

const request = axios.create({
    timeout:5000,
    headers:{
        'Content-Type':"application/json;charset=utf-8"
    }
})

request.interceptors.request.use(config=>{
    config.headers['Authorization']=localStorage.getItem("token")
    return config;
})

request.interceptors.response.use(response=>{
        let res = response.data

        if(res.code===200){
            return response
        } else {
            // ElMessage.Message.error(res.msg ? '系統異常' :res.msg)
            ElMessage({
                type:'error',
                message: !res.msg ? '系統異常' :res.msg
            })
            return Promise.reject(response.data.msg)
        }
    }, error=>{

        if(error.response.data){
            error.message = error.response.data.msg
        }

        if(error.response.status===401) {
            router.push("/login")
        }

        ElMessage({
            type: 'error', // 注意这里是 'error'
            message: error.message,
            duration: 3000
        });
        return Promise.reject(error);
    }
)

export default request