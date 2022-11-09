import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import Sonnet from "../../components/Sonnet";

const Exp = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab className="" eventKey="home" title="Our Attorneys">
          <p className="text-[#f8f9fa] ">
            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
            incididunt est duis anim sunt officia. Fugiat velit proident aliquip
            nisi incididunt nostrud exercitation proident est nisi. Irure magna
            elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat
            in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure
            Lorem incididunt nostrud.
          </p>
        </Tab>
        <Tab className="" eventKey="profile" title="Our Expertise">
          <p className="text-[#f8f9fa] ">
            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
            incididunt est duis anim sunt officia. Fugiat velit proident aliquip
            nisi incididunt nostrud exercitation proident est nisi. Irure magna
            elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat
            in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure
            Lorem incididunt nostrud.
          </p>
        </Tab>
        <Tab className="" eventKey="contact" title="Our Firm">
          <p className="text-[#f8f9fa] ">
            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
            incididunt est duis anim sunt officia. Fugiat velit proident aliquip
            nisi incididunt nostrud exercitation proident est nisi. Irure magna
            elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat
            in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure
            Lorem incididunt nostrud.
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Exp;
