import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/passwordReset.scss';

function PasswordReset() {
  const param = useParams();
  const Navigate = useNavigate();
  const url = `http://54.161.23.121:5000/passwordReset/${param.id}/${param.token}`;
  
  // State variables
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [validUrl, setValidUrl] = useState(false);

  useEffect(() => {
    const verifyUrl = async () => {
      try {
        await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(url, { password });
      setMsg(data.message);
      setError('');
      
      // Display a success alert
      alert('Password has been successfully changed');
      
      // Redirect to the login page
      Navigate('/Login');
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
        setMsg('');
      }
    }
  };

  return (
    <div className='passwordReset'>
      <Fragment>
        {validUrl ? (
          <div className='container'>
            <form className='form_container' onSubmit={handleSubmit}>
              <p className='text-center mt-3'>Add New Password</p>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                placeholder="Password"
              />
              {msg && <div className='success_msg'>{msg}</div>}
              {error && <div className='error_msg'>{error}</div>}
              <button type='submit' className='btn btn-success mt-3 form-control'>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <h1>404 Not Found</h1>
        )}
      </Fragment>
    </div>
  );
}

export default PasswordReset;
