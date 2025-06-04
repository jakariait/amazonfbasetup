import React from 'react';
import FullServiceMetaAgency from "@/components/FullServiceMetaAgency";
import {getHomePageTitle} from "@/utils/brand";
export const metadata = {
  title: `Meta | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <FullServiceMetaAgency/>
    </div>
  );
};

export default Page;