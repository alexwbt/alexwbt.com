import styled from "@emotion/styled";
import LinkTree from "@src/components/LinkTree";
import MessageBox from "@src/components/MessageBox";
import usePage from "@src/hooks/usePage";

const Container = styled.div``;

const HomePage: React.FC = () => {
  usePage("Home");

  return (
    <Container>
      <LinkTree>
        <MessageBox />
      </LinkTree>
    </Container>
  );
};

export default HomePage;
