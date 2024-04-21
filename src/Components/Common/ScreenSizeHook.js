import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { isMobile: width < 768, isTablet: width >= 768 && width < 1024, isDesktop: width >= 1024 };
};

export default useScreenSize;
