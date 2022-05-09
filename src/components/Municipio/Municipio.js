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
            NomMunicipio: "",
            IdMunicipio : 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getData = () => {
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

    componentDidMount = () => {
        this.getData();
    }
    delete = (id) => {
        let obj = this.state.data.filter((e) => {
            if (e[0] === id) {
                return e
            }
        })
        if(!obj){
            return
        }
        Swal.fire({
            icon: "warning",
            title: "¿Desea Eliminar el registro con id " + id + "?",
            showCancelButton: "Cancelar",
            showConfirmButton: "Eliminar"
        }).then((response) => {
            if (response.isConfirmed) {
                axios.delete('http://localhost:5000/api/municipio/' + id).then(
                    (response)=>{
                        Swal.fire({title: "Tarea Completada", icon: "success"})
                        this.getData();
                    }
                ).catch(
                    (err)=>{
                        Swal.fire({title: "Error al tratar de eliminar el Municipio", icon: "error"})
                    }
                )
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
        this.setState({IdMunicipio: obj[0][0]})
        document.getElementById(this.state.id_colapse).classList.add('show')

    }
    handleInputChange(e) {
        const {name, value} = e.target

        this.setState({
            [name]: value.replace("  ", " ")
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        let NomMunicipio = this.state.NomMunicipio;
        let IdMunicipio = this.state.IdMunicipio;
        
        if(IdMunicipio === 0){
            let json = {
                NomMunicipio: NomMunicipio
            }
            axios.post("http://localhost:5000/api/municipio", json).then((response) => {
                console.log(response);
                this.getData();
                this.setState({NomMunicipio: ""})
                Swal.fire(
                    {
                        icon : "success",
                        title : "Municipio Agregado con éxito."
                    }
                )
            }).catch((err) => {
                console.log(err);
                Swal.fire(
                    {
                        icon : "error",
                        title : "Error al tratar de agregar el Municipio."
                    }
                )
            })
        }
        else if(IdMunicipio > 0){
            let json = {
                NomMunicipio: NomMunicipio
            }
            axios.put("http://localhost:5000/api/municipio/" + IdMunicipio, json).then((response) => {
                console.log(response);
                this.getData();
                this.setState({NomMunicipio: ""})
                this.setState({IdMunicipio: 0})

                Swal.fire(
                    {
                        icon : "success",
                        title : "Municipio Editado con éxito."
                    }
                )
            }).catch((err) => {
                console.log(err);
                Swal.fire(
                    {
                        icon : "error",
                        title : "Error al tratar de editar el Municipio."
                    }
                )
            })
        }
        

    }

    clear = () => {
        this.setState({NomMunicipio: ""});
        this.setState({IdMunicipio : 0})

    }

    render() {
        return (
            <div className="container-md mt-3">
                <h2>Municipio</h2>

                <div>
                    <Accordion id_colapse={
                            this.state.id_colapse
                        }
                        form={<Form
                            clear={
this.clear}
                        NomMunicipio={
                            this.state.NomMunicipio
                        }
                        IdMunicipio={
                            this.state.IdMunicipio
                        }
                        handleInputChange={
                            this.handleInputChange
                        }
                        handleSubmit={
                            this.handleSubmit
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
