import React from "react";
import "./App.scss";
import Header from "./components/header";
import SubtitleNText from "./components/subtitleNText";
import Card from "./components/card";
import Footer from "./components/footer";
import ContentAndImage from "./components/contentAndImage";
const cards = [
  {
    id: 0,
    title: "Application online",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis soluta obcaecati? Deserunt soluta",
  },
  {
    id: 1,
    title: "Get An approval",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis soluta obcaecati? Deserunt soluta",
  },
  {
    id: 2,
    title: "Card Delivery",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis soluta obcaecati? Deserunt soluta",
  },
];
function App() {
  return (
    <div className="App">
      <div className="top-wrapper">
        <Header />
        <SubtitleNText
          variant="h1"
          title="Be Smart Take Card"
          text="So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want to print them and you need."
          buttonText="Apply for card"
        />
      </div>
      <div className="bottom-wrapper">
        <SubtitleNText
          variant="h2"
          title="Get Your Card"
          text="So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want to print them and you need."
        />
        {cards.map(({ id, title, text }) => (
          <React.Fragment key={id}>
            <Card title={title} text={text} />
          </React.Fragment>
        ))}
        <ContentAndImage />
        <SubtitleNText
          variant="h2"
          title="Choose Your Card"
          text="Finding the perfect learning tool for Flash is a daunting task to any novice web developer. "
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
