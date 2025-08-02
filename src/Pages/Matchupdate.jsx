import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Helper from "../helper";
import { useAuth } from "../AuthContext";
import { WebSocketContext } from "../Context/websocket";
import { getUserBalance } from "../services/users";
import { getAllEvents } from "../redux/slice/event/eventSlice";
import { TimeContext } from "../TimeContext/TimeContext";
import { getMatchData } from "../redux/slice/eventData/eventDataSlice";
import { getMatchFancyData } from "../redux/slice/fancyData/fancyDataSlice";
import { getUserBal } from "../redux/slice/user/userSlice";
import { getLoginUser } from '../redux/slice/userData/userDataSlice';
import axios from "axios";
import Appconfig from "../config/config";
import { setData } from "../redux/slice/betting/bettingSlice";
import { toast } from "react-toastify";
import { getAllBets } from "../redux/slice/openBet/openBetSlice";
import { Modal } from "antd";
import { DesktopOutlined } from "@ant-design/icons";

function Matchupdate() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.eventData);
  const userFancyData = useSelector((state) => state.fancyData);
  const userbalance = useSelector((state) => state.userbal);
  const openbets = useSelector((state) => state.bets);
  const balance = userbalance?.userBalance;
  const userInfo = Helper(); // get login user details
  const { setShowLoginModel, betPlaced, setBetPlaced, setBetPlacedLoader, currentExposure, currentBalance } = useAuth();
  const websocket = useContext(WebSocketContext);
  const { event_id, is_inplay, } = useParams();

  // console.log('event page user balance : ', balance)

  const getOpenBetsByEvent = async () => {
    dispatch(
      getAllBets({
        user_id: userInfo?._id,
      })
    );
  };

  useEffect(() => {
    getOpenBetsByEvent();
  }, [betPlaced]);


  const [selectedSection, setSelectedSection] = useState("odds")
  const [betsData, setBetsData] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [marketTypes, setMarketTypes] = useState([]);
  const [blockMatchOdds, setBlockMatchOdds] = useState({});
  const [blockBookmaker, setBlockBookmaker] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [scoreUrl, setScoreUrl] = useState("");
  const [eventData, setEventData] = useState([]);
  const [fancy, setFancy] = useState([]);
  const [eventType, setEventType] = useState("");
  const [eventName, setEventName] = useState("");
  const [openDate, setOpenDate] = useState("");

  const [matchOdds, setMatchOdds] = useState("");
  const [bookmaker, setBookmaker] = useState("");
  const [tiedMatch, setTiedMatch] = useState("");
  const [toss, setToss] = useState("");
  const [fancyData, setFancyData] = useState([]);
  const [postionFancyList, setPostionFancyList] = useState([]);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [matchOddsBhaw, setMatchOddsBhaw] = useState("");
  const [bookmakerBhaw, setBookmakerBhaw] = useState("");
  const [isEventLoading, setIsEventLoading] = useState(true);
  const [tvUrl, setTvUrl] = useState('');
  const [isInplay, setIsInplay] = useState(false);
  const [isTvOpen, setIsTvOpen] = useState(false);
  const [isDesktopTvOpen, setIsDesktopTvOpen] = useState(false);
  const [isScoreCardOpen, setIsScoreCardOpen] = useState(true);
  const [openPlaceBet, setOpenPlaceBet] = useState({
    selectionId: "",
    type: "",
    odds: "",
  });
  const [showBetsSlip, setShowBetsSlip] = useState(false);
  const [BetPlaceData, setBetPlaceData] = useState({
    event_id: "",
    market_id: "",
    is_back: "",
    price: "",
    is_fancy: "",
    selection_id: "",
    runner_name: "",
    PM_FANCY: false,
  });
  const [selection_id, setSelection_id] = useState("");
  const [marketId, setMarketId] = useState("");
  const [type, setType] = useState("back");

  const [htmlId, setHtmlId] = useState("");
  const [size, setSize] = useState("");
  const [ProfitValue, setProfitValue] = useState(0);
  const [lossValue, setLossValue] = useState(0);
  const [is_fancy, setIs_fancy] = useState(false);
  const [selectionIdNew, setSelectionIdNew] = useState("");
  const [StakeValue, setStakeValue] = useState(0);
  const [showPlaceBetPopup, setShowPlaceBetPopup] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [fancyExposure, setFancyExposure] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isBetPlaced, setIsBetPlaced] = useState(false);
  const [generalSetting, setGeneralSetting] = useState([]);
  const [chips, setChips] = useState([]);
  const [openFancyMinMaxStack, setOpenFancyMinMaxStack] = useState("");
  const [inputStake, setInputStake] = useState('');
  const [betSlipData, setBetSlipData] = useState({ index: "", type: "", price: "" });
  const [openMinMax, setOpenMinMax] = useState('')

  const handleStake = (amount, type) => {
    if (type === "stake") {
      setInputStake(amount)
    }
    if (type === "keypad") {
      if (inputStake.length < 7) {
        setInputStake(inputStake + amount);
      }
    }
    if (type === "delete") {
      if (inputStake.length > 0) {
        setInputStake(inputStake.slice(0, -1));
      }
    }
    if (type === "Plus") {
      if (inputStake.length < 7) {
        setInputStake(Number(inputStake) + 1);
      } else {
        setInputStake("800");
      }

    }
    if (type === "Minus") {
      if (inputStake.length == 0 || Number(inputStake) == "0") {
        setInputStake("1");
      } else {
        setInputStake(Number(inputStake) - 1);
      }
    }
  }
  // const handleOpenBetSlip = (index, type, price) => {
  //   setBetSlipData({ index: index, type: type, price: price })
  // }



  function calc(t_stake, priceVal, selection_id) {
    var isfancy = BetPlaceData.is_fancy;
    priceVal = parseFloat(priceVal);
    t_stake = parseFloat(t_stake);
    var isback = BetPlaceData.is_back
    if (!isfancy) {
      var pl = ((priceVal * t_stake) - t_stake);

      pl = parseFloat(pl.toFixed(2));
      if (isback) {
        setProfitValue(pl)
        setLossValue(t_stake)
        // console.log('back pl : ', pl, ' t_stake : ', t_stake);
      } else {
        setLossValue(pl)
        setProfitValue(t_stake)
        // console.log('calc func lay pl : ', pl, ' t_stake : ', t_stake);
      }
      // SetPosition(priceVal);
      // console.log('pl = ((priceVal * t_stake) - t_stake);', pl);
    } else {
      if (document.getElementById("fancyLay_Size" + selection_id)) {
        var NoValume = parseInt(
          document.getElementById("fancyLay_Size" + selection_id).innerHTML
        );
        var YesValume = parseInt(
          document.getElementById("fancyBack_Size" + selection_id).innerHTML
        );
        var inputno = parseFloat(
          document.getElementById(`fancyLay_Price${selection_id}`).innerHTML
        );
        var inputyes = parseFloat(
          document.getElementById(`fancyBack_Price${selection_id}`).innerHTML
        );

        // console.log('NoValume : ', NoValume, ' YesValume : ', YesValume, ' inputno : ', inputno, ' inputyes : ', inputyes);
      }

      pl = parseFloat(t_stake);

      if (inputno == inputyes) {
        if (isback) {
          setLossValue(pl.toFixed(2))
          setProfitValue((YesValume * pl / 100).toFixed(2))

        } else {
          setLossValue((NoValume * pl / 100).toFixed(2))
          setProfitValue(pl.toFixed(2))

        }
      } else {
        setLossValue(pl.toFixed(2))
        setProfitValue(pl.toFixed(2))
      }
    }
  }

  function SetPosition(stake, priceVal, market_id, is_back, selection_id) {
    priceVal = parseFloat(priceVal)
    var MarketId = market_id;
    var MId = MarketId.replace('.', '');
    var selectionId = selection_id;
    var isback = is_back;
    stake = parseFloat(stake);
    let MatchMarketTypes = "";
    var runners = document.getElementsByClassName("position_" + MId);
    // console.log('runners', runners);
    var tempRunners = "";
    for (var item of runners) {
      var selecid = item.getAttribute('data-id');
      var winloss = parseFloat(item.value);
      var curr = 0;
      if (selectionId == selecid) {
        if (isback) {
          if (MatchMarketTypes == 'M') {
            curr = winloss + ((priceVal * stake) / 100);
          } else {
            curr = winloss + ((priceVal * stake) - stake);
          }
        } else {
          if (MatchMarketTypes == 'M') {
            curr = winloss + (-1 * parseFloat((priceVal * stake) / 100));
          } else {
            curr = winloss + (-1 * parseFloat((priceVal * stake) - stake));
          }
        }
      } else {
        if (isback == 1) {
          curr = winloss + (-1 * (stake));
        } else {
          curr = winloss + stake;
        }
      }
      var currV = curr;
      if (document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId)) {
        document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId).setAttribute('data-value', winloss.toFixed(2))
        document.getElementById(selecid + "_maxprofit_loss_runner_prev_" + MId).innerHTML = Math.abs(winloss.toFixed(2));
      }
      if (document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId)) {
        document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId).setAttribute('data-value', currV.toFixed(2))
        document.getElementById(selecid + "_maxprofit_list_loss_runner_next_" + MId).innerHTML = Math.abs(currV.toFixed(2));
      }
      if (document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId)) {
        document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId).setAttribute('data-value', currV.toFixed(2))
        document.getElementById(selecid + "_maxprofit_Mlist_loss_runner_next_" + MId).innerHTML = Math.abs(currV.toFixed(2));
      }
    }
  }

  const placeStakeValue = (stake) => {
    if (String(stake).startsWith("NaN")) {
      stake = String(stake).replace("NaN", "");
    }
    setStakeValue(parseFloat(stake));
    calc(stake, BetPlaceData.price, BetPlaceData.selection_id);
    SetPosition(
      stake,
      BetPlaceData.price,
      BetPlaceData.market_id,
      BetPlaceData.is_back,
      BetPlaceData.selection_id
    );
  };

  const handlePriceValue = (priceVal) => {
    if (String(priceVal).startsWith("NaN")) {
      priceVal = String(priceVal).replace("NaN", "");
    }
    priceVal = parseFloat(priceVal).toFixed(2);
    setBetPlaceData({
      ...BetPlaceData,
      price: parseFloat(priceVal).toFixed(2)
    });
    calc(StakeValue, priceVal, BetPlaceData.selection_id)
    SetPosition(StakeValue, priceVal, BetPlaceData.market_id, BetPlaceData.is_back, BetPlaceData.selection_id);
  };

  const handleOpenBetSlip = (
    event_id,
    market_id,
    is_back,
    size,
    is_fancy,
    selection_id,
    runner_name,
    htmlId,
    PM_FANCY = null,
    market_name,
    is_manual = "No"
  ) => {
    if (!userInfo) {
      setShowLoginModel(true);
      return;
    }

    setShowBetsSlip(true);
    setSelection_id(selection_id);
    setMarketId(market_id);
    setType(is_back ? "back" : "lay");
    setHtmlId(htmlId);
    setSize(size);
    setIs_fancy(is_fancy);

    if (selection_id) {
      setSelectionIdNew(selection_id);
    }

    setProfitValue(0);
    setStakeValue(0);
    var priceNew = document.getElementById(htmlId).innerHTML;
    var lastFive = market_id.substr(market_id.length - 3);
    if (lastFive == "-BM") {
      priceNew = (priceNew / 100 + 1).toFixed(2);
    } else {
      if (
        market_name == "Bookmaker" ||
        market_name == "Bookmaker 2" ||
        is_manual == "Yes"
      ) {
        priceNew = (priceNew / 100 + 1).toFixed(2);
      }
    }
    // console.log('priceNew:', priceNew)
    setBetPlaceData({
      event_id: event_id,
      market_id: market_id,
      is_back: is_back ? 1 : 0,
      price: priceNew,
      is_fancy: is_fancy,
      selection_id: selection_id,
      runner_name: runner_name,
      PM_FANCY: PM_FANCY,
    });
    setShowPlaceBetPopup(true);

    setTimeout(function () {
      SetPosition(0, priceNew, market_id, is_back, selection_id);
      calc(0, priceNew, selection_id);
      placeStakeValue(0);
    }, 800);
  };

  function betPlace(ishow) {
    console.log("BEt place funtion triggered..");

    if (userInfo) {
      let exposureLimit;
      if (userInfo.user_type == "User") {
        setBetPlacedLoader(true);

        if (userInfo?.exposer_limit) {
          exposureLimit = Number(userInfo?.exposer_limit);
          const calc = Number(lossValue) + (Number(currentExposure) * -1);

          // console.log({
          //   'exposure limit': exposureLimit,
          //   ' profitValue': ProfitValue,
          //   'lossValue': lossValue,
          //   'current exposure': currentExposure,
          //   '+ve current exposure': (Number(currentExposure) * -1),
          //   'Calc expo after place bets': calc
          // });

          if (exposureLimit < calc) {
            toast.error(`Exposure Limit Is ${exposureLimit}`, { autoClose: 3000 });
            return;
          }

        }

        setPlacing(true);
        setIsLoading(true);

        var data = JSON.stringify({
          user_id: userInfo._id,
          match_id: BetPlaceData.event_id,
          selection_id: BetPlaceData.selection_id,
          is_back: BetPlaceData.is_back,
          stake: StakeValue,
          price_val: BetPlaceData.price,
          market_id: BetPlaceData.market_id,
          is_fancy: BetPlaceData.is_fancy == 1 ? "Yes" : "No",
          market_name: "Match odds",
          profit: ProfitValue,
          loss: lossValue,
          pm_fancy: BetPlaceData.PM_FANCY,
        });

        // console.log("bet send data : ", data);

        var config = {
          method: "post",
          url: `${Appconfig.apiUrl}betting/addBetting`,
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
        // alert("success");
        axios(config)
          .then(function (response) {
            dispatch(setData(new Date().toISOString()));

            try {
              setPlacing(false);
              setSelection_id("");
              setHtmlId("");
              setProfitValue(0);
              setStakeValue(0);
              setShowBetsSlip(false);

              var data;
              if (userInfo) {
                data = {
                  user_id: userInfo._id,
                  event_id: event_id,
                };
              }
              dispatch(getMatchData(data));
              // getEvents()
              // getFancyData()
              if (userInfo) {
                getFancysExposure();
              }

              if (response.data.result == 0) {
                // console.log("response bet send Error :", response);
                toast.error(response.data.resultMessage);
                setBetPlacedLoader(false);
              } else {
                // console.log("response bet send Success :", response);

                setShowSuccessPopup(true);
                // Close the place bet popup
                setShowPlaceBetPopup(false);
                setBetPlaced(true);
                setBetPlacedLoader(false);

                toast.success(response.data.resultMessage);
                if (response.data.resultData[0].is_back == 1) {
                }
                if (response.data.resultData[0].is_back == 0) {
                }
                setIsBetPlaced(!isBetPlaced);
              }
              var MId = BetPlaceData.market_id.replace(".", "");
              var selectionId = BetPlaceData.selection_id;
              var runners = document.getElementsByClassName("position_" + MId);

              // console.log(
              //   "in side bet place : MId : ",
              //   MId,
              //   " runners : ",
              //   runners
              // );
              for (var item of runners) {
                var selecid = item.getAttribute("data-id");
                // console.log(" selecid : ", selecid);
                if (
                  document.getElementById(
                    selecid + "_maxprofit_list_loss_runner_next_" + MId
                  )
                ) {
                  document.getElementById(
                    selecid + "_maxprofit_list_loss_runner_next_" + MId
                  ).innerHTML = "";
                }
                if (
                  document.getElementById(
                    selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
                  )
                ) {
                  document.getElementById(
                    selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
                  ).innerHTML = "";
                }
              }
              setBetPlaceData({
                event_id: "",
                market_id: "",
                is_back: "",
                price: "",
                is_fancy: "",
                selection_id: "",
                runner_name: "",
              });
              setOpenPlaceBet({
                selectionId: "",
                type: "",
                odds: "",
              });
            } catch (e) {
              setBetPlacedLoader(false);
              console.log(e.message);
            }
            setIsLoading(false);
          })
          .catch(function (error) {
            console.log(error);
            console.log(error.message);
            setIsLoading(false);
            setPlacing(false);
            setBetPlacedLoader(false);
          });
        // } else {
        //   toast.error("Insufficient Balance");
        // }
      }
    } else {
      setShowLoginModel(true)
    }
  }

  const closePlaceBet = () => {
    var MId = BetPlaceData.market_id.replace(".", "");
    var selectionId = BetPlaceData.selection_id;
    var runners = document.getElementsByClassName("position_" + MId);

    // console.log("in side bet place : MId : ", MId, " runners : ", runners);
    for (var item of runners) {
      var selecid = item.getAttribute("data-id");
      // console.log(" selecid : ", selecid);
      if (
        document.getElementById(
          selecid + "_maxprofit_list_loss_runner_next_" + MId
        )
      ) {
        document.getElementById(
          selecid + "_maxprofit_list_loss_runner_next_" + MId
        ).innerHTML = "";
      }
      if (
        document.getElementById(
          selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
        )
      ) {
        document.getElementById(
          selecid + "_maxprofit_Mlist_loss_runner_next_" + MId
        ).innerHTML = "";
      }
    }
    setBetPlaceData({
      event_id: "",
      market_id: "",
      is_back: "",
      price: "",
      is_fancy: "",
      selection_id: "",
      runner_name: "",
    });
    setOpenPlaceBet({
      selectionId: "",
      type: "",
      odds: "",
    });
    setStakeValue(0)
  };

  const getFancyExposure = (selectionId) => {
    let findItem = fancyExposure.find(
      (item) => item.selection_id == selectionId
    );

    if (findItem) {
      return findItem?.min;
    } else {
      return false;
    }
  };

  const checkFancyExposureExists = (selectionId) => {
    let findItem = fancyExposure.find(
      (item) => item.selection_id == selectionId
    );

    if (findItem) {
      return true;
    } else {
      return false;
    }
  };

  function getGeneralSetting() {
    var data = JSON.stringify({
      user_id: userInfo?._id,
      event_id: event_id,
    });
    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}matchGeneralSetting/getAllGeneralSetting`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        try {
          // alert("Hello");
          // console.log('general setting response', response.data)
          if (response.data.result) {
            setGeneralSetting(response.data.resultData);
          }
        } catch (e) {
          // postErrorToslack(e.message);
        }
      })
      .catch(function (error) {
        console.log(error);
        // postErrorToslack(error.message);
      });
  }

  function getFancysExposure() {
    if (userInfo) {
      var data = JSON.stringify({
        event_id: event_id,
        user_id: userInfo._id,
      });
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}betting/getFancysExposure`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          try {
            if (response.data.resultData.length > 0) {
              setFancyExposure(response.data.resultData);
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setShowLoginModel(true)
    }
  }

  function getChips() {
    if (userInfo) {
      var data = JSON.stringify({
        user_id: userInfo._id,
      });
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}chips/getChips`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          try {
            // console.log('chip response : ', response)
            if (response.status) {
              // console.log('Chips data : ', response.data);
              if (response?.data?.length > 0) {
                setChips(response.data);
              } else {
                const chipData = [
                  { chip_value: 100 },
                  { chip_value: 200 },
                  { chip_value: 500 },
                  { chip_value: 1000 },
                  { chip_value: 5000 },
                  { chip_value: 10000 },
                  { chip_value: 50000 },
                  { chip_value: 100000 },
                ]
                setChips(chipData)
              }
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setShowLoginModel(true)
    }
  }

  function getFancyPosition(selectionId) {
    if (userInfo) {
      var data = JSON.stringify({
        user_id: userInfo._id,
        event_id: event_id,
        fancy_id: selectionId,
      });
      var config = {
        method: "post",
        url: `${Appconfig.apiUrl}betting/getFancyPosition`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          try {
            setPostionFancyList(response.data.resultData);
            setBookModalOpen(true);
          } catch (e) {
            console.log(e);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    console.log('openBEts : ', openbets);
    if (openbets?.bets?.length > 0) {
      let openBetsData = [];
      if (event_id) {
        openBetsData = openbets?.bets?.filter(
          (item) => item.match_id == event_id
        );
      }
      setBetsData(openBetsData);
      // console.log('openBEts data : ', openBetsData);
    }
  }, [openbets, event_id]);


  useEffect(() => {
    if (userInfo) {
      getGeneralSetting();
      getFancysExposure();
      getChips();
    }
  }, [event_id]);

  // Use Dispatch use Effects
  useEffect(() => {
    dispatch(
      getAllEvents({
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);

  useEffect(() => {
    var data;
    if (userInfo) {
      data = {
        user_id: userInfo._id,
        event_id: event_id,
      };
    } else {
      data = {
        event_id: event_id,
      };
    }
    dispatch(getMatchData(data));
  }, []);

  useEffect(() => {
    dispatch(
      getMatchFancyData({
        event_id: event_id,
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);
  // useEffect(() => {
  //   if (userInfo) {
  //     dispatch(getUserBal({
  //       user_id: userInfo?._id,
  //     }))

  //     dispatch(getLoginUser({
  //       user_id: userInfo ? userInfo._id : "",
  //     }));
  //   }
  // }, [userInfo?._id])

  // Open Websocket state
  useEffect(() => {
    if (websocket) {
      websocket.onopen = () => {
        console.log("Websocket is open ", new Date());
        setIsReady(true);
      };

      if (websocket.readyState) {
        // console.log("WESOCKET JOIN REQUEST SENT", {
        //   action: "JOIN",
        //   data: {
        //     username: "suthard444",
        //     event_id: event_id,
        //   },
        // });

        websocket.send(
          JSON.stringify({
            action: "JOIN",
            data: {
              username: "suthard444",
              event_id: event_id,
            },
          })
        );
      }
    }
    // console.log("Websocket : ", websocket);
  }, [websocket, event_id, isReady]);

  // For Bhaw Fluctuation
  useEffect(() => {
    if (websocket) {
      websocket.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        if (data.action == "MARKET_UPDATE") {
          const market = data.data;
          // console.log("MARKET SOCKET RESPONDING", market);
          // console.log("market", market);

          if (market?.market_types?.length > 0) {
            market.market_types.forEach((item) => {
              // For Match Odds
              if (
                item?.market_name == "Match Odds" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For MO Back
                  const moBackPrice = document.getElementById(
                    `moBack_Price${runner.selection_id}`
                  );
                  // console.log("mo back : ", moBackPrice?.innerHTML);
                  if (moBackPrice) {
                    moBackPrice.innerHTML = runner.back_1_price;
                  }

                  const moBackSize = document.getElementById(
                    `moBack_Size${runner.selection_id}`
                  );
                  if (moBackSize) {
                    moBackSize.innerHTML = runner.back_1_size;
                  }

                  // For MO Lay

                  const moLayPrice = document.getElementById(
                    `moLay_Price${runner.selection_id}`
                  );
                  // console.log("mo back : ", moBackPrice?.innerHTML);
                  if (moLayPrice) {
                    moLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const moLaySize = document.getElementById(
                    `moLay_Size${runner.selection_id}`
                  );
                  if (moLaySize) {
                    moLaySize.innerHTML = runner.lay_1_size;
                  }
                });
              }

              // For Bookmaker
              if (
                item?.market_name == "Bookmaker" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For BM Back
                  const bmBackPrice = document.getElementById(
                    `bmBack_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", bmBackPrice?.innerHTML);
                  if (bmBackPrice) {
                    bmBackPrice.innerHTML = runner.back_1_price;
                  }

                  const bmBackSize = document.getElementById(
                    `bmBack_Size${runner.selection_id}`
                  );
                  if (bmBackSize) {
                    bmBackSize.innerHTML = runner.back_1_size;
                  }

                  // For BM Lay

                  const bmLayPrice = document.getElementById(
                    `bmLay_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", bmBackPrice?.innerHTML);
                  if (bmLayPrice) {
                    bmLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const bmLaySize = document.getElementById(
                    `bmLay_Size${runner.selection_id}`
                  );
                  if (bmLaySize) {
                    bmLaySize.innerHTML = runner.lay_1_size;
                  }
                  // ✅ Dynamic Suspended Overlay Insert/Remove
                  const overlayId = `bmSuspend_${runner.selection_id}`;
                  const container = bmBackPrice?.parentElement?.parentElement; // target the .relative flex container
                  const existingOverlay = document.getElementById(overlayId);

                  if (runner.status === "SUSPENDED" || runner.status === "Ball Running") {
                    if (!existingOverlay && container) {
                      const span = document.createElement("span");
                      span.id = overlayId;
                      span.className = "absolute inset-0 flex justify-center items-center bg-[#0009] text-[#ff3c3c] text-[16px] uppercase z-10";
                      span.innerText = runner.status;
                      container.appendChild(span);
                    } else if (existingOverlay) {
                      existingOverlay.innerText = runner.status;
                    }
                  } else {
                    // Remove overlay if game_status is cleared
                    if (existingOverlay) {
                      existingOverlay.remove();
                    }
                  }
                });
              }

              // For Tied Match
              if (
                item?.market_name == "TIED_MATCH" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For Tied Back
                  const tiedBackPrice = document.getElementById(
                    `tiedBack_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedBack_Price?.innerHTML);
                  if (tiedBackPrice) {
                    tiedBackPrice.innerHTML = runner.back_1_price;
                  }

                  const tiedBackSize = document.getElementById(
                    `tiedBack_Size${runner.selection_id}`
                  );
                  if (tiedBackSize) {
                    tiedBackSize.innerHTML = runner.back_1_size;
                  }

                  // For Tied Lay

                  const tiedLayPrice = document.getElementById(
                    `tiedLay_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedLay_Price?.innerHTML);
                  if (tiedLayPrice) {
                    tiedLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const tiedLaySize = document.getElementById(
                    `tiedLay_Size${runner.selection_id}`
                  );
                  if (tiedLaySize) {
                    tiedLaySize.innerHTML = runner.lay_1_size;
                  }
                });
              }

              // For Toss Match
              if (
                item?.market_name == "TIED_MATCH" &&
                item.runners?.length > 0
              ) {
                item.runners.map((runner) => {
                  // For Tied Back
                  const tiedBackPrice = document.getElementById(
                    `tiedBack_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedBack_Price?.innerHTML);
                  if (tiedBackPrice) {
                    tiedBackPrice.innerHTML = runner.back_1_price;
                  }

                  const tiedBackSize = document.getElementById(
                    `tiedBack_Size${runner.selection_id}`
                  );
                  if (tiedBackSize) {
                    tiedBackSize.innerHTML = runner.back_1_size;
                  }

                  // For Tied Lay

                  const tiedLayPrice = document.getElementById(
                    `tiedLay_Price${runner.selection_id}`
                  );
                  // console.log("bm back : ", tiedLay_Price?.innerHTML);
                  if (tiedLayPrice) {
                    tiedLayPrice.innerHTML = runner.lay_1_price;
                  }

                  const tiedLaySize = document.getElementById(
                    `tiedLay_Size${runner.selection_id}`
                  );
                  if (tiedLaySize) {
                    tiedLaySize.innerHTML = runner.lay_1_size;
                  }
                });
              }
            });
          }
        }

        if (data.action === "FANCY_UPDATE") {
          const market = data.data;
          // console.log("FANCY SOCKET RESPONDING : ", market);
          if (market?.fancy_data?.length > 0) {
            // handle FANCY_UPDATE if needed
            market?.fancy_data?.forEach((item) => {
              // For Fancy Back
              const fancyBackPrice = document.getElementById(
                `fancyBack_Price${item.selection_id}`
              );
              // console.log("Fancy back : ", fancyBackPrice?.innerHTML);
              if (fancyBackPrice) {
                fancyBackPrice.innerHTML = item.back_price1;
              }

              const fancyBackSize = document.getElementById(
                `fancyBack_Size${item.selection_id}`
              );
              if (fancyBackSize) {
                fancyBackSize.innerHTML = item.back_size1;
              }

              // For Fancy Lay

              const fancyLayPrice = document.getElementById(
                `fancyLay_Price${item.selection_id}`
              );
              if (fancyLayPrice) {
                fancyLayPrice.innerHTML = item.lay_price1;
              }

              const fancyLaySize = document.getElementById(
                `fancyLay_Size${item.selection_id}`
              );
              if (fancyLaySize) {
                fancyLaySize.innerHTML = item.lay_size1;
              }
              // ✅ Dynamic Suspended Overlay Insert/Remove
              const overlayId = `fancySuspend_${item.selection_id}`;
              const container = fancyLayPrice?.parentElement?.parentElement; // target the .relative flex container
              const existingOverlay = document.getElementById(overlayId);

              if (item.game_status === "SUSPENDED" || item.game_status === "Ball Running") {
                if (!existingOverlay && container) {
                  const span = document.createElement("span");
                  span.id = overlayId;
                  span.className = "absolute inset-0 flex justify-center items-center bg-[#0009] text-[#ff3c3c] text-[16px] uppercase z-10";
                  span.innerText = item.game_status;
                  container.appendChild(span);
                } else if (existingOverlay) {
                  existingOverlay.innerText = item.game_status;
                }
              } else {
                // Remove overlay if game_status is cleared
                if (existingOverlay) {
                  existingOverlay.remove();
                }
              }
            });
          }
        }
      };
    }
  }, [websocket, event_id]);

  // Render Event Data MatchOdds Bookmaker
  useEffect(() => {
    console.log("userInfos : ", userInfos);
    if (userInfos.eventData[event_id]) {
      setScoreUrl(`https://score.trovetown.co/socket-iframe-1/crickexpo/${userInfos.eventData[event_id][0]?.betfair_event_id}`)
      setEventData(userInfos.eventData[event_id]);
      setMarketTypes(userInfos.eventData[event_id][0]?.marketTypes);
      setFancy(userInfos.eventData[event_id][0]?.fancy);
      console.log(
        "market_name : ",
        userInfos.eventData[event_id][0]?.marketTypes?.map(
          (item) => item.market_name
        )
      );

      setTvUrl(userInfos.eventData[event_id][0]?.tv_link);
      let eventType = userInfos.eventData[event_id][0];
      if (eventType?.event_type == 4) {
        setEventType("Cricket");
      } else if (eventType?.event_type == 2) {
        setEventType("Tennis");
      } else {
        setEventType("Soccer");
      }
      setEventName(eventType?.event_name);
      setOpenDate(eventType?.open_date);
      setIsInplay(eventType?.is_inplay == "True" ? true : false);

      userInfos.eventData[event_id][0]?.marketTypes?.map((type) => {
        if (type.market_name == "Bookmaker") {
          setBookmaker(type);
          // console.log("Bookmaker data : ", type);
        }
        if (type.market_name == "Match Odds") {
          setMatchOdds(type);
          // console.log("Match odds data : ", type);
        }
        if (type.market_name == "TIED_MATCH") {
          setTiedMatch(type);
          // console.log("TIED_MATCH data : ", type);
        }
        if (type.market_name == "Toss") {
          setToss(type);
          // console.log("Toss data : ", type);
        }
      });
      setIsEventLoading(false);
    }
  }, [userInfos.eventData[event_id]]);

  // Render Fancy Data
  useEffect(() => {
    // console.log(
    //   "userFancyData.fancyData[event_id] : ",
    //   userFancyData.fancyData[event_id]
    // );
    if (userFancyData.fancyData[event_id]?.length > 0) {
      setFancyData(userFancyData.fancyData[event_id]);
    }
  }, [userFancyData.fancyData[event_id], event_id]);


  return (
    <>
      {/* For Pc View */}
      <div className='hidden lg:flex gap-2 px-4 pt-[1px]'>
        {/* Right Section */}
        <div className='w-[20%] h-screen bg-[#fff]'>
          <ul>
            <li className='text-xs text-white bg-[#000] border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Sports</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Cricket</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Soccer</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Tennis</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>E_Tennis</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>FancyBet</span>
            </li>
          </ul>
        </div>
        {/* Center Section */}
        <div className='w-[70%]'>
          {/* Score Panel */}
          <div className="bg-[#172832]">
            <table
              id="cricketScoreBoard"
              name="scoreBoard"
              eventid={34556642}
              className="w-full table-fixed text-[4vw] lg:text-[1rem]"
            >
              <tbody>
                <tr>
                  <th className="align-top px-[10.4vw] pt-[1.8666666667vw] w-[44vw] relative lg:px-10 lg:pt-2 lg:w-[30.5vw]">
                    <span
                      id="multiMarketPin"
                      className="absolute left-[1.8666666667vw] w-[6.6666666667vw] h-[6.6666666667vw] bg-[url('/public/Images/fancy-pin.svg')] bg-no-repeat bg-contain lg:left-2 lg:w-6 lg:h-6"
                    />
                    <h4 className="text-white text-lg leading-[6.9333333333vw] truncate text-left lg:leading-5">England</h4>
                    <h4 className="text-white text-lg leading-[6.9333333333vw] truncate text-left lg:leading-6">India</h4>
                    <ul
                      id="time"
                      className="text-[2.1333333333vw] font-normal text-[#8eea29] text-left overflow-hidden text-ellipsis whitespace-nowrap in-play lg:text-xs"
                    >
                      <li className="inline-block mr-[1.3333333333vw] lg:mr-2" id="description" />
                      <li className="inline-block mr-[1.3333333333vw] lg:mr-2" id="currentDay">Day 2</li>
                    </ul>
                  </th>

                  {/* Innings Box 1 */}
                  <td className="w-[22.66vw] px-[1.866vw] pt-[1.866vw] align-top bg-[rgba(0,0,0,0.45)] border-l border-white/15 lg:w-[14rem] lg:px-4 lg:pt-1">
                    <h4 className="text-white font-bold leading-[6.933vw] tracking-[-0.266vw] truncate text-left lg:leading-6 lg:text-lg lg:tracking-tight">
                      247&nbsp;<span className="text-[2.666vw] font-normal lg:text-xs">(51.2)</span>
                    </h4>
                    <h4 className="text-white font-bold leading-[6.933vw] tracking-[-0.266vw] truncate text-left lg:leading-6 lg:text-lg lg:tracking-tight">
                      224&nbsp;<span className="text-[2.666vw] font-normal lg:text-xs">(69.4)</span>
                    </h4>
                    <span className="text-[2.133vw] text-[#7e97a7] lg:text-[10px]">Innings 1</span>
                  </td>

                  {/* Innings Box 2 */}
                  <td className="w-[22.66vw] px-[1.866vw] pt-[1.866vw] align-top bg-[rgba(0,0,0,0.45)] border-l border-white/15 lg:w-[14rem] lg:px-4 lg:pt-1">
                    <h4 className="text-white font-bold leading-[6.933vw] tracking-[-0.266vw] truncate text-left lg:leading-6 lg:text-lg lg:tracking-tight">
                      Yet to bat
                    </h4>
                    <h4 className="text-[#8eea29] font-bold leading-[6.933vw] tracking-[-0.266vw] truncate text-left lg:leading-6 lg:text-lg lg:tracking-tight">
                      75/2&nbsp;<span className="text-[2.666vw] font-normal lg:text-xs">(18.0)</span>
                    </h4>
                    <span className="text-[2.133vw] text-[#7e97a7] lg:text-[10px]">Innings 2</span>
                  </td>

                  {/* Refresh */}
                  <td className="flex align-top px-[1.866vw] py-[1.866vw] border-l border-white/15 lg:px-1 lg:py-3">
                    <span
                      id="refresh"
                      className="block bg-[url('/public/Images/refresh-white.svg')] bg-no-repeat bg-contain mx-auto lg:w-4 lg:h-6"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        {/* Left Section */}
        <div className='w-[30%] h-screen bg-[#fff]'>
          <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
            <div>Bet Slip</div>
            <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
          </div>
        </div>
      </div>
      {/* For Mobile view */}
      <div className='block lg:hidden'>
        <h4 className='flex justify-between items-center p-[0_1.8666666667vw] [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[3.466vw] text-white font-bold leading-[2.1]'>
          <span>Cricket</span>
          <span className='flex justify-center items-center'>
            <span className='flex justify-center items-center w-[4.8vw] h-[4.8vw] mr-[1.6vw] rounded-[1.0666666667vw] bg-[linear-gradient(-180deg,_#91d527_0%,_#60ba1e_79%)]'>
              <img src="/Images/inplay.svg" alt="" className='w-[3.2vw] h-[3.2vw]' />
            </span>
            <span className='font-normal'>In-Play</span>
          </span>
        </h4>
        {/* Score Panel */}
        <div className="bg-[#172832]">
          <table
            id="cricketScoreBoard"
            name="scoreBoard"
            eventid={34556642}
            className="w-full table-fixed text-[4vw]"
          >
            <tbody>
              <tr>
                <th className="align-top px-[10.4vw] pt-[1.8666666667vw] w-[44vw] relative">
                  <a
                    id="multiMarketPin"
                    href="#"
                    className="absolute left-[1.8666666667vw] w-[6.6666666667vw] h-[6.6666666667vw] bg-[url('/public/Images/fancy-pin.svg')] bg-no-repeat bg-contain"
                  />
                  <h4 className="text-white leading-[7.9333333333vw] truncate text-left">England</h4>
                  <h4 className="text-white leading-[6.9333333333vw] truncate text-left">India</h4>
                  <ul
                    id="time"
                    className="text-[2.1333333333vw] font-normal text-[#8eea29] clear-left text-left overflow-hidden text-ellipsis whitespace-nowrap in-play"
                  >
                    <li className="inline-block mr-[1.3333333333vw]" id="description" />
                    <li className="inline-block mr-[1.3333333333vw]" id="currentDay">Day 2</li>
                  </ul>
                </th>

                {/* Innings Box 1 */}
                <td
                  id="inningsBox1"
                  className="w-[22.6666666667vw] align-top px-[1.8666666667vw] pt-[1.8666666667vw] bg-[rgba(0,0,0,0.45)] border-l border-[rgba(255,255,255,0.15)]"
                >
                  <h4 className="text-white font-bold leading-[6.9333333333vw] tracking-[-0.2666666667vw] truncate text-left">
                    247&nbsp;<span className="text-[2.6666666667vw] text-white font-normal align-middle inline-block">(51.2)</span>
                  </h4>
                  <h4 className="text-white font-bold leading-[6.9333333333vw] tracking-[-0.2666666667vw] truncate text-left">
                    224&nbsp;<span className="text-[2.6666666667vw] text-white font-normal align-middle inline-block">(69.4)</span>
                  </h4>
                  <span className="text-[2.1333333333vw] text-[#7e97a7]">Innings 1</span>
                </td>

                {/* Innings Box 2 */}
                <td
                  id="inningsBox2"
                  name="extended"
                  eventid={34556642}
                  className="w-[22.6666666667vw] align-top px-[1.8666666667vw] pt-[1.8666666667vw] bg-[rgba(0,0,0,0.45)] border-l border-[rgba(255,255,255,0.15)]"
                >
                  <h4 className="text-white font-bold leading-[6.9333333333vw] tracking-[-0.2666666667vw] truncate text-left">
                    Yet to bat
                  </h4>
                  <h4 className="text-[#8eea29] font-bold leading-[6.9333333333vw] tracking-[-0.2666666667vw] truncate text-left">
                    75/2&nbsp;<span className="text-[2.6666666667vw] font-normal align-middle inline-block">(18.0)</span>
                  </h4>
                  <span className="text-[2.1333333333vw] text-[#7e97a7]">Innings 2</span>
                </td>

                {/* Hidden Template Box */}
                <td
                  id="inningsBoxTemplate"
                  className="hidden w-[18.6666666667vw] align-top px-[1.8666666667vw] py-[1.8666666667vw] bg-[rgba(0,0,0,0.45)] border-l border-[rgba(255,255,255,0.15)]"
                >
                  <h4 id="runsHome" />
                  <h4 id="runsAway" />
                  <span id="inningsIndex" />
                </td>

                {/* Refresh Button */}
                <td className="flex align-top px-[1.8666666667vw] py-[1.8666666667vw] border-l border-[rgba(255,255,255,0.15)]">
                  <span
                    id="refresh"
                    className="block w-[5.8666666667vw] h-[5.8666666667vw] bg-[url('/public/Images/refresh-white.svg')] bg-no-repeat bg-contain mx-auto"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MatchOdds */}
        {matchOdds != "" && (
          <div>
            <div className='flex justify-start items-center h-[12.999vw] py-[2.866vw] px-[1.8666666667vw] bg-[#e0e6e6]'>
              <span className='p-[0_2.9333vw_0_4vw] text-[3.4666666667vw] font-bold text-[#ffb200] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[4.8vw] border border-[#3333334d] py-[2.0666666667vw]'>
                Match Odds
              </span>
            </div>
            <div className='bg-[#fff]'>
              <div className='flex w-full border-b border-[#7e97a7]'>
                <div className='flex justify-center items-center relative w-[10.4vw] h-[9.333vw] bg-[#e0e6e6] '><img src="/Images/minmax.svg" alt="" className='w-[6.6vw] h-[6.6vw]' />
                  <div className="absolute left-[9.4vw] w-0 h-0 pt-[1vw]"
                    style={{
                      borderTop: "0 solid rgba(0, 0, 0, 0)",
                      borderBottom: "9.3333vw solid rgba(0, 0, 0, 0)",
                      borderLeft: "1.8666vw solid #e0e6e6"
                    }}>
                  </div>
                </div>
                <div className='flex justify-between w-full'>
                  <div className='flex gap-2 text-[2.9333333333vw] p-[1.1666666667vw_1.8666666667vw_0.8vw] ml-[1.5vw] mt-[0.5vw] w-[55%]'>
                    <img src="/Images/marketBar.svg" alt="" className='w-[6.6vw] h-[6.6vw]' />
                    <div className='flex flex-col leading-[1.2]'>
                      <span className='font-normal'>Matched</span>
                      <span className='font-black'>PTE 11,611,395</span>
                    </div>
                  </div>
                  <div className='flex text-[3.4666666667vw] font-bold w-[45%] leading-tight'>
                    <div className='text-center pt-[4vw] w-full'>Back</div>
                    <div className='text-center pt-[4vw] w-full'>Lay</div>
                  </div>
                </div>
              </div>
              <ul>
                {matchOdds?.marketRunners?.length > 0 &&
                  matchOdds?.marketRunners?.map((item, index) => (
                    <>
                      <li id={`MOrunner${index}`} className=' border-b border-[#7e97a7]'>
                        <div className='flex w-full min-h-[11.2vw]'>
                          <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                            <h4 className='text-[4vw] font-bold'>{item.runner_name}</h4>
                          </div>
                          <div className='flex w-[40%]'>
                            <div className='relative flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]' onClick={() => { handleOpenBetSlip('MOrunner1', 'back', '70') }}>
                              <div className='absolute top-0 left-0 w-full h-full bg-[#3333]'><img src="/Images/bg-disabled.png" alt="" className='w-full h-full  object-cover' /></div>
                              <span className=' text-[3.4666666667vw] font-bold '>{item.back_1_price}</span>
                              <span className='text-[2.9333333333vw]'>{item.back_1_size}</span>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]' onClick={() => { handleOpenBetSlip('MOrunner1', 'lay', '75') }}>
                              <span className=' text-[3.4666666667vw] font-bold'>{item.lay_1_price}</span>
                              <span className='text-[2.9333333333vw]'>{item.lay_1_size}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      {betSlipData?.index == `MOrunner${index}` &&
                        <div id='betSlip' className={`${betSlipData?.type == "back" ? 'bg-[#c7dbe9]' : 'bg-[#f2e5e8]'} border-b border-[#7e97a7] pt-[2.6666666667vw]`}>
                          <ul className="flex p-[0_1.6vw_2.6666666667vw] flex-wrap">
                            <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                              <p className="mt-0 p-0 text-[2.9333333333vw] text-center text-[#1e1e1e]">&nbsp;</p>
                              <div className="bg-[#dcdcdc] text-[#666] border border-[#bbb] rounded-[1.6vw] text-[4vw] font-bold leading-[10.1333333333vw] text-center">
                                {/* <a
                              id=""
                              className=""
                              href=""
                            /> */}
                                <span id="" className="">
                                  {betSlipData?.price}
                                </span>
                                {/* <a
                              id=""
                              className=""
                              href=""
                            /> */}
                              </div>
                            </li>
                            <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                              <p className="mt-0 p-0 text-[2.9333333333vw] text-center text-[#1e1e1e]">&nbsp;
                                Min Bet: <strong id="" />
                              </p>
                              <div className="flex bg-[#fff] text-[#666] border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold leading-[10.1333333333vw] text-center shadow-[inset_0_0.5333333333vw_0_0_rgba(0,_0,_0,_.1)] cursor-text">
                                <span className="flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] w-[12vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] rounded-[1.6vw_0_0_1.6vw] border-r border-[1px_solid_#aaa] text-[#2789ce]" onClick={(e) => { e.preventDefault(); handleStake("", "Minus") }}>
                                  <img src="/Images/minus.svg" alt='' className='h-[1.0666666667vw] w-[4.5333333333vw]' />
                                </span>
                                <span id="" className="typeing flex flex-1 justify-center items-center overflow-hidden relative text-[#1e1e1e] bg-[#fff0ca] shadow-[inset_0_0.2666666667vw_1.3333333333vw_rgba(161,_128,_45,_.6)] border border-[#be7809]">
                                  {inputStake}
                                </span>
                                <span className="flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] w-[12vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] rounded-[0_1.6vw_1.6vw_0] border-l border-[#aaa] text-[#2789ce]" onClick={(e) => { e.preventDefault(); handleStake("", "Plus") }}>
                                  <img src="/Images/plus.svg" alt='' className='h-[4.8vw] w-[4.5333333333vw]' />
                                </span>
                              </div>
                            </li>
                          </ul>
                          <ul className='flex mb-[1.8666666667vw] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]'>
                            <li className='flex-1 border-r border-[#ffffff26]'>
                              <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("4", "stake") }}>
                                4
                              </span>
                            </li>
                            <li className='flex-1 border-r border-[#ffffff26]'>
                              <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("30", "stake") }}>
                                30
                              </span>
                            </li>
                            <li className='flex-1 border-r border-[#ffffff26]'>
                              <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("50", "stake") }}>
                                50
                              </span>
                            </li>
                            <li className='flex-1 border-r border-[#ffffff26]'>
                              <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("200", "stake") }}>
                                200
                              </span>
                            </li>
                            <li className='flex-1 border-r border-[#ffffff26]'>
                              <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("500", "stake") }}>
                                500
                              </span>
                            </li>
                            <li className='flex-1 border-r border-[#ffffff26]'>
                              <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("1000", "stake") }}>
                                1000
                              </span>
                            </li>
                          </ul>
                          <div className='flex border-t border-[#aaa] mb-[1.866vw]'>
                            <ul className='flex flex-1 flex-wrap'>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("1", "keypad") }}>1</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("2", "keypad") }}>2</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("3", "keypad") }}>3</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("4", "keypad") }}>4</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("5", "keypad") }}>5</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("6", "keypad") }}>6</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("7", "keypad") }}>7</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("8", "keypad") }}>8</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("9", "keypad") }}>9</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("0", "keypad") }}>0</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("00", "keypad") }}>00</p>
                              </li>
                              <li className='flex flex-[1_1_16.6666666667%]'>
                                <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake(".", "keypad") }}>.</p>
                              </li>
                            </ul>
                            <span className='flex flex-[0_1_14.6666666667vw] justify-center items-center text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("", "delete") }}>
                              <img src="/Images/backspace.svg" alt="" className='w-[4.8vw] h-[3.2vw]' />
                            </span>
                          </div>
                          <ul className='flex flex-wrap p-[0_1.6vw_2.6666666667vw]'>
                            <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                              <span className='flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)]  border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold text-[#1e1e1e]' onClick={() => { setBetSlipData() }}>Cancel</span>
                            </li>
                            <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                              <span className='flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)]  border border-[#222] rounded-[1.6vw] text-[4vw] font-bold text-[#ffb200] opacity-[0.7]'>Place Bet</span>
                            </li>
                          </ul>
                          <div
                            id="acceptAnyOddsBox"
                            className={`flex flex-wrap justify-between items-center p-[1.8666666667vw] ${betSlipData?.type == "back" ? 'bg-[#c7dbe9]' : 'bg-[#f2e5e8]'}`}
                          >
                            <p
                              id="acceptAnyOdds"
                              className="flex items-center text-[3.4666666667vw] text-[#1e1e1e] mr-[1.8666666667vw] no-underline hover:no-underline hover:cursor-pointer outline-none tap-highlight-transparent"
                            >
                              <img
                                src="/Images/checked.svg"
                                alt=""
                                className="bg-[#ffb80c] w-[4.8vw] h-[4.8vw] shadow-[inset_0_0.5333333333vw_0_0_rgba(0,0,0,0.4)] p-[0.8vw] rounded-[1.0666666667vw] mr-[1.8666666667vw]"
                              />
                              Accept Any Odds
                            </p>

                            <span id="sportsBookMaxStake" className="">
                              <p
                                id="getSportsBookMaxStakeBtn"
                                className="inline-block w-[13.3333333333vw] h-[5.3333333333vw] bg-[rgba(0,0,0,0.1)] text-[3.4666666667vw] font-bold text-[#1e1e1e] leading-[5.3333333333vw] text-center rounded-[0.8vw] mr-[1.3333333333vw] no-underline hover:no-underline hover:cursor-pointer outline-none tap-highlight-transparent"
                              >
                                Max
                              </p>
                            </span>
                          </div>



                        </div>
                      }
                    </>
                  ))}
              </ul>
            </div>
          </div>
        )}
        {/* Bookmaker */}
        {bookmaker != "" && (
          <div>
            <div className='flex justify-between items-center bg-[#3b5160] h-[8.5333333333vw] border-t border-[#7e97a7]'>
              <div className='flex items-center text-[3.4666666667vw] p-[0_0_0_1.8666666667vw] text-[#fff] leading-[8.5333333333vw]'>
                <img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw] mr-[1.8666666667vw]' />
                <span className=' font-bold'>Bookmaker Market</span>
                <span className='font-normal ml-[1.8666666667vw] opacity-[0.7]'>| Zero Commission</span>
              </div>
            </div>
            <div id='bookmakerMinMax' className='relative flex justify-between items-center h-[8.5333333333vw] p-[0_0_0_1.8666666667vw] text-[3.4666666667vw] text-[#3b5160] font-bold bg-[#e4f1f9] leading-[8.5333333333vw]'>
              <span>Bookmaker</span>
              <span className='w-[6vw]' onClick={() => setOpenMinMax('bookmakerMinMax')}>
                <img src="/Images/i-icon.svg" alt="" />
              </span>
              {openMinMax == "bookmakerMinMax" &&
                <div className='absolute flex text-[#1e1e1e] font-normal top-0 right-[1.8666666667vw] bg-[#fff] rounded-[1.0666666667vw] leading-[3.7333333333vw] z-[9] shadow-[0_6px_10px_rgba(0,_0,_0,_.7)]'>
                  <div className='flex flex-col p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                    <span className='text-[2.6666666667vw] text-[#577c94] h-[3.2vw] p-[0.8vw_0_1.0666666667vw]'>Min / Max</span>
                    <span className='font-normal pt-[2vw]'> 1.00 /  781.00</span>
                  </div>
                  <div className=' p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                    <span className='flex justify-center items-center w-[6.6666666667vw] h-[6.6666666667vw]' onClick={() => setOpenMinMax('')}>
                      <img src="/Images/cross.svg" alt="" className='w-[2.4vw] h-[2.4vw]' />
                    </span>
                  </div>
                </div>
              }
            </div>
            <div className='flex justify-end items-center bg-[#f8f6e1] border-b border-[#7e97a7] w-full leading-[5.8666666667vw]'>
              <div className='flex w-[40%] text-[3.4666666667vw] font-bold'>
                <span className='text-center w-full'>Back</span>
                <span className='text-center w-full'>Lay</span>
              </div>
            </div>
            <ul className='bg-[#f8f6e1]'>
              {bookmaker?.marketRunners?.length > 0 &&
                bookmaker?.marketRunners?.map((item, index) => (
                  <>
                    <li id={`BMrunner${index}`} className='border-b border-[#7e97a7]'>
                      <div className='flex justify-end items-center w-full min-h-[11.2vw] leading-[5.8666666667vw]'>
                        <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                          <h4 className='text-[4vw] font-bold'>{item.runner_name}</h4>
                        </div>
                        <div className='relative flex w-[40%] h-full'>
                          {/* <div className='absolute right-0 top-0 w-full h-full bg-[#0006] text-[#fff] text-[3.4666666667vw] font-bold text-center justify-center items-center flex' style={{ textShadow: "0 0.2667vw 1.0667vw #00000080" }}> <span className='opacity-[0.8]'>Suspend</span></div> */}
                          <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(90deg,_rgba(151,_199,_234,_0.7)_0%,_#97c7ea_65%)] w-full min-h-[11.2vw]'>
                            <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#72bbef]'>
                              <span className=' text-[3.4666666667vw] w-full font-bold '>{item.back_1_price}</span>
                              {/* <span className='text-[2.9333333333vw]'>21</span> */}
                            </div>
                          </div>
                          <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(270deg,_#f7cdd6bf_5%,_#f0c0cb_60%)] w-full min-h-[11.2vw]'>
                            <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#faa9ba]'>
                              <span className=' text-[3.4666666667vw] w-full font-bold '>{item.lay_1_price}</span>
                              {/* <span className='text-[2.9333333333vw]'>21</span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    {betSlipData?.index == `BMrunner${index}` &&
                      <div id='betSlip' className={`${betSlipData?.type == "back" ? 'bg-[#c7dbe9]' : 'bg-[#f2e5e8]'} border-b border-[#7e97a7] pt-[2.6666666667vw]`}>
                        <ul className="flex p-[0_1.6vw_2.6666666667vw] flex-wrap">
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <p className="mt-0 p-0 text-[2.9333333333vw] text-center text-[#1e1e1e]">&nbsp;</p>
                            <div className="bg-[#dcdcdc] text-[#666] border border-[#bbb] rounded-[1.6vw] text-[4vw] font-bold leading-[10.1333333333vw] text-center">
                              {/* <a
                        id=""
                        className=""
                        href=""
                      /> */}
                              <span id="" className="">
                                {betSlipData?.price}
                              </span>
                              {/* <a
                        id=""
                        className=""
                        href=""
                      /> */}
                            </div>
                          </li>
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <p className="mt-0 p-0 text-[2.9333333333vw] text-center text-[#1e1e1e]">&nbsp;
                              Min Bet: <strong id="" />
                            </p>
                            <div className="flex bg-[#fff] text-[#666] border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold leading-[10.1333333333vw] text-center shadow-[inset_0_0.5333333333vw_0_0_rgba(0,_0,_0,_.1)] cursor-text">
                              <span className="flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] w-[12vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] rounded-[1.6vw_0_0_1.6vw] border-r border-[1px_solid_#aaa] text-[#2789ce]" onClick={(e) => { e.preventDefault(); handleStake("", "Minus") }}>
                                <img src="/Images/minus.svg" alt='' className='h-[1.0666666667vw] w-[4.5333333333vw]' />
                              </span>
                              <span id="" className="typeing flex flex-1 justify-center items-center overflow-hidden relative text-[#1e1e1e] bg-[#fff0ca] shadow-[inset_0_0.2666666667vw_1.3333333333vw_rgba(161,_128,_45,_.6)] border border-[#be7809]">
                                {inputStake}
                              </span>
                              <span className="flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] w-[12vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] rounded-[0_1.6vw_1.6vw_0] border-l border-[#aaa] text-[#2789ce]" onClick={(e) => { e.preventDefault(); handleStake("", "Plus") }}>
                                <img src="/Images/plus.svg" alt='' className='h-[4.8vw] w-[4.5333333333vw]' />
                              </span>
                            </div>
                          </li>
                        </ul>
                        <ul className='flex mb-[1.8666666667vw] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]'>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("4", "stake") }}>
                              4
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("30", "stake") }}>
                              30
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("50", "stake") }}>
                              50
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("200", "stake") }}>
                              200
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("500", "stake") }}>
                              500
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("1000", "stake") }}>
                              1000
                            </span>
                          </li>
                        </ul>
                        <div className='flex border-t border-[#aaa] mb-[1.866vw]'>
                          <ul className='flex flex-1 flex-wrap'>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("1", "keypad") }}>1</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("2", "keypad") }}>2</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("3", "keypad") }}>3</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("4", "keypad") }}>4</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("5", "keypad") }}>5</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("6", "keypad") }}>6</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("7", "keypad") }}>7</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("8", "keypad") }}>8</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("9", "keypad") }}>9</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("0", "keypad") }}>0</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("00", "keypad") }}>00</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake(".", "keypad") }}>.</p>
                            </li>
                          </ul>
                          <span className='flex flex-[0_1_14.6666666667vw] justify-center items-center text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("", "delete") }}>
                            <img src="/Images/backspace.svg" alt="" className='w-[4.8vw] h-[3.2vw]' />
                          </span>
                        </div>
                        <ul className='flex flex-wrap p-[0_1.6vw_2.6666666667vw]'>
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <span className='flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)]  border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold text-[#1e1e1e]' onClick={() => { setBetSlipData() }}>Cancel</span>
                          </li>
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <span className='flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)]  border border-[#222] rounded-[1.6vw] text-[4vw] font-bold text-[#ffb200] opacity-[0.7]'>Place Bet</span>
                          </li>
                        </ul>
                        <div
                          id="acceptAnyOddsBox"
                          className={`flex flex-wrap justify-between items-center p-[1.8666666667vw] ${betSlipData?.type == "back" ? 'bg-[#c7dbe9]' : 'bg-[#f2e5e8]'}`}
                        >
                          <p
                            id="acceptAnyOdds"
                            className="flex items-center text-[3.4666666667vw] text-[#1e1e1e] mr-[1.8666666667vw] no-underline hover:no-underline hover:cursor-pointer outline-none tap-highlight-transparent"
                          >
                            <img
                              src="/Images/checked.svg"
                              alt=""
                              className="bg-[#ffb80c] w-[4.8vw] h-[4.8vw] shadow-[inset_0_0.5333333333vw_0_0_rgba(0,0,0,0.4)] p-[0.8vw] rounded-[1.0666666667vw] mr-[1.8666666667vw]"
                            />
                            Accept Any Odds
                          </p>

                          <span id="sportsBookMaxStake" className="">
                            <p
                              id="getSportsBookMaxStakeBtn"
                              className="inline-block w-[13.3333333333vw] h-[5.3333333333vw] bg-[rgba(0,0,0,0.1)] text-[3.4666666667vw] font-bold text-[#1e1e1e] leading-[5.3333333333vw] text-center rounded-[0.8vw] mr-[1.3333333333vw] no-underline hover:no-underline hover:cursor-pointer outline-none tap-highlight-transparent"
                            >
                              Max
                            </p>
                          </span>
                        </div>



                      </div>
                    }
                  </>))}
            </ul>
          </div>
        )}

        {/* Fancy */}
        {fancyData?.length > 0 && (
          <div>
            <div className='flex text-[#fff] text-[3.7333333333vw] h-[8vw] mt-[5.3333333333vw]'>
              <div className='flex bg-[linear-gradient(-180deg,_#0a92a5_0%,_#087989_82%)] pr-[2vw]'>
                <div className='relative'>
                  <img src="/Images/pin-slide.svg" alt="" className='w-[10.6666666667vw] h-[8vw] bg-no-repeat bg-cover bg-left' />
                  <img src="/Images/fancy-pin.svg" alt="" className='absolute left-[1.6vw] top-[1.066vw] w-[5.866vw] h-[5.866vw] bg-cover' />
                </div>
                <span className='flex justify-center items-center text-[3.7333333333vw] text-[#fff] font-bold pl-[2.6666666667vw]'>
                  <span className='flex justify-center items-center w-[4.8vw] h-[4.8vw] mr-[1.6vw] rounded-[1.0666666667vw] bg-[linear-gradient(-180deg,_#91d527_0%,_#60ba1e_79%)]'>
                    <img src="/Images/inplay.svg" alt="" className='w-[3.2vw] h-[3.2vw]' />
                  </span>
                  <span>Fancy Bet</span>
                </span>
              </div>
              <span className='relative flex w-[10.9333333333vw] h-full'>
                <img src="/Images/bg-fanctbet_rules.svg" alt="" />
                <img src="/Images/rules.svg" alt="" className='absolute left-[2.8vw] top-[1.8vw] w-[4vw] h-[4vw]' />
              </span>
              <div className='relative h-[8vw] ml-[2.8vw] z-[-1]'>
                <img src="/Images/left-slide.svg" alt="" className='absolute top-0 left-[-4.5333333333vw] w-[4.5333333333vw] h-[8vw]' />
                <div className='flex justify-center items-center text-[#c5d0d7] text-[3.7333333333vw] font-bold bg-[#243a48] p-[0_0.8vw] h-full'>
                  <span>Premium Cricket</span>
                </div>
                <img src="/Images/ribbon.svg" alt="" className='absolute bottom-[4.8vw] right-[-3.8333333333vw] h-[4.8vw] w-[8.5333333333vw] z-10' style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))' }} />
                <span className='absolute bottom-[5.6vw] right-[-2.4vw] text-[#fff] text-[2.4vw] font-bold leading-[4vw] z-20'>New</span>
                <img src="/Images/right-slide.svg" alt="" className='absolute top-0 right-[-4.5333333333vw] w-[4.5333333333vw] h-[8vw]' />
              </div>
            </div>
            <div className='bg-[#087989] pb-[1.3333333333vw] text-[#fff] font-bold text-[3.2vw]'>
              <ul className='flex items-center p-[0_1.8666666667vw] pt-[1.2vw] leading-[6.9333333333vw] overflow-auto whitespace-nowrap'>
                <li className='relative list-none'>
                  <span className='text-[#3b5160] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw] bg-[#fff]'>All </span>
                </li>
                <li className='relative list-none'>
                  <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                    Fancy
                    <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2">
                    </span>
                  </span>
                </li>
                <li className='relative list-none'>
                  <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                    Ball by Ball
                    <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                  </span>
                </li>
                <li className='relative list-none'>
                  <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                    Khadda
                    <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                  </span>
                </li>
                <li className='relative list-none'>
                  <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                    Lottery
                    <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                  </span>
                </li>
                <li className='relative list-none'>
                  <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                    Odd/Even
                    <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                  </span>
                </li>
              </ul>
            </div>
            <div className='flex justify-end items-center bg-[#fff] border-b border-[#7e97a7] leading-[5.8666666667vw] text-[#1e1e1e] text-[3.4666666667vw] font-bold'>
              <div className='flex justify-end items-center w-[40%]'>
                <span className='text-center w-full'>No</span>
                <span className='text-center w-full'>Yes</span>
              </div>
            </div>
            <ul>
              {fancyData?.length > 0 &&
                fancyData?.map((item, index) => (
                  <>
                    <li key={item.selection_id || index} className='bg-[#fff] border-b border-[#7e97a7]'>
                      <div className='relative flex justify-between items-center h-[8.5333333333vw] p-[0_0_0_1.8666666667vw] text-[3.4666666667vw] text-[#3b5160] font-bold bg-[#e4f1f9] leading-[8.5333333333vw]'>
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{item.runner_name}</span>
                        <span className='w-[6vw]' onClick={() => setOpenMinMax('Fancyrunner1')}>
                          <img src="/Images/i-icon.svg" alt="" className='h-[4vw] w-[4vw]' />
                        </span>
                        {openMinMax == item.selection_id &&
                          <div className='absolute flex text-[#1e1e1e] font-normal top-0 right-[1.8666666667vw] bg-[#fff] rounded-[1.0666666667vw] leading-[3.7333333333vw] z-[9] shadow-[0_6px_10px_rgba(0,_0,_0,_.7)]'>
                            <div className='flex flex-col p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                              <span className='text-[2.6666666667vw] text-[#577c94] h-[3.2vw] p-[0.8vw_0_1.0666666667vw]'>Min / Max</span>
                              <span className='font-normal pt-[2vw]'> 1.00 /  781.00</span>
                            </div>
                            <div className=' p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                              <span className='flex justify-center items-center w-[6.6666666667vw] h-[6.6666666667vw]' onClick={() => setOpenMinMax('')}>
                                <img src="/Images/cross.svg" alt="" className='w-[2.4vw] h-[2.4vw]' />
                              </span>
                            </div>
                          </div>
                        }
                      </div>
                      <div className='flex w-full min-h-[11.2vw]'>
                        <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                          <h4 className='text-[4vw] font-bold'></h4>
                        </div>
                        <div className='relative flex w-[40%]'>
                          {/* <div className='absolute right-0 top-0 w-full h-full bg-[#0006] text-[#fff] text-[3.4666666667vw] font-bold text-center justify-center items-center flex' style={{ textShadow: "0 0.2667vw 1.0667vw #00000080" }}> <span className='opacity-[0.8]'>Suspend</span></div> */}
                          <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]' onClick={() => {
                            if (item.lay_price1) {
                              handleOpenBetSlip(
                                item.match_id,
                                "",
                                false,
                                `fancyLay_Size${item.selection_id}`,
                                true,
                                item.selection_id,
                                item.runner_name,
                                `fancyLay_Price${item.selection_id}`,
                                false,
                                ""
                              );
                              setOpenPlaceBet({
                                selectionId: item.selection_id,
                                type: "lay",
                                odds: item.lay_price1,
                              });
                            }
                          }
                          }>
                            <span className=' text-[3.4666666667vw] font-bold '>{item.lay_price1}</span>
                            <span className='text-[2.9333333333vw]'> {item.lay_size1}</span>
                          </div>
                          <div className='flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]'>
                            <span className=' text-[3.4666666667vw] font-bold '> {item.back_price1}</span>
                            <span className='text-[2.9333333333vw]'>{item.back_size1}</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    {BetPlaceData?.selection_id == item.selection_id &&
                      <div className={`${BetPlaceData?.is_back == 1 ? 'bg-[#c7dbe9]' : 'bg-[#f2e5e8]'} border-b border-[#7e97a7] pt-[2.6666666667vw]`}>
                        <ul className="flex p-[0_1.6vw_2.6666666667vw] flex-wrap">
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <p className="mt-0 p-0 text-[2.9333333333vw] text-center text-[#1e1e1e]">&nbsp;</p>
                            <div className="bg-[#dcdcdc] text-[#666] border border-[#bbb] rounded-[1.6vw] text-[4vw] font-bold leading-[10.1333333333vw] text-center">
                              {/* <a
                        id=""
                        className=""
                        href=""
                      /> */}
                              <span id="" className="">
                                {BetPlaceData?.price}
                              </span>
                              {/* <a
                        id=""
                        className=""
                        href=""
                      /> */}
                            </div>
                          </li>
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <p className="mt-0 p-0 text-[2.9333333333vw] text-center text-[#1e1e1e]">&nbsp;
                              Min Bet: <strong id="" />
                            </p>
                            <div className="flex bg-[#fff] text-[#666] border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold leading-[10.1333333333vw] text-center shadow-[inset_0_0.5333333333vw_0_0_rgba(0,_0,_0,_.1)] cursor-text">
                              <span className="flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] w-[12vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] rounded-[1.6vw_0_0_1.6vw] border-r border-[1px_solid_#aaa] text-[#2789ce]" onClick={(e) => { e.preventDefault(); handleStake("", "Minus") }}>
                                <img src="/Images/minus.svg" alt='' className='h-[1.0666666667vw] w-[4.5333333333vw]' />
                              </span>
                              <span id="" className="typeing flex flex-1 justify-center items-center overflow-hidden relative text-[#1e1e1e] bg-[#fff0ca] shadow-[inset_0_0.2666666667vw_1.3333333333vw_rgba(161,_128,_45,_.6)] border border-[#be7809]">
                                {inputStake}
                              </span>
                              <span className="flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] w-[12vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] rounded-[0_1.6vw_1.6vw_0] border-l border-[#aaa] text-[#2789ce]" onClick={(e) => { e.preventDefault(); handleStake("", "Plus") }}>
                                <img src="/Images/plus.svg" alt='' className='h-[4.8vw] w-[4.5333333333vw]' />
                              </span>
                            </div>
                          </li>
                        </ul>
                        <ul className='flex mb-[1.8666666667vw] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]'>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("4", "stake") }}>
                              4
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("30", "stake") }}>
                              30
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("50", "stake") }}>
                              50
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("200", "stake") }}>
                              200
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("500", "stake") }}>
                              500
                            </span>
                          </li>
                          <li className='flex-1 border-r border-[#ffffff26]'>
                            <span className='flex justify-center items-center text-[#fff] text-center leading-[2.46] bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]' onClick={(e) => { e.preventDefault(); handleStake("1000", "stake") }}>
                              1000
                            </span>
                          </li>
                        </ul>
                        <div className='flex border-t border-[#aaa] mb-[1.866vw]'>
                          <ul className='flex flex-1 flex-wrap'>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("1", "keypad") }}>1</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("2", "keypad") }}>2</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("3", "keypad") }}>3</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("4", "keypad") }}>4</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("5", "keypad") }}>5</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("6", "keypad") }}>6</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("7", "keypad") }}>7</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("8", "keypad") }}>8</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("9", "keypad") }}>9</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("0", "keypad") }}>0</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("00", "keypad") }}>00</p>
                            </li>
                            <li className='flex flex-[1_1_16.6666666667%]'>
                              <p className='flex-1 text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake(".", "keypad") }}>.</p>
                            </li>
                          </ul>
                          <span className='flex flex-[0_1_14.6666666667vw] justify-center items-center text-[4vw] text-[#1e1e1e] text-center leading-[10.4vw] bg-[#fff] border-b-[1px] border-l-[1px] border-[#aaa]' onClick={(e) => { e.preventDefault(); handleStake("", "delete") }}>
                            <img src="/Images/backspace.svg" alt="" className='w-[4.8vw] h-[3.2vw]' />
                          </span>
                        </div>
                        <ul className='flex flex-wrap p-[0_1.6vw_2.6666666667vw]'>
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <span className='flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)]  border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold text-[#1e1e1e]' onClick={() => { setBetSlipData() }}>Cancel</span>
                          </li>
                          <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                            <span className='flex justify-center items-center h-[10.9333333333vw] leading-[10.9333333333vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)]  border border-[#222] rounded-[1.6vw] text-[4vw] font-bold text-[#ffb200] opacity-[0.7]'>Place Bet</span>
                          </li>
                        </ul>
                        <div
                          id="acceptAnyOddsBox"
                          className={`flex flex-wrap justify-between items-center p-[1.8666666667vw] ${betSlipData?.type == "back" ? 'bg-[#c7dbe9]' : 'bg-[#f2e5e8]'}`}
                        >
                          <p
                            id="acceptAnyOdds"
                            className="flex items-center text-[3.4666666667vw] text-[#1e1e1e] mr-[1.8666666667vw] no-underline hover:no-underline hover:cursor-pointer outline-none tap-highlight-transparent"
                          >
                            <img
                              src="/Images/checked.svg"
                              alt=""
                              className="bg-[#ffb80c] w-[4.8vw] h-[4.8vw] shadow-[inset_0_0.5333333333vw_0_0_rgba(0,0,0,0.4)] p-[0.8vw] rounded-[1.0666666667vw] mr-[1.8666666667vw]"
                            />
                            Accept Any Odds
                          </p>

                          <span id="sportsBookMaxStake" className="">
                            <p
                              id="getSportsBookMaxStakeBtn"
                              className="inline-block w-[13.3333333333vw] h-[5.3333333333vw] bg-[rgba(0,0,0,0.1)] text-[3.4666666667vw] font-bold text-[#1e1e1e] leading-[5.3333333333vw] text-center rounded-[0.8vw] mr-[1.3333333333vw] no-underline hover:no-underline hover:cursor-pointer outline-none tap-highlight-transparent"
                            >
                              Max
                            </p>
                          </span>
                        </div>



                      </div>
                    }
                  </>
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Matchupdate