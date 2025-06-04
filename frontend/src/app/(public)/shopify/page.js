import React from 'react';
import FullServiceShopifyAgency from "@/components/FullServiceShopifyAgency";
import {getHomePageTitle} from "@/utils/brand";
export const metadata = {
  title: `Shopify | ${getHomePageTitle()}`,
};
const Page = () => {
  return (
    <div>
      <FullServiceShopifyAgency/>
    </div>
  );
};

export default Page;