"use client";
import React from "react";
import AdminList from "@/components/AdminList";
import ContactTable from "@/components/ContactTable";
import CarouselUpload from "@/components/BrandUpload";

const Page = () => {
  return (
    <div className={"grid grid-cols-1 gap-4"}>
      <AdminList />
      <ContactTable/>
      <CarouselUpload/>
    </div>
  );
};

export default Page;
