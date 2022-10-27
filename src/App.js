import React from "react";
//components
import Header from "./components/Header/Header";
import BannerContent from "./components/BannerContent/BannerContent";
import BannerDecoration from "./components/BannerDecoration/BannerDecoration";
import PetsList from "./components/PetsList/PetsList";

const App = () => {
  return (
    <main>
      <section id="herro-banner">
        <Header />
        <BannerContent />
        <BannerDecoration />
      </section>

      <section id="pets-list">
        <header>
          <p className="title-grap-text">whats new?</p>
          <h4 className="title-text">take look at some of our pets</h4>
        </header>
        <PetsList />
      </section>
    </main>
  );
};

export default App;
