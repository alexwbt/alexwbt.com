import styled from "@emotion/styled";
import Chatbox from "@src/components/Chatbox";
import usePage from "@src/hooks/usePage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .chatbox {
    width: 100%;
    height: 100%;
  }
`;

const ChatPage: React.FC = () => {
  usePage("Chat");

  return (
    <Container>
      <Chatbox className="chatbox" />
    </Container>
  );
};

export default ChatPage;
