import About from '@/Components/(home)/About';
import Fest from '@/Components/(home)/Fest';
import HelpDesk from '@/Components/(home)/HelpDesk';
import Hero from '@/Components/(home)/Hero';
import HomeComittee from '@/Components/(home)/HomeComittee';
import HomeGallary from '@/Components/(home)/HomeGallary';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Fest></Fest>
      <HomeGallary></HomeGallary>
      <HomeComittee></HomeComittee>
      <HelpDesk></HelpDesk>
    </div>
  );
};

export default page;