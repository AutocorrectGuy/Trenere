import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ExerciseLibrary from "./components/views/ExerciseLibrary/ExerciseLibrary";
import LandingPage from "./components/views/landingPage/LandingPage";
import React from "react";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/exercise-library" element={<ExerciseLibrary />}/>
        {/* <Route path="/algorithmized-programs" element={<LandingPage />}/> */}
        {/* <Route path="/personal-programs" element={<LandingPage />}/> */}
        {/* <Route path="/private-training" element={<LandingPage />}/> */}
        {/* <Route path="/cooperation" element={<LandingPage />}/> */}
        {/* <Route path="/authors" element={<LandingPage />}/> */}
      </Routes>

    </Router>
  );
}