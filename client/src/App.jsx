// UserApp\Client\src\App.jsx
import UserList from './users/UserList';
import UserCreate from './users/UserCreate';
import UserView from './users/UserView';
import UserEdit from './users/UserEdit';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users/list" />} /> {/* Redirect root to /users/list */}
        <Route path="/users/list" element={<UserList />} />
        <Route path="/users/create" element={<UserCreate />} />
        <Route path="/users/view/:id" element={<UserView />} />
        <Route path="/users/edit/:id" element={<UserEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;