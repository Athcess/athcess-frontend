import axios from "axios";

export const signup = async (e) =>{
    try{
        const response = await axios.post('', { data : e });
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

export const signin = async (e) =>{
    try{
        const response = await axios.post('', { data : e });
        console.log(response);
    } catch(error){
        console.log(error);
    }
}