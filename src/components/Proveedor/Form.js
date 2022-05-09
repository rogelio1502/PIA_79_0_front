import React from "react";


export default class Form extends React.Component {


    render() {
        return (
            <>

                <div>

                    <form onSubmit={
                        this.sendData
                    }>
                        <label>Nombre</label>
                        <input className="form-control" name="Nombre" required
                            value={
                                this.props.Nombre
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <label>Telefono</label>
                        <input className="form-control" name="Tel"
                            value={
                                this.props.Tel
                            }
                            onChange={
                                this.props.handleInputChange
                            }
                            required></input>
                        <label>Calle Y Número</label>
                        <input className="form-control" name="CalleN"
                            value={
                                this.props.CalleN
                            }
                            onChange={
                                this.props.handleInputChange
                            }
                            required></input>
                        <label>Colonia</label>
                        <input className="form-control" name="IdColonia"
                            value={
                                this.props.IdColonia
                            }
                            onChange={
                                this.props.handleInputChange
                            }
                            required></input>
                        <label>Código Postal</label>
                        <input className="form-control" name="CP"
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
                        <br></br>
                        {/*<input type="submit" className="btn btn-success" value="Guardar"></input> */} </form>
                </div>
            </>
        )
    }
}
