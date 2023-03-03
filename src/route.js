import React from "react";
import { Route, Routes } from "react-router-dom";
import Root from './routes/root.js'
import Curriculum from './routes/curriculum.js'
import {
  LoginScreen,
  SoftwareScreen,
  DashboardScreen,
  SportsScreen,
  RegisterSoftware,
  FootballClubs,
  FootballClub,
  BlogScreen
} from './containers'

const MainRouters = () => {
  return (
    <Routes>
      <Route 
        exact
        path="/"
        element={<Root />}
      />
      <Route 
        exact
        path="/software"
        element={<SoftwareScreen />}
      />
      <Route 
        exact
        path="/register-software"
        element={<RegisterSoftware />}
      />
      <Route 
        exact
        path="/football-clubs"
        element={<FootballClubs />}
      />
      <Route 
        exact
        action={({ params }) => {console.log(params)}}
        path="/football-clubs/:club" // change to name variable change
        element={<FootballClub />}
      />
      <Route 
        exact
        path="/curriculum"
        element={<Curriculum />}
      />
      <Route 
        exact
        path="/login"
        element={<LoginScreen />}
      />
      <Route 
        exact
        path="/dashboard"
        element={<DashboardScreen />}
      />
      <Route 
        exact
        path="/sports"
        element={<SportsScreen />}
      />
      <Route 
        exact
        path="/blog"
        element={<BlogScreen />}
      />
    </Routes>
  )
}

export default MainRouters;
