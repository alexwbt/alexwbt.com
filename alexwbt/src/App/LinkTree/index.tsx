import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { FC, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px #F1F1F1 solid;
`;

const Name = styled.div`
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
  text-align: center;
  min-width: 250px;
`;

const Icons = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const LinkTree: FC<{ children?: React.ReactNode }> = ({ children }) => {
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
        <ProfilePicture src="profile_picture.png" />
        <Name>alexwbt</Name>
        <Icons>
          <SocialIcon url="mailto:alexwbtg@gmail.com" />
          <SocialIcon url="https://github.com/alexwbt" />
          <SocialIcon url="https://www.linkedin.com/in/alex-wbt" />
          <SocialIcon url="https://stackoverflow.com/users/6730402/alexwbt" />
          <SocialIcon url="https://www.instagram.com/alexwbt" />
          <SocialIcon url="https://twitter.com/alexwbt" />
        </Icons>
        {children}
      </Center>
    </Background>
  );
};

export default LinkTree;
