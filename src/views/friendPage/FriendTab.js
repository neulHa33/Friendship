import React, { useState } from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { BsFillPersonDashFill } from "react-icons/bs";
import axios from "axios";

export default function FriendTab() {
  const styles = {
    tabs: {
      width: "400px",
      display: "inline-block",
      marginRight: "30px",
      verticalAlign: "top"
    },
    links: {
      margin: 0,
      padding: 0
    },
    tabLink: {
      height: "30px",
      lineHeight: "30px",
      padding: "0 15px",
      cursor: "pointer",
      borderBottom: "2px solid transparent",
      display: "inline-block"
    },
    activeLinkStyle: {
      borderBottom: "2px solid #333"
    },
    visibleTabStyle: {
      display: "inline-block"
    },
    content: {
      padding: "0 15px"
    }
  };

  //친구 마이페이지 -친구 정보 조회
  const [friendInfo] = useState([
    {
      id: "0",
      friendPhoto: "https://bootdey.com/img/Content/avatar/avatar6.png",
      friendName: "beomin?",
      birthDay: "6/8",
      anniversaryList: [
        {
          id: 1,
          anniversaryName: "생일",
          anniversaryDate: "Jun 8, 2022",
          anniversaryContent: "돈내놔"
        },
        {
          id: 2,
          anniversaryName: "생일2",
          anniversaryDate: "Jun 9, 2022",
          anniversaryContent: "돈내놔"
        }
      ]
    }
  ]);

  //친구 마이페이지 - 받은 펀딩 조회
  const [funding] = useState([
    {
      giftPhoto: "",
      giftName: "Iphone",
      giftPrice: "50000",
      giftFundingPrice: "5000",
      giftFundingRate: "10"
    },

    {
      giftPhoto: "",
      giftName: "S22",
      giftPrice: "50000",
      giftFundingPrice: "5000",
      giftFundingRate: "10"
    }
  ]);

  function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(
        <li key={t.id}>
          <a
            id={t.id}
            href={"/read/" + t.id}
            onClick={(event) => {
              event.preventDefault();
              props.onChangeMode(Number(event.target.id));
            }}
          >
            {t.anniversaryName} | {t.anniversaryDate} | {t.anniversaryContent}
          </a>
        </li>
      );
      // console.log(props.topics.length);
    }

    return (
      <nav>
        <ul>{lis}</ul>
      </nav>
    );
  }

  const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
      height: 20,
      width: "70%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 50
    };

    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: "right"
    };

    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "bold"
    };

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };

  let nav = null;
  const [mode, setMode] = useState("READ");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  const [topics, setTopics] = useState([
    {
      id: 1,
      anniversaryName: "생일",
      anniversaryDate: "Jun 8, 2022",
      anniversaryContent: "돈내놔"
    },
    {
      id: 2,
      anniversaryName: "생일2",
      anniversaryDate: "Jun 9, 2022",
      anniversaryContent: "돈내놔"
    }
  ]);
  let contextControl = null;
  let content = null;

  if (mode === "READ") {
    let anniversaryName,
      anniversaryDate,
      anniversaryContent = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        anniversaryName = topics[i].anniversaryName;
        anniversaryDate = topics[i].anniversaryDate;
        anniversaryContent = topics[i].anniversaryContent;
      }
    }
    //content = <Article  body={body}></Article>
  } else if (mode === "NAV") {
    nav = (
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("ACLICKED");
          setId(_id);
        }}
      ></Nav>
    );
  }

  function FriendInfo({ friendInfo }) {
    return (
      <>
        <div>
          <img src={friendInfo.friendPhoto} />
          <b>{friendInfo.friendName}</b>
        </div>

        <button value={"clickBtn"}>기념일 정보</button>
        <ul>
          <li>
            <p>{friendInfo.anniversaryList[0].anniversaryName}</p>
            <p>{friendInfo.anniversaryList[0].anniversaryDate}</p>
            <p>{friendInfo.anniversaryList[0].anniversaryContent}</p>
          </li>
          <li>
            <p>{friendInfo.anniversaryList[1].anniversaryName}</p>
            <p>{friendInfo.anniversaryList[1].anniversaryDate}</p>
            <p>{friendInfo.anniversaryList[1].anniversaryContent}</p>
          </li>
        </ul>
      </>
    );
  }

  function use_for(friendInfo) {
    const result = [];

    for (let i = 0; i < friendInfo[0].anniversaryList.length; i++) {}

    return result;
  }

  function Funding({ funding }) {
    return (
      <>
        <div>
          <img src={funding.giftPhoto} />
          <b>{funding.giftName}e</b>
          <p>{funding.giftPrice}원</p>
        </div>
        <div>
          <ProgressBar
            key={funding.id}
            bgcolor="#6a1b9a"
            completed={funding.giftFundingRate}
          />
          <p>
            {funding.giftFundingPrice}원{}
          </p>
        </div>
      </>
    );
  }

  return (
    <div>
      <header>
        <h4>Logo</h4>
      </header>
      <Tabs
        name="tabs1"
        className="tabs tabs-1"
        handleSelect={this.changeSelectedTab}
        selectedTab={this.tabs1}
      >
        <div className="tab-links">
          <TabLink to="tab1">친구 정보 tab</TabLink>
          <TabLink to="tab2">받은 펀딩</TabLink>
        </div>

        <div className="content">
          <TabContent for="tab1">
            <div>
              {friendInfo.map((friendInfo) => (
                <FriendInfo friendInfo={friendInfo} key={friendInfo.id} />
              ))}
              {use_for(friendInfo)}
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
                setMode("NAV");
              }}
            >
              기념일 정보
            </button>
            {nav}
            {content}
          </TabContent>

          <TabContent for="tab2">
            <div>
              {funding.map((funding) => (
                <Funding funding={funding} key={funding.id} />
              ))}
            </div>
          </TabContent>
        </div>
      </Tabs>

      <Tabs
        name="tabs2"
        handleSelect={this.changeSelectedTab}
        selectedTab={this.tabs2}
        activeLinkStyle={styles.activeLinkStyle}
        visibleTabStyle={styles.visibleTabStyle}
        style={styles.tabs}
      ></Tabs>
    </div>
  );
}
