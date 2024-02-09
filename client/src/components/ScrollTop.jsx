import React, { useContext, useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';
import { userContext } from '../store/Store';

export default function ScrollTop() {
  const pathname = useLocation().pathname;
  const [scroll, setScroll] = useState(0);
  const [value, setValue] = useContext(userContext);

  useEffect(() => {
    window.scrollTo(0,0)

    function checkScroll() {
      const element = document.getElementById('pricing-section');
      if (element) {
        const position = element.getBoundingClientRect().top + window.scrollY;
        setScroll(position);
        window.scrollTo(0,position)
        setValue(false);
      } else {
        setValue(false);
        setScroll(0);
        window.scrollTo(0,0)
      }
    }

    console.log("scroll top", value);

    if (value) {
        checkScroll()
    }
  }, [pathname]);

  return null;
}
