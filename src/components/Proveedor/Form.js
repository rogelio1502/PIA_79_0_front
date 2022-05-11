import React from "react";
import axios from "axios";

export default class Form extends React.Component {
    state = {
        data: []
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
            alert("Error al obtener los datos de las colonias")
        })
    }

    render() {
        return (
            <>

                <div>
                    <div>
                        <button className="btn btn-warning"
                            onClick={
                                this.props.clear
                        }>
                            Limpiar
                        </button>
                    </div>
                    <form onSubmit={
                        this.props.handleSubmit
                    }>
                        <label>Nombre</label>
                        <input className="form-control" name="Nombre" required maxLength="50"
                            value={
                                this.props.Nombre
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <label>Telefono</label>
                        <input className="form-control" name="Tel" maxLength="10"
                            value={
                                this.props.Tel
                            }
                            onChange={
                                this.props.handleInputChange
                            }
                            required></input>
                        <label>Calle Y Número</label>
                        <input className="form-control" name="CalleN" maxLength="50"
                            value={
                                this.props.CalleN
                            }
                            onChange={
                                this.props.handleInputChange
                            }
                            required></input>
                        <label>Colonia</label>
                        <select name="IdColonia" className="form-select">
                            <optgroup> {
                                this.state.data.map((e) => {
                                    return <option value={
                                        e[0]
                                    }>
                                        {
                                        e[1]
                                    }</option>
                            })
                            } </optgroup>
                        </select>
                        <label>Código Postal</label>
                        <input className="form-control" name="CP" maxLength="5"
                            value={
                                this.props.CP
                            }
                            onChange={
                                this.props.handleInputChange
                            }
                            required></input>
                        <label>Fecha de Registro</label>
                        <input type="date" required name="FecRegistro" className="form-control"
                            value={
                                this.props.FecRegistro
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <input type="hidden" name="IdProveedor"
                            value={
                                this.props.IdProveedor
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <br></br>
                        <input type="submit" className="btn btn-success" value="Guardar"></input>
                    </form>
                </div>
            </>
        )
    }
}
