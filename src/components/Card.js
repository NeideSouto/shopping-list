import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

const Card = (props) => {
    const {id, produto, quantidade, prioridade} = props.element;
    return (
    <div  className="card">  
                    
        <div className="content">            
                
            <div>{produto}</div>
            <div>{quantidade}</div>
            <div style = {{ marginRight: 10}}>{prioridade}</div>    
            <div >
                <FaTrashAlt  className="icon" style = {{ marginRight: 30}}  onClick={()=> props.clickHander(id)}/>
            </div>
            
        </div>
        
    </div>
    )
}
export default Card;
