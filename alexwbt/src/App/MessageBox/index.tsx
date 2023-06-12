import styled from "@emotion/styled";
import { Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";

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

    axios.post("https://api.alexwbt.com/message", `${message}`, {
      headers: { "Content-Type": "text/plain" }
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
      <div onClick={postMessage}>leave a message</div>
    </Message>
  );
};

export default MessageBox;
