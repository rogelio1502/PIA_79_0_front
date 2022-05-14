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
            IdMunicipio: 0,
            IdColonia: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

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
                axios.delete('http://localhost:5000/api/colonia/' + id).then((response) => {
                    console.log(response);
                    Swal.fire({title: "Tarea Completada", icon: "success"})
                    this.getData();
                }).catch((err) => {
                    console.log(err);

                    Swal.fire({title: "Ha ocurrido un error al eliminar la Colonia", icon: "error"})
                })
            }
        })

    }
    update = (id) => {
        let obj = this.state.data.filter((e) => {
            if (e[0] === id) {
                return e
            }
        })
        this.setState({IdColonia: obj[0][0]
        });
        this.setState({NomColonia: obj[0][1]
        });
        this.setState({IdMunicipio: obj[0][2]
        });
        document.getElementById(this.state.id_colapse).classList.add('show')
    }

    handleInputChange(e) {
        const {name, value} = e.target

        if (value === " ") {
            value = ""
        }

        this.setState({
            [name]: value.replace("  ", " ")
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        let IdColonia = this.state.IdColonia;
        let IdMunicipio = e.target.IdMunicipio.value;
        let NomColonia = this.state.NomColonia;
        if (IdMunicipio === "") {
            Swal.fire({title: "Error", icon: "error", text: "Municipo no válido."})
            return
        }
        if (IdColonia === 0) {
            let json = {
                IdMunicipio: IdMunicipio,
                NomColonia: NomColonia
            }
            axios.post("http://localhost:5000/api/colonia", json).then((response) => {
                console.log(response);
                this.getData();
                this.setState({NomColonia: ""})
                this.setState({IdMunicipio: 0})
                Swal.fire({icon: "success", title: "Colonia Agregada con éxito."})
            }).catch((err) => {
                console.log(err);
                Swal.fire({icon: "error", title: "Error al agregar la Colonia."})

            })
        } else if (IdColonia > 0) {
            let json = {
                IdMunicipio: IdMunicipio,
                NomColonia: NomColonia
            }
            axios.put("http://localhost:5000/api/colonia/" + IdColonia, json).then((response) => {
                console.log(response);
                this.getData();
                this.setState({NomColonia: ""})
                this.setState({IdMunicipio: 0})
                this.setState({IdColonia: 0})
                Swal.fire({icon: "success", title: "Colonia Editada con éxito."})
            }).catch((err) => {
                console.log(err);
                Swal.fire({icon: "error", title: "Error al editar la Colonia."})

            })
        }

    }
    clear = () => {
        this.setState({NomColonia: ""});
        this.setState({IdMunicipio: ""});
        this.setState({IdColonia: 0})

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
                        IdColonia={
                            this.state.IdColonia
                        }

                        handleSubmit={
                            this.handleSubmit
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
