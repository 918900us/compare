import { useEffect, useState } from 'react'
import { Usercon, UserWrapeer } from './MainStyle/style';
import Loadingimg from "./assets/loadingrasm.gif"


const Mockdata = () => {
  
  const [users, setUsers]= useState([]);
  const [filterUsers, setFilterUsers]= useState([]);
  const [loading, setLoading]= useState(true);
  const [search, setSearch]= useState("");

  useEffect(()=>{
    const fetchUsers= async ()=>  {
        try {  setLoading(true);
           const respons= await fetch("https://jsonplaceholder.typicode.com/users");
           const data= await respons.json();
            setUsers(data);
          setFilterUsers(data)}
             catch (error) {console.error("malumot topilmadi");}
            finally{setLoading(false)}
            }
             
             fetchUsers();
            }, []);
            

             useEffect (() => { 
            const result= users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

            setFilterUsers(result);}, [search, users]);

            console.log("data", search);
          
    return (

    <div style={{height:"500px"}}>
        <h1>Users list</h1>
        <input type="text" placeholder='search...' value={search} onChange={(e)=>setSearch(e.target.value)} />
        {
          loading ? (<img src={Loadingimg} alt="loading image"/>): filterUsers.lenth>0 ? (<> <Usercon>
        {
            filterUsers.map((users) => (<UserWrapeer key={users.name}>
                {users.phone}</UserWrapeer>))}
        </Usercon></>): (<>not found</>)}
       
    </div>


    
  )
}
export default Mockdata;