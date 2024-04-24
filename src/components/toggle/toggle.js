import React from "react";
// import Toggle from "react-toggle";
import { useColorScheme } from "./useColorScheme";
import "react-toggle/style.css" // for ES6 modules

import ReactSwitch from "react-switch";
import { useState } from "react";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
export const DarkModeToggle = () => {
    const [checked, setChecked] = useState(false);
    const { isDark, setIsDark } = useColorScheme();
    const handleChange = nextChecked => {
        // setChecked(nextChecked);
        setIsDark(nextChecked)
    };
  return (
    <div className="example">

<label htmlFor="small-radius-switch">
  <ReactSwitch
    checked={isDark}
    onChange={handleChange}
    // handleDiameter={28}
    // offColor="#08f"
    // onColor="#0ff"
    // offHandleColor="#0ff"
    // onHandleColor="#08f"
    // height={40}
    // width={70}
    // borderRadius={6}
    // activeBoxShadow="0px 0px 1px 2px #fffc35"
    /*
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: '8px',
          color: "orange"
          // paddingRight: 2
        }}
      >
        <FontAwesomeIcon icon={faSun}/>
      </div>
    }

    checkedIcon={
      <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
        <circle r={3} cx={5} cy={5} />
      </svg>
    }

    uncheckedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 20
        }}
      >
        ☹
      </div>
    }

    checkedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "red",
          fontSize: 18
        }}
      >
        ♥
      </div>
    }
    */
    className="react-switch"
    // id="small-radius-switch"
  />
</label>

  </div>
  );
};