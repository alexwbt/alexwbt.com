import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px #F1F1F1 solid;
`;

const Row = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Name = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 100;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Center = styled(Grid)`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;

const Icons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const LinkTree = () => {
  useEffect(() => {
    const vanta = (window as any).VANTA.FOG({
      el: "#animated-fog-background",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: "#d3dce6",
      midtoneColor: "#d8dee4",
      lowlightColor: "#e8eaed",
      baseColor: "#f8f9fb",
      speed: 1.5,
    });
    return () => vanta?.destroy();
  }, []);
  return (
    <Background id="animated-fog-background">
      <Center>
        <Row>
          <ProfilePicture src="profile_picture.png" />
        </Row>
        <Name>alexwbt</Name>
        <Icons>
          <SocialIcon url="mailto:alexwbtg@gmail.com" />
          <SocialIcon url="https://github.com/alexwbt" />
          <SocialIcon url="https://www.linkedin.com/in/alex-wbt" />
          <SocialIcon url="https://stackoverflow.com/users/6730402/alexwbt" />
          <SocialIcon url="https://www.instagram.com/alexwbt" />
          <SocialIcon url="https://twitter.com/alexwbt" />
        </Icons>
      </Center>
    </Background>
  );
};

export default LinkTree;
