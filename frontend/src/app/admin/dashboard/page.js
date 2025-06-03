"use client";
import React from "react";
import AdminList from "@/components/AdminList";
import ContactTable from "@/components/ContactTable";

const Page = () => {
  return (
    <div className={"grid grid-cols-1 gap-4"}>
      <AdminList />
      <ContactTable/>
    </div>
  );
};

export default Page;
