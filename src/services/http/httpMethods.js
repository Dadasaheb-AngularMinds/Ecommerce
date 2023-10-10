import { AxiosResponse, AxiosRequestConfig } from 'axios'
import instance from './httpInstance'


const validateStatus = function (status) {
    return status < 400
}

export function post(url,data,AxiosRequestConfig){
   return instance.post(url,data,{...AxiosRequestConfig,validateStatus})
}