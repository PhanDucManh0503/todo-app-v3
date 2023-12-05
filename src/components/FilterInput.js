import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

export const FilterInput = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return <input type="text" onChange={handleFilterChange} />;
};
