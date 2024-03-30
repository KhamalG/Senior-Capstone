import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import styles from "../styles/styles";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e) => {
        e.preventDefault()

        // const result = await axios.post('http://localhost:3050/api/auth', {
        //     email: email,
        //     password: password,
        // });
        // localStorage.setItem('token', result.data.token);
        // localStorage.setItem('user', result.data.user._id);
        setNavigate(true);
    }

    if (navigate === true) {
        return <Navigate to="/home"/>
    }

    return (
        <div style={styles.loginBody}>
          <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
              <h1 style={styles.loginHeader}>Drive 5 Deliveries</h1>

              {/* Don't forget to add the logo here! */}
              <img src={require("../styles/images/drive5logo.jpg")} height='350' width='350' alt='Drive-5 logo' />
              
              <div className="form-floating">
                    <p>Sign in to place orders and check their status.</p>
                    <label for="floatingInput" style={styles.loginLabel}>Username: </label>
                    <input type="email"  id="floatingInput"
                    onChange={e => setEmail(e.target.value)}
                    style={styles.text}
                    />
                </div> 
                <div className="form-floating">
                    <label for="floatingPassword"  style={styles.loginLabel}>Password: </label>
                    <input type="password" id="floatingPassword"
                    onChange={e => setPassword(e.target.value)}
                    style={styles.text}
                    />
                </div>
                <br/>
              <button  type="submit" style={styles.loginButton}>Sign in</button>
            </form>
          </main>
        </div>
    );
}
  
  export default Login;
  