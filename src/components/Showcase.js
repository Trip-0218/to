import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Destinations from './Destinations';
import CreateTrip from './CreateTrip';
import FullPageSlider from '../components/FullPageSlider.js';
import Last from '../components/Last.js';
import GetYourRidePage from './GetRide.js';

const Showcase = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    {/* <Header/> */}
    <Header setSearchQuery={setSearchQuery} />
    <Sidebar/>
    <FullPageSlider />
    <Destinations/>
    <CreateTrip/>
    <GetYourRidePage/>
    <Last/>
    </>
  );
};

export default Showcase;

