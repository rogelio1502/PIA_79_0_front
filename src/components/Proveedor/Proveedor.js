import React from "react";
import axios from "axios";
import Table from '../../Table'
export default class Proveedor extends React.Component {
    state = {
        data: [],
        columns: [
            {
                "name": 'Id'
            }, {
                "name": 'Nombre'
            }, {
                "name": 'Fecha de Registro'
            }, {
                "name": 'Telefono'
            }
        ]
    }
    componentDidMount = () => {
        axios.get('http://localhost:5000/api/proveedor').then((response) => {
            let new_data = [];
            response.data.forEach((e) => {
                let element = []
                element.push(e.IdProveedor);
                element.push(e.Nombre);
                element.push(e.FecRegistro);
                element.push(e.Tel);
                new_data.push(element);
            })
            this.setState({data: new_data})
        }).catch((err) => {
            alert("Error al obtener los datos")
        })
    }
    render() {
        return (<div className="container-md mt-3">
            Proveedor
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
