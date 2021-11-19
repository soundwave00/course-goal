import React, { Component } from "react";
import ChatBot from "../../../components/ChatBot";
import IconButton from "@mui/material/IconButton";
import "./ChatBotButton.module.css";

class ChatBotButton extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({ show: !show });
    };
    render() {
        return (
            <div className="chat-bot-wrapper">
                <div className="chat-bot-element">
                    <div>{this.state.show && <ChatBot />}</div>
                    <div className="chat-bot-button-container">
                        <button
                            variant="fab"
                            aria-label="delete"
                            className="chat-bot-button"
                            onClick={this.toggleDiv}
                        >
                            <i className="fas fa-comment"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ChatBotButton;
