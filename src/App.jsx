import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [index,setindex]=useState(0)
  

  function previouspage(){
    if (index>=1) {
      setindex(index-1)
    }
    return;
    console.log(index)
  }

  function nextpage(){
    if (index<=5) {
      setindex(index+1)
    }
    return;
    console.log(index)
  }

  //keyword=json,object,array,data
  const data=[
    
    {
      title:'A Miracle',
      content:''
    },
    {
      title:'A Miracle',
      content:['On that day, i saw you standing in front of people,','Explaining a club activity.','A meeting that felt destined in that room.','I, who knew no shame back then,','And you, looking at me with wonder.','','I didnt know that meeting, \n Would bring so much warmth to me.','Even after decades have passed.','May I ask for it to last for decades more?','','Happiness, sorrow, misunderstandings,','Togetherness, comfort, restlessness.','All emotions, you brought them to me in abundance,','Making me feel them for the very first time.','Thats why I could feel the warmth.','May I feel it forevermore?'],
      
    },
    {
      title:'A Miracle',
      content:['My daily life, my existence, that went without you many times.1','In the end, I met you again.','And once more, you brought warmth.','A warmth I feel will turn into a miracle.','','The rain on that day,','The morning on that day,','The afternoon on that day,', 'The evening on that day,','Those songs, those books, those items, those movies.','They were with me, but I didnt remember them.','Meeting you again, I began to recall them.','','That warmth again.','Yes, that warmth.','It comes from you,','Only you.']
    },
    {
      title:'A Miracle',
      content:['Do you feel the same way as I do?','Do you think the same way as I do?','Do you still remember that time?','I ask myself.',' I couldnt ask you.','','Everything is coming back to my memory.','Your gaze, your hand, your hair, I remember it.','Your voice, your smile, your laugh, I remember it.','Your attitude and warmth,','Now I truly remember.','Ahh, how long have I forgot them?','','You return, telling me your story when theres no me.',' Sharing your dreams, your pain.','I just want to say Thank You.','To me, you remain unchanged.']
    },
    {
      title:'A Miracle',
      content: ['The dreams that you are chasing, I feel them.','As if its part of me thats struggling too.','The dreams that you finally achieve,','I feel like Im achieving my own dreams too.','','You who are fighting,','I love it.','You who are happy,','I love it.','You who are being yourself,','I love it.','You who are sad,',' I wanna be there for you.','You who are facing difficulties,','I want to help you.','Do you feel the same?','That question lingers in my mind.']
    },
    {
      title:'A Miracle',
      content: ['Seeing you, meeting you again.','Once more, I find it.','Warmth.','And the drive to keep fighting.','','May I still hold feelings for you?','May I still dream of you?','Nah, for now im gonna bury it.','I have to live properly.','Like you do.','','I wont let go the warmth,','In a life that sometimes feels empty.','Abdan, Thank You for being in this world.','Im also Grateful to God for bringing you to me.','I want to live.','Thank you for the warmth that brings a light of miracles.']
    },
    {
      title:'A Miracle',
      content:''
    }
    
    
  ]


  let newdata=data[index].content

  function Contoh({title='',content=''}){
    if (index==0){
      return (
        <div className="container-card" >
          <div className="title">
          {title} {content}
          </div>
          <div className="subTitle">
              奇跡
            </div>
          <div >
            <button onClick={nextpage}>Start Reading</button>
            </div>
        </div>
      )
    }else if (index==6){
      return (
        <div className="container-card">
          
          <p></p>Too many things i want to tell... <br></br> 
          Even the words i said before, i can't arrange it correctly. <br></br><p></p>
          
          ただ。。。 <br></br>
          ありがとう。 <br></br>
          
          <div className="ppagelast">
            <button onClick={previouspage}>Previous</button>
          </div>
        </div>
      )
    }
     else {
      return (
        <div>
          <div className="container-card">
            <div className="title">
              {title}
            </div>
            <div className="subTitle">
              奇跡
            </div>
            <div className="line">
            </div>
            <div className="teks">
              {newdata.map((item)=><>{item}<br/></>)}
            </div>
            <div className="btn">
            <div className="pbtn">
              <button onClick={previouspage} >Previous</button>
              </div>
              <div className="nbtn">
              <button onClick={nextpage}>Next</button>
              </div>
            </div>
        </div>
      </div> 
      )
    }
  }

  console.log(index)

  return (
    <div className="App">
      {/* {apaaja.map((item)=><Contoh title={item.title} content={item.content} />)} */}
      <Contoh title={data[index].title} content={data[index].content} />
    </div>
  )
}

export default App

//   ","  \n  \n  \n  \n  (garis baru) 
