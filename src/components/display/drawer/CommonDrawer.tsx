"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useCommonDrawerStore } from "@/store/ui/drawer/commonDrawerStore";

const CommonDrawer = () => {
  const { isOpen, setIsOpen, children, direction } = useCommonDrawerStore();

  return (
    <div>
      <Drawer
        open={isOpen}
        anchor={direction}
        onClose={() => setIsOpen(false)}
      >
        {children}
      </Drawer>
    </div>
  );
};

export default CommonDrawer;
