import React, { useState } from "react";
import { Card, Tabs } from "antd";
import BasicForm from "./Forms/BasicForm";


const Forms = () => {
  const [active, setActive] = useState("1")

  
  const FormTabs = [
    {
      tabName: "Airport Transfer",
      component: <BasicForm />,
      key: "1",
      description: "Airport Taxi at your service! Starts at ₹474/- Pickup, ₹724/- Drop",
    },
    {
      tabName: "Local Drop",
      component: <BasicForm />,
      key: "2",
      description: "Affordable Local Cabs in Bangalore",
    },
    {
      tabName: "Local Package",
      component: <BasicForm />,
      key: "3",
      description: "Hourly Car Rental Services in Bangalore",
    },
    {
      tabName: "Outstation",
      component: <BasicForm />,
      key: "4",
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
    <div className="flex flex-row justify-center lg:justify-between items-center bg-none md:bg-[url('../public/images/bgbanner.jpeg')] bg-cover bg-no-repeat">
      
      <div className="font-extrabold  text-[#1c2b39] text-4xl px-10 my-auto hidden lg:block items-center  w-7/12 ">
      <h2 className="text-center font-bold ">{getDescription()}</h2>
      </div>

     <div  className="flex flex-col items-center md:w-5/12 w-full max-w-[90%]  ">
      <Tabs
        defaultActiveKey={active}
        type="card"
        size="middle"
        className="bg-white my-4 rounded-lg  mx-6 md:mx-0 "
        onChange={onChange}
        items={FormTabs.map((tab) => {
          return {
            label: tab.tabName,
            key: tab.key,
            children: <Card bordered={false} >{tab.component}</Card>,
          };
        })}
      />
     </div>

    </div>
  );
};

export default Forms;
