import "./MainCounter.css";
import React, { useState } from 'react'

export default function MainCounter(props) {
    const {countRunners} = props;
  return (
    <>
      <h2>Nombre de participants : </h2>
      <div className="mainCounter_count">{countRunners}</div>
    </>
  );
}

