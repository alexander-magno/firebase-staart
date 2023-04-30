import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

export const UserProfile = () => {
    const { currentUser, logOut } = useAuth();
    const navigate = useNavigate();


    async function handleLogout(){
        try{
            await logOut()
            navigate("/")
        } catch(error) {
            alert('error ao sair da conta')
        }
    }

    return (
        <div className="container">
            <div className="header">
            <h1>Perfil do usuario</h1>
            <button><Link to="/home">Home</Link></button>
            <button onClick={handleLogout}>Logout</button>
            
        </div>

            

            <table>
                <thead>
                    <tr>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{currentUser.email}</td>
                        <td> <Link to="/update-profile">Atualizar perfil</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}