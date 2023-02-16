import React from 'react';

class Form extends React.Component{
    state={
        produto: "",
        quantidade: "",
        prioridade: "",
    };

   
     handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.produto ==="" || this.state.quantidade===""){
            alert("Preencha todos os campos!");
            return;
        }   
        this.props.addElements(this.state);
        this.setState({produto: "", quantidade: "", prioridade: ""})
        console.log(this.state)
    }
    render(){
    return(
        <form onSubmit={this.handleSubmit} className = "element-form">
            <div className="content-form">
                <input 
                    type="text"
                    value={this.state.produto}
                    onChange={(e)=> this.setState({produto: e.target.value})}
                    className="element-input1" 
                    placeholder="Nome do produto"
                />
                <input 
                    type="text"
                    value={this.state.quantidade}
                    onChange={(e)=> this.setState({quantidade: e.target.value})}
                    className="element-input2" 
                    placeholder="Quantidade"
                />
                <select className="element-select" value={this.state.prioridade}
                    onChange={(e)=> this.setState({prioridade: e.target.value})}>
                    <option>Prioridade</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baixa</option>
                </select>
                <button type="submit" className="button"> Adicionar</button>
                
            </div>
           
            
        </form>
    )}
}

export default Form;