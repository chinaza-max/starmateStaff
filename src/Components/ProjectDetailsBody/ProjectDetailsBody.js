import "./ProjectDetailsBody.css"

import React,{useState} from 'react'


export default function ProjectDetailsBody(props) {
    const [projStatus, setProjStatus] = useState("active");



  return (
    <div  className='ProjectDetailsBody'>
        <ul>
            <li> 
            <h4>Status : </h4>
            </li>
            <li>
                {
                    projStatus==="active"?   
                        <div className='active'>On going</div>
                    :
                    projStatus==="pending"?
                        <div className='pending'>Pending</div>
                    :
                        <div className='complete'>Completed</div>

                }
            </li>
        </ul>
        <ul>
            <li>
                
                <h4>Service : </h4>

            </li>
            <li>
                <p>
                  fumigation
                </p>
            </li>
        </ul> <ul>
            <li>
                <h4>Service Type : </h4>

                </li>
            <li>
                <p>
                    Subscription
                </p>
            </li>
        </ul> <ul>
            <li>
                <h4>Job description : </h4>
            </li>
            <li>
                <p> 
                    Lorem ipsum is simply dummy text of the printing and type setting 
                    industry. Lorem ipsum has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand  has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand has been the indeustry stand 
                    has been the indeustry stand has been the indeustry stand 
                </p>
            </li>

        </ul>
         <ul>
            <li> 
                <h4>Address :</h4>
            </li>
            <li>
                <p>
                7a  In BE, we usually write: John Smith, 
                23 Acacia Avenue, Harrogate,  
                </p>
            </li>
        </ul> 
        <ul>
            <li>
                <h4>Start Date :</h4>
            </li>
            <li> 
                <p>
                2/22/2020  6AM

                </p>
            </li>
        </ul>
        
        <ul>
            <li>
                <h4>Ending date :</h4>
            </li>
            <li> 
                <p>
                 2/22/2020  7PM
                </p>
            </li>
        </ul>
            

            


        
    </div>
  )
}
