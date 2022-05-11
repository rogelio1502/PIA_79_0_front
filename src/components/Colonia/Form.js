import axios from "axios";
import React from "react";


export default class Form extends React.Component {

    state = {
        data: []
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
                        <input className="form-control" name="NomColonia" required maxLength="50"
                            value={
                                this.props.NomColonia
                            }
                            onChange={
                                this.props.handleInputChange
                        }></input>
                        <label>Municipio</label>
                        <select name="IdMunicipio" className="form-select">
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

                        <input type="hidden" name="IdColonia"
                            value={
                                this.props.IdColonia
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
