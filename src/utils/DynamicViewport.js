import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicViewport = () => {
  const location = useLocation();

  useEffect(() => {
    const viewportMeta = document.querySelector("meta[name=viewport]");

    if (location.pathname === "/profile") {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=0.3"
      );
    } else {
      viewportMeta.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, user-scalable=no"
      );
    }
  }, [location.pathname]);

  return null;
};

export default DynamicViewport;
