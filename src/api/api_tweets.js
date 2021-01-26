
import { getAxiosInstanceApi} from './api'

export const getAllTweets = (callback) =>{
    getAxiosInstanceApi().post("getAllTweet")
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};

export const newTweetRequest = (user,callback) =>{
    getAxiosInstanceApi().post("newTweet",user)
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};

export const getUsers = (callback) =>{
    getAxiosInstanceApi().get("getAllUser")
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};

export const getHashTags = (callback) =>{
    getAxiosInstanceApi().get("getAllHashTags")
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};

export const likeTweetRequest = (id, callback) => {
    getAxiosInstanceApi().get("likeTweet/"+id)
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};

export const getTweetsByUserRequest = (user, callback) => {
    getAxiosInstanceApi().post("getAllTweet", {user})
            .then(response=>{
                const data = response.data;
                callback(true,data);
            }).catch(error =>{
                callback(false,error);
            })
};