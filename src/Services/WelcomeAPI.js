import axios from "axios";
import Cookies from 'js-cookie'


export const signup = async (e) =>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/users/signup/', 
            {
                username: e.username,
                first_name: e.first_name,
                last_name: e.last_name,
                role: e.role,
                password: e.password,
                confirm_password: e.confirm_password,
                age: e.age,
                position: e.position,
                birth_date: e.birth_date,
                hometown: e.hometown,
                education: e.education[1] + ' ' + e.education[0] ,
                description: "hi", //
                tier: false //
            }
);
        console.log(response);
        //Cookies.set('token', response.data.access_token)
        return response.data
    } catch(error){
        console.log(error);
    }
}

export const signin = async (e) =>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/users/signin/', 
        { 
            username: e.username,
        password: e.password 
    });
        console.log(response);
        Cookies.set('auth_token', response.data.access_token)
        return response.data
    } catch(error){
        console.log(error);
    }
}