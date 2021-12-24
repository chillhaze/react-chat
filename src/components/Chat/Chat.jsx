import React, { useContext, useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  addDoc,
  Timestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { Context } from "../..";

import { ChatWrapper, MessageBody, Name, Message } from "./Chat.styled";

// ----=MUI-----
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const q = query(
    collection(firestore, "messages"),
    orderBy("createdAt", "asc")
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  scrollToBottom();

  useEffect(
    () =>
      onSnapshot(q, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            setTimeout(() => {
              scrollToBottom();
            }, 400);

            return { id: doc.id, ...doc.data() };
          })
        );
      }),
    [firestore]
  );

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: inputValue,
        createdAt: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    scrollToBottom();
    setInputValue("");
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 10 }}
        justifyContent={"center"}
      >
        <ChatWrapper>
          {messages &&
            messages.map((message) => {
              scrollToBottom();
              return (
                <MessageBody
                  key={message.createdAt}
                  style={{
                    border:
                      user.uid === message.uid
                        ? "1px solid #1976d2"
                        : "1px solid #1976d2",
                    marginLeft: user.uid === message.uid ? "auto" : "15px",
                    borderRadius:
                      user.uid === message.uid
                        ? "10px 10px 0px 10px"
                        : "0px 10px 10px 10px",
                    flexDirection:
                      user.uid === message.uid ? "row" : "row-reverse",
                  }}
                >
                  <Message
                    style={{
                      borderRadius:
                        user.uid === message.uid
                          ? "10px 10px 0px 10px"
                          : "0px 10px 10px 10px",
                      backgroundColor:
                        user.uid === message.uid ? "#dcfcbdbd" : "#e3e5e6",
                      color: user.uid === message.uid ? "#000" : "#000",
                    }}
                  >
                    {message.text}
                  </Message>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: 5,
                      maxWidth: 60,
                      maxHeight: 55,
                    }}
                  >
                    <Avatar
                      src={message.photoURL}
                      sx={{ width: 26, height: 26 }}
                    />
                    <Name>{message.displayName}</Name>
                  </Grid>
                </MessageBody>
              );
            })}
          <div ref={messagesEndRef} />
        </ChatWrapper>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "85%" }}
        >
          <TextField
            label="Your message"
            autoFocus
            maxRows={2}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "#fff" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            onClick={sendMessage}
            variant="contained"
            style={{ marginTop: 10 }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
