import React from "react";
import { useState } from "react";

const MyForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = React.useState("");

  return (
    <form>
      <h1>Hello</h1>
      <p>Enter your name:</p>
      <input type="text" />
    </form>
  );
};

export default MyForm;
