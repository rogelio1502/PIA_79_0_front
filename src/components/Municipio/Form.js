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
                        <input className="form-control" name="NomMunicipio" required
                            value={
                                this.props.NomMunicipio
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
