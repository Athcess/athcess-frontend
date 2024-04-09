import axios from "axios";

export const signup = async (e) =>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/users/signup/', {
            data : e
});
        console.log(response);
    } catch(error){
        console.log(error);
    }
}

export const signin = async (e) =>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/users/signin/', { data : e });
        console.log(response);
    } catch(error){
        console.log(error);
    }
}