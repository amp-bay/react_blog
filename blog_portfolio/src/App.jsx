import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailPage from "./pages/DetailedPage";
import Homepages from "./pages/Homepages";
import ProfilePage from "./pages/ProfilePage";
import AppLayout from "./ui_components/AppLayout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const queryClient=new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* <Route path='/' element={<AppLayout/>}/> */}
          <Route path="/" element={<AppLayout/>}>
            <Route index element={<Homepages/>}/>
            <Route path="detail" element={<DetailPage/>}  />
            <Route path="profile" element={<ProfilePage/>}  />
            
          
          </Route>
        
        
          
        </Routes>
      </Router>
    </QueryClientProvider>
    
  )
}

export default App