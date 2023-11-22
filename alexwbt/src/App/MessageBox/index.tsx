import styled from "@emotion/styled";
import { Button, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ENV } from "../../lib/env";

const Message = styled.div`
  margin-top: 50px;
  div {
    margin-bottom: 10px;
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
  const [message, setMessage] = useState("");

  const postMessage = async () => {
    if (!message) return;

    axios.post("/message", `${message}`, {
      baseURL: ENV.API_SERVER,
      headers: { "Content-Type": "text/plain" },
    });
    setMessage("");
  };

  return (
    <Message>
      <Input
        fullWidth
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === "Enter" && postMessage()}
      />
      <div>leave a message</div>
      <Button onClick={postMessage}>Send</Button>
    </Message>
  );
};

export default MessageBox;
