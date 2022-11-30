import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import CardList from './components/card-list/card-list.component'
import SideNavBar from './components/side-navbar/side-navbar.component'
import Navigation from './routes/navigation/navigation.component';
import Dashboard from './routes/dashboard/dashboard.component';
import Analytics from './routes/analytics/analytics.component';
import FileManager from './routes/file-manager/file-manager.component';
import Messages from './routes/messages/messages.component';
import Order from './routes/order/order.component';
import Saved from './routes/saved/saved.component';
import Settings from './routes/settings/settings.component';
import User from './routes/user/user.component';


const App = () => {

  // const [animeList, setAnimeList] = useState([]);

  // const list = [
  //   {name: "anime 1",
  //   desc: "description 1"},
  //   {name: "anime 2",
  //   desc: "description 2"},
  //   {name: "anime 3",
  //   desc: "description 3"},
  //   {name: "anime 4",
  //   desc: "description 4"},
  //   {name: "anime 5",
  //   desc: "description 5"},
  //   {name: "anime 6",
  //   desc: "description 6"}
  // ];
  /* <CardList list={animeList}/> */
  /* <SideNavBar /> */
  // useEffect(() => {
  //   setAnimeList(list);
  // }, []);

  return (
    <Routes>
      <Route path='/' element={ <Navigation/> }>
        <Route index element={ <Dashboard/> } />
        <Route path='analytics' element={ <Analytics/> } />
        <Route path='file-manager' element={ <FileManager/> } />
        <Route path='messages' element={ <Messages/> } />
        <Route path='order' element={ <Order/> } />
        <Route path='saved' element={ <Saved/> } />
        <Route path='settings' element={ <Settings/> } />
        <Route path='user' element={ <User/> } />
      </Route>
    </Routes>
  );
}

export default App;
