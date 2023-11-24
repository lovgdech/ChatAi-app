import React from "react";

import Hero from "../components/home/Hero";
import Section from "../components/home/Section";
import videoUrl1 from "../assets/videos/section_one.mp4";
import videoUrl2 from "../assets/videos/section_two.mp4";
import videoUrl3 from "../assets/videos/section_three.mp4";
import imageUrl4 from "../assets/images/section_four.png";

const sections = [
  {
    title: "Beautiful.ai jumpstarts your presentations.",
    videoUrl: videoUrl1,
    paragraph:
      "Start your presentation inspired. Look, we made it easy. Smart templates give your team a blueprint for making presentations. The modern ones that customers love. We filled Beautiful.ai with tons of smart slide templates for you to choose from, so it's easy to start, finish, and impress in no time.",
    buttonContent: "Start Inspired",
  },
  {
    title: "And puts slide formatting on autopilot.",
    videoUrl: videoUrl2,
    paragraph:
      "Ready for a game changer? Beautiful.ai’s presentation software applies the rules of great design in real-time. Just add content and your slides adapt like magic. No more 2 a.m. nights resizing text and images. Every choice you make saves you time and leads to great design. See how it works >",
    bgColor: "#f8f9fc",
  },
  {
    title: "And makes your team look brilliant.",
    videoUrl: videoUrl3,
    paragraph:
      "Imagine if every department had a deck designer. Our new Team Plan makes it easy for anyone to create stunning team presentations remotely, consistently, and all under one account. This is how modern teams are syncing up and signing off faster, from anywhere.",
  },
  {
    title: `And keeps every body on brand.`,
    imageUrl: imageUrl4,
    paragraph:
      "Nobody likes frankendecks. Least of all your customers. Use the right colors, font, and logo every time with beautifully foolproof features. Plus when you sign up, this online presentation software unlocks millions of modern images and icons that reflect your brand guidelines. Now every slide is consistent—and consistently creative. With Beautiful.ai’s Team Plan, you can control your brand from one account and scale productivity across your organization.",
    bgColor: "#4c6961",
    color: "white",
  },
];

function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      {sections.map((item) => (
        <Section
          key={item.title}
          title={item.title}
          paragraph={item.paragraph}
          buttonContent={item.buttonContent}
          videoUrl={item.videoUrl}
          imageUrl={item.imageUrl}
          bgColor={item.bgColor}
          color={item.color}
        />
      ))}
    </React.Fragment>
  );
}

export default HomePage;
