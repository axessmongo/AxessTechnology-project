import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../assets/images/success.png";
import "../assets/css/verfiy.scss";

function EmailVerify() {
  const [validUrl, setValidUrl] = useState(true);
  const { _id, token } = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:4000/api/users/${_id}/verify/${token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.error(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [_id, token]);

  return (
    <div className="verify">
      {validUrl ? (
        <div className="container">
          <img src={success} alt="success_img" className="success_img" />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="green_btn">Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
}

export default EmailVerify;
