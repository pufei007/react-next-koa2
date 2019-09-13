import React from "react";
import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
// import Comp from "../components/comp";
// import "../test.css";
const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete"
];

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  };
}

events.forEach(event => {
  Router.events.on(event, makeEvent(event));
});

export default () => {
  function goTestB() {
    // Router.push("/b?id=1");
    Router.push(
      {
        pathname: "/b",
        query: {
          id: 2456465
        }
      },
      "/b/2121"
    );
  }
  return (
    <>
      <span>index</span>
    </>
  );
};
