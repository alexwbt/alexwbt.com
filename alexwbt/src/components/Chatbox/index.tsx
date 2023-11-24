import styled from "@emotion/styled";
import { OutlinedInput } from "@mui/material";
import { addSocketListener, removeSocketListener, socket } from "@src/utils/socket";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  .texts {
    flex: 1;
    overflow: auto;
  }

  .input .MuiOutlinedInput-input {
    padding: 2px 5px;
  }
`;

const MESSAGE_EVENT = "message-bus";

const Chatbox: React.FC<{
  className?: string;
}> = ({ className }) => {
  const [texts, setTexts] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const textsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMessage = (data: string) => {
      setTexts(t => [...t, data]);
      const ref = textsRef.current;
      if (ref && ref.scrollTop + ref.clientHeight > ref.scrollHeight - 100)
        ref.scrollTop = ref.scrollHeight - ref.clientHeight;
    };
    addSocketListener(MESSAGE_EVENT, onMessage);
    return () => {
      removeSocketListener(MESSAGE_EVENT, onMessage);
    };
  }, []);

  const sendMessage = () => {
    if (!input) return;
    socket.emit(MESSAGE_EVENT, input);
    setInput("");
  };

  return (
    <Container className={className}>
      <div className="texts" ref={textsRef}>
        {texts.map((text, i) => (
          <div key={i} className="text">{text}</div>
        ))}
      </div>
      <div className="input">
        <OutlinedInput
          fullWidth
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
      </div>
    </Container>
  );
};

export default Chatbox;
