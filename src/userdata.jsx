import { useEffect, useState } from 'react'
import { Usercon } from './MainStyle/style';


const Mockdata = () => {
  
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    const fetchUsers= async ()=>  {
        try { const respons= await fetch("https://jsonplaceholder.typicode.com/users");

            const data= await respons.json();
            setUsers(data);}
             catch (error) {console.error("malumot topilmadi");}}
             fetchUsers();}, []);
  
  
  
    return (

    <div>
        <h1>Users list</h1>
        <Usercon>
        {
            users.map((users)=> (<li key={users.name}>
                {users.phone}</li>

                ))
           

        }
        </Usercon>
    </div>


    
  )
}
export default Mockdata;