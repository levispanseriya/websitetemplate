import React from "react";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailOpenLine,
  RiTwitterLine,
} from "react-icons/ri";

export default function menu() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // Left
        justifyContent: "flex-end",
        padding: "0.5rem",
      }}
    >
      <RiGithubLine
        onClick={() => {
          window.open("https://github.com/levispanseriya");
        }}
        className="githubIcon"
        fontSize="2em"
      />
      <RiTwitterLine
        onClick={() => {
          window.open("https://twitter.com/LevisPanseriya");
        }}
        className="twitterIcon"
        style={{
          marginLeft: "1em",
        }}
        fontSize="2em"
      />
      <RiMailOpenLine
        onClick={() => {
          window.open("mailto:levispanseriya.78@gmail.com");
        }}
        className="mailIcon"
        style={{
          marginLeft: "1em",
        }}
        fontSize="2em"
      />
      <RiLinkedinLine
        onClick={() => {
          window.open("https://www.linkedin.com/in/levispanseriya/");
        }}
        className="linkedinIcon"
        style={{
          marginLeft: "1em",
          marginRight: "1em",
        }}
        fontSize="2em"
      />
    </div>
  );
}
