import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "./components/Header/Header";
import { AppBody, AppLoading, AppLoadingContents } from "./app.body";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import { auth } from "./firebase";
import Login from "./components/Login/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="Loading"
          />
          <Spinner name="ball-grid-pulse" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
