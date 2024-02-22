// import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myData } from "../redux/features/foodSlice";
import { Helmet } from "react-helmet";

// Components
import Footer from "../components/Footer";
import Header from "../components/Header";

const Drink = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.food);

  console.log(data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(myData());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <>
        <Header />
        <div style={{ minHeight: "450px" }}>Loading...</div>
        <Footer />
      </>
    );
  }

  if (status === "failed") {
    return <div>Error: Something went wrong!</div>;
  }

  return (
    <>
      <Helmet>
        <title>İçkilər | Papa Johns</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "450px" }}>
        <section className="foods">
          <div className="container">
            <div className="foods-row">
              {data.map((item) =>
                item.category === "İçkilər" ? (
                  <div
                    key={item.id}
                    className="card"
                    style={{ height: "300px" }}
                  >
                    <div className="img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="title">
                      <p>{item.name}</p>
                      <div className="btn-choose">Bunu seç</div>
                    </div>
                    {/* <p className="composition">{item.composition}</p> */}
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Drink;
