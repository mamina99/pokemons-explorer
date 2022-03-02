import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { visibility , showButton, hideButton } from "./../slices/backToTopSlice";

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
    <div>
      {visible && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}
