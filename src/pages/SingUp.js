import React, {useState} from "react";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

export const SingUp = () => {
    const {singUp} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)


    async function handleSubmit(element){
        element.preventDefault();

        setLoading(true);
        if(password.length < 6){
            alert('Sua senha deve ter pelo menos 6 caracteres')
            setLoading(false);
            return
        }

        if(password !== confirmPassword){
            alert('As senha devem ser iguais')
            setLoading(false);
            return
        }

        try {
            await singUp(email, password)
        } catch{
            alert("Ocorreu um erro ao criar esse usuario")
        }
        setLoading(false);
    }


    return (
        <div className="container">
            <h2>SingUp</h2>
            <form onSubmit={handleSubmit}>
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
                <label>Password Confirmation</label>
                    <input 
                        type="password" autoComplete="none" placeholder="Confirme sua senha"
                        value={confirmPassword} onChange={(element) => setConfirmPassword(element.target.value)}
                    >
                    </input>
                <button disabled={loading} className="button-block" type="submit">SingUp</button>
            </form>
            <div className="center">
                <p>Já possui uma conta ? <Link to="/">Login</Link> </p>
            </div>
        </div>
    );
}