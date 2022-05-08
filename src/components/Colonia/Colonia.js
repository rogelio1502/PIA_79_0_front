import React from "react";
import axios from 'axios'
import Table from "../../Table";

export default class Colonia extends React.Component {
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
        axios.get('http://localhost:5000/api/colonia').then((response) => {
            let new_data = [];
            response.data.forEach((e) => {
                let element = []
                element.push(e.IdColonia);
                element.push(e.NomColonia);
                
                new_data.push(element);
            })
            this.setState({data: new_data})
        }).catch((err) => {
            alert("Error al obtener los datos")
        })
    }
    render() {
        return (<div className="container-md mt-3">
        Colonia
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
