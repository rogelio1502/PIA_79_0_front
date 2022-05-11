import React from "react";


export default class Form extends React.Component {


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
                        <input className="form-control" name="NomMunicipio" required maxLength="50"
                            value={
                                this.props.NomMunicipio
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>


                        <br></br>
                        <input type="hidden" name="IdMunicipio"
                            value={
                                this.props.IdMunicipio
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <input type="submit" className="btn btn-success" value="Guardar"></input>
                    </form>
                </div>
            </>
        )
    }
}
