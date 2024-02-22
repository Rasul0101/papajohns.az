// import React from 'react'

// Components
import Footer from "../components/Footer";
import Header from "../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "315px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "100px",
          fontSize: "50px",
          fontWeight: "600",
        }}
      >
        NotFound qaqaşım, bizdə sən axtardığın olmur, səni alladıblar!!!
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
