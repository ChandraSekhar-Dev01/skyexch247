import React, { useState } from 'react'

function BetList() {
  const [filterDropDown, setFilterDropDown] = useState("");
  const [toggleUser, setToggleUser] = useState(false);
  return (
    <>
      <div className="relative min-w-[content-screen-width] max-w-[calc(100%-40px)] h-[calc(100%-105px)] my-0 mx-auto text-[12px] text-[#1e1e1e] leading-[15px]">
        <h2 className='flex w-full text-[13px] text-[#243a48] leading-[20px] font-bold pt-[6px] mb-[6px]'>Bet List</h2>
        <ul className="mb-[5px] mr-[5px] block clear-both text-[12px] text-[#1e1e1e] leading-[15px] after:content-[''] after:block after:clear-both">
          <li
            id="eventRadioBtnList"
            className="list-none leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left"
          >
            <input
              type="radio"
              name="events"
              id="events_1"
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}Soccer{" "}
            <input
              type="radio"
              name="SOCCER_sportsbook"
              id="SOCCER_sportsbook"
              data-eventtype={1}
              defaultValue="true"
              data-categorytype={4}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}S/R Soccer{" "}
            <input
              type="radio"
              name="SOCCER_BOOK"
              id="SOCCER_BOOK"
              data-eventtype={1}
              data-categorytype={5}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}BOOK Soccer{" "}
            <input
              type="radio"
              name="events"
              id="events_2"
              data-eventtype={2}
              defaultValue={2}
              data-categorytype={1}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}Tennis{" "}
            <input
              type="radio"
              name="TENNIS_sportsbook"
              id="TENNIS_sportsbook"
              data-eventtype={2}
              defaultValue="true"
              data-categorytype={4}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}S/R Tennis{" "}
            <input
              type="radio"
              name="TENNIS_BOOK"
              id="TENNIS_BOOK"
              data-eventtype={2}
              data-categorytype={5}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}BOOK Tennis{" "}
            <input
              type="radio"
              name="events"
              id="events_4"
              data-eventtype={4}
              defaultValue={4}
              data-categorytype={1}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}Cricket{" "}
            <input
              type="radio"
              name="CRICKET_fancy"
              id="CRICKET_fancy"
              data-eventtype={4}
              data-categorytype={2}
              defaultValue="true"
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}Cricket/Fancy Bet{" "}
            <input
              type="radio"
              name="CRICKET_sportsbook"
              id="CRICKET_sportsbook"
              data-eventtype={4}
              defaultValue="true"
              data-categorytype={4}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}S/R Cricket{" "}
            <input
              type="radio"
              name="CRICKET_BOOK"
              id="CRICKET_BOOK"
              data-eventtype={4}
              data-categorytype={5}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}BOOK Cricket{" "}
            <input
              type="radio"
              name="ELECTION_fancy"
              id="ELECTION_fancy"
              data-eventtype={2378962}
              data-categorytype={2}
              defaultValue="true"
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}Election/Fancy Bet{" "}
            <input
              type="radio"
              name="ELECTION_BOOK"
              id="ELECTION_BOOK"
              data-eventtype={2378962}
              data-categorytype={5}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}BOOK Election{" "}
            <input
              type="radio"
              name="FANCYBET_fancy"
              id="FANCYBET_fancy"
              data-eventtype={9999999}
              data-categorytype={2}
              defaultValue={9999999}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}FancyBet{" "}
            <input
              type="radio"
              name="E_SOCCER_sportsbook"
              id="E_SOCCER_sportsbook"
              data-eventtype={137}
              defaultValue="true"
              data-categorytype={4}
              className="w-auto h-auto border-0 rounded-none bg-transparent p-0 shadow-none font-[Tahoma,Helvetica,sans-serif] text-[#1e1e1e] text-[12px] m-[0_5px_5px_0] box-border whitespace-nowrap"
            />
            {" "}S/R E-Soccer{" "}
          </li>
        </ul>
        <ul className="mb-[5px] mr-[5px] block clear-both text-[12px] text-[#1e1e1e] leading-[15px] after:content-[''] after:block after:clear-both">
          <li className="list-none leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left cursor-pointer" onClick={() => { setFilterDropDown(filterDropDown === "odds" ? "" : "odds") }}>
            <span className='w-auto min-w-[95px] m-0 font-normal p-[0_7px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] leading-[23px] text-[12px] block text-center'>
              <img src="/Images/icon-filter.png" alt="" className='align-top m-[5px_6px_0_3px] h-[14px] w-[14px] inline-block' />
              Odds Differential Filter (%)
              <img src="/Images/icon-drop_arrow.png" alt="" className='align-top m-[10px_0_0_8px] h-[4px] w-[7px] inline-block font-normal text-center' />
            </span>
            {filterDropDown == 'odds' &&
              <>
                <div className='w-[280px] block absolute bg-[#fff] rounded-[5px] z-[5px] shadow-[0_4px_5px_#00000080]'>
                  <img src='/Images/close_pop.png' alt='' className='absolute top-[10px] right-[15px] bg-no-repeat h-[16px] w-[17px]  block' />
                  <h3 className='text-[#243a48] text-[16px] font-bold leading-[20px] p-[10px] border border-[#ccc]'>Odds Differential Filter</h3>

                  <div className='w-[280px] mb-[10px] block clear-both'>
                    <div className='mr-[10px] w-[calc(50%_-_5px)] float-left'>
                      <h4 className='text-[13px] leading-[20px] p-[5px] text-center'></h4>
                      <dl className='leading-[15px]'>
                        <dd>
                          {`Back >=`}
                          <input type="text" className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded p-[5px] m-[0_5px_5px_0] box-border' />
                          {`%`}
                        </dd>
                      </dl>
                      <dl className='leading-[15px]'>
                        <dd>
                          {`Back <=`}
                          <input type="text" className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded p-[5px] m-[0_5px_5px_0] box-border' />
                          {`%`}
                        </dd>
                      </dl>
                      <dl className='leading-[15px]'>
                        <dd>
                          {`Lay >=`}
                          <input type="text" className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded p-[5px] m-[0_5px_5px_0] box-border' />
                          {`%`}
                        </dd>
                      </dl>
                      <dl className='leading-[15px]'>
                        <dd>
                          {`Lay <=`}
                          <input type="text" className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded p-[5px] m-[0_5px_5px_0] box-border' />
                          {`%`}
                        </dd>
                      </dl>
                    </div>
                    <span className='block clear-both'></span>
                  </div>
                  <ul className='p-[0_10px_10px] block'>
                    <li className='m-0 block float-left'>
                      <span className='font-bold min-w-[95px] m-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] leading-[23px] text-[12px] block text-center'>
                        <img src="/Images/icon-refresh-s.png" alt="" className='align-top m-[5px_5px_0_0] w-[11px] h-[13px] font-bold inline-block' />
                        Refersh
                      </span>
                    </li>
                    <li className='m-0 block float-right'>
                      <span className='font-bold min-w-[95px] m-0 bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-[initial] border border-[#222] rounded text-[#ffb600] leading-[23px] text-[12px] block text-center'>
                        Confirm
                      </span>
                    </li>
                    <span className='block clear-both'></span>
                  </ul>
                </div>
              </>}
          </li>
          <li className="list-none leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left cursor-pointer" onClick={(e) => { setFilterDropDown(filterDropDown === "user" ? "" : "user") }}>
            <span className='w-auto min-w-[95px] m-0 font-normal p-[0_7px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] leading-[23px] text-[12px] block text-center'>
              <img src="/Images/icon-filter.png" alt="" className='align-top m-[5px_6px_0_3px] h-[14px] w-[14px] inline-block' />
              User Filter
              <img src="/Images/icon-drop_arrow.png" alt="" className='align-top m-[10px_0_0_8px] h-[4px] w-[7px] inline-block font-normal text-center' />
            </span>
            {filterDropDown === 'user' &&
              <>
                <div className='min-w-[250px] block absolute bg-[#fff] rounded-[5px] z-[10px] shadow-[0_4px_5px_#00000080] text-[#1e1e1e] text-[12px] leading-[25px] whitespace-nowrap'>
                  <div className='flex items-center justify-between h-[35px] p-[0_8px]'>
                    <h3 className='m-[5px] font-bold text-[15px]'>User Filter</h3>
                    <img src='/Images/close_pop.png' alt='' className='absolute top-[10px] right-[15px] bg-no-repeat h-[16px] w-[17px]  block' />
                  </div>
                  <div className='border-y border-[#ccc]'>
                    <div>
                      <p className='border-b border-[#ccc] p-[8px] mb-0'>
                        {toggleUser &&
                          <span className="bg-no-repeat bg-center bg-contain w-[58px] h-[25px] inline-block indent-[7px] text-[#fff] hover:underline"
                            style={{ backgroundImage: "url('/Images/toggle_on.png')" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setToggleUser(false);
                            }}>ON</span>
                        }
                        {!toggleUser &&
                          <span className="bg-no-repeat bg-center bg-contain w-[58px] h-[25px] inline-block indent-[25px] text-[#fff] hover:underline"
                            style={{ backgroundImage: "url('/Images/toggle_off.png')" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setToggleUser(true);
                            }}>OFF</span>
                        }
                      </p>
                      <p className='p-[8px] mb-0'>
                        <strong>User Level</strong>
                        <select name="userType" id="" className='w-auto mx-1 h-[25px] text-[14px] leading-[25px] border border-[#767676] cursor-pointer'>
                          <option value="0" className='p-[3px] text-[#222]'>Player</option>
                        </select>
                      </p>
                      <p className='p-[8px] mb-0'>
                        <strong>User ID</strong>
                        <input type="text" name="" id="" maxLength={20} className='w-[70%] h-[25px] leading-[25px] border border-[#bbb] mx-1 box-border text-[#1e1e1e] text-[12ppx] bg-[#fff] rounded p-[5px]' />
                      </p>
                    </div>
                  </div>
                  <ul className='p-[8px] block'>
                    <li className='m-0 block float-right'>
                      <span className='font-bold min-w-[95px] m-0 bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-[initial] border border-[#222] rounded text-[#ffb600] leading-[23px] text-[12px] block text-center'>
                        Confirm
                      </span>
                    </li>
                    <span className='block clear-both'></span>
                  </ul>
                </div>
              </>}
          </li>
          <li className="list-none leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left cursor-pointer" onClick={(e) => { setFilterDropDown(filterDropDown === "IP" ? "" : "IP") }}>
            <span className='w-auto min-w-[95px] m-0 font-normal p-[0_7px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] leading-[23px] text-[12px] block text-center'>
              <img src="/Images/icon-filter.png" alt="" className='align-top m-[5px_6px_0_3px] h-[14px] w-[14px] inline-block' />
              IP/ISP Filter
              <img src="/Images/icon-drop_arrow.png" alt="" className='align-top m-[10px_0_0_8px] h-[4px] w-[7px] inline-block font-normal text-center' />
            </span>
            {filterDropDown === 'IP' &&
              <>
                <div className='min-w-[250px] block absolute bg-[#fff] rounded-[5px] z-[10px] shadow-[0_4px_5px_#00000080] text-[#1e1e1e] text-[12px] leading-[25px] whitespace-nowrap'>
                  <div className='flex items-center justify-between h-[35px] p-[0_8px]'>
                    <h3 className='m-[5px] font-bold text-[15px]'>IP/ISP Filter</h3>
                    <img src='/Images/close_pop.png' alt='' className='absolute top-[10px] right-[15px] bg-no-repeat h-[16px] w-[17px]  block' />
                  </div>
                  <div className='border-y border-[#ccc]'>
                    <div>
                      <p className='border-b border-[#ccc] p-[8px] mb-0'>
                        {toggleUser &&
                          <span className="bg-no-repeat bg-center bg-contain w-[58px] h-[25px] inline-block indent-[7px] text-[#fff] hover:underline"
                            style={{ backgroundImage: "url('/Images/toggle_on.png')" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setToggleUser(false);
                            }}>ON</span>
                        }
                        {!toggleUser &&
                          <span className="bg-no-repeat bg-center bg-contain w-[58px] h-[25px] inline-block indent-[25px] text-[#fff] hover:underline"
                            style={{ backgroundImage: "url('/Images/toggle_off.png')" }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setToggleUser(true);
                            }}>OFF</span>
                        }
                      </p>
                      <p className='p-[8px] mb-0'>
                        <strong>IP</strong>
                        <input type="text" name="" id="" maxLength={20} className='w-[70%] h-[25px] leading-[25px] border border-[#bbb] mx-1 box-border text-[#1e1e1e] text-[12ppx] bg-[#fff] rounded p-[5px]' />
                      </p>
                      <p className='p-[8px] mb-0'>
                        <strong>ISP</strong>
                        <input type="text" name="" id="" maxLength={20} className='w-[70%] h-[25px] leading-[25px] border border-[#bbb] mx-1 box-border text-[#1e1e1e] text-[12ppx] bg-[#fff] rounded p-[5px]' />
                      </p>
                    </div>
                  </div>
                  <ul className='p-[8px] block'>
                    <li className='m-0 block float-right'>
                      <span className='font-bold min-w-[95px] m-0 bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-[initial] border border-[#222] rounded text-[#ffb600] leading-[23px] text-[12px] block text-center'>
                        Confirm
                      </span>
                    </li>
                    <span className='block clear-both'></span>
                  </ul>
                </div>
              </>}
          </li>
          <span className='block clear-both'></span>
        </ul>
        <ul className="mb-[5px] mr-[5px] block clear-both text-[12px] text-[#1e1e1e] leading-[15px] after:content-[''] after:block after:clear-both">
          <label className='mr-[5px]'>Show</label>
          <select name="showCount" id="" className='w-[120px] mx-1 h-[25px] text-[14px] leading-[25px] border border-[#767676] cursor-pointer m-[0_5px_5px_0]'>
            <option value="20" className='p-[3px] text-[#222]'>20</option>
            <option value="50" className='p-[3px] text-[#222]'>50</option>
            <option value="100" className='p-[3px] text-[#222]'>100</option>
            <option value="250" className='p-[3px] text-[#222]'>250</option>
            <option value="500" className='p-[3px] text-[#222]'>500</option>
          </select>
          <label className='mr-[5px]'>rows per page</label>
        </ul>
        {/* Filter Section */}
        <div className=' text-[12px] p-[10px_10px_0] mb-[10px] bg-[#e0e6e6] border-b border-[#7e97a7]'>
          <ul className='block mb-[5px] mr-[5px] leading-[25px]'>
            <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
              <label className='mr-[5px] cursor-pointer'>Bet Status:</label>
            </li>
            <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
              <select className='w-[120px] h-[25px] m-[0_5px_5px_0] text-[14px] leading-[25px] border border-[#767676] cursor-pointer'>
                <option className='p-[3px] text-[#222]' value="">Active</option>
                <option className='p-[3px] text-[#222]' value="">Voided</option>
                <option className='p-[3px] text-[#222]' value="">Settled</option>
              </select>
            </li>
            <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
              <label className='mr-[5px] cursor-pointer'>Period</label>
            </li>
            <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
              <input
                type="date"
                placeholder="YYYY-MM-DD"
                className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
              />
              <input
                type="text"
                placeholder="09:00"
                className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
              />
              {" "}to{" "}
              <input
                type="date"
                placeholder="YYYY-MM-DD"
                className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
              />
              <input
                type="text"
                placeholder="08:59"
                className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
              />
            </li>
            <span className='block clear-both'></span>
          </ul>
          <ul className='mb-[5px] mr-[5px] leading-[25px]'>
            <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
              <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                Just For Today
              </span>
            </li>
            <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
              <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                From Yesterday
              </span>
            </li>
            <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
              <span className="block min-w-[95px] text-[12px] text-[#ffb600] font-bold leading-[23px] text-center bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-initial border border-[#222] rounded-[4px]">
                Get History
              </span>
            </li>
            <span className='block clear-both'></span>
          </ul>
        </div>
        <div className='text-[12px] text-[#1e1e1e] leading-[15px]'>
          <p className='mb-[7px]'>Bet List enables you to review the bets you have placed. <br />Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.</p>
          <p className='mb-[7px]'>Bet List is available online for the past 14 days.</p>
        </div>
      </div>
    </>
  )
}

export default BetList