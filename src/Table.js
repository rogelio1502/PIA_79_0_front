import React from "react";

export default class Table extends React.Component {
    componentDidMount = () => {
        
    }
    render() {
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
                    }</tr>
                </thead>
                <tbody>{
                    this.props.data.map((e, i) => {
                        return <tr key={i}>{
                        }
                            {
                            e.map((x, i) => {
                                return <td key={i}> {x}</td>
                        })
                        }</tr>
                })
                }</tbody>
            </table>
        </>);
    }
}
