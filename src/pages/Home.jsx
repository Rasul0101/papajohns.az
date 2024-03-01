// import React from 'react'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ana Səhifə</title>
      </Helmet>
      <main
        style={{
          padding: "0 200px",
          minHeight: "315px",
          textAlign: "center",
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
    </>
  );
};

export default Home;
