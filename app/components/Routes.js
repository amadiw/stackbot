import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AllRobots from './AllRobots'
import { AllProjects } from './AllProjects';

const robots = [{
  id: 1,
  name: 'R2-D2',
  imageUrl: 'https://lh3.googleusercontent.com/proxy/6v_XFb8WZ2dfwWPIKnw4q_KJwK1xoRlsMsaBmIT5VTXiGoiUM8EPPTR32KKZmsK8QtS_uVQUjY8zMqa-ckiI8z2ta2wHbsQutcH-819e3IEd0Q',
  fuelType: 'electric',
  fuelLevel: 88.34,
},
{
  id: 2,
  name: 'Wall-E',
  imageUrl: 'https://i.pinimg.com/originals/83/8b/41/838b41a126747204325d2352c2cfa219.png',
  fuelType: 'diesel',
  fuelLevel: 52.36,
},
{
  id: 3,
  name: 'Bender',
  imageUrl: 'https://lh3.googleusercontent.com/proxy/ZJtYYfUjlqoz80Rx-CabqEVvXdHCxw7ciQetUDiMLXO7jul0pG9nmCJff852l79eUQ-c9D76CbxA9vTVSF3JzrFP8VMN1ogaWYsxa9XJGaWgyQ',
  fuelType: 'gas',
  fuelLevel: 100.00,
}]

const getRobots = () => {

}



const Routes = () => {
  return (
    <Router>
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>
            Welcome to StackBot Project Management: your robot employees are
            awaiting assignments!
          </h1>
          <p>This seems like a nice place to get started with some Routes!</p>
          <AllRobots robots={robots} getRobots={getRobots}/>
          <AllProjects projects={projects} getprojects={getProjects} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
