import React from 'react';
import BoshSahifa from "./BoshSahifa/BoshSahifa";
import BizHaqimizda from "./BizHaqimizda/BizHaqimizda";
import USMLE from './USMLE/USMLE';
import Kutibxona from "./Kutibxona/Kutibxona";
import Aloqa from "./Aloqa/Aloqa";

import { Routes, Route, useLocation } from "react-router-dom";


import { AnimatePresence } from "framer-motion";

function AnimatedPages() {

    const location = useLocation();

    return (
      <>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<BoshSahifa />} />
            <Route path="/bizhaqimizda" element={<BizHaqimizda />} />
            <Route path="/usmle" element={<USMLE />} />
            <Route path="/kutibxona" element={<Kutibxona />} />
            <Route path="/aloqa" element={<Aloqa />} />
          </Routes>
        </AnimatePresence>
      </>
    );
}

export default AnimatedPages;