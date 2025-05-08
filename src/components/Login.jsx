



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './Login.css';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   if (!Cookies.get('email')) {
//     Cookies.set('email', 'komal@123gmail.com');
//     Cookies.set('password', '123456');
//   }

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const storedEmail = Cookies.get('email');
//     const storedPassword = Cookies.get('password');

//     if (email === storedEmail && password === storedPassword) {
//       alert('Login successful!');
//       navigate('/');
//     } else {
//       alert('Invalid email or password');
//     }

//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Set default credentials only once
  // if (!Cookies.get('email')) {
  //   Cookies.set('email', 'komal@123gmail.com');
  //   Cookies.set('password', '123456');
  // }

  const handleLogin = (e) => {
    e.preventDefault();

    // const storedEmail = Cookies.get('email');
    // const storedPassword = Cookies.get('password');

    if (email === 'admin@gmail.com' && password === 'admin@123') {
      Cookies.set('email', email);
      Cookies.set('password', password);


      toast.success('Login successful!', { position: 'top-right' });
      setTimeout(() => navigate('/'), 1500); // navigate after toast
    } else {
      toast.error('Invalid email or password', { position: 'top-right' });
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Toast container to display toasts */}
      <ToastContainer />
    </div>
  );
};

export default Login;
