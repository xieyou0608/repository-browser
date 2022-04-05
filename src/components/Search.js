import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const navigator = useNavigate();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const search = () => {
    setCurrentSearch(input);
  };

  useEffect(() => {
    if (currentSearch !== "") {
      navigator(`/users/${input}/repos`);
    }
  }, [currentSearch]);

  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        label="User Name"
        variant="outlined"
        onChange={inputHandler}
        color="secondary"
      />
      <Button
        variant="contained"
        style={{ width: 100, height: 57 }}
        onClick={search}
      >
        搜尋
      </Button>
    </div>
  );
};

export default Search;
