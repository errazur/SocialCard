
import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import commentpng from "./commenttweet.svg"
import sharepng from "./share.svg"
import retweet from "./retweet.svg"
import rtvert from "./rtvert.svg"

function SocialCard(props) {
    const [selected, setselected] = React.useState(false)
    const [selected2, setselected2] = React.useState(false)
    return (
        <div id="tweet">
            <span id="pp">{props.user.badge}</span>
            <span id="pseudo">{props.user.fullName}</span> <span id="at">@{props.user.userName}</span>
            <p id="message">{props.message}</p>
            <div id="mid">
                <span id="comment"><span className="chiffre">{props.comments}</span><span className="grey"> Comments</span></span>
                <span id="rt"><span className="chiffre">{props.rt}</span> <span className="grey">Retweets</span></span>
                <span id="like"><span className="chiffre">{props.like}</span><span className="grey"> Likes</span></span>
            </div>
            <div id="img">
                <p>
                  <img src={commentpng} alt="Comment img" id="commentimg"/>
                  <img src={selected2? rtvert : retweet} alt="retweet img" className="rtimg" onClick={() => setselected2(!selected2)}/>
                  <div className={"like-btn-svg "+(selected &&"animate")} onClick={() => setselected(!selected)}/>
                  <img src={sharepng} alt="Download img" id="shareimg"/>
                </p>
            </div>
        </div >
    )
}

const user = {
    fullName: "No L's",
    userName: "NoLs",
    badge: "DEV"
}

const message = ""
const comments = 0
const like = 0
const rt = 0


ReactDom.render(
    <SocialCard user={user} message="Salut, je suis sur Twitter, je suis nouveau j'espère vous allez m'aimer" comments="3" like="10k" rt="50" />,
    document.getElementById('affiche')
)

const posts = [
    {
      user: {
        fullName: "Yannick Hub",
        userName: "YannickHub",
        badge: "DEV"
      },
      message: "Learning React ? Start strong and go fast !",
      comments: 5,
      likes: 2
    },
    {
      user: {
        fullName: "Lorent Vouzici",
        userName: "LorentV",
        badge: "BOS"
      },
      message: "Followers power !",
      comments: 1,
      likes: 56
    },
    {
      user: {
        fullName: "Manu Macro",
        userName: "MMac",
        badge: "WIP"
      },
      message: "We are the big family",
      comments: 1,
      likes: 666
    }
  ]
  
function Thread (props){
  return (
      props.posts
  );
}
