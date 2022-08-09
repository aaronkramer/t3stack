import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';

import { TabView, TabPanel } from 'primereact/tabview';

const Home: NextPage = () => {

  return (
    <>
      <div>
      <TabView>
        <TabPanel header="Header1">Nice</TabPanel>
        <TabPanel header="Header2">Second</TabPanel>
      </TabView>
      </div>
    </>
  );
};

export default Home;
