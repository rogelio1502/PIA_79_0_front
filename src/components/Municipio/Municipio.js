import React from "react";
import Table from "../../Table";
import axios from 'axios'
export default class Municipio extends React.Component {
    state = {
        data: [],
        columns: [
            {
                "name": 'Id'
            }, {
                "name": 'Nombre'
            }
        ]
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/api/municipio').then((response) => {
            let new_data = [];
            response.data.forEach((e) => {
                let element = []
                element.push(e.IdMunicipio);
                element.push(e.NomMunicipio);
                
                new_data.push(element);
            })
            this.setState({data: new_data})
        }).catch((err) => {
            alert("Error al obtener los datos")
        })
    }
    render() {
        return (<div className="container-md mt-3">
        Municipio
        <div> 
            <Table columns={
                    this.state.columns
                }
                data={
                    this.state.data
            }></Table>
        </div>
    </div>)
    }
    
}
