import React, {useRef} from 'react'
import Card from './Card';
import {FaSearch} from "react-icons/fa"

const ElementList = (props) => {
    console.log(props);
    const inputEl = useRef("");
    const deleteElement = (id) =>{
        props.getElementId(id);
    };
   
    const renderElementList = props.elements.map((element)=>{
        return <Card element = {element}  clickHander = {deleteElement} key = {element.id}></Card>
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };
    return (
        <div> 
            <div>
                <input 
                    ref={inputEl}
                    type ="text" 
                    placeholder = " Pesquisar produto" 
                    className="prompt"
                    value={props.term}
                    onChange={getSearchTerm}
                />
                <FaSearch className="search-icon"></FaSearch>
            </div>
            
            <hr className="seperator"/>
            <div className="title-h3">
                <h3>Produto</h3>
                <h3>Quantidade</h3>
                <h3>Prioridade</h3>
                <h3>Apagar</h3>
            </div>
            <hr className="seperator"/>
              
            <div>
                {renderElementList.length > 0
                ? renderElementList
                : "A lista de compras esta vazia!"}
            </div>         
            
        </div>
    )
}
export default ElementList;