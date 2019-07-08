import React from "react";
import Box from '@material-ui/core/Box';
import BottomNavigation from "../components/bottomNavigation";
import TopNavigation from "../components/topNavigation";
import Login from "../pages/login";

const MainContainer = () => {
  return (
   <Box>
       <TopNavigation />
       <Login />
       <BottomNavigation />
   </Box>   
  );
};

export default MainContainer;
