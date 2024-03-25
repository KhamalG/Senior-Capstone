import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const styles = {};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e) => {
        e.preventDefault()

        const result = await axios.post('http://localhost:3050/api/auth', {
            email: email,
            password: password,
        });
        localStorage.setItem('token', result.data.token);
        localStorage.setItem('user', result.data.user._id);
        setNavigate(true);
    }

    if (navigate === true) {
        return <Navigate to="/home"/>
    }

    return (
        <div style={styles.loginBody}>
          <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
              <h1 style={styles.header}>Please sign in</h1>
              <div className="form-floating">
                    <label for="floatingInput" style={styles.label}>Email Address</label>
                    <input type="email"  id="floatingInput" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}
                    style={styles.text}
                    />
                </div> 
                <div className="form-floating">
                    <label for="floatingPassword"  style={styles.label}>Password</label>
                    <input type="password" id="floatingPassword" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    style={styles.text}
                    />
                </div>
              <button  type="submit" style={styles.button}>Sign in</button>
            </form>
          </main>
        </div>
    );
}
  
  export default Login;
  