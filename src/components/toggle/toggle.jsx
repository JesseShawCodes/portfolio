/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactSwitch from 'react-switch';
import useColorScheme from './useColorScheme';
import 'react-toggle/style.css'; // for ES6 modules

import './toggle.scss';

export default function DarkModeToggle() {
  const { isDark, setIsDark } = useColorScheme();
  const handleChange = (nextChecked) => {
    setIsDark(nextChecked);
  };

  return (
    <div className="theme-switch">
      <div className="theme-toggle">
        <div className="anchor">
          <div className="sky" />
        </div>
      </div>
      <label htmlFor="small-radius-switch">
        <ReactSwitch
          id="small-radius-switch"
          checked={isDark}
          onChange={handleChange}
          handleDiameter={28}
          offColor="#ff533d"
          onColor="#0f1626"
          offHandleColor="#0f1626"
          onHandleColor="#ff533d"
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          checkedIcon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="30" fill="#f85238"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" /></svg>
          }
          uncheckedIcon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="30" fill="#fafafa"><path d="M284.8 99.2l11 38.6c1 3.6 4.4 6.2 8.2 6.2s7.1-2.5 8.2-6.2l11-38.6 38.6-11c3.6-1 6.2-4.4 6.2-8.2s-2.5-7.1-6.2-8.2l-38.6-11-11-38.6c-1-3.6-4.4-6.2-8.2-6.2s-7.1 2.5-8.2 6.2l-11 38.6-38.6 11c-3.6 1-6.2 4.4-6.2 8.2s2.5 7.1 6.2 8.2l38.6 11zm119 211.6c1.6 5.5 6.6 9.2 12.2 9.2s10.7-3.8 12.2-9.2l16.6-58 58-16.6c5.5-1.6 9.2-6.6 9.2-12.2s-3.8-10.7-9.2-12.2l-58-16.6-16.6-58c-1.6-5.5-6.6-9.2-12.2-9.2s-10.7 3.8-12.2 9.2l-16.6 58-58 16.6c-5.5 1.6-9.2 6.6-9.2 12.2s3.8 10.7 9.2 12.2l58 16.6 16.6 58zM191.8 128C85.8 128 0 214.1 0 320.2S85.8 512.4 191.8 512.4c52 0 99.1-20.7 133.6-54.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-8.1 1.4-16.5 2.2-25.1 2.2c-80.7 0-146.2-65.6-146.2-146.6c0-54.8 30-102.6 74.4-127.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-5.4-.5-10.8-.7-16.3-.7z" /></svg>
          }
          className="react-switch"
        />
      </label>

    </div>
  );
}
