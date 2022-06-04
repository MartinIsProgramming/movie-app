import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NoticePopOver } from './components';
import { Home, MovieDetails, Search } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <NoticePopOver />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:movieTitle" element={<MovieDetails />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
