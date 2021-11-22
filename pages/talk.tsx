import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Components
import ActionBar from "../components/actionBar";
import ChatList from "../components/ChatList";
import MessageInput from "../components/MessageInput";
import { Message } from "../components/Message";

const Talk = () => (
  <>
    <div>
      <ActionBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ChatList />
          </Grid>
          <Grid item xs={8}>
            <Message text="hola" />
            <Message text="todo bien?" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />
            <Message text="pasame fotos de las patas" />

            <MessageInput />
          </Grid>
        </Grid>
      </Box>
    </div>
  </>
);

export default Talk;
