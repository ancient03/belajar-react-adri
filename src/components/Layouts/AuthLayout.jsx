import React, { useContext } from 'react'
import Logo from '../Elements/Logo';
import { ThemeContext } from '../../context/themeContext';
import { ModeContext } from '../../context/modeContext';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function AuthLayout(props) {    
    const { children } = props;
    const { theme } = useContext(ThemeContext);
    const { mode, setMode } = useContext(ModeContext);

  return (
    <>
    <main 
      className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name}`}>
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo />
        {children}
        <div className="flex justify-center mt-6">
          <div
              className="cursor-pointer text-gray-01 hover:text-gray-02"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
        </div>
      </div>
      {/* container end */}
    </main>
    </>
  );
}

export default AuthLayout