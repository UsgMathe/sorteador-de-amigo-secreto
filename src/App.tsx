import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { CreateListPage } from './pages/create-list/create-list.page';
import { ShufflePage } from './pages/shuffle/shuffle.page';

function App() {
  return (
    <div className="bg-secondary">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<CreateListPage />} />
            <Route path="/sorteio" element={<ShufflePage />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
