import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { FC } from 'react';
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img.profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px #F1F1F1 solid;
  }

  .name {
    font-size: 30px;
    font-weight: 100;
  }

  .center.MuiGrid-root {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    min-width: 250px;
  }

  .icons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const LinkTree: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Container>
      <Grid className="center">
        <img className="profile-picture" alt="profile" src="profile_picture.png" />
        <div className="name">alexwbt</div>
        <div className="icons">
          <SocialIcon url="mailto:alexwbtg@gmail.com" />
          <SocialIcon url="https://github.com/alexwbt" />
          <SocialIcon url="https://www.linkedin.com/in/alex-wbt" />
          <SocialIcon url="https://stackoverflow.com/users/6730402/alexwbt" />
          <SocialIcon url="https://www.instagram.com/alexwbt" />
          <SocialIcon url="https://twitter.com/alexwbt" />
        </div>
        {children}
      </Grid>
    </Container>
  );
};

export default LinkTree;
