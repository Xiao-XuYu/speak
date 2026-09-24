import{a as x,c as h,d as u,e as g,m as p}from"./chunk-TAES34DD.js";var m="speak-state",y="speak-auto-all",b=`\u4F60\u662F\u6587\u672C\u5206\u6BB5\u52A9\u624B\u3002\u628A\u7528\u6237\u7C98\u8D34\u7684\u957F\u6587\u672C\u6309\u8BED\u4E49 / \u573A\u666F / \u6BB5\u843D\u5207\u6210\u82E5\u5E72\u4E2A\u9002\u5408\u6717\u8BFB\u7684\u5C0F\u6BB5\u3002
\u8981\u6C42:
1. \u6309\u53E5\u53F7\u3001\u95EE\u53F7\u3001\u611F\u53F9\u53F7\u3001\u6BB5\u843D\u7B49\u81EA\u7136\u8FB9\u754C\u5207\u5206,\u6BCF\u6BB5\u5927\u81F4 1~3 \u53E5\u3001\u957F\u5EA6\u9002\u4E2D(\u53C2\u8003\u6BCF\u6BB5 60~150 \u5B57)\u3002
2. \u4FDD\u6301\u539F\u6587\u8BED\u4E49\u5B8C\u6574,\u4E0D\u8981\u6539\u5199\u6216\u6DA6\u8272,\u4E0D\u8981\u6F0F\u5B57\u3001\u4E0D\u8981\u5408\u5E76\u76F8\u90BB\u7684\u53E5\u5B50\u3002
3. \u6BB5\u4E0E\u6BB5\u4E4B\u95F4\u8981\u76F8\u5BF9\u72EC\u7ACB,\u9002\u5408\u5355\u72EC\u6717\u8BFB\u4E0E\u8DF3\u8BFB\u3002
4. \u4E0D\u8981\u628A\u6574\u6BB5\u539F\u6837\u8FD4\u56DE,\u4E5F\u4E0D\u8981\u5207\u5F97\u8FC7\u788E(\u9010\u5B57)\u3002

\u53EA\u8F93\u51FA JSON,\u683C\u5F0F: {"segments": ["\u7B2C1\u6BB5\u539F\u6587...", "\u7B2C2\u6BB5\u539F\u6587...", ...]}`,d={eye:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14zm14 0l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/></svg>'},f={title:"\u6717\u8BFB",mount(t){let e=h.get(m,{text:"",segments:[]}),s=h.get(y,!1)===!0;this._root=t,this._text=e.text||"",this._segments=Array.isArray(e.segments)?e.segments:[],this._playingIndex=-1,this._lastIndex=-1,this._pausedIndex=-1,this._userScrollingUntil=0,t.innerHTML=`
      <div class="flex flex-col h-full">

        <!-- \u9876\u90E8\u5DE5\u5177\u680F:\u957F\u6587\u672C\u6458\u8981 + \u67E5\u770B/\u7C98\u8D34/AI \u62C6\u5206/\u6E05\u7A7A + \u987A\u5E8F\u81EA\u52A8\u64AD\u653E\u5F00\u5173 -->
        <div class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-wrap items-center gap-2 sm:gap-3">

          <div class="flex items-center gap-2 min-w-0">
            <strong class="text-sm sm:text-base shrink-0">\u957F\u6587\u672C</strong>
            <span id="text-meta" class="text-xs text-slate-500 truncate"></span>
          </div>

          <div class="flex-1"></div>

          <button id="view-text" type="button"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
            ${d.eye}<span>\u67E5\u770B</span>
          </button>
          <button id="paste-text" type="button"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
            ${d.clipboard}<span>\u7C98\u8D34</span>
          </button>
          <button id="ai-split" type="button"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-xs sm:text-sm">
            ${d.sparkles}<span>AI \u62C6\u5206</span>
          </button>
          <button id="clear" type="button"
                  class="inline-flex items-center px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
            \u6E05\u7A7A
          </button>

          <!-- prettier \u987A\u5E8F\u81EA\u52A8\u64AD\u653E\u5F00\u5173 (iOS \u98CE\u683C\u6ED1\u52A8) -->
          <label class="inline-flex items-center gap-2 cursor-pointer select-none pl-2 sm:pl-3 ml-1 border-l border-slate-200 dark:border-slate-700">
            <span class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">\u987A\u5E8F\u81EA\u52A8\u64AD\u653E</span>
            <span class="relative inline-block h-6 w-11 shrink-0">
              <!-- checkbox \u8986\u76D6\u6574\u4E2A wrapper,opacity-0 \u4F46\u53EF\u70B9;z-10 \u8BA9\u5B83\u5728 track/knob \u4E4B\u4E0A\u63A5\u6536 click -->
              <input id="auto-all" type="checkbox"
                     class="peer absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer m-0"
                     aria-label="\u987A\u5E8F\u81EA\u52A8\u64AD\u653E">
              <span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-full bg-slate-300 dark:bg-slate-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 transition-colors duration-300 ease-out shadow-inner"></span>
              <span aria-hidden="true" class="pointer-events-none absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow ring-1 ring-slate-900/5 transform peer-checked:translate-x-5 transition-transform duration-300 ease-out"></span>
            </span>
          </label>
        </div>

        <!-- \u957F\u6587\u672C\u7F16\u8F91\u5F39\u6846 (\u9ED8\u8BA4\u9690\u85CF,\u70B9\u300C\u67E5\u770B\u300D\u6253\u5F00) -->
        <dialog id="text-dialog" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[720px] w-[min(720px,calc(100vw-32px))] max-h-[calc(100vh-32px)] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
            <header class="flex items-center px-5 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong class="text-base">\u67E5\u770B / \u7F16\u8F91\u957F\u6587\u672C</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="overflow-y-auto p-5 flex flex-col gap-3">
              <p class="text-xs text-slate-500 -mt-1">\u652F\u6301\u4EFB\u610F\u957F\u5EA6\u7EAF\u6587\u672C\u3002\u70B9 \u2728 AI \u62C6\u5206 \u53EF\u6309\u8BED\u4E49\u5207\u6BB5\u3002</p>
              <textarea id="src-text" rows="14" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm sm:text-base resize-y" placeholder="\u5728\u8FD9\u91CC\u7C98\u8D34\u4F60\u8981\u6717\u8BFB\u7684\u6587\u672C..." style="min-height:18rem"></textarea>
              <div class="flex items-center gap-3 flex-wrap">
                <span id="dlg-text-meta" class="text-xs text-slate-500"></span>
                <div class="flex-1"></div>
                <button type="button" data-action="paste-into-dlg"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs sm:text-sm">
                  ${d.clipboard}<span>\u7C98\u8D34</span>
                </button>
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u4FDD\u5B58</button>
              </div>
            </div>
          </form>
        </dialog>

        <!-- \u5206\u6BB5\u5217\u8868 -->
        <div class="bg-white dark:bg-slate-800 flex-1 flex flex-col gap-3 px-2 sm:px-3 py-4 min-h-0">
          <div class="flex items-center gap-2 flex-wrap">
            <strong>\u6B4C\u8BCD\u89C6\u56FE</strong>
            <span id="ai-status" class="text-xs text-slate-500">\u70B9\u4EFB\u610F\u4E00\u884C\u5373\u53EF\u4ECE\u90A3\u91CC\u5F00\u59CB\u6717\u8BFB</span>
            <div class="flex-1"></div>
            <span id="now-playing" class="hidden text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 font-medium"></span>
            <span id="seg-meta" class="text-xs text-slate-500"></span>
          </div>
          <div id="lyrics-wrap" class="relative flex flex-col flex-1 min-h-0">
            <div id="lyrics-scroller" class="lyrics-scroller flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-0"
                 style="scroll-behavior:smooth; touch-action: pan-y manipulation; -webkit-tap-highlight-color: transparent; overscroll-behavior: contain;">
              <div id="lyrics-list" class="flex flex-col items-stretch">
                <div id="lyrics-empty" class="flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 px-6 py-12 sm:py-16 gap-2">
                  <div class="text-3xl sm:text-4xl select-none" aria-hidden="true">\u266A</div>
                  <p class="text-sm">\u8FD8\u6CA1\u6709\u5206\u6BB5\u3002</p>
                  <p class="text-xs">\u5728\u5DE5\u5177\u680F\u70B9 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${d.sparkles} AI \u62C6\u5206</span></p>
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white dark:from-slate-800 to-transparent"></div>
          </div>
        </div>

        </div>
    `,t.querySelector("#view-text").addEventListener("click",()=>this._openTextDialog()),t.querySelector("#paste-text").addEventListener("click",()=>this._pasteFromClipboard()),t.querySelector("#ai-split").addEventListener("click",()=>this._aiSplit()),t.querySelector("#clear").addEventListener("click",()=>this._clearAll()),t.querySelector('#text-dialog [data-action="close"]').addEventListener("click",()=>this._closeTextDialog(!1)),t.querySelector('#text-dialog [data-action="cancel"]').addEventListener("click",()=>this._closeTextDialog(!1)),t.querySelector('#text-dialog [data-action="save"]').addEventListener("click",()=>this._closeTextDialog(!0)),t.querySelector('#text-dialog [data-action="paste-into-dlg"]').addEventListener("click",()=>this._pasteIntoDialog());let a=t.querySelector("#src-text"),i=t.querySelector("#dlg-text-meta"),l=()=>{let n=a.value,c=n.length,o=n?n.split(/\r?\n/).filter(_=>_.trim()).length:0;i.textContent=c>0?`${c} \u5B57 \xB7 ${o} \u884C`:"\u672A\u8F93\u5165"};a.addEventListener("input",l),t.querySelector("#auto-all").checked=s,t.querySelector("#auto-all").addEventListener("change",n=>{h.set(y,n.target.checked===!0)}),t.querySelector("#lyrics-scroller").addEventListener("scroll",()=>{this._userScrollingUntil=Date.now()+2500},{passive:!0}),this._updateMeta(),this._renderLyrics(),this._unsubPlayerCmd=x.on("player:cmd",({action:n})=>this._onPlayerCmd(n)),this._emitPlaybackState()},_openTextDialog(){let t=this._root.querySelector("#src-text");t.value=this._text;let e=this._root.querySelector("#dlg-text-meta"),s=this._text.length,a=this._linesOf(this._text);e.textContent=s>0?`${s} \u5B57 \xB7 ${a} \u884C`:"\u672A\u8F93\u5165",this._root.querySelector("#text-dialog").showModal(),setTimeout(()=>t.focus(),0)},_closeTextDialog(t){if(t){let e=this._root.querySelector("#src-text").value;e!==this._text&&(this._text=e,this._saveState(),this._updateMeta())}this._root.querySelector("#text-dialog").close()},async _pasteFromClipboard(){if(!navigator.clipboard?.readText){this._setAiStatus("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u526A\u8D34\u677F\u8BFB\u53D6","err");return}try{let t=await navigator.clipboard.readText();if(!t){this._setAiStatus("\u526A\u5207\u677F\u4E3A\u7A7A","err");return}this._text=t,this._saveState(),this._updateMeta(),this._setAiStatus(`\u5DF2\u7C98\u8D34 ${t.length} \u5B57`,"ok")}catch(t){this._setAiStatus("\u7C98\u8D34\u5931\u8D25:"+(t?.message||t)+" (\u53EF\u80FD\u672A\u6388\u4E88\u526A\u8D34\u677F\u6743\u9650)","err")}},async _pasteIntoDialog(){let t=this._root.querySelector("#src-text");if(!navigator.clipboard?.readText){this._setAiStatus("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u526A\u8D34\u677F\u8BFB\u53D6","err");return}try{let e=await navigator.clipboard.readText();e&&(t.value=e,t.dispatchEvent(new Event("input")))}catch(e){this._setAiStatus("\u7C98\u8D34\u5931\u8D25:"+(e?.message||e),"err")}},_updateMeta(){let t=this._text.length,e=this._segments.length;this._root.querySelector("#text-meta").textContent=t>0?`${t} \u5B57 \xB7 ${this._linesOf(this._text)} \u884C`:"\u672A\u7C98\u8D34",this._root.querySelector("#seg-meta").textContent=e>0?`\u5171 ${e} \u6BB5`:""},_linesOf(t){return t?t.split(/\r?\n/).filter(e=>e.trim().length>0).length:0},_saveState(){h.set(m,{text:this._text,segments:this._segments})},_clearAll(){confirm("\u786E\u8BA4\u6E05\u7A7A\u6587\u672C\u4E0E\u5206\u6BB5?")&&(this._text="",this._segments=[],this._saveState(),this._updateMeta(),this._renderLyrics(),this._stopAll())},_onPlayerCmd(t){if(this._segments.length===0){t==="play"&&this._playFull();return}switch(t){case"play":this._pausedIndex=-1;let e=this._playingIndex>=0?this._playingIndex:this._lastIndex>=0?this._lastIndex:0;this._playFrom(e);break;case"pause":this._playingIndex>=0&&(this._pausedIndex=this._playingIndex,this._stopAll({silent:!0}));break;case"resume":if(this._pausedIndex>=0){let s=this._pausedIndex;this._pausedIndex=-1,this._playFrom(s)}else this._onPlayerCmd("play");break;case"prev":{this._pausedIndex=-1;let s=this._playingIndex>=0?this._playingIndex:this._lastIndex,a=s>0?s-1:0;this._segments[a]!=null&&this._playFrom(a);break}case"next":{this._pausedIndex=-1;let s=this._playingIndex>=0?this._playingIndex:this._lastIndex,a=s<0?0:Math.min(s+1,this._segments.length-1);this._segments[a]!=null&&this._playFrom(a);break}}},_emitPlaybackState(){x.emit("playback:state",{total:this._segments.length,index:this._playingIndex>=0?this._playingIndex:this._pausedIndex,playing:this._playingIndex>=0,paused:this._pausedIndex>=0&&this._playingIndex<0})},_renderLyrics(){let t=this._root.querySelector("#lyrics-list"),e=this._root.querySelector("#lyrics-scroller");if(this._segments.length===0){t.innerHTML=`
        <div id="lyrics-empty" class="flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 px-6 py-12 sm:py-16 gap-2">
          <div class="text-3xl sm:text-4xl select-none" aria-hidden="true">\u266A</div>
          <p class="text-sm">\u8FD8\u6CA1\u6709\u5206\u6BB5\u3002</p>
          <p class="text-xs">\u5148\u5728\u5DE5\u5177\u680F\u70B9 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">\u{1F4CB} \u7C98\u8D34</span> \u6216 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">\u67E5\u770B</span> \u6DFB\u52A0\u6587\u672C,\u7136\u540E\u70B9 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">\u2728 AI \u62C6\u5206</span></p>
        </div>
      `,e&&(e.scrollTop=0),this._hideNowPlaying(),this._emitPlaybackState();return}t.innerHTML=this._segments.map((s,a)=>`
      <button type="button" data-lyric-index="${a}"
        aria-label="\u4ECE\u7B2C ${a+1} \u6BB5\u5F00\u59CB\u6717\u8BFB"
        class="lyric group block w-full text-center px-4 py-3 sm:py-4 cursor-pointer rounded-lg transition-all duration-300 ease-out leading-relaxed whitespace-pre-wrap break-words
               text-slate-500 dark:text-slate-400 text-base sm:text-lg
               hover:bg-slate-100/60 dark:hover:bg-slate-700/40 hover:text-slate-700 dark:hover:text-slate-200
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
        ${v(s)}
      </button>
    `).join(""),t.style.paddingTop="4rem",t.style.paddingBottom="4rem",t.querySelectorAll("[data-lyric-index]").forEach(s=>{s.addEventListener("click",()=>{let a=Number(s.dataset.lyricIndex);this._pausedIndex=-1,this._playFrom(a)})}),e.scrollTop=0,this._playingIndex=-1,this._lastIndex=-1,this._hideNowPlaying(),this._emitPlaybackState()},_markPlaying(t){this._playingIndex=t,t>=0&&(this._lastIndex=t);let e=this._root.querySelector("#lyrics-scroller"),a=this._root.querySelector("#lyrics-list").querySelectorAll("[data-lyric-index]"),i=["lyric-active","aria-current","text-blue-600","dark:text-blue-300","font-bold","text-2xl","sm:text-3xl"],l=["text-slate-500","dark:text-slate-400","text-base","sm:text-lg"];if(a.forEach(r=>{r.classList.remove(...i),r.classList.add(...l),r.removeAttribute("aria-current")}),t>=0&&a[t]){let r=a[t];if(r.classList.remove(...l),r.classList.add(...i),r.setAttribute("aria-current","true"),this._showNowPlaying(t),Date.now()<this._userScrollingUntil){this._emitPlaybackState();return}try{r.scrollIntoView({block:"center",behavior:"smooth"})}catch{let n=e.getBoundingClientRect(),c=r.getBoundingClientRect(),o=e.scrollTop+(c.top-n.top)-n.height/2+c.height/2;e.scrollTo({top:o,behavior:"smooth"})}}else this._hideNowPlaying();this._emitPlaybackState()},_showNowPlaying(t){let e=this._root?.querySelector("#now-playing");e&&(e.textContent=`\u6B63\u5728\u6717\u8BFB ${t+1} / ${this._segments.length}`,e.classList.remove("hidden"))},_hideNowPlaying(){let t=this._root?.querySelector("#now-playing");t&&(t.classList.add("hidden"),t.textContent="")},async _playFull(){let t=(this._text||"").trim();if(!t){this._setAiStatus("\u6CA1\u6709\u53EF\u6717\u8BFB\u7684\u6587\u672C","err");return}this._pausedIndex=-1,await p.speak({text:t},{onStart:()=>{this._setAiStatus("\u6B63\u5728\u6717\u8BFB\u5168\u6587...","info"),this._emitPlaybackState()},onEnd:()=>{this._setAiStatus("\u5168\u6587\u6717\u8BFB\u5B8C\u6BD5","ok"),this._emitPlaybackState()},onError:e=>{this._setAiStatus("\u6717\u8BFB\u5931\u8D25:"+(e?.message||e),"err"),this._emitPlaybackState()}})},async _playFrom(t){if(this._segments.length===0)return;let e=Math.max(0,Math.min(t,this._segments.length-1)),s=this._root.querySelector("#auto-all").checked===!0;this._stopAll({silent:!0}),s?await this._playRange(e,this._segments.length-1):await this._playRange(e,e)},async _playRange(t,e){this._userStopped=!1;for(let s=t;s<=e&&!this._userStopped;s++){this._markPlaying(s);let a=this._segments[s]||"",i=k(a),l=i==="zh"?"\u4E2D":"EN";if(this._setAiStatus(`\u6B63\u5728\u6717\u8BFB\u7B2C ${s+1} / ${this._segments.length} \u6BB5 (${l})...`,"info"),await p.speak({text:a,lang:i},{onStart:()=>{},onEnd:()=>{},onError:r=>{this._setAiStatus(`\u7B2C ${s+1} \u6BB5\u6717\u8BFB\u5931\u8D25:${r?.message||r}`,"err"),this._userStopped=!0}}),t===e||this._userStopped)break}this._markPlaying(-1),this._userStopped||this._setAiStatus(t===e?"\u64AD\u653E\u5B8C\u6BD5":`\u5DF2\u6309\u987A\u5E8F\u64AD\u653E\u7B2C ${t+1}~${e+1} \u6BB5`,"ok")},_stopAll({silent:t=!1}={}){this._userStopped=!0,p.stop(),this._markPlaying(-1),t||this._setAiStatus("\u5DF2\u505C\u6B62","info"),this._emitPlaybackState()},async _aiSplit(){let t=(this._text||"").trim();if(!t){this._setAiStatus("\u6CA1\u6709\u53EF\u62C6\u5206\u7684\u6587\u672C","err");return}if(!u.isConfigured()){this._setAiStatus("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key","err");return}let e=this._root.querySelector("#ai-split"),s=e.innerHTML;e.disabled=!0,e.innerHTML=`${d.sparkles}<span>\u62C6\u5206\u4E2D...</span>`,this._setAiStatus("\u6B63\u5728\u8BF7\u6C42 AI \u62C6\u5206...","info");try{let a=await this._callAiSplit(t);if(!Array.isArray(a)||a.length===0)throw new Error("AI \u672A\u8FD4\u56DE\u6709\u6548\u5206\u6BB5");this._stopAll({silent:!0}),this._segments=a.map(i=>String(i).trim()).filter(Boolean),this._saveState(),this._renderLyrics(),this._updateMeta(),this._setAiStatus(`\u62C6\u5206\u5B8C\u6210,\u5171 ${this._segments.length} \u6BB5`,"ok")}catch(a){this._setAiStatus("AI \u62C6\u5206\u5931\u8D25,\u5DF2\u964D\u7EA7\u4E3A\u672C\u5730\u5207\u5206:"+(a?.message||a),"err");let i=g.split(t);this._stopAll({silent:!0}),this._segments=i,this._saveState(),this._renderLyrics(),this._updateMeta()}finally{e.disabled=!1,e.innerHTML=s}},async _callAiSplit(t){let e=u.get(),s=e.baseUrl.replace(/\/+$/,"")+"/chat/completions",a=`\u3010\u5F85\u62C6\u5206\u6587\u672C\u3011
${t.slice(0,12e3)}`,i=new AbortController,l=setTimeout(()=>i.abort(),6e4),r;try{r=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e.apiKey}`},body:JSON.stringify({model:u.getEffectiveModel(),messages:[{role:"system",content:b},{role:"user",content:a}],temperature:.2,stream:!1}),signal:i.signal})}catch(o){throw o?.name==="AbortError"?new Error("\u8BF7\u6C42\u8D85\u65F6 (60s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):o instanceof TypeError?new Error(`\u7F51\u7EDC\u9519\u8BEF:${o.message} (\u53EF\u80FD\u662F CORS / \u8DE8\u57DF\u88AB\u62E6)`):o}finally{clearTimeout(l)}if(!r.ok){let o=await r.text().catch(()=>r.statusText);throw new Error(`HTTP ${r.status} \u2014 ${o.slice(0,200)}`)}let c=(await r.json().catch(()=>null))?.choices?.[0]?.message?.content?.trim();if(!c)throw new Error("\u8FD4\u56DE\u4E3A\u7A7A");return S(c,t)},_setAiStatus(t,e="info"){let s=this._root?.querySelector("#ai-status");if(s){if(!t){s.textContent="\u70B9\u4EFB\u610F\u4E00\u884C\u5373\u53EF\u4ECE\u90A3\u91CC\u5F00\u59CB\u6717\u8BFB",s.className="text-xs text-slate-500";return}s.textContent=t,s.className="text-xs "+(e==="ok"?"text-green-600 dark:text-green-400":e==="err"?"text-red-600 dark:text-red-400":"text-slate-500")}},unmount(){this._userStopped=!0,p.stop(),this._unsubPlayerCmd?.(),this._root=null}};function v(t){return String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function k(t){let e=String(t||"");return/[一-鿿぀-ゟ゠-ヿ가-힯]/.test(e)?"zh":"en"}function S(t,e){let a=[t.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],t];for(let l of a)if(l)try{let r=JSON.parse(l.trim());if(Array.isArray(r))return r.filter(n=>typeof n=="string"&&n.trim());if(r&&Array.isArray(r.segments))return r.segments.filter(n=>typeof n=="string"&&n.trim())}catch{}let i=t.split(/\r?\n/).map(l=>l.trim()).filter(l=>l&&!l.startsWith("{")&&!l.startsWith("["));return i.length>=2?i:g.split(e)}var T=f;export{T as default,f as page};
