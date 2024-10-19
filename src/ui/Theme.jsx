import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useTheme } from "../context/ThemeContext";

function Theme() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ButtonIcon onClick={toggleTheme}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default Theme;
