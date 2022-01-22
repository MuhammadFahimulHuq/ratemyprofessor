import React, { useEffect,useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'

const Profile = () => {
    const[CardInfo,setCardInfo] = useState([])
    const[Loading,setLoading] = useState(true)
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/getuser',config)
      .then(response =>{
          const data = response.data
       setCardInfo(data.user)
        setLoading(false)
      })
    }, [])
  

    return (Loading?(
        <div class="progress">
        <div class="indeterminate"></div>
    </div>
    ):(
        <div>
        <Navbar />
        
            <div class="row">
    <div class="col s4 m5">
            <div class="card">
                <div class="card-image">
                <img src="https://www.metmuseum.org/content/img/placeholders/NoImageAvailableIcon.png" />
                <span class="card-title" style={{color:'black'}}>Upload Profile Image</span>
                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                <p>Name: {CardInfo.name}</p>
                    <p>Email: {CardInfo.email}</p>
                    <form>
                    <input type="text"/>
                    <label>Qualification</label> 
                    <input type="text"/>
                    <label>University</label> 
                    <input type="text"/>
                    <label>Course</label> 
                    <p></p>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
                        </form>              
                 
                </div>
         
                </div>
         
            </div>
            <div className='col s4 s5'>
            <ul class="collection">
                <h5>Review</h5>
         <li class="collection-item avatar">
           <img src="images/yuna.jpg" alt="" class="circle"/>
           <span class="title">Title</span>
           <p>First Line</p>
    
          </li>
          <li class="collection-item avatar">
           <img src="images/yuna.jpg" alt="" class="circle"/>
           <span class="title">Title</span>
           <p>First Line</p>
    
          </li>
           </ul>
</div>
            </div>
            </div>

       
   
    )
      
    )
}

export default Profile
