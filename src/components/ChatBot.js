import { withTheme } from "@emotion/react";
import { OpenWithRounded } from "@mui/icons-material";
import { height } from "@mui/system";
import React from "react";
import "./ChatBot.module.css";

const style = {
    height: 450,
    width: 350,
    backgroundColor: 'white',
}

const ChatBot = () => {
    return (
        <iframe className="bot-frame" title="myChatbot" src="https://web.powerva.microsoft.com/environments/Default-a42e5409-0ade-4beb-8099-84afd4e0f1ec/bots/new_bot_3a6c2888f404492db35c46b79355fdb2/webchat" frameBorder="0" style={style}></iframe>
    );
};

export default ChatBot;