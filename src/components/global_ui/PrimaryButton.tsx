import { useLocation, useNavigate } from "react-router-dom";

const PrimaryButton = () => {
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
      className="primary-button relative min-w-[129px] py-3 px-5 rounded-3xl text-md font-semibold capitalize bg-white text-black"
    >
      contact us{" "}
    </button>
  );
};

export default PrimaryButton;
