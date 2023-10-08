import React, { useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useMediaQuery,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Register from "../components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("deLinkUser"));
    if (user) {
      navigate("/chats");
    }
  }, [navigate]);

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #87CEEB, #ADD8E6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container
        maxW={isLargerThan768 ? "xl" : "sm"} // Adjusted container size for mobile
        centerContent
      >
        <Box
          colSpan={2}
          bg="rgba(240, 248, 255, 0.7)"
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          border="1px solid rgba(0, 0, 0, 0.2)"
          borderRadius="10px"
          minW={isLargerThan768 ? "550px" : "100%"} // Adjusted width for mobile
          p="3"
          backdropFilter="blur(10px)"
        >
          <Box
            d="flex"
            justifyContent="center"
            alignContent="center"
            p="3"
            bg="rgba(255, 255, 255, 0.1)"
            mt="2em"
            borderRadius="8px"
          >
            <Text fontSize={isLargerThan768 ? "4xl" : "2xl"}>Realtime Chat</Text>
          </Box>
          <Box w="100%" p="4" mt="20px">
            <Tabs isFitted variant="enclosed">
              <TabList mb="1em">
                <Tab>Login</Tab>
                <Tab>Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Container>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Homepage;
