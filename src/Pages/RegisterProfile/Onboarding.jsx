import "./registerProfile.css";
import { useEffect, useState } from "react";
import Onboarding1 from "../../Components/InitDialog/Onboarding1";
import Onboarding2 from "../../Components/InitDialog/Onboarding2";
import Onboarding3 from "../../Components/InitDialog/Onboarding3";

function Onboarding() {
  const [onboard, setOnboard] = useState(0);

  useEffect(() => {
    console.log(onboard);
  }, [onboard]);

  const handleStates = (estado) => {
    if (estado == "prev") {
      setOnboard(() => {
        const isFirtSlide = onboard === 0;
        return isFirtSlide ? 0 : onboard - 1;
      });
    } else {
      const isLastSlide = onboard === 2;
      return isLastSlide ? null : setOnboard((curr) => curr + 1);
    }
  };
  return (
    <>
      {onboard == 0 ? (
        <Onboarding1 handleStates={handleStates} />
      ) : onboard == 1 ? (
        <Onboarding2 handleStates={handleStates} />
      ) : (
        <Onboarding3 handleStates={handleStates} />
      )}
    </>
  );
}

export default Onboarding;
