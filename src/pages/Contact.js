import React from "react";
import { Button, ButtonToolbar, Form } from "rsuite";

function Contact() {
  return (
    <div>
      <div
        class="mapouter"
        style={{
          position: "relative",
          textAlign: "right",
          height: "500px",
          width: "100%",
        }}
      >
        <div
          class="gmap_canvas"
          style={{
            overflow: "hidden",
            background: "none!important",
            height: "500px",
            width: "100%",
          }}
        >
          <iframe
            width="100%"
            height="600"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=paniyanduwa,ambalangoda&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
          <a href="https://fmovies-online.net"></a>
          <br />
          <a href="https://www.embedgooglemap.net">
            adding google map to wordpress
          </a>
        </div>
      </div>

      <div class="container-fluid bg-grey" style={{justifyContent:'center',display:'flex',paddingTop:'30px'}}>
        <div class="row">
          <div class="col-sm-12">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p>
              <span class="glyphicon glyphicon-map-marker"></span> No 49,
              Paniyanduwa Road , Ambalangoda
            </p>
            <p>
              <span class="glyphicon glyphicon-phone"></span> +94 71 8282669
            </p>
            <p>
              <span class="glyphicon glyphicon-envelope"></span>{" "}
              studiok@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
