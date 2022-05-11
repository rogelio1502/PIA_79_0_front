import "./App.css";
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Proveedor from "./components/Proveedor/Proveedor";
import Municipio from "./components/Municipio/Municipio";
import Colonia from "./components/Colonia/Colonia";
import NavBar from "./components/Header/NavBar";
class App extends React.Component {
    render() {
        return (<Router>
            <div>
                <NavBar></NavBar>
                <Routes>
                    <Route exact path="/"
                        element={
                            <><h1 className="text-center h1diseno">Equipo</h1>
                            <div className="">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th>
                                        Nombre
                                        </th>
                                        <th>
                                        Matrícula
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        Torres Pasillas Rogelio
                                        </td>
                                        <td>
                                        1820938
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Castro De los Santos Mario
                                        </td>
                                        <td>
                                        1866855
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Iñiguez Porras José Imanol
                                        </td>
                                        <td>
                                        1872653
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Saldaña Rodríguez Daniel Isaí
                                        </td>
                                        <td>
                                        1604155
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Sígala Hernández Sergio Daniel
                                        </td>
                                        <td>
                                        1988828
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                            
                            </div>
                            </>
                    }></Route>
                    <Route path="/proveedor"
                        element={
                            <><Proveedor></Proveedor></>
                    }></Route>
                    <Route path="/municipio"
                        element={
                            <><Municipio></Municipio></>
                    }></Route>
                    <Route path="/colonia"
                        element={
                            <><Colonia></Colonia></>
                    }></Route>
                </Routes>
            </div>
        </Router>);
    }
}

export default App;
