import React from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModules } from "./reducer";

export default function Modules() {
  const { cid } = useParams();
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>Modules</h2>
      {/* Add your modules UI components here */}
    </div>
  );
}