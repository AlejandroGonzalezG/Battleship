import React, { useState } from "react";
import { Link } from "react-router-dom";

const estiloRow = {
	display: "grid",
    justifyContent: "center",
	marginTop: "10px",
	color: "white",
	
}

const estiloContainer2 = {
	textAlign : "center",
    color: "black"
}

const estiloH1 = {
	justifyContent: "center",
	display: "grid",
	marginBottom: "50px"
}

const estiloH2 = {
	display: "grid",
	justifyContent: "center",
	marginBottom: "30px",
	color: "black",
}

const estiloBoton1 = {
	width: "100px",
	height: "120px",
	fontSize: "40px",
	margin: "30px",
	color: "black",
	textAlign: "center",
    textDecoration: "none"
}

const estiloDiv = {
	width: "830px",
	textAlign: "center",
    marginTop: "30px",
}

const estiloLetra = {
    fontSize: "25px",
    marginTop: "30px",
}

//create your first component
const Lobby = (props) => {

	return (
		<div className="row" style={estiloRow}>	
			<div className="container2" style={estiloContainer2}>
				<h1 className="titulo mx-auto" style={estiloH1} >¡Bienvenido a Battleship!</h1>
			</div>
			<div className="contenedor" style={estiloDiv}>
				<h2 style={estiloH2}>¡Elige tu nombre jugador!</h2>
				<input type="text" placeholder="Username Player 1" onChange={props.handleChange1} style={estiloLetra}></input>				
			</div>
			<div className="container"  style={estiloDiv}>
				<Link to="/boardjuego" className="btn btn-primary" style={estiloBoton1}>¡Haz click aquí para comenzar a Jugar!</Link>
			</div>		
		</div>
	);
};

export default Lobby;