import React, { useEffect } from "react";
import "./styles/filter.css";
import svgicon from "../assets/img/filter/q-1-guest.svg";
import familySvg from "../assets/img/filter/second.svg";
import single from "../assets/img/filter/first.svg";
import aged from "../assets/img/filter/third.svg";
import all from "../assets/img/filter/forth.svg";

import Loader from "../Components/loader";

function Filter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeSlide = (id, qsid) => {
    //TODO check having active or not
    var element = document.getElementById(id);
    var element_n = document.getElementById(qsid);

    if (!element.classList.contains("active")) {
      //TODO CHANGE QUESTIONS
      var ele = document.getElementsByClassName("qsn");
      for (var i = 0; i < ele.length; i++) {
        var temp = document.getElementById(ele[i].id);
        if (temp.classList.contains("active")) {
          temp.classList.remove("active");
          temp.classList.add("filt-field-wrapper");
        }
      }
      //TODO CHANGE BUTTON ACTIVE
      var btNele = document.getElementsByClassName("qsnb");
      for (var i = 0; i < btNele.length; i++) {
        var temp1 = document.getElementById(btNele[i].id);
        if (temp1.classList.contains("active")) {
          temp1.classList.remove("active");
        }
      }
      element.classList.remove("filt-field-wrapper");
      element.classList.add("active");
      element_n.classList.add("active");
    }
  };
  const nextSlide = () => {
    var ele = document.getElementsByClassName("qsnb");
    var progreBarincrease = 60;
    var progressBar = document.getElementById("hr-line");

    for (var i = 0; i < ele.length; i++) {
      var id = ele[i].id;
      var temp = document.getElementById(id);
      if (temp.classList.contains("active")) {
        if (i !== 4) {
          progressBar.style.width =
            progressBar.clientWidth + progreBarincrease + "px";
          var id_s = i + 1;
          var ids = i + 2;
          document.getElementById("btn" + id_s).classList.remove("active");
          document.getElementById("qs" + id_s).classList.remove("active");
          document
            .getElementById("qs" + id_s)
            .classList.add("filt-field-wrapper");
          var element = document.getElementById("qs" + ids);
          var element_n = document.getElementById("btn" + ids);

          element.classList.remove("filt-field-wrapper");
          element.classList.add("active");
          element_n.classList.add("active");
          break;
        }
      }
    }
  };
  const previousSlide = () => {
    var ele = document.getElementsByClassName("qsnb");
    var progreBarincrease = 60;
    var progressBar = document.getElementById("hr-line");
    for (var i = 0; i < ele.length; i++) {
      var id = ele[i].id;
      var temp = document.getElementById(id);
      if (temp.classList.contains("active")) {
        if (i !== 0) {
          progressBar.style.width =
            progressBar.clientWidth - progreBarincrease + "px";
          var id_s = i + 1;
          var ids = i + 1 - 1;
          document.getElementById("btn" + id_s).classList.remove("active");
          document.getElementById("qs" + id_s).classList.remove("active");
          document
            .getElementById("qs" + id_s)
            .classList.add("filt-field-wrapper");
          var element = document.getElementById("qs" + ids);
          var element_n = document.getElementById("btn" + ids);

          element.classList.remove("filt-field-wrapper");
          element.classList.add("active");
          element_n.classList.add("active");
          break;
        }
      }
    }
  };
  return (
    <>
      <nav class="breadcrumb-bg">
        <div class="container no-index">
          <div class="breadcrumb">
            <ol>
              <li>
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Customizing</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </nav>
      <div className="filt-container">
        <div className="filt-wrapper">
          <div className="filt-controller">
            <ul>
              <li>
                <i onClick={previousSlide} class="bx bx-chevron-left"></i>
              </li>
              <li
                id="btn1"
                className="active qsnb"
                onClick={() => changeSlide("qs1", "btn1")}
              >
                1
              </li>
              <li
                id="btn2"
                className=" qsnb"
                onClick={() => changeSlide("qs2", "btn2")}
              >
                2
              </li>
              <li
                id="btn3"
                className=" qsnb"
                onClick={() => changeSlide("qs3", "btn3")}
              >
                3
              </li>
              <li
                id="btn4"
                className=" qsnb"
                onClick={() => changeSlide("qs4", "btn4")}
              >
                4
              </li>
              <li
                id="btn5"
                className=" qsnb"
                onClick={() => changeSlide("qs5", "btn5")}
              >
                5
              </li>
              <li>
                <i onClick={nextSlide} class="bx bx-chevron-right"></i>
              </li>
            </ul>

            <div className="hr-container">
              <div id="hr-line" className="hr-line"></div>
            </div>

            <div className="filt-qstn-wrapper">
              <div id="qs1" className=" active qsn">
                <h4>1. Who is the matters for</h4>

                <div className="filt-field">
                  <div className="bx-cnt bx-active">
                    <p>A couple or kids</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Single Person</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Patient or an elder</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Guest</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>All member use</p>

                    <i className="bx bx-check"></i>
                  </div>
                </div>
              </div>
              <div id="qs2" className="filt-field-wrapper qsn">
                <h4>2. Is partner disturbance an issue</h4>
                <div className="filt-field">
                  <div className="bx-cnt bx-active">
                    <p>Yes</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>No</p>

                    <i className="bx bx-check"></i>
                  </div>
                </div>
              </div>
              <div id="qs3" className="filt-field-wrapper qsn">
                <h4>3. Whic type of matterss would you prefer</h4>
                <div className="filt-field">
                  <div className="bx-cnt bx-active">
                    <p>Gentle</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Medium firm</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Firm</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Spring</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Hi-tech</p>

                    <i className="bx bx-check"></i>
                  </div>
                </div>
              </div>
              <div id="qs4" className="filt-field-wrapper qsn">
                <h4>4. What is your sleeping posture?</h4>

                <div className="filt-field">
                  <div className="bx-cnt bx-active">
                    <p>Your side</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Your back</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Your stomach</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Multiple postures</p>

                    <i className="bx bx-check"></i>
                  </div>
                </div>
              </div>
              <div id="qs5" className="filt-field-wrapper qsn">
                <h4>5. What sleep issues are you currently facing?</h4>

                <div className="filt-field">
                  <div className="bx-cnt bx-active">
                    <p>Allergies</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Overall soreness or pain</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Sweating and humidity</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>Discomfort caused by body weight</p>

                    <i className="bx bx-check"></i>
                  </div>
                  <div className="bx-cnt">
                    <p>No Problem</p>

                    <i className="bx bx-check"></i>
                  </div>
                </div>
                <div className="filt-submit">
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader />
    </>
  );
}

export default Filter;
