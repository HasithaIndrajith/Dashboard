/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from "../images/photo1.webp";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.webp";
import photo4 from "../images/photo4.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Content } from "rsuite";
function Home() {
  return (
    <div>
      <Content>
        <div class="container-fluid bg-3 text-center">
          <br />
          <div class="row">
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo1} alt="" width={"100%"} />
            </div>
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo2} alt="" width={"100%"} />
            </div>
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo2} alt="" width={"100%"} />
            </div>
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo1} alt="" width={"100%"} />
            </div>{" "}
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo1} alt="" width={"100%"} />
            </div>{" "}
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo1} alt="" width={"100%"} />
            </div>{" "}
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo1} alt="" width={"100%"} />
            </div>{" "}
            <div class="col-sm-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <img src={photo1} alt="" width={"100%"} />
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default Home;
