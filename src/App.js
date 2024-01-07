import React, { useState, useEffect } from 'react';
import './App.css';
import './style.js';
import ImageGallery from './components/imageGallery';
import Login from './components/login';
import CreateUser from './components/createUser';
import CommentComponent from './components/comments';
import ShowComments from './components/showComments';
function App() {
  const [data, setData] = React.useState([]);//Posts (too far in to rename)
  const [userData, setUserData] = React.useState([]);
  const [commentData, setCommentData] = React.useState([]);
  const [sessionData, setSessionData] = React.useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  useEffect(() => {
    fetch("/userApi")
      .then((res) => res.json())
      .then((userData) => setUserData(userData))
  }, []);

  useEffect(() => {
    fetch("/commentApi")
      .then((res) => res.json())
      .then((commentData) => setCommentData(commentData))
  }, []);
  useEffect(() => {
    fetch("/sessionApi")
      .then((res) => res.json())
      .then((sessionData) => setSessionData(sessionData))
  }, []);

  const [picCount, setPicCount] = useState(1);
  function countDown() {
      if(picCount > 1){
          setPicCount(picCount-1)
      }
      else {
          setPicCount(data.length)
      }
  }
  function countUp () {
      if(picCount < data.length){
          setPicCount(picCount+1)
      }
      else{
          setPicCount(1)
      }
  }
  console.log(sessionData)
  return (
    <div className="App">
        <ImageGallery picCount={picCount} data = {data} countDown={countDown} countUp={countUp} commentData={commentData} />
        <ShowComments commentData={commentData} userData={userData} picCount={picCount}/>
        <CreateUser sessionData={sessionData}/>
        <Login sessionData={sessionData}/>
        <CommentComponent picCount={picCount} sessionData={sessionData} />
    </div>
  );
}
export default App;