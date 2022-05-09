import React from "react";
import Table from "../Table";
import axios from 'axios'
import Swal from "sweetalert2";
import Accordion from "../Accordion";
import Form from "./Form";

export default class Municipio extends React.Component {
    

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            columns: [
                {
                    "name": 'Id'
                }, {
                    "name": 'Nombre'
                },

            ],
            id_colapse: "collapse-municipios",
            NomMunicipio: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
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
        this.setState({NomMunicipio: obj[0][1]
        });
        document.getElementById(this.state.id_colapse).classList.add('show')

    }
    handleInputChange(e) {
        const {name, value} = e.target

        this.setState({
            [name]: value.replace("  ", " ")
        })
    }

    add = () => {}
    render() {
        return (
            <div className="container-md mt-3">
                <h2>Municipio</h2>

                <div>
                    <Accordion id_colapse={
                            this.state.id_colapse
                        }
                        form={<Form
                            NomMunicipio={
                                this.state.NomMunicipio
                            }
                            handleInputChange={
                                this.handleInputChange
                        }>
                        </Form>}></Accordion>
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
