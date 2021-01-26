import {getAxiosInstanceApi} from './api'

export const uploadUserPhoto = (photo, callback) =>{
    getAxiosInstanceApi().post("uploadUserPhoto",photo)
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};