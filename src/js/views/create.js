import React, {useEffect, useState} from 'react';

const Create = async () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

 useEffect(() => {
    async function createAgenda() {
        let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/mandoromero",
            {
                method:"POST",
               headers: {"Content-Type": "application/json"}
               body{
               name: name
               address: address
               Phone: phone number
               email: email
               }
            }
        )
        let data = response.json()
    }
    createAgenda()
 }, [])  

   
        
            
 return(
    <div></div>
 )     

   
};

export default Create;