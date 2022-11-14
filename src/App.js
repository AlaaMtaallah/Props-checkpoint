import React from 'react';
import Profile from './profile/Profile';
import Image from './profile/Image';
import './App.css';

function App() {
  const bioText = `A software developer specialized in Dotnet, I have nearly 2 years of experience, at this time i'm looking to improve my skills and find a better opportunities.
  Best Regards :)`
  return (
    <div>
      <Profile fullName="Alaa Mtaallah" profession="Dotnet Developer" bio={bioText}>
        <Image></Image> 
      </Profile>
    </div>
  );
}

export default App;
