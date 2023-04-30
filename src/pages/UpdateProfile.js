import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const UpdateProfile = () => {
    const {updateEmailAddress, currentUser} = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(currentUser.email);

    async function handleSubmit(element){
        element.preventDefault();

        setLoading(true);

        if(email === currentUser.email){
            setLoading(false);
            return navigate("/profile")
        }

        try {
            await updateEmailAddress(email);
            navigate('/profile')
        } catch (error){
            alert('Ocorreu um erro ao atualizar o email')
        }

        setLoading(false);
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Atualizar Perfil</h1>
                <button><Link to="/home">Home</Link></button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(element) => setEmail(element.target.value)}></input>
                <button disabled={loading} className="button-block">Atualizar</button>
            </form>
        </div>
    )
}