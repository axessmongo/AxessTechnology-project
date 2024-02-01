import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollTop() {
  const pathname = useLocation().pathname;
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const element = document.getElementById('pricing-section');
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY;
      console.log(position);
      setScroll(position);
    } else {
      setScroll(0, 0)
    }
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, scroll);
  }, [scroll , pathname]);

  return null;
}