import type { NextPage } from "next";
import React, { useRef, useState } from "react";
// import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { trpc } from "../utils/trpc";
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';


const TaskModal: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = () => {
    console.log(title)
    console.log(description)
  }

  return (
    <>
      <h1>Page</h1>
      <div className="border-black border-solid border-2 w-[50%]">
        <InputTextarea
          tooltip="Title Area"
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>reported 03/12/2022</p>
        <InputTextarea
          tooltip="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button>Cancel</Button>
        <Button
          onClick={handleSubmit}
        >Submit</Button>
      </div>
    </>
  );
};

export default TaskModal;
