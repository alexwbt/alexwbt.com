import styled from "@emotion/styled";
import MessageIcon from '@mui/icons-material/Message';
import { Input } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

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
  const [messages, setMessages] = useState("");
  const [showMessages, setShowMessages] = useState(false);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const postMessage = async () => {
    if (!message) return;

    const res = await axios.post("https://api.alexwbt.com/message", `\n${message}`, {
      headers: { "Content-Type": "text/plain" }
    });
    setMessage("");
    setMessages(res.data);
  };

  const getMessages = async () => {
    const res = await axios.get("https://api.alexwbt.com/message");
    setMessages(res.data);
  };

  useEffect(() => {
    if (textarea.current)
      textarea.current.scrollTop = textarea.current.scrollHeight;
  }, [messages, showMessages]);

  useEffect(() => {
    const interval = setInterval(getMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMessagesView = () => {
    setShowMessages(show => !show);
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

      <textarea hidden={!showMessages} ref={textarea} readOnly value={messages} />

      <MessageIcon onClick={() => {
        toggleMessagesView();
        if (!showMessages) getMessages();
      }} />
    </Message>
  );
};

export default MessageBox;
