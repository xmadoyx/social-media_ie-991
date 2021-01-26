import React from 'react';
import Layout from './layout/Layout';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from '../pages/home/Home';
import P404 from '../pages/page404/P404';
import TweetByHashtag from '../pages/tweetsByHashTags/TweetByHashtag';
import TweetByUser from '../pages/tweetsByUser/TweetByUser';
import AuthPage from '../pages/auth/AuthPage';
import {TweetProvider} from '../context/TweetContext';


const App = () => {
    return (
        <>
        <BrowserRouter>
        <Switch>
        <PublicRoute path={"/login"} component={AuthPage}/>
        <PrivatRoute path={"/"} render={() => {
            return<TweetProvider>
                <Layout>
                <Switch>
                <Route  path={"/hashtags/:hashtag"} component={TweetByHashtag}/>
                <Route  path={"/tweetbyuser/:id/:name"} component={TweetByUser}/>
                <Route  path={"/"} component={Home}/>
                <Route  component={P404}/>
                </Switch>
            </Layout>
            </TweetProvider>
            }}/>
        </Switch>
        </BrowserRouter>  
        </>      
    );
    
}

    const PublicRoute = ({component, ...props}) =>{
        return <Route {...props} render={(props)=>{
            if (localStorage.getItem("x_auth_token")){
                return <Redirect to={"/"}/> 
            }
            else{
                return React.createElement(component,props)
            }
        }}></Route>
    }
    const PrivatRoute = ({render, ...props}) =>{
        return <Route {...props} render={(props)=>{
            if (localStorage.getItem("x_auth_token")) 
                return render(props);
            else{
                return <Redirect to={"/login"}/>
            }
        }}></Route>
    }
    

export default App;