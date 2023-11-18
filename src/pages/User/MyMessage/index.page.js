import React, { useState } from "react";
import { t } from "i18next";
import { Link } from "react-router-dom";

import {
  SectionLayoutComponent,
  MetaTags,
  TextMessage,
  Dropdown,
  ImageElement,
} from "../../../components";
import routesMap from "../../../routeControl/userRouteMap";

function MyMessage() {
  const [loading, setLoading] = useState(false);
  const onSubmit = () => {
    setLoading(true);
  };
  const dropdownItem = ["View Profile", "Clear Chat", "Block User"];

  return (
    <>
      <MetaTags title={t("text.myMessage.title")} />
      <SectionLayoutComponent extraClassName="msgSec notification">
        <div className="d-flex justify-content-end align-items-start mb-3">
          <Link
            to={`${routesMap.PROFILE.path}`}
            className="readmore position-relative"
          >
            <em className="icon-arrow-back" />
            {t("text.myMessage.backToProfile")}
          </Link>
        </div>
        <div className="row g-0 bg-white">
          <div className="col-4 listing">
            <div className="msgSec_list">
              <div className="search">
                <div className="form-group mb-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here..."
                  />
                </div>
              </div>
              <ul className="list-unstyled bg-white mb-0">
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg online">
                      <ImageElement source="/messages/01.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Kristin Jezedzik</h6>
                        <span>Just now</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">
                          Hello, tomorrow in 5 o&apos;clock.
                        </p>
                        <span className="badge text-bg-danger d-flex align-items-center justify-content-center font-lt p-0">
                          2
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg online">
                      <ImageElement source="/messages/02.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Maria Carpentier</h6>
                        <span>5 mins</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">Waiting for someone.</p>
                        <span className="badge text-bg-danger d-flex align-items-center justify-content-center font-lt p-0">
                          2
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg online">
                      <ImageElement source="/messages/03.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Zoe Stopford</h6>
                        <span>10 mins</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">Lets hangout tonight.</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg online">
                      <ImageElement source="/messages/04.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Victoria Ewart</h6>
                        <span>Yesterday</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">Alright.</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg">
                      <ImageElement source="/messages/05.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Matilda Goldhar</h6>
                        <span>Yesterday</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">Hey!</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg">
                      <ImageElement source="/messages/06.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Caitlyn Mussen</h6>
                        <span>Yesterday</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">I am good too...</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg">
                      <ImageElement source="/messages/07.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Zara Cheyne</h6>
                        <span>Yesterday</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">
                          Hello, tomorrow in 5 o&apos;clock.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center">
                    <div className="userImg">
                      <ImageElement source="/messages/08.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Gemma Luker</h6>
                        <span>Yesterday</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">How are you doing ?</p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center user_block">
                    <div className="userImg">
                      <ImageElement source="/messages/09.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Eva Harriet</h6>
                        <span>Yesterday</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">
                          Hello, tomorrow in 5 o&apos;clock.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className="user">
                  <Link to="#" className="d-flex align-items-center user_block">
                    <div className="userImg">
                      <ImageElement source="/messages/10.png" alt="User" />
                    </div>
                    <div className="userCaption w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="font-md">Kristin Jezedzik</h6>
                        <span>5 mins</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-lt mb-0">What about you</p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 messaging">
            <div className="msgSec_right ">
              <div className="msgSec_right_header bg-white d-flex align-items-sm-center justify-content-between">
                <div className="userProfile d-flex align-items-center">
                  <div className=" userImg online">
                    <ImageElement source="/messages/01.png" alt="User" />
                  </div>
                  <div className="userProfile_caption">
                    <h5 className="font-md mb-0 text-truncate">
                      Kristin Jezedzik
                    </h5>
                    <p className="mb-0">27 • London</p>
                  </div>
                </div>

                <Dropdown
                  variant="light"
                  dropdownItems={dropdownItem}
                  buttonTitle={<em className="icon-more" />}
                  drop="down"
                  arrowIcon={false}
                />
              </div>
              <div className="msgSec_right_middle">
                <div className="msg_wrap">
                  <div className="rcv-msg">
                    <div className="chatBox"> Hey...</div>
                  </div>
                  <div className="rcv-msg">
                    <div className="chatBox">How are you doing ?</div>
                    <span className="time">08:15PM</span>
                  </div>
                  <div className="send-msg">
                    <div className="chatBox"> Hey...</div>
                  </div>
                  <div className="send-msg">
                    <div className="chatBox"> I am good what about you</div>
                  </div>
                  <div className="send-msg">
                    <div className="chatBox"> May I know you?</div>
                    <span className="time">09:20PM</span>
                  </div>
                  <div className="timeRow">
                    <span>Today</span>
                  </div>
                  <div className="rcv-msg">
                    <div className="chatBox">I am good too</div>
                  </div>
                  <div className="rcv-msg">
                    <div className="chatBox">
                      Not yet but we will know eachother soon
                    </div>
                    <span className="time">09:30 PM</span>
                  </div>
                </div>
              </div>
              <div className="msgSec_right_bottom">
                <TextMessage onSubmit={onSubmit} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </SectionLayoutComponent>
    </>
  );
}

export default MyMessage;
