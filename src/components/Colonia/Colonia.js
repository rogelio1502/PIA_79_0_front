import React from "react";
import axios from 'axios'
import Table from "../Table";
import Swal from "sweetalert2";
import Form from "./Form";
import Accordion from "../Accordion";
export default class Colonia extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            columns: [
                {
                    "name": 'Id'
                }, {
                    "name": 'Nombre'
                }, {
                    "name": "Municipio"
                }
            ],
            id_colapse: "collapse-colonias",
            NomColonia: "",
            IdMunicipio: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    getData = () => {
        axios.get('http://localhost:5000/api/colonia').then((response) => {
            let new_data = [];
            response.data.forEach((e) => {
                let element = []
                element.push(e.IdColonia);
                element.push(e.NomColonia);
                element.push(e.IdMunicipio);

                new_data.push(element);
            })
            this.setState({data: new_data})
        }).catch((err) => {
            alert("Error al obtener los datos")
        })
    }

    componentDidMount = () => {
        this.getData();
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
        console.log(obj);
        this.setState({NomColonia: obj[0][1]
        });
        this.setState({IdMunicipio: obj[0][2]
        });
        document.getElementById(this.state.id_colapse).classList.add('show')
    }

    handleInputChange(e) {
        const {name, value} = e.target

        this.setState({
            [name]: value.replace("  ", " ")
        })
    }
    clear = () => {
        this.setState({NomColonia: ""});
        this.setState({IdMunicipio: ""});

    }

    render() {
        return (
            <div className="container-md mt-3">
                <h2>Colonia</h2>

                <div>
                    <Accordion id_colapse={
                            this.state.id_colapse
                        }
                        form={<Form
                            clear={
this.clear}
                        NomColonia={
                            this.state.NomColonia
                        }
                        IdMunicipio={
                            this.state.IdMunicipio
                        }
                        handleInputChange={
                            this.handleInputChange
                        }>
                        </Form>}></Accordion>
                    <div className="col-md-12 mt-2">
                        <button className="btn btn-secondary"
                            onClick={
                                this.getData
                        }>Refrescar</button>
                    </div>
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
