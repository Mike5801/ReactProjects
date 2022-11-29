import { useEffect, useState } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component'
import SideNavBar from './components/side-navbar/side-navbar.component'

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

  // useEffect(() => {
  //   setAnimeList(list);
  // }, []);

  return (
    <div className="App">
      {/* <CardList list={animeList}/> */}
      <SideNavBar />
    </div>
  );
}

export default App;
