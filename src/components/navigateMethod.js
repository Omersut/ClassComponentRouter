import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavigateMethod({link}) {
  const navigate = useNavigate();
 useEffect(() => {
    navigate(`/${link}`);
    }, [link]);
 }

export default NavigateMethod;