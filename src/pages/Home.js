import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

export const Home = () =>{
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();

    async function handleLogout(){
        try{
            await logOut()
            navigate("/login")
        } catch(error) {
            alert('error ao sair da conta')
        }
    }
    return(
        <div className="container">
            <h1>Seja Bem Vindo</h1>
            <div className="header">
                
                <button ><Link to="/update-profile">Atualizar perfil</Link></button>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="center">
                <h2>Contexto</h2>
            </div>
            <div className="center"> 
            <p>
                    Essa pagina foi criada com intuido de treinar as habilidades adquiridas no curso de
                    "validação de usuarios" e "deploy de aplicações" com React da Plataforma Staart do Grupo Primo,
                    fiz algumas alterações nesse projeto para ficar mais pessoal, como alteração de algumas fontes, 
                    colocar algumas pequenas alterações para responsividade, um compomente footer e essa pagina home
                    Adquiri um grande conhecimento com
                    o curso principalmente na parte e autentificação com "firebase", e posteriormente estarei criando 
                    uma aplicação 100% de minha autoria.
                </p>
            </div>
        </div>
    )
}