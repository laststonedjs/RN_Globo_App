import React from 'react';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { StackNavigator } from 'react-navigation';

import { Video } from './app/views/Video';
import { VideoDetail } from './app/views/VideoDetail';

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
