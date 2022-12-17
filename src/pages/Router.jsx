import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Example from './Example';
import TeamOne from './TeamOne';
import TeamTwo from './TeamTwo';
import TeamThree from './TeamThree';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/example"
          element={<Example />}
        />
        <Route
          path="/team1"
          element={<TeamOne />}
        />
        <Route
          path="/team2"
          element={<TeamTwo />}
        />
        <Route
          path="/team3"
          element={<TeamThree />}
        />
      </Routes>
    </BrowserRouter>
  );
}
