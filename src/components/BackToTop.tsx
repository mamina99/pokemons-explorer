import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideButton, showButton, visibility } from './../slices/backToTopSlice';

export default function BackToTop() {
  const { visible } = useSelector(visibility);
  const dispatch = useDispatch();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
              dispatch(showButton());
      } else {
        dispatch(hideButton());
      }
    });
  }, []);

  return (
    <div data-testid="buttonContainer" >
      {visible && (
        <button onClick={scrollToTop}  aria-label="backToTop" className="back-to-top" >
          &#8679;
        </button>
      )}
    </div>
  );
}
