import React from "react";


export default class Accordion extends React.Component {

    render() {
        return(
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target={
                                "#" + this.props.id_colapse
                            }
                            aria-expanded="false"
                            aria-controls="collapseOne">
                            Formulario Agregar/Editar
                        </button>
                    </h2>
                    <div id={
                            this.props.id_colapse
                        }
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {this.props.form}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
