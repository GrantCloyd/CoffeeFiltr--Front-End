import "./App.css"
import { Route, Switch } from "react-router-dom"
// import { ContextProvider } from "./context/Context"
import DiscoverPage from "./Components/DiscoverPage"
import ProfilePage from "./Components/ProfilePage"
import SearchPage from "./Components/SearchPage"
import SuggestionPage from "./Components/SuggestionPage"
import FeedPage from "./Components/FeedPage"
import BeveragePage from "./Components/BeveragePage"
import LoginPage from "./Components/LoginPage"
import SignUpPage from "./Components/SignUpPage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
// import { useEffect, useState } from "react"
import { Provider }from './Context/GlobalState'

function App() {
   // const [coffeeData, setCoffeeData] = useState([])

   // useEffect(() => {
   //    fetch("http://localhost:9393/beverages")
   //       .then(response => response.json())
   //       .then(setCoffeeData)
   //    //console.log(coffeeData)
   // }, [])

   return (
      <Provider>
         <div className="App">
            <Header />
            <Switch>
               {/* <ContextProvider> */}
               <Route exact path="/" component={() => <DiscoverPage />} />
               <Route exact path="/profile" component={ProfilePage} />
               <Route exact path="/search" component={SearchPage} />
               <Route exact path="/search/:type/:query" component={SearchPage} />
               <Route exact path="/suggestion" component={SuggestionPage} />
               <Route exact path="/feed" component={FeedPage} />
               <Route exact path="/beverage/:id" component={BeveragePage} />
               <Route exact path="/login" component={LoginPage} />
               <Route exact path="/signup" component={SignUpPage} />

               {/* <Route exact path="/" component={() => <LandingPage viewed={viewed} />} />
               <Route exact path="/discover" component={DiscoverPage} />
               <Route exact path="/discover/search/:term" component={DiscoverPageSearch} />
               <Route exact path="/show/:id" component={() => <ShowPage setViewed={setViewed} />} />
               <Route exact path="/error/404" component={() => <h2>404: Page Not Found</h2>} />
               <Route exact path="/favorites" component={FavoritesPage} /> */}
               {/* </ContextProvider> */}
            </Switch>
            <Footer />
         </div>
      </Provider>
   )
}

export default App
