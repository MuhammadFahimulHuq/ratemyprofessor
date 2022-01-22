import React, { useState,useEffect } from 'react'
import axios from 'axios'

const FacultyCard = () => {
  const[CardInfo,setCardInfo] = useState([])
  const[Loading,setLoading] = useState(true)
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/faculities')
    .then(response =>{
      const data = response.data
      const cardData= data.map((faculty) =>{
      return(
        <div class="col s5 m3">
        <div class="card">
          <div class="card-image">
            <img src="https://www.metmuseum.org/content/img/placeholders/NoImageAvailableIcon.png" />
            <span class="card-title" style={{fontWeight:'600',color:'black'}}>{faculty.name}</span>
          </div>
      
          <div class="card-action">
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    
      ) 
      })
    
      setCardInfo(cardData)
      setLoading(false)
    })
  }, [])


    return (
      Loading?(<div>
        <p>..loading</p>
      </div>):(
       
          <div class="row">
              {CardInfo}
          </div>
        
      )
      
    )
}

export default FacultyCard
