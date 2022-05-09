import React from "react";
import axios from "axios";
import Table from '../Table'
import Swal from "sweetalert2";
import Accordion from "../Accordion";
import Form from "./Form";
export default class Proveedor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
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
                    "name": "Calle y Número"
                }, {
                    "name": "Colonia"
                }, {
                    "name": 'CP'
                }
            ],
            id_colapse: "collapse-proveedor",
            Nombre: "",
            IdProveedor: 0,
            FecRegistro: "",
            Tel: "",
            CP: "",
            CalleN: "",
            IdColonia: 0
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e) {
        const {name, value} = e.target

        this.setState({
            [name]: value.replace("  ", " ")
        })
    }

    handleSubmit(e){
        e.preventDefault()
        let IdProvedor = this.state.IdProveedor;
        let Nombre = this.state.Nombre;
        let FecRegistro = this.state.FecRegistro;
        let CP = this.state.CP;
        let Tel = this.state.Tel;
        let CalleN = this.state.CalleN;
        let IdColonia = e.target.IdColonia.value;
        console.log(CP);
        let json = {
            Nombre : Nombre,
            FecRegistro : FecRegistro,
            CP : CP,
            Tel : Tel,
            CalleN : CalleN,
            IdColonia : IdColonia,

        }
        console.log(json);
        if(IdProvedor === 0 ){
            axios.post('http://localhost:5000/api/proveedor',json).then(
                (response)=>{
                    console.log(response);
                    this.getData();
                    this.clear()
                    Swal.fire({
                        icon : "success",
                        title : "Se ha agregado al Proveedor de forma exitosa."
                    })
                }
            ).catch(
                (err)=>{
                    console.log(err);
                    Swal.fire({
                        icon : "error",
                        title : "Ha ocurrido un error al tratar de agregar a un Proveedor."
                    })
                }
            )
        }else if(IdProvedor > 0){
            axios.put('http://localhost:5000/api/proveedor/' + IdProvedor, json).then(
                (response)=>{
                    console.log(response);
                    this.getData();
                    this.clear();
                    Swal.fire({
                        icon : "success",
                        title : "Se ha editado al Proveedor de forma exitosa."
                    })
                }
            ).catch(
                (err)=>{
                    console.log(err);
                    Swal.fire({
                        icon : "error",
                        title : "Ha ocurrido un error al tratar de editar al Proveedor."
                    })
                }
            )
        }
    }

    getData = () => {
        axios.get('http://localhost:5000/api/proveedor').then((response) => {
            let new_data = [];
            response.data.forEach((e) => {
                let element = []
                element.push(e.IdProveedor);
                element.push(e.Nombre);
                element.push(e.FecRegistro.substr(0, 10));
                element.push(e.Tel);
                element.push(e.CalleN);
                element.push(e.IdColonia);
                element.push(e.CP);
                new_data.push(element);
            })
            this.setState({data: new_data})
        }).catch((err) => {
            alert("Error al obtener los datos")
        })
    }

    componentDidMount = async () => {
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
                axios.delete('http://localhost:5000/api/proveedor/' + id).then(
                    (response)=>{
                        console.log(response);
                        Swal.fire({title: "Tarea Completada", icon: "success"})
                        this.getData();
                    }
                ).catch(
                    (err)=>{
                        console.log(err);
                        Swal.fire({title: "Ha ocurrido un error al eliminar el Proveeedor.", icon: "error"})
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
        this.setState({IdProveedor: obj[0][0]
        });
        this.setState({Nombre: obj[0][1]
        });
        this.setState({FecRegistro: obj[0][2]
        });
        this.setState({Tel: obj[0][3]
        });
        this.setState({CalleN: obj[0][4]
        });
        this.setState({IdColonia: obj[0][5]
        });
        this.setState({CP: obj[0][6]
        });

        document.getElementById(this.state.id_colapse).classList.add('show')
    }

    clear = () => {
        this.setState({IdProvedor: ""});
        this.setState({Nombre: ""});
        this.setState({FecRegistro: ""});
        this.setState({Tel: ""});
        this.setState({CalleN: ""});
        this.setState({IdColonia: ""});
        this.setState({CP: ""});
    }
    render() {
        return (
            <div className="container-md mt-3">

                <h2 class="text-center">Proveedor</h2>

                <div>
                    <Accordion id_colapse={
                            this.state.id_colapse
                        }
                        form={<Form
                            Nombre={
this.state.Nombre}
                        Tel={
                            this.state.Tel
                        }
                        IdColonia={
                            this.state.IdColonia
                        }
                        IdProveedor = {
                            this.state.IdProveedor
                        }
                        CalleN={
                            this.state.CalleN
                        }
                        CP={
                            this.state.CP
                        }
                        FecRegistro={
                            this.state.FecRegistro
                        }
                        handleSubmit = {
                            this.handleSubmit
                        }
                        handleInputChange={
                            this.handleInputChange
                        }
                        clear={
                            this.clear
                        }>
                        </Form>}></Accordion>
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <button className="btn btn-success"
                                onClick={
                                    this.getData
                            }>Refrescar</button>
                        </div>
                        <div className="col-md-12 mt-2">
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

                </div>
            </div>
        )
    }
}
