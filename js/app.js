import{a as S,b as C,c as P,d as _,f as U,g as A,h as z,i as se,j as ae,k as re,l as le,m as T,n as ie,o as N,p as V,q as D,r as oe,s as ne,t as de,u as ce}from"./chunk-LUY3X4E5.js";var W=class{constructor(){this.routes=new Map,this.guards=[],this.current=null,this._pageInstance=null}addRoute(e,s){this.routes.set(e,s)}beforeEach(e){this.guards.push(e)}async navigate(e){if(e!==this.current){if(location.hash!=="#"+e){location.hash=e;return}await this._render(e)}}async start(){window.addEventListener("hashchange",()=>this._handleHash()),await this._handleHash()}async _handleHash(){let e=location.hash.replace(/^#/,"")||"/";await this._render(e)}async _render(e){let s=this.routes.get(e)||this.routes.get("/404");if(!s){console.warn(`[router] no route for "${e}"`);return}for(let a of this.guards)if(!await a(e))return;typeof this._pageInstance?.unmount=="function"&&this._pageInstance.unmount();let t=await s();this._pageInstance=t.default||t,S.emit("route:change",{path:e,page:this._pageInstance}),this.current=e}},R=new W;var K=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="flex h-screen flex-col">
        <header class="flex items-center px-2 sm:px-4 py-2 border-b border-slate-200 dark:border-slate-700 gap-2 shrink-0">
          <span class="inline-flex items-center gap-2 px-2 py-1 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100">
            <span aria-hidden="true" class="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-600 text-white text-xs font-bold">\u6717</span>
            <span>\u6717\u8BFB</span>
          </span>
          <div class="flex-1"></div>
          <span id="env-info" class="hidden sm:inline text-xs text-slate-500 dark:text-slate-400 font-mono"></span>
          <button id="settings-btn" type="button"
                  class="px-2.5 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  aria-label="\u8BBE\u7F6E">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
        </header>
        <section id="main" class="flex-1 overflow-hidden pb-[calc(4rem+env(safe-area-inset-bottom))]"></section>
        <app-player-bar></app-player-bar>
      </div>
      <app-settings id="app-settings"></app-settings>
    `,this.mainEl=this.querySelector("#main"),this.settingsEl=this.querySelector("#app-settings"),this.querySelector("#settings-btn").addEventListener("click",()=>{this.settingsEl?.open?.()}),S.on("route:change",({path:e,page:s})=>{this.mainEl.innerHTML="",typeof s.mount=="function"&&s.mount(this.mainEl)}),this.querySelector("#env-info").textContent=`PORT=${window.__ENV__?.PORT||"?"} \xB7 API=${window.__ENV__?.API_BASE||"(none)"}`}};customElements.define("app-shell",K);var he="player-bar-show-progress",j={play:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12l8.5 6V6z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>'},X=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="fixed bottom-0 inset-x-0 z-30 pointer-events-none">
        <div class="pointer-events-auto
                    bg-white/95 dark:bg-slate-800/95 backdrop-blur
                    border-t border-slate-200 dark:border-slate-700">

          <!-- \u5E95\u90E8:\u63A7\u4EF6 + \u72B6\u6001\u6587\u5B57 + \u6BB5\u843D\u8FDB\u5EA6\u6761(\u6700\u53F3) -->
          <div class="px-3 sm:px-4 pt-2.5 pb-[max(env(safe-area-inset-bottom),0.625rem)] flex items-center gap-2 sm:gap-3">
            <button id="pb-prev" type="button" aria-label="\u4E0A\u4E00\u6BB5"
                    class="shrink-0 px-2.5 py-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
              ${j.prev}
            </button>
            <button id="pb-play" type="button" aria-label="\u64AD\u653E/\u6682\u505C"
                    class="shrink-0 inline-flex items-center justify-center px-3 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
              <span id="pb-play-icon" class="inline-flex items-center justify-center">${j.play}</span>
            </button>
            <button id="pb-next" type="button" aria-label="\u4E0B\u4E00\u6BB5"
                    class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
              ${j.next}
            </button>

            <!-- \u4E2D\u95F4:\u72B6\u6001\u6587\u5B57(\u5360\u5269\u4F59\u7A7A\u95F4) -->
            <div id="pb-status" class="flex-1 min-w-0 px-1 sm:px-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate"></div>

            <!-- \u6700\u53F3:\u6BB5\u843D\u8FDB\u5EA6\u6761(\u53EF\u70B9\u51FB / \u62D6\u62FD) -->
            <div id="pb-progress-wrap"
                 class="shrink-0 w-[30%] min-w-[80px] max-w-[200px] h-2 rounded-full bg-slate-200/70 dark:bg-slate-700/70 overflow-hidden relative select-none touch-none transition-opacity"
                 role="slider"
                 tabindex="0"
                 aria-label="\u6BB5\u843D\u8FDB\u5EA6(\u70B9\u51FB\u6216\u62D6\u62FD\u8C03\u6574)"
                 aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
              <div id="pb-progress-bar"
                   class="absolute inset-y-0 left-0 bg-blue-600 dark:bg-blue-500 origin-left rounded-full pointer-events-none"
                   style="width: 0%; transform: scaleX(0); transition: width 120ms linear;"></div>
            </div>
          </div>

        </div>
      </div>
    `,this._prevBtn=this.querySelector("#pb-prev"),this._playBtn=this.querySelector("#pb-play"),this._nextBtn=this.querySelector("#pb-next"),this._playIconEl=this.querySelector("#pb-play-icon"),this._statusEl=this.querySelector("#pb-status"),this._progressWrap=this.querySelector("#pb-progress-wrap"),this._progressBar=this.querySelector("#pb-progress-bar"),this._state={total:0,index:-1,playing:!1,paused:!1,progress:0},this._isDragging=!1,this._dragRatio=0,this._dragPointerId=null,this._prevBtn.addEventListener("click",()=>S.emit("player:cmd",{action:"prev"})),this._nextBtn.addEventListener("click",()=>S.emit("player:cmd",{action:"next"})),this._playBtn.addEventListener("click",()=>{let e=this._state.paused?"resume":this._state.playing?"pause":"play";S.emit("player:cmd",{action:e})}),this._progressWrap.addEventListener("pointerdown",e=>this._onProgPointerDown(e)),this._progressWrap.addEventListener("pointermove",e=>this._onProgPointerMove(e)),this._progressWrap.addEventListener("pointerup",e=>this._onProgPointerUp(e)),this._progressWrap.addEventListener("pointercancel",e=>this._onProgPointerUp(e)),this._progressWrap.addEventListener("keydown",e=>this._onProgKeyDown(e)),S.on("playback:state",e=>this._render(e)),S.on("player-bar:config",e=>this._applyConfig(e)),this._applyConfig({showProgress:P.get(he,!0)!==!1})}_ratioFromEvent(e){let s=this._progressWrap.getBoundingClientRect();if(s.width<=0)return 0;let t=(e.clientX??0)-s.left;return Math.max(0,Math.min(1,t/s.width))}_applyRatioVisual(e){this._progressBar.style.transform=`scaleX(${e})`,this._progressBar.style.width=`${(e*100).toFixed(2)}%`,this._progressWrap.setAttribute("aria-valuenow",String(Math.round(e*100)))}_onProgPointerDown(e){if(!(this._state.index<0)&&this._progressWrap.dataset.active!=="off"){e.preventDefault(),this._isDragging=!0,this._dragPointerId=e.pointerId;try{this._progressWrap.setPointerCapture(e.pointerId)}catch{}this._dragRatio=this._ratioFromEvent(e),this._applyRatioVisual(this._dragRatio),this._progressWrap.classList.add("ring-2","ring-blue-500/40")}}_onProgPointerMove(e){this._isDragging&&(this._dragRatio=this._ratioFromEvent(e),this._applyRatioVisual(this._dragRatio))}_onProgPointerUp(e){if(!this._isDragging)return;this._isDragging=!1;try{this._progressWrap.releasePointerCapture(this._dragPointerId)}catch{}this._dragPointerId=null,this._progressWrap.classList.remove("ring-2","ring-blue-500/40");let s=this._ratioFromEvent(e);S.emit("player:cmd",{action:"seek",progress:s})}_onProgKeyDown(e){if(this._state.index<0)return;let s=this._state.progress;if(e.key==="ArrowLeft")s=Math.max(0,s-.05);else if(e.key==="ArrowRight")s=Math.min(1,s+.05);else if(e.key==="Home")s=0;else if(e.key==="End")s=1;else return;e.preventDefault(),S.emit("player:cmd",{action:"seek",progress:s})}_applyConfig(e){e?.showProgress!==!1?(delete this._progressWrap.dataset.active,this._progressWrap.classList.remove("hidden"),this._progressWrap.setAttribute("aria-hidden","false")):(this._progressWrap.dataset.active="off",this._progressWrap.classList.add("hidden"),this._progressWrap.setAttribute("aria-hidden","true"))}_render(e){let s=Number(e?.total)||0,t=Number.isInteger(e?.index)?e.index:-1,a=!!e?.playing,n=!!e?.paused,i=Number(e?.progress),p=Number.isFinite(i)?Math.min(1,Math.max(0,i)):0;this._state={total:s,index:t,playing:a,paused:n,progress:p};let o=s>0;this._prevBtn.disabled=!o,this._nextBtn.disabled=!o,this._playBtn.disabled=!o,this._playIconEl.innerHTML=a?j.pause:j.play,o?n&&t>=0?this._statusEl.textContent=`\u5DF2\u6682\u505C \xB7 \u7B2C ${t+1} / ${s} \u6BB5`:a&&t>=0?this._statusEl.textContent=`\u6B63\u5728\u6717\u8BFB \xB7 \u7B2C ${t+1} / ${s} \u6BB5`:this._statusEl.textContent=`\u5171 ${s} \u6BB5 \xB7 \u70B9 \u25B6 \u5F00\u59CB\u6717\u8BFB`:this._statusEl.textContent="",!this._isDragging&&(t<0?(this._progressWrap.classList.add("hidden"),this._applyRatioVisual(0)):this._progressWrap.dataset.active!=="off"&&(this._progressWrap.classList.remove("hidden"),this._applyRatioVisual(p)))}};customElements.define("app-player-bar",X);var G=class extends HTMLElement{connectedCallback(){this._built||(this._build(),this._built=!0)}_build(){let e=_.get(),s=_.isConfigured(),t=A("zh"),a=A("en");this.innerHTML=`
      <dialog id="dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[720px] w-[min(720px,calc(100vw-32px))] max-h-[calc(100vh-32px)] border border-slate-200 dark:border-slate-700">
        <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
          <header class="flex items-center px-5 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <strong class="text-base">\u8BBE\u7F6E</strong>
            <div class="flex-1"></div>
            <button type="button" data-action="close"
                    class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
          </header>
          <div class="overflow-y-auto p-5 flex flex-col gap-3 sm:gap-4">

            ${this._renderAiSection(e,s)}

            ${this._renderTtsSection("zh","\u4E2D\u6587 TTS \u53D1\u97F3",t)}
            ${this._renderTtsSection("en","English TTS",a)}

            ${this._renderPlayerBarSection()}

            ${this._renderEnvSection()}
            ${this._renderLocalDataSection()}

          </div>
        </form>
      </dialog>
    `,this._dlg=this.querySelector("#dlg"),this.querySelector('[data-action="close"]').addEventListener("click",()=>this.close()),this._wireAi(),this._ttsCleanups=[],this._wireTts("zh"),this._wireTts("en"),this._wirePlayerBar(),this._wireLocalData()}_renderAiSection(e,s){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>MiniMax AI \u914D\u7F6E</strong>
          <span id="ai-status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${s?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200"}">
            ${s?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}
          </span>
        </div>
        <p class="text-xs text-slate-500 -mt-1">
          \u9002\u7528\u4E8E MiniMax AI\uFF08\u9ED8\u8BA4 Base URL: <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">https://api.minimaxi.com/v1</code>\uFF09\u3002
          API Key \u4EC5\u5B58\u4E8E\u6D4F\u89C8\u5668 localStorage\uFF0C\u4E0D\u4E0A\u4F20\u4EFB\u4F55\u4E1A\u52A1\u670D\u52A1\u5668\u3002<br>
          TTS\uFF08MiniMax \u5F15\u64CE\uFF09\u4F1A\u590D\u7528\u8FD9\u91CC\u7684 API Key\u3002
        </p>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">API Key<span class="text-red-500"> *</span></span>
          <input id="ai-key" type="password" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="sk-..." />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">Base URL</span>
          <input id="ai-base" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${y(_.DEFAULTS.baseUrl)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
          <input id="ai-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${y(_.DEFAULTS.model)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">
            \u5FEB\u901F\u6A21\u578B (Fast Model)
            <span class="text-xs text-slate-400">\u2014 \u300C\u4F7F\u7528\u5FEB\u901F\u6A21\u578B\u300D\u5F00\u5173 ON \u65F6\u4F7F\u7528</span>
          </span>
          <input id="ai-fast-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${y(_.DEFAULTS.fastModel)}" />
        </label>

        <label class="flex items-start gap-2 cursor-pointer select-none">
          <input id="ai-use-fast-model" type="checkbox" class="mt-0.5 w-5 h-5 sm:w-4 sm:h-4 accent-blue-600">
          <span class="flex flex-col gap-0.5">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u4F7F\u7528\u5FEB\u901F\u6A21\u578B</span>
            <span class="text-xs text-slate-500">
              ON \u2192 \u7528 <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">\u5FEB\u901F\u6A21\u578B</code>\u3002
              OFF \u2192 \u7528 <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">Model</code>\u3002
            </span>
          </span>
        </label>

        <label class="flex items-start gap-2 cursor-pointer select-none">
          <input id="ai-thinking" type="checkbox" class="mt-0.5 w-5 h-5 sm:w-4 sm:h-4 accent-blue-600">
          <span class="flex flex-col gap-0.5">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u5F00\u542F AI \u601D\u8003\u6A21\u5F0F</span>
            <span class="text-xs text-slate-500">
              \u4EC5\u4F5C\u4E3A\u610F\u56FE\u6807\u8BB0,\u4E0E\u300C\u4F7F\u7528\u5FEB\u901F\u6A21\u578B\u300D\u72EC\u7ACB \u2014 \u4E0D\u5F71\u54CD\u6A21\u578B\u9009\u62E9\u3002
            </span>
          </span>
        </label>

        <div class="flex flex-wrap items-center gap-3 pt-1">
          <button id="ai-test"  type="button" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition disabled:opacity-50">\u6D4B\u8BD5\u8FDE\u63A5</button>
          <button id="ai-reset" type="button" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">\u91CD\u7F6E</button>
          <div class="flex-1"></div>
          <span id="ai-msg" class="text-xs text-slate-500"></span>
          <button id="ai-save"  type="button" class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">\u4FDD\u5B58</button>
        </div>

        <pre id="ai-reply" class="hidden text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md p-2 whitespace-pre-wrap break-words"></pre>
      </section>
    `}_wireAi(){let e=_.get();this.querySelector("#ai-key").value=e.apiKey,this.querySelector("#ai-base").value=e.baseUrl,this.querySelector("#ai-model").value=e.model,this.querySelector("#ai-fast-model").value=e.fastModel,this.querySelector("#ai-use-fast-model").checked=e.fastModelEnabled===!0,this.querySelector("#ai-thinking").checked=e.thinkingEnabled!==!1;let s=this.querySelector("#ai-status"),t=this.querySelector("#ai-msg"),a=this.querySelector("#ai-reply"),n=r=>{s.textContent=r?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E",s.className="ml-auto text-xs px-2 py-0.5 rounded-full "+(r?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")},i=(r,l="info")=>{t.textContent=r||"",t.className="text-xs "+(l==="ok"?"text-green-600 dark:text-green-400":l==="err"?"text-red-600 dark:text-red-400":"text-slate-500")},p=()=>({apiKey:this.querySelector("#ai-key").value.trim(),baseUrl:this.querySelector("#ai-base").value.trim()||_.DEFAULTS.baseUrl,model:this.querySelector("#ai-model").value.trim()||_.DEFAULTS.model,fastModel:this.querySelector("#ai-fast-model").value.trim()||_.DEFAULTS.fastModel,fastModelEnabled:this.querySelector("#ai-use-fast-model").checked===!0,thinkingEnabled:this.querySelector("#ai-thinking").checked===!0});this.querySelector("#ai-save").addEventListener("click",()=>{let r=p();if(!r.apiKey){i("\u8BF7\u586B\u5199 API Key","err");return}_.save(r),n(!0),i(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),a.classList.add("hidden"),a.textContent="",this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}),this.querySelector("#ai-reset").addEventListener("click",()=>{_.clear(),this.querySelector("#ai-key").value="",this.querySelector("#ai-base").value="",this.querySelector("#ai-model").value="",this.querySelector("#ai-fast-model").value="",this.querySelector("#ai-use-fast-model").checked=!1,this.querySelector("#ai-thinking").checked=!0,n(!1),i("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09"),a.classList.add("hidden"),a.textContent=""});let o=this.querySelector("#ai-test");o.addEventListener("click",async()=>{let r=p();if(!r.apiKey){i("\u8BF7\u586B\u5199 API Key","err");return}_.save(r),o.disabled=!0;let l=o.textContent;o.textContent="\u6D4B\u8BD5\u4E2D...",i("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info"),a.classList.add("hidden"),a.textContent="";try{let d=await _.test(r,{timeoutMs:3e4});i(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),a.textContent=d,a.classList.remove("hidden"),n(!0),this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}catch(d){i(`\u8054\u901A\u5931\u8D25\uFF1A${d?.message||String(d)}`,"err"),n(!1)}finally{o.disabled=!1,o.textContent=l}})}_renderTtsSection(e,s,t){let a=t.provider==="edge"?"edge-tts-api":t.provider==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",n=t.provider==="minimax"||t.provider==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";return`
      <section data-tts-lang="${e}" class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>${y(s)}</strong>
          <span data-role="status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${n}">
            \u5F53\u524D: ${y(a)}
          </span>
        </div>
        <p class="text-xs text-slate-500 -mt-1">
          \u6717\u8BFB\u9875\u4F1A\u6839\u636E\u6BB5\u843D\u91CC\u7684\u4E2D/\u82F1\u6587\u5B57\u7B26\u81EA\u52A8\u9009\u8FD9\u91CC\u5BF9\u5E94\u8BED\u8A00\u7684\u5F15\u64CE\u3002
        </p>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">\u53D1\u97F3\u6E90</span>
          <select data-role="provider" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900">
            <option value="browser">\u6D4F\u89C8\u5668\u81EA\u5E26 TTS</option>
            <option value="edge">edge-tts-api (\u672C\u5730 HTTP)</option>
            <option value="minimax">MiniMax T2A v2 (HTTP)</option>
          </select>
        </label>

        <!-- \u6D4F\u89C8\u5668\u5757 -->
        <div data-role="browser-block" class="flex flex-col gap-3 ${t.provider==="browser"?"":"hidden"}">
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u8BED\u97F3 (Voice)</span>
            <select data-role="browser-voice" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900">
              <option value="">(\u7CFB\u7EDF\u9ED8\u8BA4)</option>
            </select>
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u8BED\u901F Rate <span class="text-slate-400" data-role="browser-rate-val">${t.provider==="browser"?t.rate:1}</span> (0.1~10)</span>
            <input data-role="browser-rate" type="range" min="0.1" max="2" step="0.1" value="${t.provider==="browser"?t.rate:1}" class="w-full">
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u97F3\u8C03 Pitch <span class="text-slate-400" data-role="browser-pitch-val">${t.provider==="browser"?t.pitch:1}</span> (0~2)</span>
            <input data-role="browser-pitch" type="range" min="0" max="2" step="0.1" value="${t.provider==="browser"?t.pitch:1}" class="w-full">
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u97F3\u91CF Volume <span class="text-slate-400" data-role="browser-volume-val">${t.provider==="browser"?t.volume:1}</span> (0~1)</span>
            <input data-role="browser-volume" type="range" min="0" max="1" step="0.05" value="${t.provider==="browser"?t.volume:1}" class="w-full">
          </label>
        </div>

        <!-- edge \u5757 -->
        <div data-role="edge-block" class="flex flex-col gap-3 ${t.provider==="edge"?"":"hidden"}">
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">edge-tts-api \u5730\u5740 (Base URL)</span>
            <input data-role="edge-base" type="text" autocomplete="off"
                   class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                   placeholder="${y(T.DEFAULT_EDGE_BASE_URL)}" />
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u8BED\u97F3 (Voice)</span>
            <select data-role="edge-voice" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900">
              <option value="">\u8F7D\u5165\u4E2D\u2026</option>
            </select>
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u8BED\u901F Rate <span class="text-slate-400" data-role="edge-rate-val">${t.provider==="edge"?t.rate:0}</span> (-100~100)</span>
            <input data-role="edge-rate" type="range" min="-100" max="100" step="5" value="${t.provider==="edge"?t.rate:0}" class="w-full">
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u97F3\u8C03 Pitch <span class="text-slate-400" data-role="edge-pitch-val">${t.provider==="edge"?t.pitch:0}</span> (-50~50)</span>
            <input data-role="edge-pitch" type="range" min="-50" max="50" step="1" value="${t.provider==="edge"?t.pitch:0}" class="w-full">
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u97F3\u91CF Volume <span class="text-slate-400" data-role="edge-volume-val">${t.provider==="edge"?t.volume:0}</span> (-100~100)</span>
            <input data-role="edge-volume" type="range" min="-100" max="100" step="5" value="${t.provider==="edge"?t.volume:0}" class="w-full">
          </label>
        </div>

        <!-- MiniMax \u5757 -->
        <div data-role="minimax-block" class="flex flex-col gap-3 ${t.provider==="minimax"?"":"hidden"}">
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">MiniMax Base URL</span>
            <input data-role="minimax-base" type="text" autocomplete="off"
                   class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                   placeholder="${y(T.DEFAULT_MINIMAX_BASE_URL)}" />
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
            <select data-role="minimax-model" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900">
              <option value="speech-2.8-hd">speech-2.8-hd (\u63A8\u8350)</option>
              <option value="speech-2.8-turbo">speech-2.8-turbo</option>
              <option value="speech-2.6-hd">speech-2.6-hd</option>
              <option value="speech-2.6-turbo">speech-2.6-turbo</option>
              <option value="speech-02-hd">speech-02-hd</option>
              <option value="speech-02-turbo">speech-02-turbo</option>
              <option value="speech-01-hd">speech-01-hd</option>
              <option value="speech-01-turbo">speech-01-turbo</option>
            </select>
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">
              \u8BED\u97F3 (Voice) <span class="text-xs text-slate-400" data-role="minimax-voice-meta"></span>
            </span>
            <select data-role="minimax-voice" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900">
              <option value="">\u8F7D\u5165\u4E2D\u2026</option>
            </select>
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u8BED\u901F Speed <span class="text-slate-400" data-role="minimax-speed-val">${t.provider==="minimax"?t.minimaxSpeed:1}</span> (0.5~2, 1=\u6B63\u5E38)</span>
            <input data-role="minimax-speed" type="range" min="0.5" max="2" step="0.1" value="${t.provider==="minimax"?t.minimaxSpeed:1}" class="w-full">
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u97F3\u91CF Vol <span class="text-slate-400" data-role="minimax-vol-val">${t.provider==="minimax"?t.minimaxVol:1}</span> (0~10, 1=\u6B63\u5E38)</span>
            <input data-role="minimax-vol" type="range" min="0" max="10" step="0.5" value="${t.provider==="minimax"?t.minimaxVol:1}" class="w-full">
          </label>
          <label class="flex flex-col gap-1">
            <span class="text-sm text-slate-600 dark:text-slate-300">\u97F3\u8C03 Pitch <span class="text-slate-400" data-role="minimax-pitch-val">${t.provider==="minimax"?t.minimaxPitch:0}</span> (-12~12, 0=\u6B63\u5E38)</span>
            <input data-role="minimax-pitch" type="range" min="-12" max="12" step="1" value="${t.provider==="minimax"?t.minimaxPitch:0}" class="w-full">
          </label>
          <button type="button" data-role="minimax-refresh" class="self-start px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs">
            \u5237\u65B0\u97F3\u8272\u5217\u8868
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-1">
          <button data-role="test"  type="button" class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50">\u6D4B\u8BD5\u6717\u8BFB</button>
          <button data-role="stop"  type="button" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">\u505C\u6B62</button>
          <div class="flex-1"></div>
          <span data-role="msg" class="text-xs text-slate-500"></span>
          <button data-role="save"  type="button" class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">\u4FDD\u5B58</button>
        </div>
      </section>
    `}_$(e,s){return this.querySelector(`section[data-tts-lang="${e}"] [data-role="${s}"]`)}_wireTts(e){let s=A(e);if(!this.querySelector(`section[data-tts-lang="${e}"]`))return;let a=this._$(e,"provider"),n=this._$(e,"browser-block"),i=this._$(e,"edge-block"),p=this._$(e,"minimax-block"),o=this._$(e,"status"),r=this._$(e,"msg");a.value=s.provider;let l=(c,g)=>{let x=this._$(e,c),E=this._$(e,g),q=()=>{E.textContent=x.value};x.addEventListener("input",q),q()};l("browser-rate","browser-rate-val"),l("browser-pitch","browser-pitch-val"),l("browser-volume","browser-volume-val"),l("edge-rate","edge-rate-val"),l("edge-pitch","edge-pitch-val"),l("edge-volume","edge-volume-val"),l("minimax-speed","minimax-speed-val"),l("minimax-vol","minimax-vol-val"),l("minimax-pitch","minimax-pitch-val"),this._$(e,"edge-base").value=s.edgeBaseUrl,this._$(e,"minimax-base").value=s.minimaxBaseUrl,this._$(e,"minimax-model").value=s.minimaxModel;let d=this._$(e,"browser-voice"),f=()=>{let c=se();d.innerHTML='<option value="">(\u7CFB\u7EDF\u9ED8\u8BA4)</option>'+c.map(x=>`<option value="${O(x.name)}">${y(x.name)} (${y(x.lang||"?")})</option>`).join("");let g=A(e).voice;g&&(d.value=g)};f();let m=ae(f);this._ttsCleanups.push(m);let v=this._$(e,"edge-voice"),F=[],$=async()=>{v.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';try{let c=await re(this._$(e,"edge-base").value.trim()||T.DEFAULT_EDGE_BASE_URL);F=c.voices,v.innerHTML=F.map(x=>`<option value="${O(x.shortName)}">${y(x.shortName)} \u2014 ${y(x.friendlyName||x.gender||"")}</option>`).join("");let g=A(e).voice;g&&(v.value=g),u(`\u5DF2\u52A0\u8F7D ${c.count} \u4E2A edge \u8BED\u97F3`,"ok")}catch(c){v.innerHTML='<option value="">(\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u53F3\u4FA7\u5237\u65B0\u91CD\u8BD5)</option>',u("\u52A0\u8F7D edge \u8BED\u97F3\u5931\u8D25\uFF1A"+(c?.message||c),"err")}},I=this._$(e,"minimax-voice"),h=this._$(e,"minimax-voice-meta"),w=async()=>{I.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';let c=_.get().apiKey,g=this._$(e,"minimax-base").value.trim()||T.DEFAULT_MINIMAX_BASE_URL;try{let x=await le(g,c),E=x.voices&&x.voices.length?x.voices:U,q=!!(x.voices&&x.voices.length);I.innerHTML=E.map(B=>{let ee=B.voice_id||B.shortName,te=B.voice_name||B.friendlyName||"";return`<option value="${O(ee)}">${y(ee)}${te?" \u2014 "+y(te):""}${B.source&&B.source!=="system"?" ("+B.source+")":""}</option>`}).join("");let Q=A(e).minimaxVoice;Q&&(I.value=Q),h.textContent=q?`\u5171 ${E.length} \u4E2A`:`\u79BB\u7EBF\u515C\u5E95 (${E.length} \u4E2A\u5E38\u7528\u97F3\u8272;\u586B\u597D API Key \u540E\u70B9\u300C\u5237\u65B0\u97F3\u8272\u5217\u8868\u300D)`,u(q?`\u5DF2\u52A0\u8F7D ${E.length} \u4E2A MiniMax \u97F3\u8272`:"\u672A\u914D\u7F6E API Key,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95\u6E05\u5355","ok")}catch(x){I.innerHTML=U.map(q=>`<option value="${O(q.voice_id)}">${y(q.voice_id)} \u2014 ${y(q.voice_name)}</option>`).join("");let E=A(e).minimaxVoice;E&&(I.value=E),h.textContent=`\u52A0\u8F7D\u5931\u8D25,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95 (${U.length} \u4E2A)`,u("\u52A0\u8F7D MiniMax \u97F3\u8272\u5931\u8D25:"+(x?.message||x),"err")}};this[`_refreshMinimaxVoices_${e}`]=w;let L=c=>{let g=c==="edge"?"edge-tts-api":c==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",x=c==="minimax"||c==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";o.textContent=`\u5F53\u524D: ${g}`,o.className="ml-auto text-xs px-2 py-0.5 rounded-full "+x},u=(c,g="info")=>{r.textContent=c||"",r.className="text-xs "+(g==="ok"?"text-green-600 dark:text-green-400":g==="err"?"text-red-600 dark:text-red-400":"text-slate-500")};a.addEventListener("change",()=>{let c=a.value;n.classList.toggle("hidden",c!=="browser"),i.classList.toggle("hidden",c!=="edge"),p.classList.toggle("hidden",c!=="minimax"),L(c),c==="edge"&&F.length===0&&$(),c==="minimax"&&w()}),s.provider==="edge"&&$(),s.provider==="minimax"&&w();let Z=()=>{let c=a.value,g={provider:c,edgeBaseUrl:this._$(e,"edge-base").value.trim()||T.DEFAULT_EDGE_BASE_URL,minimaxBaseUrl:this._$(e,"minimax-base").value.trim()||T.DEFAULT_MINIMAX_BASE_URL,minimaxModel:this._$(e,"minimax-model").value||T.DEFAULT_MINIMAX_MODEL};return c==="browser"?{...g,voice:d.value.trim(),rate:Number(this._$(e,"browser-rate").value),pitch:Number(this._$(e,"browser-pitch").value),volume:Number(this._$(e,"browser-volume").value)}:c==="edge"?{...g,voice:v.value.trim(),rate:Number(this._$(e,"edge-rate").value),pitch:Number(this._$(e,"edge-pitch").value),volume:Number(this._$(e,"edge-volume").value)}:{...g,minimaxVoice:I.value.trim(),minimaxSpeed:Number(this._$(e,"minimax-speed").value),minimaxVol:Number(this._$(e,"minimax-vol").value),minimaxPitch:Number(this._$(e,"minimax-pitch").value)}};this._$(e,"save").addEventListener("click",()=>{let c=Z();z(e,c),u(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),L(c.provider)});let J=this._$(e,"minimax-refresh");J&&J.addEventListener("click",()=>w());let H=this._$(e,"test");H.addEventListener("click",async()=>{let c=Z();z(e,c),L(c.provider),H.disabled=!0;let g=H.textContent;H.textContent="\u64AD\u653E\u4E2D...",u("\u6B63\u5728\u5408\u6210\u5E76\u64AD\u653E...","info");try{let x=e==="en"?"Hello, this is a test read. You should hear the configured voice and speed.":"\u4F60\u597D,\u8FD9\u662F\u6D4B\u8BD5\u6717\u8BFB\u3002\u53EF\u4EE5\u542C\u5230\u5F53\u524D\u8BED\u97F3\u4E0E\u8BED\u901F\u3002";await T.speak({text:x,lang:e,...c},{onStart:()=>u("\u64AD\u653E\u4E2D...","info"),onEnd:()=>u(`\u64AD\u653E\u5B8C\u6BD5 (${new Date().toLocaleTimeString()})`,"ok"),onError:E=>u("\u64AD\u653E\u5931\u8D25\uFF1A"+(E?.message||E),"err")})}catch(x){u("\u64AD\u653E\u5931\u8D25\uFF1A"+(x?.message||x),"err")}finally{H.disabled=!1,H.textContent=g}}),this._$(e,"stop").addEventListener("click",()=>{T.stop(),u("\u5DF2\u505C\u6B62","info")})}_refreshMinimaxVoices(e){this[`_refreshMinimaxVoices_${e}`]?.()}_renderPlayerBarSection(){let e=P.get("player-bar-show-progress",!0)!==!1;return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>\u64AD\u653E\u63A7\u4EF6</strong>
        </div>
        <p class="text-xs text-slate-500 -mt-1">
          \u63A7\u5236\u5E95\u90E8 <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">app-player-bar</code> \u7684\u5916\u89C2\u4E0E\u884C\u4E3A\u3002
        </p>

        <label class="flex items-center gap-2 cursor-pointer select-none">
          <span class="flex-1 text-sm text-slate-600 dark:text-slate-300">
            \u663E\u793A\u6BB5\u843D\u8FDB\u5EA6\u6761
            <span class="block text-xs text-slate-500">
              \u5173\u95ED\u540E,\u5E95\u90E8\u53F3\u4FA7\u7684\u300C\u5F53\u524D\u6BB5\u843D\u8FDB\u5EA6\u300D\u4F1A\u9690\u85CF,\u4F46\u5176\u5B83\u63A7\u4EF6\u4ECD\u53EF\u7528\u3002
            </span>
          </span>
          <span class="relative inline-block h-6 w-11 shrink-0">
            <input id="pb-show-progress" type="checkbox"
                   class="peer absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer m-0"
                   aria-label="\u663E\u793A\u6BB5\u843D\u8FDB\u5EA6\u6761">
            <span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-full bg-slate-300 dark:bg-slate-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 transition-colors duration-300 ease-out shadow-inner"></span>
            <span aria-hidden="true" class="pointer-events-none absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow ring-1 ring-slate-900/5 transform peer-checked:translate-x-5 transition-transform duration-300 ease-out"></span>
          </span>
        </label>
      </section>
    `}_wirePlayerBar(){let e=this.querySelector("#pb-show-progress");e&&(e.checked=P.get("player-bar-show-progress",!0)!==!1,e.addEventListener("change",()=>{let s=e.checked===!0;P.set("player-bar-show-progress",s),S.emit("player-bar:config",{showProgress:s})}))}_renderEnvSection(){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <strong>\u73AF\u5883\u53D8\u91CF (\u6765\u81EA .env)</strong>
        <table class="w-full text-sm">
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">PORT</th><td class="py-1 font-mono">${C("PORT","?")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">API_BASE</th><td class="py-1 font-mono">${C("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_BASE_URL</th><td class="py-1 font-mono">${C("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_MODEL</th><td class="py-1 font-mono">${C("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_FAST_MODEL</th><td class="py-1 font-mono">${C("AI_FAST_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">DEBUG</th><td class="py-1 font-mono">${C("DEBUG","false")}</td></tr>
        </table>
        <p class="text-xs text-slate-500 mt-2">
          \u4FEE\u6539\u6839\u76EE\u5F55 <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">.env</code> \u540E,\u8FD0\u884C <code class="bg-slate-100 dark:bg-slate-700 px-1 rounded">./restart.sh</code> \u91CD\u65B0\u52A0\u8F7D\u3002
        </p>
      </section>
    `}_renderLocalDataSection(){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <strong>\u672C\u5730\u6570\u636E</strong>
        <div class="flex items-center gap-3">
          <button id="clear-storage" type="button" class="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition">\u6E05\u7A7A localStorage</button>
        </div>
      </section>
    `}_wireLocalData(){this.querySelector("#clear-storage").addEventListener("click",()=>{confirm("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?")&&P.clear()})}open(){this._built||(this._build(),this._built=!0),this._dlg.showModal()}close(){this._dlg.close()}disconnectedCallback(){for(let e of this._ttsCleanups||[])e?.()}};function y(M){return String(M??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function O(M){return String(M??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("app-settings",G);var b={folder:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',folderOpen:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14l1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y1="12"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',edit:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',move:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',chevronRight:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',chevronDown:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',filePlus:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',folderPlus:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',panelLeft:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>',panelRight:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="15" y1="4" x2="15" y2="20"/></svg>'},Y=class extends HTMLElement{constructor(){super(),this._collapsed=!1,this._allFolders=[],this._allFiles=[],this._expanded=new Set,this._search="",this._sortBy="updatedAt",this._sortDir="desc",this._selectedFileId=null,this._currentFolderId=null,this._onFileSelect=null,this._onToast=null,this._pendingNewFileFolderId=null,this._pendingNewFolderParentId=null,this._isMobile=!1,this._mobileOpen=!1,this._mql=null}set onFileSelect(e){this._onFileSelect=typeof e=="function"?e:null}set onToast(e){this._onToast=typeof e=="function"?e:null}setSelected(e,s={}){if(this._selectedFileId=e,e){let t=this._allFiles.find(a=>a.id===e);if(t){this._currentFolderId=t.folderId??null;let a=t.folderId,n=new Set;for(;a!=null&&!n.has(a);)n.add(a),this._expanded.add(a),a=this._allFolders.find(i=>i.id===a)?.parentId??null}}s.silent||this._render()}async refresh(){try{let[e,s]=await Promise.all([V.getAll(),D.getAll()]);this._allFolders=e||[],this._allFiles=s||[]}catch(e){console.error("[file-sidebar] refresh failed:",e),this._toast("\u52A0\u8F7D\u5931\u8D25:"+(e?.message||e),"err");return}this._render()}async saveCurrent({text:e,segments:s,autoAll:t,suggestedTitle:a,folderId:n=null}={}){let i=String(e||"").trim();if(!i)return this._toast("\u5F53\u524D\u6717\u8BFB\u9875\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u672C","err"),null;let p=(a||ce(i)).slice(0,80),o=Date.now(),r={id:N("fl"),folderId:n??null,title:p,text:e,segments:Array.isArray(s)?s:[],autoAll:t===!0,createdAt:o,updatedAt:o};try{return await D.put(r),this._selectedFileId=r.id,this._toast(`\u5DF2\u4FDD\u5B58\u300C${p}\u300D`,"ok"),await this.refresh(),this.setSelected(r.id,{silent:!0}),r}catch(l){return this._toast("\u4FDD\u5B58\u5931\u8D25:"+(l?.message||l),"err"),null}}toggleCollapse(){this._collapsed=!this._collapsed,this._render()}connectedCallback(){this._built||(this._built=!0,this.innerHTML=`
      <!-- \u79FB\u52A8\u7AEF\u80CC\u666F\u906E\u7F69(\u70B9\u5B83\u5173\u95ED\u62BD\u5C49) -->
      <div id="mobile-backdrop"
           class="hidden sm:!hidden fixed inset-0 z-30 bg-black/40
                  transition-opacity duration-200 ease-out opacity-0"
           data-mobile-backdrop></div>

      <aside id="sidebar-body"
             class="h-full shrink-0 flex
                    bg-slate-50 dark:bg-slate-900/50
                    border-r border-slate-200 dark:border-slate-700
                    w-72
                    fixed inset-y-0 left-0 z-40 max-w-[85vw]
                    -translate-x-full transition-transform duration-200 ease-out
                    border-r-0
                    sm:relative sm:inset-auto sm:translate-x-0 sm:z-auto sm:max-w-none
                    sm:transition-[width] sm:duration-200 sm:ease-out
                    sm:border-r">
        <!-- \u6298\u53E0\u6001:\u53EA\u5269\u7A84\u6761 + toggle(\u684C\u9762\u4E13\u5C5E) -->
        <div id="collapsed-bar"
             class="hidden h-full w-10 flex-col items-center py-2 gap-2 bg-slate-100 dark:bg-slate-800/60">
          <button id="expand-btn" type="button" title="\u5C55\u5F00\u6587\u4EF6\u6811"
                  class="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
            ${b.panelRight}
          </button>
        </div>

        <!-- \u5C55\u5F00\u6001:\u5DE5\u5177\u680F + \u6811 + dialogs -->
        <div id="expanded-panel" class="hidden h-full w-72 sm:w-80 flex-col min-h-0">
          <header class="flex items-center gap-1 px-2 sm:px-3 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <!-- \u79FB\u52A8\u7AEF\u62BD\u5C49\u5173\u95ED\u6309\u94AE -->
            <button id="drawer-close" type="button" title="\u5173\u95ED"
                    class="sm:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition"
                    aria-label="\u5173\u95ED\u6587\u4EF6\u5217\u8868">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <span class="px-1 py-1 text-sm font-medium text-slate-700 dark:text-slate-200 shrink-0 select-none">\u6587\u4EF6</span>
            <div class="flex-1"></div>
            <button id="new-file" type="button" title="\u65B0\u5EFA\u6587\u4EF6"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition text-xs">
              ${b.filePlus}<span class="hidden sm:inline">\u6587\u4EF6</span>
            </button>
            <button id="new-folder" type="button" title="\u65B0\u5EFA\u6587\u4EF6\u5939"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition text-xs">
              ${b.folderPlus}<span class="hidden sm:inline">\u6587\u4EF6\u5939</span>
            </button>
            <!-- \u684C\u9762\u7AEF\u6298\u53E0\u6309\u94AE(\u79FB\u52A8\u7AEF\u9690\u85CF) -->
            <button id="collapse-btn" type="button" title="\u6298\u53E0\u4FA7\u680F"
                    class="hidden sm:block p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
              ${b.panelLeft}
            </button>
          </header>

          <div class="flex items-center gap-2 px-2 sm:px-3 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <label class="flex-1 inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-300 dark:border-slate-600 focus-within:border-blue-500 transition min-w-0">
              ${b.search}
              <input id="search-input" type="search" placeholder="\u641C\u7D22..." class="flex-1 min-w-0 bg-transparent focus:outline-none text-sm">
            </label>
            <select id="sort-select" class="px-1.5 py-1 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs focus:outline-none focus:border-blue-500 shrink-0">
              <option value="updatedAt:desc">\u6700\u8FD1\u66F4\u65B0</option>
              <option value="createdAt:desc">\u6700\u65B0\u521B\u5EFA</option>
              <option value="title:asc">\u6807\u9898 A\u2192Z</option>
              <option value="title:desc">\u6807\u9898 Z\u2192A</option>
              <option value="updatedAt:asc">\u6700\u65E9\u66F4\u65B0</option>
            </select>
          </div>

          <div id="tree-scroller" class="flex-1 overflow-y-auto overflow-x-hidden p-2 min-h-0"></div>
        </div>

        <!-- dialogs(\u53EA\u4E00\u4EFD,\u5185\u5D4C\u5728\u7EC4\u4EF6\u91CC) -->
        <dialog id="new-file-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[420px] w-[min(420px,calc(100vw-32px))] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong class="text-sm">\u65B0\u5EFA\u6587\u4EF6</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="p-4 flex flex-col gap-3">
              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">\u6587\u4EF6\u6807\u9898</span>
                <input id="new-file-title" type="text" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm" placeholder="\u672A\u547D\u540D\u6587\u4EF6">
              </label>
              <p id="new-file-hint" class="hidden text-xs text-slate-500 dark:text-slate-400"></p>
              <p id="new-file-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
              <div class="flex items-center gap-2 justify-end pt-1">
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u521B\u5EFA</button>
              </div>
            </div>
          </form>
        </dialog>

        <dialog id="new-folder-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[420px] w-[min(420px,calc(100vw-32px))] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong class="text-sm">\u65B0\u5EFA\u6587\u4EF6\u5939</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="p-4 flex flex-col gap-3">
              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">\u6587\u4EF6\u5939\u540D</span>
                <input id="new-folder-name" type="text" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm" placeholder="\u672A\u547D\u540D\u6587\u4EF6\u5939">
              </label>
              <p id="new-folder-hint" class="hidden text-xs text-slate-500 dark:text-slate-400"></p>
              <p id="new-folder-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
              <div class="flex items-center gap-2 justify-end pt-1">
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u521B\u5EFA</button>
              </div>
            </div>
          </form>
        </dialog>

        <dialog id="rename-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[420px] w-[min(420px,calc(100vw-32px))] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong id="rename-title" class="text-sm">\u91CD\u547D\u540D</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="p-4 flex flex-col gap-3">
              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">\u65B0\u540D\u5B57</span>
                <input id="rename-input" type="text" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm">
              </label>
              <p id="rename-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
              <div class="flex items-center gap-2 justify-end pt-1">
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u4FDD\u5B58</button>
              </div>
            </div>
          </form>
        </dialog>

        <dialog id="move-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[480px] w-[min(480px,calc(100vw-32px))] max-h-[calc(100vh-32px)] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong class="text-sm">\u79FB\u52A8\u5230...</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="p-4 flex flex-col gap-3 min-h-0">
              <div id="move-tree" class="border border-slate-200 dark:border-slate-700 rounded-md overflow-y-auto p-2 max-h-72 bg-slate-50 dark:bg-slate-900/50 text-sm"></div>
              <div class="flex items-center gap-2 justify-end pt-1">
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u79FB\u52A8\u5230\u8FD9\u91CC</button>
              </div>
            </div>
          </form>
        </dialog>

        <div id="ctx-menu" class="hidden fixed z-50 min-w-[160px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 text-sm"></div>
      </aside>
    `,this._body=this.querySelector("#sidebar-body"),this._collapsedBar=this.querySelector("#collapsed-bar"),this._expandedPanel=this.querySelector("#expanded-panel"),this._mobileBackdrop=this.querySelector("#mobile-backdrop"),this._wireToolbar(),this._wireDialogs(),this._wireCtxMenu(),this._wireMobileDrawer(),this._unsubRemote=ie(e=>{e.store!=="folders"&&e.store!=="files"||(e.store==="files"&&e.op==="del"&&e.key===this._selectedFileId&&(this._selectedFileId=null),this.refresh())}),this._applyLayoutMode(),this.refresh())}disconnectedCallback(){this._unsubRemote?.(),this._mql?.removeEventListener?.("change",this._onMqlChange),document.removeEventListener("click",this._onDocClickHideMenu),document.removeEventListener("keydown",this._onEscHideMenu),document.removeEventListener("keydown",this._onEscHideDrawer)}_render(){this._body&&(this._isMobile?(this._body.classList.remove("w-10","sm:w-80"),this._collapsedBar.classList.add("hidden"),this._collapsedBar.classList.remove("flex"),this._mobileOpen?(this._expandedPanel.classList.remove("hidden"),this._expandedPanel.classList.add("flex")):(this._expandedPanel.classList.add("hidden"),this._expandedPanel.classList.remove("flex"))):this._collapsed?(this._body.classList.remove("w-72","sm:w-80"),this._body.classList.add("w-10"),this._collapsedBar.classList.remove("hidden"),this._collapsedBar.classList.add("flex"),this._expandedPanel.classList.add("hidden"),this._expandedPanel.classList.remove("flex")):(this._body.classList.add("w-72","sm:w-80"),this._body.classList.remove("w-10"),this._collapsedBar.classList.add("hidden"),this._collapsedBar.classList.remove("flex"),this._expandedPanel.classList.remove("hidden"),this._expandedPanel.classList.add("flex")),this._renderTree())}_renderTree(){if(!this._expandedPanel)return;let e=this.querySelector("#tree-scroller");if(!e)return;let s=this._sortRows(this._allFolders,r=>r.name,"title"),t=this._sortRows(this._allFiles,r=>r.title,"title"),a=(this._search||"").toLowerCase(),n=a?new Set(this._allFiles.filter(r=>(r.title||"").toLowerCase().includes(a)||(r.text||"").toLowerCase().includes(a)).map(r=>r.id)):null;if(a){let r=t.filter(l=>n.has(l.id));e.innerHTML=`
        <div class="text-xs text-slate-500 dark:text-slate-400 px-2 py-1.5">
          ${n.size} \u4E2A\u5339\u914D
        </div>
        ${r.length?r.map(l=>this._renderSearchResultRow(l)).join(""):'<div class="text-xs text-slate-400 dark:text-slate-500 px-2 py-3 text-center">\u65E0\u5339\u914D</div>'}
      `,e.querySelectorAll("[data-search-file-id]").forEach(l=>{l.addEventListener("click",()=>{let d=l.dataset.searchFileId;this._selectedFileId=d;let f=this._allFiles.find(m=>m.id===d);if(f){this._currentFolderId=f.folderId??null;let m=f.folderId,v=new Set;for(;m!=null&&!v.has(m);)v.add(m),this._expanded.add(m),m=this._allFolders.find(F=>F.id===m)?.parentId??null}this._fireSelect(),this._render()})});return}let i=s.filter(r=>r.parentId==null),p=(r,l)=>{let d=this._expanded.has(r.id),f=s.filter(v=>v.parentId===r.id),m=t.filter(v=>v.folderId===r.id);return`
        <div>
          <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                      hover:bg-white dark:hover:bg-slate-800"
               data-folder-id="${k(r.id)}" data-depth="${l}">
            <button type="button" data-toggle="${k(r.id)}" class="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400">
              ${f.length+m.length>0?d?b.chevronDown:b.chevronRight:'<span class="w-4"></span>'}
            </button>
            <span class="shrink-0 text-slate-500 dark:text-slate-400">${d?b.folderOpen:b.folder}</span>
            <span class="flex-1 truncate" title="${k(r.name)}">${k(r.name)}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500">${f.length+m.length}</span>
            <button type="button" data-folder-menu="${k(r.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
          </div>
          ${d?`<div class="ml-4">
            ${f.map(v=>p(v,l+1)).join("")}
            ${m.map(v=>this._renderFileRow(v,l+1)).join("")}
          </div>`:""}
        </div>
      `},o=t.filter(r=>r.folderId==null);e.innerHTML=`
      <div class="ml-4">
        ${i.map(r=>p(r,1)).join("")}
        ${o.map(r=>this._renderFileRow(r,1)).join("")}
        ${i.length+o.length===0?'<div class="text-xs text-slate-400 dark:text-slate-500 px-3 py-3 text-center">\u8FD8\u6CA1\u6709\u5185\u5BB9</div>':""}
      </div>
    `,e.querySelectorAll("[data-toggle]").forEach(r=>{r.addEventListener("click",l=>{l.stopPropagation();let d=r.dataset.toggle;this._expanded.has(d)?this._expanded.delete(d):this._expanded.add(d),this._renderTree()})}),e.querySelectorAll("[data-folder-id]").forEach(r=>{r.addEventListener("click",l=>{if(l.target.closest("[data-toggle]")||l.target.closest("[data-folder-menu]"))return;let d=r.dataset.folderId;this._expanded.has(d)?this._expanded.delete(d):this._expanded.add(d),this._renderTree()})}),e.querySelectorAll("[data-folder-menu]").forEach(r=>{r.addEventListener("click",l=>{l.stopPropagation(),this._showFolderMenu(l.clientX,l.clientY,r.dataset.folderMenu)})}),e.querySelectorAll("[data-folder-id]").forEach(r=>{r.addEventListener("contextmenu",l=>{l.target.closest("[data-toggle]")||l.target.closest("[data-folder-menu]")||(l.preventDefault(),this._showFolderMenu(l.clientX,l.clientY,r.dataset.folderId))})}),e.querySelectorAll("[data-file-id]").forEach(r=>{r.addEventListener("click",()=>{this._selectedFileId=r.dataset.fileId,this._fireSelect(),this._renderTree()})}),e.querySelectorAll("[data-file-menu]").forEach(r=>{r.addEventListener("click",l=>{l.stopPropagation();let d=r.dataset.fileMenu;this._showCtxMenu(l.clientX,l.clientY,[{label:"\u91CD\u547D\u540D",icon:b.edit,onClick:()=>this._openRename("file",d)},{label:"\u590D\u5236\u4E00\u4EFD",icon:b.copy,onClick:()=>this._duplicateFile(d)},{label:"\u79FB\u52A8\u5230...",icon:b.move,onClick:()=>this._openMove("file",d)},{label:"\u5220\u9664",icon:b.trash,danger:!0,onClick:()=>this._deleteFile(d)}])})})}_renderFileRow(e,s){return`
      <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                  ${this._selectedFileId===e.id?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200":"hover:bg-white dark:hover:bg-slate-800"}"
           data-file-id="${k(e.id)}" data-depth="${s}">
        <span class="shrink-0 w-5 h-5"></span>
        <span class="shrink-0 text-slate-500 dark:text-slate-400">${b.file}</span>
        <span class="flex-1 truncate" title="${k(e.title)}">${k(e.title)}</span>
        <button type="button" data-file-menu="${k(e.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
      </div>
    `}_renderSearchResultRow(e){let s=(e.text||"").replace(/\s+/g," ").slice(0,80);return`
      <button type="button" data-search-file-id="${k(e.id)}"
              class="w-full text-left px-2 py-2 rounded hover:bg-white dark:hover:bg-slate-800 transition flex flex-col gap-0.5">
        <div class="flex items-center gap-1.5 text-sm">
          <span class="shrink-0 text-slate-500 dark:text-slate-400">${b.file}</span>
          <span class="flex-1 truncate font-medium">${k(e.title)}</span>
        </div>
        ${s?`<div class="text-xs text-slate-500 dark:text-slate-400 truncate ml-6">${k(s)}\u2026</div>`:""}
      </button>
    `}_sortRows(e,s){let t=this._sortBy,a=this._sortDir==="asc"?1:-1,n=[...e];return t==="title"?n.sort((i,p)=>String(s(i)||"").localeCompare(String(s(p)||""),"zh-Hans-CN")*a):n.sort((i,p)=>((i[t]||0)-(p[t]||0))*a),n}_fireSelect(){let e=this._allFiles.find(s=>s.id===this._selectedFileId)||null;try{this._onFileSelect?.(e)}catch(s){console.error("[file-sidebar] onFileSelect threw:",s)}}_wireToolbar(){this.querySelector("#new-file").addEventListener("click",()=>this._openNewFile()),this.querySelector("#new-folder").addEventListener("click",()=>this._openNewFolder()),this.querySelector("#search-input").addEventListener("input",e=>{this._search=e.target.value.trim(),this._renderTree()}),this.querySelector("#sort-select").addEventListener("change",e=>{let[s,t]=e.target.value.split(":");this._sortBy=s,this._sortDir=t,this._renderTree()}),this.querySelector("#collapse-btn").addEventListener("click",()=>this.toggleCollapse()),this.querySelector("#expand-btn").addEventListener("click",()=>this.toggleCollapse())}_wireDialogs(){let e=this.querySelector("#new-file-dlg"),s=this.querySelector("#new-file-title"),t=this.querySelector("#new-file-error"),a=this.querySelector("#new-file-hint"),n=h=>{h?(t.textContent=h,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent="")};e.querySelector('[data-action="close"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="cancel"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="save"]').addEventListener("click",async()=>{let h=s.value.trim()||"\u672A\u547D\u540D\u6587\u4EF6";try{let w=Date.now(),L={id:N("fl"),folderId:this._pendingNewFileFolderId??null,title:h,text:"",segments:[],autoAll:!1,createdAt:w,updatedAt:w};await D.put(L),s.value="",n(""),L.folderId&&this._expanded.add(L.folderId),e.close(),await this.refresh(),this.setSelected(L.id,{silent:!0}),this._fireSelect(),this._toast(`\u5DF2\u65B0\u5EFA\u300C${h}\u300D`,"ok")}catch(w){n("\u521B\u5EFA\u5931\u8D25:"+(w?.message||w))}}),s.addEventListener("input",()=>n("")),s.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),e.querySelector('[data-action="save"]').click())}),this._newFileDlg=e,this._newFileHint=a;let i=this.querySelector("#new-folder-dlg"),p=this.querySelector("#new-folder-name"),o=this.querySelector("#new-folder-error"),r=this.querySelector("#new-folder-hint"),l=h=>{h?(o.textContent=h,o.classList.remove("hidden")):(o.classList.add("hidden"),o.textContent="")};i.querySelector('[data-action="close"]').addEventListener("click",()=>i.close()),i.querySelector('[data-action="cancel"]').addEventListener("click",()=>i.close()),i.querySelector('[data-action="save"]').addEventListener("click",async()=>{let h=p.value.trim();if(!h){l("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}try{await V.put({id:N("f"),parentId:this._pendingNewFolderParentId??null,name:h,createdAt:Date.now(),updatedAt:Date.now()}),p.value="",l(""),this._pendingNewFolderParentId&&this._expanded.add(this._pendingNewFolderParentId),i.close(),await this.refresh(),this._toast(`\u5DF2\u521B\u5EFA\u300C${h}\u300D`,"ok")}catch(w){l("\u521B\u5EFA\u5931\u8D25:"+(w?.message||w))}}),p.addEventListener("input",()=>l("")),p.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),i.querySelector('[data-action="save"]').click())}),this._newFolderDlg=i,this._newFolderHint=r,this._renameTarget=null;let d=this.querySelector("#rename-dlg"),f=this.querySelector("#rename-input"),m=this.querySelector("#rename-error"),v=this.querySelector("#rename-title"),F=h=>{h?(m.textContent=h,m.classList.remove("hidden")):(m.classList.add("hidden"),m.textContent="")};d.querySelector('[data-action="close"]').addEventListener("click",()=>d.close()),d.querySelector('[data-action="cancel"]').addEventListener("click",()=>d.close()),d.querySelector('[data-action="save"]').addEventListener("click",async()=>{let h=f.value.trim();if(!h){F("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}if(!this._renameTarget){d.close();return}let{kind:w,id:L}=this._renameTarget;try{if(w==="file"){let u=await D.get(L);if(!u)throw new Error("\u6587\u4EF6\u4E0D\u5B58\u5728");u.title=h,u.updatedAt=Date.now(),await D.put(u)}else{let u=await V.get(L);if(!u)throw new Error("\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");u.name=h,u.updatedAt=Date.now(),await V.put(u)}F(""),d.close(),await this.refresh(),this._toast("\u5DF2\u91CD\u547D\u540D","ok")}catch(u){F("\u91CD\u547D\u540D\u5931\u8D25:"+(u?.message||u))}}),f.addEventListener("input",()=>F("")),f.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),d.querySelector('[data-action="save"]').click())}),this._renameDlg=d,this._renameInput=f,this._renameTitle=v,this._moveTarget=null,this._moveSelectedFolderId=null;let $=this.querySelector("#move-dlg"),I=this.querySelector("#move-tree");$.querySelector('[data-action="close"]').addEventListener("click",()=>$.close()),$.querySelector('[data-action="cancel"]').addEventListener("click",()=>$.close()),$.querySelector('[data-action="save"]').addEventListener("click",async()=>{if(!this._moveTarget){$.close();return}let{kind:h,id:w}=this._moveTarget,L=this._moveSelectedFolderId??null;try{h==="file"?await ne(w,L):await de(w,L),$.close(),await this.refresh(),this._toast("\u5DF2\u79FB\u52A8","ok")}catch(u){this._toast("\u79FB\u52A8\u5931\u8D25:"+(u?.message||u),"err")}}),this._moveDlg=$,this._moveTree=I}_openNewFile(e=null){if(this._pendingNewFileFolderId=e,this.querySelector("#new-file-title").value="",this.querySelector("#new-file-error").classList.add("hidden"),e){let s=this._allFolders.find(a=>a.id===e),t=this._folderPathLabel(e);this._newFileHint.textContent=`\u5C06\u4FDD\u5B58\u5230:${t}${s?` (${s.name})`:""}`,this._newFileHint.classList.remove("hidden")}else this._newFileHint.classList.add("hidden");this._newFileDlg.showModal(),setTimeout(()=>this.querySelector("#new-file-title").focus(),0)}_openNewFolder(e=null){if(this._pendingNewFolderParentId=e,this.querySelector("#new-folder-name").value="",this.querySelector("#new-folder-error").classList.add("hidden"),e){let s=this._folderPathLabel(e);this._newFolderHint.textContent=`\u5C06\u521B\u5EFA\u5230:${s}`,this._newFolderHint.classList.remove("hidden")}else this._newFolderHint.classList.add("hidden");this._newFolderDlg.showModal(),setTimeout(()=>this.querySelector("#new-folder-name").focus(),0)}_folderPathLabel(e){let s=[],t=e,a=new Set;for(;t!=null&&!a.has(t);){a.add(t);let n=this._allFolders.find(i=>i.id===t);if(!n)break;s.unshift(n.name),t=n.parentId??null}return["\u6839\u76EE\u5F55",...s].join(" / ")}_openRename(e,s){this._renameTarget={kind:e,id:s};let t=e==="file"?this._allFiles.find(a=>a.id===s)?.title:this._allFolders.find(a=>a.id===s)?.name;this._renameTitle.textContent=e==="file"?"\u91CD\u547D\u540D\u6587\u4EF6":"\u91CD\u547D\u540D\u6587\u4EF6\u5939",this._renameInput.value=t||"",this.querySelector("#rename-error").classList.add("hidden"),this._renameDlg.showModal(),setTimeout(()=>{this._renameInput.focus(),this._renameInput.select()},0)}_openMove(e,s){this._moveTarget={kind:e,id:s};let t=e==="file"?this._allFiles.find(a=>a.id===s)?.folderId??null:this._allFolders.find(a=>a.id===s)?.parentId??null;this._moveSelectedFolderId=t,this._renderMoveTree(),this._moveDlg.showModal()}_renderMoveTree(){let e=this._moveTree,s=this._sortRows(this._allFolders,i=>i.name),t=(i,p)=>{let o=s.filter(l=>l.parentId===i.id);return`
        <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${this._moveSelectedFolderId===i.id?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-white dark:hover:bg-slate-800"}"
             data-move-folder-id="${k(i.id)}" data-depth="${p}">
          <span class="shrink-0 w-4"></span>
          <span class="shrink-0 text-slate-500">${b.folder}</span>
          <span class="flex-1 truncate">${k(i.name)}</span>
        </div>
        ${o.map(l=>t(l,p+1)).join("")}
      `},a=s.filter(i=>i.parentId==null),n=this._moveSelectedFolderId==null;e.innerHTML=`
      <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${n?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-white dark:hover:bg-slate-800"}"
           data-move-folder-id="" data-depth="0">
        <span class="shrink-0 w-4"></span>
        <span class="shrink-0 text-slate-500">${b.folder}</span>
        <span class="flex-1">\u6839\u76EE\u5F55</span>
      </div>
      ${a.map(i=>t(i,1)).join("")}
    `,e.querySelectorAll("[data-move-folder-id]").forEach(i=>{i.addEventListener("click",()=>{this._moveSelectedFolderId=i.dataset.moveFolderId||null,this._renderMoveTree()})})}async _deleteFile(e){let s=this._allFiles.find(t=>t.id===e);if(s&&confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u300C${s.title}\u300D?`))try{await D.del(e),this._selectedFileId===e&&(this._selectedFileId=null,this._fireSelect()),this._toast(`\u5DF2\u5220\u9664\u300C${s.title}\u300D`,"ok"),await this.refresh()}catch(t){this._toast("\u5220\u9664\u5931\u8D25:"+(t?.message||t),"err")}}async _deleteFolder(e){let s=this._allFolders.find(o=>o.id===e);if(!s)return;let t=this._allFolders,a=new Set([e]),n=!0;for(;n;){n=!1;for(let o of t)o.parentId!=null&&a.has(o.parentId)&&!a.has(o.id)&&(a.add(o.id),n=!0)}let i=this._allFiles.filter(o=>o.folderId!=null&&a.has(o.folderId)).length;if(confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u5939\u300C${s.name}\u300D?
\u5C06\u540C\u65F6\u5220\u9664 ${a.size-1} \u4E2A\u5B50\u6587\u4EF6\u5939 + ${i} \u4E2A\u6587\u4EF6,\u4E14\u4E0D\u53EF\u64A4\u9500\u3002`))try{let o=await oe(e);this._selectedFileId&&o.files.includes(this._selectedFileId)&&(this._selectedFileId=null,this._fireSelect()),this._toast(`\u5DF2\u5220\u9664 (${o.folders.length} \u76EE\u5F55, ${o.files.length} \u6587\u4EF6)`,"ok"),await this.refresh()}catch(o){this._toast("\u5220\u9664\u5931\u8D25:"+(o?.message||o),"err")}}async _duplicateFile(e){let s=this._allFiles.find(n=>n.id===e);if(!s)return;let t=Date.now(),a={...s,id:N("fl"),title:`${s.title} (\u526F\u672C)`,createdAt:t,updatedAt:t};try{await D.put(a),this._toast("\u5DF2\u590D\u5236","ok"),await this.refresh()}catch(n){this._toast("\u590D\u5236\u5931\u8D25:"+(n?.message||n),"err")}}_applyLayoutMode(){this._isMobile?(this._mobileOpen=!1,this._hideDrawer({silent:!0})):(this._mobileOpen=!1,this._render())}_wireMobileDrawer(){this._mql=window.matchMedia("(max-width: 639px)"),this._isMobile=this._mql.matches,this._onMqlChange=e=>{this._isMobile=e.matches,this._applyLayoutMode()},this._mql.addEventListener?this._mql.addEventListener("change",this._onMqlChange):this._mql.addListener&&this._mql.addListener(this._onMqlChange),this.querySelector("#drawer-close")?.addEventListener("click",()=>this.closeMobileDrawer()),this._mobileBackdrop?.addEventListener("click",()=>this.closeMobileDrawer()),this._onEscHideDrawer=e=>{e.key==="Escape"&&this._mobileOpen&&this.closeMobileDrawer()}}openMobileDrawer(){!this._isMobile||this._mobileOpen||this._showDrawer()}closeMobileDrawer(){!this._isMobile||!this._mobileOpen||this._hideDrawer()}toggleMobileDrawer(){this._isMobile&&(this._mobileOpen?this._hideDrawer():this._showDrawer())}isMobileDrawerOpen(){return this._isMobile&&this._mobileOpen}_showDrawer(){this._mobileOpen=!0,this._body.classList.remove("-translate-x-full"),this._body.classList.add("translate-x-0"),this._body.setAttribute("aria-modal","true"),this._body.setAttribute("role","dialog"),this._mobileBackdrop&&(this._mobileBackdrop.classList.remove("hidden"),requestAnimationFrame(()=>{this._mobileBackdrop.classList.remove("opacity-0"),this._mobileBackdrop.classList.add("opacity-100")})),document.body.classList.add("overflow-hidden"),document.addEventListener("keydown",this._onEscHideDrawer),this._render()}_hideDrawer({silent:e=!1}={}){this._mobileOpen=!1,this._body.classList.remove("translate-x-0"),this._body.classList.add("-translate-x-full"),this._body.removeAttribute("aria-modal"),this._body.removeAttribute("role"),this._mobileBackdrop&&(this._mobileBackdrop.classList.remove("opacity-100"),this._mobileBackdrop.classList.add("opacity-0"),setTimeout(()=>{this._mobileOpen||this._mobileBackdrop.classList.add("hidden")},220)),document.body.classList.remove("overflow-hidden"),document.removeEventListener("keydown",this._onEscHideDrawer),this._render()}_wireCtxMenu(){this._ctxMenu=this.querySelector("#ctx-menu"),this._onDocClickHideMenu=()=>this._hideCtxMenu(),this._onEscHideMenu=e=>{e.key==="Escape"&&this._hideCtxMenu()},document.addEventListener("click",this._onDocClickHideMenu),document.addEventListener("keydown",this._onEscHideMenu)}_showFolderMenu(e,s,t){this._showCtxMenu(e,s,[{label:"\u65B0\u5EFA\u6587\u4EF6",icon:b.filePlus,onClick:()=>this._openNewFile(t)},{label:"\u65B0\u5EFA\u6587\u4EF6\u5939",icon:b.folderPlus,onClick:()=>this._openNewFolder(t)},{label:"\u91CD\u547D\u540D",icon:b.edit,onClick:()=>this._openRename("folder",t)},{label:"\u79FB\u52A8\u5230...",icon:b.move,onClick:()=>this._openMove("folder",t)},{label:"\u5220\u9664",icon:b.trash,danger:!0,onClick:()=>this._deleteFolder(t)}])}_showCtxMenu(e,s,t){let a=this._ctxMenu;a.innerHTML=t.map((d,f)=>`
      <button type="button" data-ctx-i="${f}"
              class="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${d.danger?"text-red-600 dark:text-red-400":""}">
        <span class="shrink-0">${d.icon||""}</span><span>${k(d.label)}</span>
      </button>
    `).join(""),a.classList.remove("hidden");let n=180,i=t.length*32+8,p=window.innerWidth,o=window.innerHeight,r=Math.min(e,p-n-4),l=Math.min(s,o-i-4);a.style.left=`${r}px`,a.style.top=`${l}px`,a.querySelectorAll("[data-ctx-i]").forEach(d=>{d.addEventListener("click",f=>{f.stopPropagation();let m=Number(d.dataset.ctxI);a.classList.add("hidden"),t[m].onClick()})})}_hideCtxMenu(){this._ctxMenu?.classList.add("hidden")}_toast(e,s="info"){if(this._onToast)try{this._onToast(e,s);return}catch(a){console.error("[file-sidebar] onToast threw:",a)}let t=document.getElementById("__filesb-toast");t||(t=document.createElement("div"),t.id="__filesb-toast",t.className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300",document.body.appendChild(t)),t.textContent=e,t.className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300 "+(s==="ok"?"bg-green-600 text-white":s==="err"?"bg-red-600 text-white":"bg-slate-800 text-white"),t.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{try{t.remove()}catch{}},300)},1800)}};function k(M){return String(M??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("file-sidebar",Y);R.addRoute("/",()=>import("./speak.js"));R.addRoute("/speak",()=>import("./speak.js"));R.addRoute("/404",()=>import("./speak.js"));console.info("[app] starting, port=",C("PORT","?"),"API_BASE=",C("API_BASE","(none)"));R.start();window.__app={router:R};
