import DetailPage from "./pages/DetailedPage";
import Homepages from "./pages/Homepages";
import ProfilePage from "./pages/ProfilePage";
import AppLayout from "./ui_components/AppLayout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from "./pages/SignupPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import ProtectedRoute from "./ui_components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsername } from "./services/apiBlogs";
import NotFoundPage from "./pages/NotFoundPage";




function App() {
  const [username,setUsername]=useState(null)
  const [isAuthenticated,setIsAuthenticated]=useState(false)

 

  const { data } = useQuery({
    queryKey: ["username"],
    queryFn: getUsername,
  });

  useEffect(
    function () {
      if (data) {
        setUsername(data.username);
        setIsAuthenticated(true);
      }
    },
    [data]
  );

  

  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout isAuthenticated={isAuthenticated} username={username} setUsername={setUsername} setIsAuthenticated={setIsAuthenticated}/>}>
          <Route index element={<Homepages/>}/>
          <Route path="get_blogs/:slug" element={<DetailPage isAuthenticated={isAuthenticated} username={username}/>}  />
          <Route path="profile/:username" element={<ProfilePage isAuthenticated={isAuthenticated} LoggedInUser={username} />}  />
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          <Route path="login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUsername={setUsername}/>}/>

          <Route path="create"  element={
            <ProtectedRoute>
              <CreatePostPage isAuthenticated={isAuthenticated}/>
            </ProtectedRoute>}/>


            
        </Route>
        
      
      
        
      </Routes>
    </Router>

    
  )
}

export default App