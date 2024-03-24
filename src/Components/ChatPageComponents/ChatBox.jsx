import React, { useState, useEffect } from "react";
import { Image, UnstyledButton, Autocomplete } from "@mantine/core";
import styles from "../../scss/ChatPageComponents/ChatBox.module.scss";
import { io } from "socket.io-client";
import ChatMessage from "./ChatMessage";

const socket = io("<http://localhost:3000>");

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      body: "Marfa echo park heirloom beard selfies, typewriter subway tile 90's squid pork belly af. Gastropub pug truffaut small batch. Williamsburg neutral milk hotel stumptown master cleanse. Semiotics poke taiyaki, iceland gatekeep polaroid craft beer deep v pork belly microdosing hoodie vexillologist squid.",
      type: "self",
    },
    {
      body: "Kale chips mustache franzen subway tile copper mug big mood. Direct trade everyday carry scenester photo booth mlkshk asymmetrical kombucha before they sold out portland af. Squid try-hard tattooed, bicycle rights four loko swag post-ironic cray yuccie jawn photo booth semiotics locavore. Knausgaard before they sold out meditation, kitsch taiyaki grailed cliche asymmetrical heirloom yuccie humblebrag.",
      type: "self",
    },
    {
      body: "Fanny pack bicycle rights retro, bruh ramps post-ironic af woke. Helvetica flannel street art fam small batch blue bottle yuccie crucifix cred. Solarpunk microdosing bruh pok pok. Beard mlkshk waistcoat fit normcore.",
      type: "other",
    },
    {
      body: "I'm baby narwhal meditation before they sold out master cleanse tbh pickled, hell of migas 8-bit gentrify thundercats. Austin cloud bread kogi tumblr DIY marxism. Leggings vibecession whatever, forage migas banjo tilde four dollar toast XOXO kogi live-edge jean shorts. Kombucha enamel pin franzen actually 8-bit, iPhone keytar post-ironic lumbersexual farm-to-table brunch raw denim bespoke butcher. Live-edge shoreditch snackwave keffiyeh hot chicken hammock tofu keytar af twee.",
      type: "other",
    },
    {
      body: "Kale chips mustache franzen subway tile copper mug big mood. Direct trade everyday carry scenester photo booth mlkshk asymmetrical kombucha before they sold out portland af. Squid try-hard tattooed, bicycle rights four loko swag post-ironic cray yuccie jawn photo booth semiotics locavore. Knausgaard before they sold out meditation, kitsch taiyaki grailed cliche asymmetrical heirloom yuccie humblebrag.",
      type: "self",
    },
    {
      body: "Kale chips mustache franzen subway tile copper mug big mood. Direct trade everyday carry scenester photo booth mlkshk asymmetrical kombucha before they sold out portland af. Squid try-hard tattooed, bicycle rights four loko swag post-ironic cray yuccie jawn photo booth semiotics locavore. Knausgaard before they sold out meditation, kitsch taiyaki grailed cliche asymmetrical heirloom yuccie humblebrag.",
      type: "self",
    },
  ]);
  const [messageText, setMessageText] = useState("");
  const [user, setUser] = useState(null);

  // Send a message
  const sendMessage = () => {
    socket.emit("message", messageText);
    setMessageText("");
  };

  // Receive messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const joinChatRoom = (userDetails) => {
    setUser(userDetails);
    socket.emit("join", userDetails);
  };

  // Leave a chat room
  const leaveChatRoom = () => {
    socket.emit("leave", user);
    setUser(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <UnstyledButton>
          <Image
            src="/Images/profile_logo.jpeg"
            className={styles.profileImage}
          />
        </UnstyledButton>
        <div className={styles.profileContent}>
          <div className={styles.profileName}>วี่หว่อง หว่องวี่</div>
          <div className={styles.profileDate}>1 Jan 2024</div>
        </div>
      </div>
      <div className={styles.chatContent}>
        {messages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              type={message.type}
              body={message.body}
            ></ChatMessage>
          );
        })}
      </div>
      <div className={styles.interactionBar}>
        <UnstyledButton>
          <Image src="/Images/attach_logo.png" className={styles.image} />
        </UnstyledButton>
        <UnstyledButton>
          <Image src="/Images/sticker_logo.png" className={styles.image} />
        </UnstyledButton>
        <Autocomplete
          className={styles.search}
          size="md"
          placeholder="Type a message here..."
          radius="20px"
          rightSection={
            <UnstyledButton>
              <Image src="/Images/send_logo.png" className={styles.sendImage} />
            </UnstyledButton>
          }
          visibleFrom="xs"
        />
      </div>
    </div>
  );
}
