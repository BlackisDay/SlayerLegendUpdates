import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './pages/Footer.jsx';
import Navbar from './pages/Navbar';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});
function App(){
  return (
    <ApolloProvider client={client}>
    <div className ="flex flex-col min-h-screen bg-primary">
      <Navbar />
      <Outlet />
   </div>
      <Footer/>
    </ApolloProvider>
    
  )
}


export default App;