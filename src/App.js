import React from "react";
//components
import Header from "./components/Header/Header";
import BannerContent from "./components/BannerContent/BannerContent";
import BannerDecoration from "./components/BannerDecoration/BannerDecoration";

const App = () => {
  return (
    <main>
      <section id="herro-banner">
        <BannerDecoration />
        <Header />
        <BannerContent />
      </section>
    </main>
  );
};

export default App;
