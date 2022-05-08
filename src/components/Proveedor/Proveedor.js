import React from "react";
import axios from "axios";
import Table from '../../Table'
import Swal from "sweetalert2";
export default class Proveedor extends React.Component {
    state = {
        data: [],
        columns: [
            {
                "name": 'Id'
            },
            {
                "name": 'Nombre'
            },
            {
                "name": 'Fecha de Registro'
            },
            {
                "name": 'Telefono'
            }, {
                "name": 'CP'
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
                element.push(e.CP);
                new_data.push(element);
            })
            this.setState({data: new_data})
        }).catch((err) => {
            alert("Error al obtener los datos")
        })
    }

    delete = (id) => {
        let obj = this.state.data.filter((e) => {
            if (e[0] === id) {
                return e
            }
        })
        Swal.fire({
            icon: "warning",
            title: "¿Desea Eliminar el registro con id " + id + "?",
            showCancelButton: "Cancelar",
            showConfirmButton: "Eliminar"
        }).then((response) => {
            if (response.isConfirmed) {
                Swal.fire({title: "Tarea Completada", icon: "success"})
            }
        })

    }
    update = (id) => {
        let obj = this.state.data.filter((e) => {
            if (e[0] === id) {
                return e
            }
        })
    }
    render() {
        return (
            <div className="container-md mt-3">
                <h2>Proveedor</h2>

                <div>
                    <Table columns={
                            this.state.columns
                        }
                        data={
                            this.state.data
                        }
                        delete={
                            this.delete
                        }
                        update={
                            this.update
                    }></Table>
                </div>
            </div>
        )
    }
}
