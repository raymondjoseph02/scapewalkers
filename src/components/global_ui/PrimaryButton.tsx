import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PrimaryButtonProps {
  dark: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({ dark }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (location.pathname != "/contact-us") {
      navigate("/contact-us");
    } else {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }
  };
  return (
    <button
      onClick={handleOnClick}
      className={`primary-button relative min-w-[129px] md:py-3 md:px-5  py-2 rounded-3xl text-sm md:text-md font-medium md:font-semibold capitalize ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      contact us
    </button>
  );
};

export default PrimaryButton;
