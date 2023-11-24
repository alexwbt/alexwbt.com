import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import { ENV } from "@src/utils/env";
import axios from "axios";
import { useId, useState } from "react";
import { toast } from "react-toastify";

const Message = styled.div`
  margin-top: 50px;

  label {
    display: block;
    margin: 10px 0;
  }

  textarea {
    width: 100%;
    height: 100px;
    resize: none;
    border: none;
    background: none;
    :focus {
      outline: none;
    }
  }

  svg {
    opacity: 0.02;
  }
`;

const MessageBox = () => {
  const inputId = useId();
  const [message, setMessage] = useState("");

  const postMessage = async () => {
    if (!message) return;

    axios.post("/message", `${message}`, {
      baseURL: ENV.API_SERVER,
      headers: { "Content-Type": "text/plain" },
    })
      .then(() => {
        toast.success("You have left a message.");
        setMessage("");
      })
      .catch(() => {
        toast.error("Failed to leave a message.");
      });
  };

  return (
    <Message>
      <Input
        fullWidth
        id={inputId}
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === "Enter" && postMessage()}
      />
      <label htmlFor={inputId}>leave a message</label>
      <Button onClick={postMessage}>Send</Button>
    </Message>
  );
};

export default MessageBox;
