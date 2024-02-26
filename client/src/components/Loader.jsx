import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Loader() {
  let navigate = useNavigate(); // Renamed from `path` to `navigate` for clarity
  const [load, setLoad] = useState(true);

  const body = document.querySelector('body');

  let check = !(window.location.pathname == '/services')

  // console.log('check', check);

  if (load && check) {
    body.classList.add('loading');
  } else {
    body.classList.remove('loading');
  }

  useEffect(() => {
    if (check) {
      setLoad(true)
      setTimeout(() => {
        setLoad(false); // Inverted from `setLoad(!load)`
        if (load) {
          body.classList.add('loading');
        } else {
          body.classList.remove('loading');
        }
        AOS.init();
        AOS.refresh();
      }, 1000);
    }
  }, [navigate]); // Changed from [path] to []

  return (
    <div>
      {
        (load && check) && <div className="loading">
          <div className="loader"></div>
        </div>
      }
    </div>
  );
}
