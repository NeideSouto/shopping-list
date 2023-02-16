
import Form from './components/Form'
import ElementList from './components/ElementList'
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const LOCAL_STORAGE_KEY = "elements";
  const [elements, setElements] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResults]=useState([]);

  const addElements = (element) =>{
    let id=1;
    if(elements.length>0){
      id = elements[0].id+1
    }    
    setElements([{id,...element},...elements])
  };

  const removeElement = (id) =>{
    const newElementList =  elements.filter((element)=>{
      return element.id !==id;
    });

    setElements(newElementList);
  }

  const searchHandler = (SearchTerm) => {
    setSearchTerm(SearchTerm);
    if(SearchTerm!==""){
      const newElementList = elements.filter((element)=>{
        return Object.values(element)
          .join(" ")
          .toLowerCase()
          .includes(SearchTerm
          .toLowerCase()
        );
      });
      setSearchResults(newElementList);
    }
    else{
      setSearchResults(elements);
    }
  }

  useEffect (()=>{
    const retriveElements = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveElements) setElements(retriveElements);
  }, []);

  useEffect (()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(elements));
  }, [elements]);

  
/*
  const completeElement = (id) =>{
    let updatedElements = elements.map((element) =>{
    if(element.id === id){
      element.completed = !element.completed
    }
    return element
  })
  setElements(updatedElements)
  }*/

  return (
    <div className="app">
      <h1>Adicionar produto</h1>
      <Form addElements={addElements}/>        
      <ElementList 
        elements = {searchTerm.length < 1 ? elements : searchResult} 
        getElementId={removeElement}
        term={searchTerm}
        searchKeyword={searchHandler}
      />      
    </div>
  );
}

export default App;