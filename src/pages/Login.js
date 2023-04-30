import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import {useNavigate, Link} from "react-router-dom" 

export const Login = () => {
    const {singIn} = useAuth()
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmitLogin(element){
        element.preventDefault();

        setLoading(true);

        if(password.length < 6){
            alert('Sua senha deve ter pelo menos 6 caracteres')
            setLoading(false);
            return
        }
        try {
            await singIn(email, password)
            navigate("/home")
        } catch(err){
            alert("Ocorreu um erro ao efetuar o login")
        }

        setLoading(false);
    }

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
                <label>E-Mail</label>
                    <input 
                        type="email" autoComplete="none" placeholder="Digite seu e-mail"
                        value={email} onChange={(element) => setEmail(element.target.value)}
                    >   
                    </input>
                <label>Password</label>
                    <input 
                        type="password" autoComplete="none" placeholder="Sua senha aqui"
                        value={password} onChange={(element) => setPassword(element.target.value)}
                    >   
                    </input>
                <button disabled={loading} className="button-block" type="submit">Entrar</button>
            </form>
            <div className="center">
                <div>
                <p>Esqueceu sua senha ?<Link to="/forgot-password">Redefinir</Link></p>
                <p>Não tem uma conta ?<Link to="/singup">Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}