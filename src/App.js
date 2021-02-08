import React from "react";
import "./App.scss";
import Header from "./components/header";
import SubtitleNText from "./components/subtitleNText";
import Card from "./components/card";
import Footer from "./components/footer";
import ContentAndImage from "./components/contentAndImage";
import Carrousel from "./components/carrousel";
const cards = [
  {
    id: 0,
    title: "Application online",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis soluta obcaecati? Deserunt soluta",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: 1,
    title: "Get An approval",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis soluta obcaecati? Deserunt soluta",
    icon: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    title: "Card Delivery",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis soluta obcaecati? Deserunt soluta",
    icon: "https://via.placeholder.com/40",
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
          buttonVariant="secondary"
        />
        <img
          src="http://www.pngpix.com/wp-content/uploads/2016/11/PNGPIX-COM-Credit-Card-Vector-PNG-Transparent-Image.png"
          alt="Credit card"
          className="cc-hero"
        />
      </div>
      <div className="bottom-wrapper">
        <SubtitleNText
          variant="h2"
          title="Get Your Card"
          text="So you have your new digital camera and clicking away to glory anything and everything in sight. Now you want to print them and you need."
        />
        <div className="card-container">
          {cards.map(({ id, title, text, icon }) => (
            <React.Fragment key={id}>
              <Card title={title} text={text} icon={icon} />
            </React.Fragment>
          ))}
        </div>
        <ContentAndImage
          title={"Purchase anytime"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque nulla officia perspiciatis atque! Ex dolores consequuntur neque dignissimos quisquam ratione suscipit, sint, repellendus, voluptatibus tempore ea fugit cumque doloremque!"
          }
          buttonText={"Apply for card"}
          image="https://via.placeholder.com/300x400"
        />
        <SubtitleNText
          variant="h2"
          title="Choose Your Card"
          text="Finding the perfect learning tool for Flash is a daunting task to any novice web developer. "
        />
        <Carrousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
