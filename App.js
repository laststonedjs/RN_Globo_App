import React from 'react';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { StackNavigator } from 'react-navigation';

import { Video } from './app/views/Video';
import { VideoDetail } from './app/views/VideoDetail';
import { Register } from './app/views/Register';
import { Login } from './app/views/Login';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default function App() {
  return (
   <MyRoutes />
  );
}
