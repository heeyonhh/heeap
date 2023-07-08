import { Box, CircularProgress, Container, Stack, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import EditProfile from './components/EditProfile';
import { WithFirebaseApiProps, withFirebaseApi } from './Firebase';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { RootState } from './redux/store';
import { handleUserChange } from './redux/userSlice';

const isLoadingState = (state: RootState): boolean => {
  return state.user.userId === undefined;
};

const Body = () => {
  const userId = useAppSelector((state: RootState) => state.user.userId);
  const userInfo = useAppSelector((state: RootState) => state.user.userInfo.value);
  const userInfoLoadState = useAppSelector((state: RootState) => state.user.userInfo.loadState);
  if (userId === null) {
    // logged out user
    return (<>
      <Typography>Please Log In</Typography>
    </>);
  }

  if (userInfoLoadState === "loading") {
    return <CircularProgress />;
  }
  if (userInfoLoadState === "failed" || userInfo === undefined) {
    return (<>
      <Typography>Something failed</Typography>
    </>);
  }
  if (userInfo === null) {
    return <Onboarding />;
  }
  return (
    <>
      <Typography>{`Welcome ${userInfo.username}`}</Typography>
      <EditProfile />
    </>
  );
};

const App = (props: WithFirebaseApiProps) => {
  const isLoading = useAppSelector(isLoadingState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return props.firebaseApi.onAuthStateChanged((user) => {
      if (user) {
        dispatch(handleUserChange(props.firebaseApi, user.uid));
      } else {
        dispatch(handleUserChange(props.firebaseApi, null));
      }
    });
  }, []);

  if (isLoading) {
    return <CircularProgress sx={{ margin: "auto" }} />;
  }
  return (
    <>
      <Header />
      <Container sx={{ paddingTop: 3 }}>
        <Box sx={{ margin: "auto" }}>
          <Body />
        </Box>
      </Container>
    </>
  );
}

export default withFirebaseApi(App);
