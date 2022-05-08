import React from "react";

export default class Table extends React.Component {
    componentDidMount = () => {
        
    }

    
    
    render() {
        let id =  0;
        return (<>
            <table className="table">
                <thead>
                    <tr>{
                        this.props.columns.map((e, i) => {
                            return <th scope="col"
                                key={
                                    e.name
                            }>{e.name}</th>
                    })
                    }<th>Acciones</th></tr>
                </thead>
                <tbody>{
                    this.props.data.map((e, i) => {
                        return <tr key={i}>{
                        }
                            {
                            e.map((x, i) => {
                                if(i == 0){
                                    id = x;
                                }
                                return <td key={i}> {x}</td>
                        })
                        }<td><div>
                            <button onClick={this.props.delete.bind(this, id)}>Eliminar</button>
                            <button onClick={this.props.update.bind(this, id)}>Actualizar</button>
                            </div></td></tr>
                })
                }</tbody>
            </table>
        </>);
    }
}
