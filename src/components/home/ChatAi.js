import React, { useState } from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircleQuestion,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

import style from "./ChatAi.module.scss";
const cx = classnames.bind(style);

let tempMessages = [];

const exampleQuestions = [
  "Trí tuệ nhân tạo là gì?",
  "Làm sao để học tiếng anh hiệu quả?",
  "Ai là người phát minh ra điện đầu tiên trên thế giới?",
  "Làm gì để ghi nhớ một cái gì đó?",
  "Thông tin về trường Đại học Sao Đỏ - Chí Linh - Hải Dương.",
  "React js là gì?",
  "Làm gì để trở thành một lập trình viên giỏi?",
];

function ChatAi() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState(tempMessages);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!userInput.trim()) return;

    tempMessages.push({
      role: "user",
      content: userInput,
    });

    // setMessages((prevMessages) => [
    //   ...prevMessages,
    //   {
    //     role: "user",
    //     content: userInput,
    //   },
    // ]);

    if (messages.length === 0) return;

    try {
      setIsLoading(true);
      setUserInput("");

      const response = await fetch(
        `https://api.openai.com/v1/chat/completions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CHAT_GPT_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: tempMessages,
            temperature: 0.9,
            max_tokens: 255,
          }),
        }
      );

      const data = await response.json();

      tempMessages.push({
        role: "assistant",
        content: data.choices[0].message.content,
      });

      setMessages(tempMessages);

      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   {
      //     role: "assistant",
      //     content: data.choices[0].message.content,
      //   },
      // ]);
    } catch (error) {
      console.error("There was an error with the API request", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter keyword you want ask ChatAI..."
          />
          <button
            type="submit"
            disabled={isLoading ? true : false}
            className={`${isLoading ? cx("disable") : ""}`}
          >
            {isLoading ? "Sending..." : "Send"}
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </form>

        <div className={cx("question-box")}>
          <div className={cx("header")}>
            <h4>Try an Example</h4>
            <Link to="#">
              <FontAwesomeIcon icon={faCircleQuestion} />
            </Link>
          </div>
          <ul>
            {exampleQuestions.map((item) => (
              <li key={item} onClick={() => setUserInput(item)}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cx("right")}>
        {messages.map((message, index) => (
          <div key={index}>
            {message.role === "assistant" && (
              <div className={cx("displayAi")}>
                <FontAwesomeIcon icon={faRobot} />
                <h4>ChatAI</h4>
              </div>
            )}
            <p className={`${message.role === "user" ? cx("user") : null}`}>
              {message.role === "user" && <span>You: </span>}
              {message.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatAi;
