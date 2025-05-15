import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Form } from './components/form/form';

function App() {
  return (
    <div className="bg-secondary">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Form />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
