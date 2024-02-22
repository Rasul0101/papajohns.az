// import React from 'react'
import { Helmet } from "react-helmet";

// Components
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ana Səhifə</title>
      </Helmet>
      <Header />
      <main
        style={{
          padding: "0 50px",
          minHeight: "315px",
          textAlign: "center",
          paddingTop: "30px",
          fontSize: "45px",
          fontWeight: "700",
          color: "orangeRed",
        }}
      >
        Salam Dost Necəsən. <br />
        Papa Johnsa xoş gəlmisən. <br />
        Alış-verişə başlamaq üçün yuxarıda gördüyün menudan istədiyin
        kategoriyanı seçə bilərsən. <br />
      </main>
      <Footer />
    </>
  );
};

export default Home;
