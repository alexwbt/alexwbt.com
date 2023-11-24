import styled from '@emotion/styled';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@src/theme';
import React, { useEffect, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContent = styled.div``;

export type AppContext = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  pageTitle: string;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
};

export const useAppContext = () => {
  return useOutletContext<AppContext>();
};

const App: React.FC = () => {
  const [originalTitle] = useState(document.title);
  const [title, setTitle] = useState(originalTitle);
  const [pageTitle, setPageTitle] = useState("");

  const context: AppContext = {
    title, setTitle,
    pageTitle, setPageTitle,
  };

  useEffect(() => {
    const _pageTitle = pageTitle ? ` - ${pageTitle}` : "";
    document.title = `${title}${_pageTitle}`;
    return () => {
      document.title = originalTitle;
    };
  }, [title, pageTitle, originalTitle]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <AppContent>
        <Outlet context={context} />
      </AppContent>
    </ThemeProvider >
  );
};

export default App;
