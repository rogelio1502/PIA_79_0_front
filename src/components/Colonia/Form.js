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
                        <input className="form-control" name="NomColonia" required
                            value={
                                this.props.NomColonia
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <label>Municipio</label>
                        <input className="form-control" name="IdMunicipio" required
                            value={
                                this.props.IdMunicipio
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
