import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Table from './Table';


const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="S&P/ASX" >
      <div>
        <Table filter="all"/>
      </div>
    </Tab>
    <Tab label="Top gainers" >
      <div>
        <Table filter="top_gainers"/>
      </div>
    </Tab>
    <Tab label="Top losers" >
      <div>
        <Table filter="top_losers"/>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;