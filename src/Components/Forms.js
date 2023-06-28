import React, { useState } from "react";
import { Card, Tabs } from "antd";
import BasicForm from "./Forms/BasicForm";


const Forms = () => {
  const [active, setActive] = useState("1")


  const FormTabs = [
    {
      tabName: "Airport Transfer",
      key: "1",
      description: "we value safety, diversity in people and ideas, and having a team made up of those that have a passion for excellence.",
    },
    {
      tabName: "Local Package",
      key: "2",
      description: "Hourly Car Rental Services in Bangalore",
    },
    {
      tabName: "Outstation",
      key: "3",
      description: "Outstation Cabs in Bangalore",
    },
  ];

  const onChange = (key) => {
    setActive(String(key))
  };

  const getDescription = () => {
    const activeTab = FormTabs.find((tab) => tab.key === active);
    return activeTab ? activeTab.description : "";
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-none md:bg-[url('../public/images/backgr.jpg')] bg-cover bg-no-repeat">

      <div className="font-extrabold  text-white text-4xl px-10 my-auto hidden lg:block items-center  w-7/12 ">
        <h2 className="text-center font-bold ">{getDescription()}</h2>
      </div>

      <div className="flex flex-col items-center md:w-5/12 w-full md:max-w-lg  m-6 px-2 rounded-lg bg-white">
        <h2 className="text-center font-bold text-gray-700 w-full text-3xl pt-6">Book your luxury Sedan/Suv</h2>
        <span className="text-lg font-semibold ">in 60 seconds</span> 
        <span className="pb-2">  call 8618888210.  </span>
        <Tabs
          defaultActiveKey={active}
          centered
          type="card"
          size="large"
          tabBarStyle={{
            marginBottom: 0,
            
          }}
          className="bg-grey-400 my-4 rounded-lg  mx-6 lg:mx-0 "
          onChange={onChange}
        
          items={FormTabs.map((tab) => {
            return {

              label: tab.tabName,
              key: tab.key,
              children: (
                <div className=" ">
                  <Card bordered={false} >
                    <BasicForm selectedTab={active} />
                  </Card>
                </div>
              )
            };
          })}
        />
      </div>

    </div>
  );
};

export default Forms;
