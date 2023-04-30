import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ForgotPassword = () => {
    const navigate = useNavigate()
    const {resetPassword} = useAuth()
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleSubmit(element){
        element.preventDefault();

        setLoading(true);
        try {
            await resetPassword(email);
            alert('E-mail enviado com sucesso !!!')
            navigate("/login")
        } catch {
            alert('Ocorreu um erro ao resetar sua senha.')
        }
        setLoading(false);
    }

    return (
        <div className="container">
            <h1>Redefina sua senha:</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(element) => setEmail(element.target.value)}></input>
                <button className="button-block">Recuperar senha</button>
            </form>
            <div className="center">
                <div>
                <p>Já tem uma conta ?<Link to="/">Entrar</Link></p>
                <p>Não tem uma conta ?<Link to="/singup">Cadastre-se</Link></p>
                </div>
            </div>
        </div>
        
    )
}