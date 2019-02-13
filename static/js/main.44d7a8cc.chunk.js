(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(2),i=n.n(s),u=(n(15),n(6)),o=n(3),c=n(4),l=n(7),m=n(5),g=n(8),d=(n(16),function(e){return r.a.createElement("div",{className:"gameStart"},r.a.createElement("input",{type:"text",onChange:function(t){return e.wordHandle(t)},ref:e.startInputRef}),r.a.createElement("button",{type:"button",onClick:e.startGameHandle},"START"))}),h=(n(17),function(e){var t=r.a.createElement("div",{className:"letterHolder"},"?");return(!0===e.show||e.over)&&(t=r.a.createElement("div",{className:"letterHolder"},e.letter)),t}),f=function(e){var t=e.word.map(function(t){var n=-1!==e.letters.indexOf(t);return r.a.createElement(h,{key:Math.random(),letter:t,show:n,over:e.over})});return r.a.createElement("div",null,t)},v=function(e){return r.a.createElement("div",{className:"guessLetter"},r.a.createElement("input",{disabled:e.over,type:"text",ref:e.inputRef}),r.a.createElement("button",{onClick:e.clicked},"Try"))},E=function(e){return r.a.createElement("div",{className:"errors"},"ERROR #: ",e.errNum)},p=function(e){return r.a.createElement("div",{className:"gameOver"},r.a.createElement("h1",null,"YOU ARE DEAD!"),r.a.createElement("button",{onClick:e.clicked},"Try Again"))},w=function(e){return r.a.createElement("div",{className:"win"},r.a.createElement("h1",null,"You Won!"),r.a.createElement("button",{onClick:e.clicked},"Try Again"))},R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={gameRunning:!1,guessingWord:[],guessedLetters:[],errNum:0,shownLetters:0,gameOver:!1,maxErrors:4,gameWin:!1},n.gameStart=function(){""!==n.startInputRef.current.value&&n.setState({gameRunning:!0})},n.findHowManyLetters=function(e){for(var t=0,a=0;a<n.state.guessingWord.length;a++)n.state.guessingWord[a]===e&&(t+=1);return t},n.guessClickHandler=function(){var e=n.inputRef.current.value.toLowerCase(),t=n.state.errNum,a=n.state.gameOver,r=n.state.shownLetters,s=n.state.gameWin;n.inputRef.current.value="",-1===n.state.guessingWord.indexOf(e)?(t+=1,n.state.errNum>=n.state.maxErrors&&(a=!0)):r+=n.findHowManyLetters(e),n.state.gameRunning&&n.state.guessingWord.length<=r&&(s=!0),n.setState(function(n){return{guessedLetters:[].concat(Object(u.a)(n.guessedLetters),[e]),shownLetters:r,errNum:t,gameOver:a,gameWin:s}})},n.guessingWordChangeHandle=function(e){n.setState({guessingWord:e.target.value.split("")})},n.gameOverHandler=function(){n.setState({gameOver:!1,gameRunning:!1,guessingWord:[],guessedLetters:[],errNum:0,shownLetters:0,gameWin:!1})},n.inputRef=r.a.createRef(),n.startInputRef=r.a.createRef(),n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=!this.state.gameRunning&&r.a.createElement(d,{startInputRef:this.startInputRef,startGameHandle:this.gameStart,wordHandle:this.guessingWordChangeHandle}),t=!this.state.gameRunning||this.state.gameOver||this.state.gameWin?null:r.a.createElement(v,{over:this.state.gameOver,inputRef:this.inputRef,clicked:this.guessClickHandler}),n=this.state.gameOver?r.a.createElement(p,{clicked:this.gameOverHandler}):null,a=this.state.gameWin?r.a.createElement(w,{clicked:this.gameOverHandler}):null,s=!0===this.state.gameOver||!1===this.state.gameRunning;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"The Hanging Game"),e,t,r.a.createElement(f,{over:s,letters:this.state.guessedLetters,word:this.state.guessingWord}),n,a,r.a.createElement(E,{errNum:this.state.errNum}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.44d7a8cc.chunk.js.map