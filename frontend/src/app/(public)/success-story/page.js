import React from "react";
import ClientSuccess from "@/components/ClientSuccess";
import { getHomePageTitle } from "@/utils/brand";

export const metadata = {
  title: `Amazon Client Stories | ${getHomePageTitle()}`,
  description:
    "Explore Revive7 and Drink Botanicals Ireland client engagements covering Amazon store management and advertising support in Canada and the UK.",
};

const Page = () => {
  return (
    <div>
      <ClientSuccess />
    </div>
  );
};

export default Page;
