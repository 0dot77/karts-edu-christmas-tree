import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Example from './Example';

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
      </Routes>
    </BrowserRouter>
  );
}
