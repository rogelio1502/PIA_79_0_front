import React from "react";
import Table from "../Table";
import axios from 'axios'
import Swal from "sweetalert2";

export default class Municipio extends React.Component {
    state = {
        data: [],
        columns: [
            {
                "name": 'Id'
            }, {
                "name": 'Nombre'
            },

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

    add = () => {}
    render() {
        return (
            <div className="container-md mt-3">
                <h2>Municipio</h2>
                <button>Agregar</button>
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
