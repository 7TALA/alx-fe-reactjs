import { QueryClient, QueryClientProvider } from 'react-query';
import {Routes, Route} from 'react-router-dom';
import PostsComponent from './components/PostsComponent';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <>
    <Navbar />
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Posts" element={<PostsComponent />} />
      </Routes>
    </QueryClientProvider>
    </>
  );
}

export default App;