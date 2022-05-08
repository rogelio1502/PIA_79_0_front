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
                            <>Home</>
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
