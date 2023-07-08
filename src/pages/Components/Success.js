import React from 'react'

export default function Success() {
  return (
    <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop:50,
            marginBottom:20,
            background:
              'url("https://img1.picmix.com/output/stamp/thumb/5/3/3/4/1034335_985ee.gif")',
          }}
        >
          {" "}
          <img
            src={"https://i.gifer.com/7efs.gif"}
            style={{ width: "25%", height: "25%" }}
          />
          <h4 className="desktop-responisve">
            {" "}
            Great news ! Your Order has been Placed !
          </h4>
          <h4 align="center" className="mobile-responisve">
            {" "}
            Great news !<br /> Your Order has been Placed !
          </h4>
          <p
            align="center"
            style={{ width: "75%", fontSize: 14, lineHeight: "28px" }}
          >
            Thank you For your Purchase! You will receive an Order confirmation
            email with tracking details of your order.
          </p>
          <div class="block m-top1" style={{ marginTop: 10 }}>
            <div class="block-content">
              <div class="social-content">
                <h6 align="center">Follow us on</h6>
                <div id="social-block">
                  <div class="social">
                    <ul class="list-inline mb-0 justify-content-end">
                      <li class="list-inline-item mb-0">
                        <a
                          href="https://m.facebook.com/poppymattressindia/"
                          target="_blank"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>

                      <li class="list-inline-item mb-0">
                        <a
                          href="https://www.instagram.com/poppymattress"
                          target="_blank"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>

                      <li class="list-inline-item mb-0">
                        <a
                          href="https://in.linkedin.com/company/poppymattress"
                          target="_blank"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li class="list-inline-item mb-0">
                        <a
                          href="https://www.youtube.com/@poppymattress"
                          target="_blank"
                        >
                          <i class="fa fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
