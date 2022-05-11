import React from "react";

export default class Table extends React.Component {
    componentDidMount = () => {}


    render() {
        let id = 0;
        return (
            <div className="table-responsive-md">
                <table className="table">
                    <thead>
                        <tr>{
                            this.props.columns.map((e, i) => {
                                return <th scope="col" className="text-center"
                                    key={
                                        e.name
                                }>
                                    {
                                    e.name
                                }</th>
                        })
                        }
                            <th className="text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>{
                        this.props.data.map((e, i) => {
                            return <tr key={i}>
                                {}
                                {
                                e.map((x, i) => {
                                    if (i === 0) {
                                        id = x;
                                    }
                                    return <td key={i}
                                        className="text-center">
                                        {x}</td>
                            })
                            }
                                <td>
                                    <div className="d-flex justify-content-evenly">
                                        <button className="btn btn-danger mr-2"
                                            onClick={
                                                this.props.delete.bind(this, id)
                                        }>Eliminar</button>
                                        <button className="btn btn-warning"
                                            onClick={
                                                this.props.update.bind(this, id)
                                        }>Actualizar</button>
                                    </div>
                                </td>
                            </tr>
                    })
                    }</tbody>
                </table>
            </div>
        );
    }
}
