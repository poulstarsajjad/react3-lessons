import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // با هر بار تغییر آدرس (pathname)، اسکرول به مختصات 0 و 0 می‌رود
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // این کامپوننت چیزی رندر نمی‌کند
};

export default ScrollToTop;
