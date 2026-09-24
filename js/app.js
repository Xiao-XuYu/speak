import{a as R,b as D,c as X,d as S,f as ee,g as j,h as le,i as ue,j as he,k as xe,l as be,m as P,n as me,o as Z,p as W,q as V,r as ge,s as fe,t as ve,u as te}from"./chunk-LUY3X4E5.js";var ie=class{constructor(){this.routes=new Map,this.guards=[],this.current=null,this._pageInstance=null}addRoute(e,s){this.routes.set(e,s)}beforeEach(e){this.guards.push(e)}async navigate(e){if(e!==this.current){if(location.hash!=="#"+e){location.hash=e;return}await this._render(e)}}async start(){window.addEventListener("hashchange",()=>this._handleHash()),await this._handleHash()}async _handleHash(){let e=location.hash.replace(/^#/,"")||"/";await this._render(e)}async _render(e){let s=this.routes.get(e)||this.routes.get("/404");if(!s){console.warn(`[router] no route for "${e}"`);return}for(let l of this.guards)if(!await l(e))return;typeof this._pageInstance?.unmount=="function"&&this._pageInstance.unmount();let t=await s();this._pageInstance=t.default||t,R.emit("route:change",{path:e,page:this._pageInstance}),this.current=e}},O=new ie;var re=class extends HTMLElement{connectedCallback(){this.innerHTML=`
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
        <section id="main" class="flex-1 overflow-hidden pb-16"></section>
        <app-player-bar></app-player-bar>
      </div>
      <app-settings id="app-settings"></app-settings>
    `,this.mainEl=this.querySelector("#main"),this.settingsEl=this.querySelector("#app-settings"),this.querySelector("#settings-btn").addEventListener("click",()=>{this.settingsEl?.open?.()}),R.on("route:change",({path:e,page:s})=>{this.mainEl.innerHTML="",typeof s.mount=="function"&&s.mount(this.mainEl)}),this.querySelector("#env-info").textContent=`PORT=${window.__ENV__?.PORT||"?"} \xB7 API=${window.__ENV__?.API_BASE||"(none)"}`}};customElements.define("app-shell",re);var Q={play:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12l8.5 6V6z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>'},oe=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="fixed bottom-0 inset-x-0 z-30 pointer-events-none">
        <div class="pointer-events-auto
                    bg-white/95 dark:bg-slate-800/95 backdrop-blur
                    border-t border-slate-200 dark:border-slate-700
                    px-3 sm:px-4 py-2.5
                    flex items-center gap-2 sm:gap-3">
          <button id="pb-prev" type="button" aria-label="\u4E0A\u4E00\u6BB5"
                  class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            ${Q.prev}
          </button>
          <button id="pb-play" type="button" aria-label="\u64AD\u653E/\u6682\u505C"
                  class="shrink-0 inline-flex items-center justify-center px-3 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <span id="pb-play-icon" class="inline-flex items-center justify-center">${Q.play}</span>
          </button>
          <button id="pb-next" type="button" aria-label="\u4E0B\u4E00\u6BB5"
                  class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            ${Q.next}
          </button>
          <div class="flex-1 min-w-0 px-1 sm:px-2">
            <div id="pb-status" class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">\u8FD8\u6CA1\u6709\u5206\u6BB5</div>
          </div>
        </div>
      </div>
    `,this._prevBtn=this.querySelector("#pb-prev"),this._playBtn=this.querySelector("#pb-play"),this._nextBtn=this.querySelector("#pb-next"),this._playIconEl=this.querySelector("#pb-play-icon"),this._statusEl=this.querySelector("#pb-status"),this._state={total:0,index:-1,playing:!1,paused:!1},this._prevBtn.addEventListener("click",()=>R.emit("player:cmd",{action:"prev"})),this._nextBtn.addEventListener("click",()=>R.emit("player:cmd",{action:"next"})),this._playBtn.addEventListener("click",()=>{let e=this._state.paused?"resume":this._state.playing?"pause":"play";R.emit("player:cmd",{action:e})}),R.on("playback:state",e=>this._render(e))}_render(e){this._state={total:Number(e?.total)||0,index:Number.isInteger(e?.index)?e.index:-1,playing:!!e?.playing,paused:!!e?.paused};let{total:s,index:t,playing:l,paused:o}=this._state,r=s>0;this._prevBtn.disabled=!r,this._nextBtn.disabled=!r,this._playBtn.disabled=!r,this._playIconEl.innerHTML=l?Q.pause:Q.play,r?o&&t>=0?this._statusEl.textContent=`\u5DF2\u6682\u505C \xB7 \u7B2C ${t+1} / ${s} \u6BB5`:l&&t>=0?this._statusEl.textContent=`\u6B63\u5728\u6717\u8BFB \xB7 \u7B2C ${t+1} / ${s} \u6BB5`:this._statusEl.textContent=`\u5171 ${s} \u6BB5 \xB7 \u70B9 \u25B6 \u5F00\u59CB\u6717\u8BFB`:this._statusEl.textContent="\u7C98\u8D34\u6587\u672C\u540E\u70B9 \u2728 AI \u62C6\u5206\u5F00\u59CB\u6717\u8BFB"}};customElements.define("app-player-bar",oe);var ne=class extends HTMLElement{connectedCallback(){this._built||(this._build(),this._built=!0)}_build(){let e=S.get(),s=S.isConfigured(),t=j("zh"),l=j("en");this.innerHTML=`
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
            ${this._renderTtsSection("en","English TTS",l)}

            ${this._renderEnvSection()}
            ${this._renderLocalDataSection()}

          </div>
        </form>
      </dialog>
    `,this._dlg=this.querySelector("#dlg"),this.querySelector('[data-action="close"]').addEventListener("click",()=>this.close()),this._wireAi(),this._ttsCleanups=[],this._wireTts("zh"),this._wireTts("en"),this._wireLocalData()}_renderAiSection(e,s){return`
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
                 placeholder="${M(S.DEFAULTS.baseUrl)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
          <input id="ai-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${M(S.DEFAULTS.model)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">
            \u5FEB\u901F\u6A21\u578B (Fast Model)
            <span class="text-xs text-slate-400">\u2014 \u300C\u4F7F\u7528\u5FEB\u901F\u6A21\u578B\u300D\u5F00\u5173 ON \u65F6\u4F7F\u7528</span>
          </span>
          <input id="ai-fast-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${M(S.DEFAULTS.fastModel)}" />
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
    `}_wireAi(){let e=S.get();this.querySelector("#ai-key").value=e.apiKey,this.querySelector("#ai-base").value=e.baseUrl,this.querySelector("#ai-model").value=e.model,this.querySelector("#ai-fast-model").value=e.fastModel,this.querySelector("#ai-use-fast-model").checked=e.fastModelEnabled===!0,this.querySelector("#ai-thinking").checked=e.thinkingEnabled!==!1;let s=this.querySelector("#ai-status"),t=this.querySelector("#ai-msg"),l=this.querySelector("#ai-reply"),o=a=>{s.textContent=a?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E",s.className="ml-auto text-xs px-2 py-0.5 rounded-full "+(a?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")},r=(a,i="info")=>{t.textContent=a||"",t.className="text-xs "+(i==="ok"?"text-green-600 dark:text-green-400":i==="err"?"text-red-600 dark:text-red-400":"text-slate-500")},u=()=>({apiKey:this.querySelector("#ai-key").value.trim(),baseUrl:this.querySelector("#ai-base").value.trim()||S.DEFAULTS.baseUrl,model:this.querySelector("#ai-model").value.trim()||S.DEFAULTS.model,fastModel:this.querySelector("#ai-fast-model").value.trim()||S.DEFAULTS.fastModel,fastModelEnabled:this.querySelector("#ai-use-fast-model").checked===!0,thinkingEnabled:this.querySelector("#ai-thinking").checked===!0});this.querySelector("#ai-save").addEventListener("click",()=>{let a=u();if(!a.apiKey){r("\u8BF7\u586B\u5199 API Key","err");return}S.save(a),o(!0),r(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),l.classList.add("hidden"),l.textContent="",this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}),this.querySelector("#ai-reset").addEventListener("click",()=>{S.clear(),this.querySelector("#ai-key").value="",this.querySelector("#ai-base").value="",this.querySelector("#ai-model").value="",this.querySelector("#ai-fast-model").value="",this.querySelector("#ai-use-fast-model").checked=!1,this.querySelector("#ai-thinking").checked=!0,o(!1),r("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09"),l.classList.add("hidden"),l.textContent=""});let d=this.querySelector("#ai-test");d.addEventListener("click",async()=>{let a=u();if(!a.apiKey){r("\u8BF7\u586B\u5199 API Key","err");return}S.save(a),d.disabled=!0;let i=d.textContent;d.textContent="\u6D4B\u8BD5\u4E2D...",r("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info"),l.classList.add("hidden"),l.textContent="";try{let c=await S.test(a,{timeoutMs:3e4});r(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),l.textContent=c,l.classList.remove("hidden"),o(!0),this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}catch(c){r(`\u8054\u901A\u5931\u8D25\uFF1A${c?.message||String(c)}`,"err"),o(!1)}finally{d.disabled=!1,d.textContent=i}})}_renderTtsSection(e,s,t){let l=t.provider==="edge"?"edge-tts-api":t.provider==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",o=t.provider==="minimax"||t.provider==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";return`
      <section data-tts-lang="${e}" class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>${M(s)}</strong>
          <span data-role="status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${o}">
            \u5F53\u524D: ${M(l)}
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
                   placeholder="${M(P.DEFAULT_EDGE_BASE_URL)}" />
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
                   placeholder="${M(P.DEFAULT_MINIMAX_BASE_URL)}" />
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
    `}_$(e,s){return this.querySelector(`section[data-tts-lang="${e}"] [data-role="${s}"]`)}_wireTts(e){let s=j(e);if(!this.querySelector(`section[data-tts-lang="${e}"]`))return;let l=this._$(e,"provider"),o=this._$(e,"browser-block"),r=this._$(e,"edge-block"),u=this._$(e,"minimax-block"),d=this._$(e,"status"),a=this._$(e,"msg");l.value=s.provider;let i=(p,m)=>{let x=this._$(e,p),T=this._$(e,m),C=()=>{T.textContent=x.value};x.addEventListener("input",C),C()};i("browser-rate","browser-rate-val"),i("browser-pitch","browser-pitch-val"),i("browser-volume","browser-volume-val"),i("edge-rate","edge-rate-val"),i("edge-pitch","edge-pitch-val"),i("edge-volume","edge-volume-val"),i("minimax-speed","minimax-speed-val"),i("minimax-vol","minimax-vol-val"),i("minimax-pitch","minimax-pitch-val"),this._$(e,"edge-base").value=s.edgeBaseUrl,this._$(e,"minimax-base").value=s.minimaxBaseUrl,this._$(e,"minimax-model").value=s.minimaxModel;let c=this._$(e,"browser-voice"),f=()=>{let p=ue();c.innerHTML='<option value="">(\u7CFB\u7EDF\u9ED8\u8BA4)</option>'+p.map(x=>`<option value="${se(x.name)}">${M(x.name)} (${M(x.lang||"?")})</option>`).join("");let m=j(e).voice;m&&(c.value=m)};f();let h=he(f);this._ttsCleanups.push(h);let v=this._$(e,"edge-voice"),y=[],L=async()=>{v.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';try{let p=await xe(this._$(e,"edge-base").value.trim()||P.DEFAULT_EDGE_BASE_URL);y=p.voices,v.innerHTML=y.map(x=>`<option value="${se(x.shortName)}">${M(x.shortName)} \u2014 ${M(x.friendlyName||x.gender||"")}</option>`).join("");let m=j(e).voice;m&&(v.value=m),k(`\u5DF2\u52A0\u8F7D ${p.count} \u4E2A edge \u8BED\u97F3`,"ok")}catch(p){v.innerHTML='<option value="">(\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u53F3\u4FA7\u5237\u65B0\u91CD\u8BD5)</option>',k("\u52A0\u8F7D edge \u8BED\u97F3\u5931\u8D25\uFF1A"+(p?.message||p),"err")}},q=this._$(e,"minimax-voice"),w=this._$(e,"minimax-voice-meta"),E=async()=>{q.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';let p=S.get().apiKey,m=this._$(e,"minimax-base").value.trim()||P.DEFAULT_MINIMAX_BASE_URL;try{let x=await be(m,p),T=x.voices&&x.voices.length?x.voices:ee,C=!!(x.voices&&x.voices.length);q.innerHTML=T.map(B=>{let z=B.voice_id||B.shortName,K=B.voice_name||B.friendlyName||"";return`<option value="${se(z)}">${M(z)}${K?" \u2014 "+M(K):""}${B.source&&B.source!=="system"?" ("+B.source+")":""}</option>`}).join("");let U=j(e).minimaxVoice;U&&(q.value=U),w.textContent=C?`\u5171 ${T.length} \u4E2A`:`\u79BB\u7EBF\u515C\u5E95 (${T.length} \u4E2A\u5E38\u7528\u97F3\u8272;\u586B\u597D API Key \u540E\u70B9\u300C\u5237\u65B0\u97F3\u8272\u5217\u8868\u300D)`,k(C?`\u5DF2\u52A0\u8F7D ${T.length} \u4E2A MiniMax \u97F3\u8272`:"\u672A\u914D\u7F6E API Key,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95\u6E05\u5355","ok")}catch(x){q.innerHTML=ee.map(C=>`<option value="${se(C.voice_id)}">${M(C.voice_id)} \u2014 ${M(C.voice_name)}</option>`).join("");let T=j(e).minimaxVoice;T&&(q.value=T),w.textContent=`\u52A0\u8F7D\u5931\u8D25,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95 (${ee.length} \u4E2A)`,k("\u52A0\u8F7D MiniMax \u97F3\u8272\u5931\u8D25:"+(x?.message||x),"err")}};this[`_refreshMinimaxVoices_${e}`]=E;let I=p=>{let m=p==="edge"?"edge-tts-api":p==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",x=p==="minimax"||p==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";d.textContent=`\u5F53\u524D: ${m}`,d.className="ml-auto text-xs px-2 py-0.5 rounded-full "+x},k=(p,m="info")=>{a.textContent=p||"",a.className="text-xs "+(m==="ok"?"text-green-600 dark:text-green-400":m==="err"?"text-red-600 dark:text-red-400":"text-slate-500")};l.addEventListener("change",()=>{let p=l.value;o.classList.toggle("hidden",p!=="browser"),r.classList.toggle("hidden",p!=="edge"),u.classList.toggle("hidden",p!=="minimax"),I(p),p==="edge"&&y.length===0&&L(),p==="minimax"&&E()}),s.provider==="edge"&&L(),s.provider==="minimax"&&E();let G=()=>{let p=l.value,m={provider:p,edgeBaseUrl:this._$(e,"edge-base").value.trim()||P.DEFAULT_EDGE_BASE_URL,minimaxBaseUrl:this._$(e,"minimax-base").value.trim()||P.DEFAULT_MINIMAX_BASE_URL,minimaxModel:this._$(e,"minimax-model").value||P.DEFAULT_MINIMAX_MODEL};return p==="browser"?{...m,voice:c.value.trim(),rate:Number(this._$(e,"browser-rate").value),pitch:Number(this._$(e,"browser-pitch").value),volume:Number(this._$(e,"browser-volume").value)}:p==="edge"?{...m,voice:v.value.trim(),rate:Number(this._$(e,"edge-rate").value),pitch:Number(this._$(e,"edge-pitch").value),volume:Number(this._$(e,"edge-volume").value)}:{...m,minimaxVoice:q.value.trim(),minimaxSpeed:Number(this._$(e,"minimax-speed").value),minimaxVol:Number(this._$(e,"minimax-vol").value),minimaxPitch:Number(this._$(e,"minimax-pitch").value)}};this._$(e,"save").addEventListener("click",()=>{let p=G();le(e,p),k(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),I(p.provider)});let N=this._$(e,"minimax-refresh");N&&N.addEventListener("click",()=>E());let _=this._$(e,"test");_.addEventListener("click",async()=>{let p=G();le(e,p),I(p.provider),_.disabled=!0;let m=_.textContent;_.textContent="\u64AD\u653E\u4E2D...",k("\u6B63\u5728\u5408\u6210\u5E76\u64AD\u653E...","info");try{let x=e==="en"?"Hello, this is a test read. You should hear the configured voice and speed.":"\u4F60\u597D,\u8FD9\u662F\u6D4B\u8BD5\u6717\u8BFB\u3002\u53EF\u4EE5\u542C\u5230\u5F53\u524D\u8BED\u97F3\u4E0E\u8BED\u901F\u3002";await P.speak({text:x,lang:e,...p},{onStart:()=>k("\u64AD\u653E\u4E2D...","info"),onEnd:()=>k(`\u64AD\u653E\u5B8C\u6BD5 (${new Date().toLocaleTimeString()})`,"ok"),onError:T=>k("\u64AD\u653E\u5931\u8D25\uFF1A"+(T?.message||T),"err")})}catch(x){k("\u64AD\u653E\u5931\u8D25\uFF1A"+(x?.message||x),"err")}finally{_.disabled=!1,_.textContent=m}}),this._$(e,"stop").addEventListener("click",()=>{P.stop(),k("\u5DF2\u505C\u6B62","info")})}_refreshMinimaxVoices(e){this[`_refreshMinimaxVoices_${e}`]?.()}_renderEnvSection(){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <strong>\u73AF\u5883\u53D8\u91CF (\u6765\u81EA .env)</strong>
        <table class="w-full text-sm">
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">PORT</th><td class="py-1 font-mono">${D("PORT","?")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">API_BASE</th><td class="py-1 font-mono">${D("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_BASE_URL</th><td class="py-1 font-mono">${D("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_MODEL</th><td class="py-1 font-mono">${D("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_FAST_MODEL</th><td class="py-1 font-mono">${D("AI_FAST_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">DEBUG</th><td class="py-1 font-mono">${D("DEBUG","false")}</td></tr>
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
    `}_wireLocalData(){this.querySelector("#clear-storage").addEventListener("click",()=>{confirm("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?")&&X.clear()})}open(){this._built||(this._build(),this._built=!0),this._dlg.showModal()}close(){this._dlg.close()}disconnectedCallback(){for(let e of this._ttsCleanups||[])e?.()}};function M(F){return String(F??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function se(F){return String(F??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("app-settings",ne);var we="ai-gen-mode",g={folder:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',folderOpen:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14l1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y1="12"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',edit:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',move:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',chevronRight:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',chevronDown:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',filePlus:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',folderPlus:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></svg>',panelLeft:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>',panelRight:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="15" y1="4" x2="15" y2="20"/></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14zm14 0l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/></svg>'},de=class extends HTMLElement{constructor(){super(),this._collapsed=!1,this._allFolders=[],this._allFiles=[],this._expanded=new Set,this._search="",this._sortBy="updatedAt",this._sortDir="desc",this._selectedFileId=null,this._currentFolderId=null,this._onFileSelect=null,this._onToast=null,this._pendingNewFileFolderId=null,this._pendingNewFolderParentId=null,this._pendingAiGenFolderId=null,this._currentAiGenMode=X.get(we,"auto")==="manual"?"manual":"auto"}set onFileSelect(e){this._onFileSelect=typeof e=="function"?e:null}set onToast(e){this._onToast=typeof e=="function"?e:null}setSelected(e,s={}){if(this._selectedFileId=e,e){let t=this._allFiles.find(l=>l.id===e);if(t){this._currentFolderId=t.folderId??null;let l=t.folderId,o=new Set;for(;l!=null&&!o.has(l);)o.add(l),this._expanded.add(l),l=this._allFolders.find(r=>r.id===l)?.parentId??null}}s.silent||this._render()}async refresh(){try{let[e,s]=await Promise.all([W.getAll(),V.getAll()]);this._allFolders=e||[],this._allFiles=s||[]}catch(e){console.error("[file-sidebar] refresh failed:",e),this._toast("\u52A0\u8F7D\u5931\u8D25:"+(e?.message||e),"err");return}this._render()}async saveCurrent({text:e,segments:s,autoAll:t,suggestedTitle:l,folderId:o=null}={}){let r=String(e||"").trim();if(!r)return this._toast("\u5F53\u524D\u6717\u8BFB\u9875\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u672C","err"),null;let u=(l||te(r)).slice(0,80),d=Date.now(),a={id:Z("fl"),folderId:o??null,title:u,text:e,segments:Array.isArray(s)?s:[],autoAll:t===!0,createdAt:d,updatedAt:d};try{return await V.put(a),this._selectedFileId=a.id,this._toast(`\u5DF2\u4FDD\u5B58\u300C${u}\u300D`,"ok"),await this.refresh(),this.setSelected(a.id,{silent:!0}),a}catch(i){return this._toast("\u4FDD\u5B58\u5931\u8D25:"+(i?.message||i),"err"),null}}toggleCollapse(){this._collapsed=!this._collapsed,this._render()}connectedCallback(){this._built||(this._built=!0,this.innerHTML=`
      <aside class="relative h-full flex shrink-0 transition-[width] duration-200 ease-out
                    bg-slate-50 dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-700"
             id="sidebar-body">
        <!-- \u6298\u53E0\u6001:\u53EA\u5269\u7A84\u6761 + toggle -->
        <div id="collapsed-bar"
             class="hidden h-full w-10 flex-col items-center py-2 gap-2 bg-slate-100 dark:bg-slate-800/60">
          <button id="expand-btn" type="button" title="\u5C55\u5F00\u6587\u4EF6\u6811"
                  class="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
            ${g.panelRight}
          </button>
        </div>

        <!-- \u5C55\u5F00\u6001:\u5DE5\u5177\u680F + \u6811 + dialogs -->
        <div id="expanded-panel" class="hidden h-full w-72 sm:w-80 flex-col min-h-0">
          <header class="flex items-center gap-1 px-2 sm:px-3 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <span class="px-1 py-1 text-sm font-medium text-slate-700 dark:text-slate-200 shrink-0 select-none">\u6587\u4EF6</span>
            <div class="flex-1"></div>
            <button id="new-file" type="button" title="\u65B0\u5EFA\u6587\u4EF6"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition text-xs">
              ${g.filePlus}<span class="hidden sm:inline">\u6587\u4EF6</span>
            </button>
            <button id="new-folder" type="button" title="\u65B0\u5EFA\u6587\u4EF6\u5939"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition text-xs">
              ${g.folderPlus}<span class="hidden sm:inline">\u6587\u4EF6\u5939</span>
            </button>
            <button id="ai-generate" type="button" title="AI \u751F\u6210\u6717\u8BFB\u7A3F"
                    class="inline-flex items-center gap-1 px-2 py-1 rounded-md text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-95 transition text-xs">
              ${g.sparkles}<span class="hidden sm:inline">AI \u751F\u6210</span>
            </button>
            <button id="collapse-btn" type="button" title="\u6298\u53E0\u4FA7\u680F"
                    class="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
              ${g.panelLeft}
            </button>
          </header>

          <div class="flex items-center gap-2 px-2 sm:px-3 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <label class="flex-1 inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-300 dark:border-slate-600 focus-within:border-blue-500 transition min-w-0">
              ${g.search}
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

        <!-- AI \u751F\u6210\u6717\u8BFB\u7A3F dialog -->
        <dialog id="ai-gen-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[520px] w-[min(520px,calc(100vw-32px))] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0 gap-2">
              <span class="text-blue-600 dark:text-blue-300">${g.sparkles}</span>
              <strong class="text-sm">AI \u751F\u6210\u6717\u8BFB\u7A3F</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>

            <!-- tabs -->
            <div class="flex items-stretch border-b border-slate-200 dark:border-slate-700 shrink-0 text-sm">
              <button type="button" data-ai-tab="auto" id="ai-gen-tab-auto"
                      class="flex-1 py-2 px-3 text-center transition border-b-2 border-transparent text-slate-500 dark:text-slate-400">
                AI \u76F4\u63A5\u751F\u6210
              </button>
              <button type="button" data-ai-tab="manual" id="ai-gen-tab-manual"
                      class="flex-1 py-2 px-3 text-center transition border-b-2 border-transparent text-slate-500 dark:text-slate-400">
                \u624B\u52A8 AI \u751F\u6210
              </button>
            </div>

            <div class="p-4 flex flex-col gap-3 overflow-y-auto">

              <!-- tab=auto \u9762\u677F -->
              <div id="ai-gen-panel-auto" class="flex flex-col gap-3">
                <label class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">\u4E3B\u9898</span>
                  <textarea id="ai-gen-topic" rows="4"
                            class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm resize-y"
                            placeholder="\u4F8B\u5982:\u7528\u8D39\u66FC\u5B66\u4E60\u6CD5\u8BB2 Claude Code \u539F\u7406"
                            style="min-height:6rem"></textarea>
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">\u98CE\u683C / \u957F\u5EA6</span>
                  <select id="ai-gen-style"
                          class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm">
                    <option value="\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E">\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E(\u7EA6 200 \u5B57)</option>
                    <option value="\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0">\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0(\u7EA6 500 \u5B57)</option>
                    <option value="\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3">\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3(\u7EA6 1000 \u5B57)</option>
                    <option value="\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C">\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C(4~8 \u53E5)</option>
                    <option value="\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD">\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD(\u7EA6 300 \u5B57)</option>
                  </select>
                </label>
                <p id="ai-gen-hint" class="hidden text-xs text-slate-500 dark:text-slate-400"></p>
                <p id="ai-gen-status" class="hidden text-xs text-blue-600 dark:text-blue-300"></p>
                <p id="ai-gen-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
                <div class="flex items-center gap-2 justify-end pt-1">
                  <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                  <button type="button" id="ai-gen-submit"
                          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-sm">
                    ${g.sparkles}<span>\u751F\u6210</span>
                  </button>
                </div>
              </div>

              <!-- tab=manual \u9762\u677F -->
              <div id="ai-gen-panel-manual" class="hidden flex flex-col gap-3">
                <div class="rounded-md border border-blue-200 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-900/20 p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                  <div class="font-medium mb-1 text-blue-700 dark:text-blue-300">\u{1F4A1} \u4F7F\u7528\u6B65\u9AA4</div>
                  <ol class="list-decimal pl-4 space-y-0.5">
                    <li>\u586B\u5199\u4E3B\u9898\u3001\u9009\u62E9\u98CE\u683C</li>
                    <li>\u70B9\u300C\u{1F4CB} \u590D\u5236\u63D0\u793A\u8BCD\u300D</li>
                    <li>\u5230\u7F51\u9875 AI(ChatGPT / Claude / \u8C46\u5305 / Gemini \u7B49)\u7C98\u8D34\u63D0\u793A\u8BCD,\u5F97\u5230\u56DE\u590D</li>
                    <li>\u628A AI \u56DE\u590D\u590D\u5236\u56DE\u6765,\u7C98\u8D34\u5230\u4E0B\u65B9\u6587\u672C\u6846</li>
                    <li>\u70B9\u300C\u89E3\u6790\u5E76\u4FDD\u5B58\u300D,\u4F1A\u4FDD\u5B58\u4E3A\u65B0\u6587\u4EF6\u5E76\u52A0\u8F7D\u5230\u6717\u8BFB\u533A</li>
                  </ol>
                </div>
                <label class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">\u4E3B\u9898</span>
                  <textarea id="ai-gen-m-topic" rows="3"
                            class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm resize-y"
                            placeholder="\u4F8B\u5982:\u7528\u8D39\u66FC\u5B66\u4E60\u6CD5\u8BB2 Claude Code \u539F\u7406"
                            style="min-height:4.5rem"></textarea>
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">\u98CE\u683C / \u957F\u5EA6</span>
                  <select id="ai-gen-m-style"
                          class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm">
                    <option value="\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E">\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E(\u7EA6 200 \u5B57)</option>
                    <option value="\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0">\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0(\u7EA6 500 \u5B57)</option>
                    <option value="\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3">\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3(\u7EA6 1000 \u5B57)</option>
                    <option value="\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C">\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C(4~8 \u53E5)</option>
                    <option value="\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD">\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD(\u7EA6 300 \u5B57)</option>
                  </select>
                </label>
                <div class="flex items-center gap-2 flex-wrap">
                  <button type="button" id="ai-gen-copy-prompt"
                          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs">
                    \u{1F4CB} \u590D\u5236\u63D0\u793A\u8BCD
                  </button>
                  <span class="text-xs text-slate-500 dark:text-slate-400">\u6216\u53D1\u7ED9:</span>
                  <span class="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">ChatGPT</span>
                  <span class="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Claude</span>
                  <span class="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Gemini</span>
                  <span class="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">\u8C46\u5305</span>
                  <span class="text-xs px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">Kimi</span>
                </div>
                <label class="flex flex-col gap-1">
                  <span class="text-xs text-slate-600 dark:text-slate-300">\u628A AI \u56DE\u590D\u7C98\u8D34\u5230\u8FD9\u91CC</span>
                  <textarea id="ai-gen-m-response" rows="8"
                            class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-xs font-mono resize-y"
                            placeholder='{"title": "...", "segments": ["...", "..."]}&#10;&#10;(\u652F\u6301\u5E26 json \u4EE3\u7801\u5757\u6807\u8BB0\u7684\u683C\u5F0F)'
                            style="min-height:10rem"></textarea>
                </label>
                <p id="ai-gen-m-status" class="hidden text-xs text-blue-600 dark:text-blue-300"></p>
                <p id="ai-gen-m-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
                <div class="flex items-center gap-2 justify-end pt-1">
                  <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                  <button type="button" id="ai-gen-m-submit"
                          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-sm">
                    \u89E3\u6790\u5E76\u4FDD\u5B58
                  </button>
                </div>
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
    `,this._body=this.querySelector("#sidebar-body"),this._collapsedBar=this.querySelector("#collapsed-bar"),this._expandedPanel=this.querySelector("#expanded-panel"),this._wireToolbar(),this._wireDialogs(),this._wireCtxMenu(),this._unsubRemote=me(e=>{e.store!=="folders"&&e.store!=="files"||(e.store==="files"&&e.op==="del"&&e.key===this._selectedFileId&&(this._selectedFileId=null),this.refresh())}),this._render(),this.refresh())}disconnectedCallback(){this._unsubRemote?.(),document.removeEventListener("click",this._onDocClickHideMenu),document.removeEventListener("keydown",this._onEscHideMenu)}_render(){this._body&&(this._collapsed?(this._body.classList.remove("w-72","sm:w-80"),this._body.classList.add("w-10"),this._collapsedBar.classList.remove("hidden"),this._collapsedBar.classList.add("flex"),this._expandedPanel.classList.add("hidden"),this._expandedPanel.classList.remove("flex")):(this._body.classList.add("w-72","sm:w-80"),this._body.classList.remove("w-10"),this._collapsedBar.classList.add("hidden"),this._collapsedBar.classList.remove("flex"),this._expandedPanel.classList.remove("hidden"),this._expandedPanel.classList.add("flex")),this._renderTree())}_renderTree(){if(!this._expandedPanel)return;let e=this.querySelector("#tree-scroller");if(!e)return;let s=this._sortRows(this._allFolders,a=>a.name,"title"),t=this._sortRows(this._allFiles,a=>a.title,"title"),l=(this._search||"").toLowerCase(),o=l?new Set(this._allFiles.filter(a=>(a.title||"").toLowerCase().includes(l)||(a.text||"").toLowerCase().includes(l)).map(a=>a.id)):null;if(l){let a=t.filter(i=>o.has(i.id));e.innerHTML=`
        <div class="text-xs text-slate-500 dark:text-slate-400 px-2 py-1.5">
          ${o.size} \u4E2A\u5339\u914D
        </div>
        ${a.length?a.map(i=>this._renderSearchResultRow(i)).join(""):'<div class="text-xs text-slate-400 dark:text-slate-500 px-2 py-3 text-center">\u65E0\u5339\u914D</div>'}
      `,e.querySelectorAll("[data-search-file-id]").forEach(i=>{i.addEventListener("click",()=>{let c=i.dataset.searchFileId;this._selectedFileId=c;let f=this._allFiles.find(h=>h.id===c);if(f){this._currentFolderId=f.folderId??null;let h=f.folderId,v=new Set;for(;h!=null&&!v.has(h);)v.add(h),this._expanded.add(h),h=this._allFolders.find(y=>y.id===h)?.parentId??null}this._fireSelect(),this._render()})});return}let r=s.filter(a=>a.parentId==null),u=(a,i)=>{let c=this._expanded.has(a.id),f=s.filter(v=>v.parentId===a.id),h=t.filter(v=>v.folderId===a.id);return`
        <div>
          <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                      hover:bg-white dark:hover:bg-slate-800"
               data-folder-id="${A(a.id)}" data-depth="${i}">
            <button type="button" data-toggle="${A(a.id)}" class="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400">
              ${f.length+h.length>0?c?g.chevronDown:g.chevronRight:'<span class="w-4"></span>'}
            </button>
            <span class="shrink-0 text-slate-500 dark:text-slate-400">${c?g.folderOpen:g.folder}</span>
            <span class="flex-1 truncate" title="${A(a.name)}">${A(a.name)}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500">${f.length+h.length}</span>
            <button type="button" data-folder-menu="${A(a.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
          </div>
          ${c?`<div class="ml-4">
            ${f.map(v=>u(v,i+1)).join("")}
            ${h.map(v=>this._renderFileRow(v,i+1)).join("")}
          </div>`:""}
        </div>
      `},d=t.filter(a=>a.folderId==null);e.innerHTML=`
      <div class="ml-4">
        ${r.map(a=>u(a,1)).join("")}
        ${d.map(a=>this._renderFileRow(a,1)).join("")}
        ${r.length+d.length===0?'<div class="text-xs text-slate-400 dark:text-slate-500 px-3 py-3 text-center">\u8FD8\u6CA1\u6709\u5185\u5BB9</div>':""}
      </div>
    `,e.querySelectorAll("[data-toggle]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();let c=a.dataset.toggle;this._expanded.has(c)?this._expanded.delete(c):this._expanded.add(c),this._renderTree()})}),e.querySelectorAll("[data-folder-id]").forEach(a=>{a.addEventListener("click",i=>{if(i.target.closest("[data-toggle]")||i.target.closest("[data-folder-menu]"))return;let c=a.dataset.folderId;this._expanded.has(c)?this._expanded.delete(c):this._expanded.add(c),this._renderTree()})}),e.querySelectorAll("[data-folder-menu]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation(),this._showFolderMenu(i.clientX,i.clientY,a.dataset.folderMenu)})}),e.querySelectorAll("[data-folder-id]").forEach(a=>{a.addEventListener("contextmenu",i=>{i.target.closest("[data-toggle]")||i.target.closest("[data-folder-menu]")||(i.preventDefault(),this._showFolderMenu(i.clientX,i.clientY,a.dataset.folderId))})}),e.querySelectorAll("[data-file-id]").forEach(a=>{a.addEventListener("click",()=>{this._selectedFileId=a.dataset.fileId,this._fireSelect(),this._renderTree()})}),e.querySelectorAll("[data-file-menu]").forEach(a=>{a.addEventListener("click",i=>{i.stopPropagation();let c=a.dataset.fileMenu;this._showCtxMenu(i.clientX,i.clientY,[{label:"\u91CD\u547D\u540D",icon:g.edit,onClick:()=>this._openRename("file",c)},{label:"\u590D\u5236\u4E00\u4EFD",icon:g.copy,onClick:()=>this._duplicateFile(c)},{label:"\u79FB\u52A8\u5230...",icon:g.move,onClick:()=>this._openMove("file",c)},{label:"\u5220\u9664",icon:g.trash,danger:!0,onClick:()=>this._deleteFile(c)}])})})}_renderFileRow(e,s){return`
      <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                  ${this._selectedFileId===e.id?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200":"hover:bg-white dark:hover:bg-slate-800"}"
           data-file-id="${A(e.id)}" data-depth="${s}">
        <span class="shrink-0 w-5 h-5"></span>
        <span class="shrink-0 text-slate-500 dark:text-slate-400">${g.file}</span>
        <span class="flex-1 truncate" title="${A(e.title)}">${A(e.title)}</span>
        <button type="button" data-file-menu="${A(e.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
      </div>
    `}_renderSearchResultRow(e){let s=(e.text||"").replace(/\s+/g," ").slice(0,80);return`
      <button type="button" data-search-file-id="${A(e.id)}"
              class="w-full text-left px-2 py-2 rounded hover:bg-white dark:hover:bg-slate-800 transition flex flex-col gap-0.5">
        <div class="flex items-center gap-1.5 text-sm">
          <span class="shrink-0 text-slate-500 dark:text-slate-400">${g.file}</span>
          <span class="flex-1 truncate font-medium">${A(e.title)}</span>
        </div>
        ${s?`<div class="text-xs text-slate-500 dark:text-slate-400 truncate ml-6">${A(s)}\u2026</div>`:""}
      </button>
    `}_sortRows(e,s){let t=this._sortBy,l=this._sortDir==="asc"?1:-1,o=[...e];return t==="title"?o.sort((r,u)=>String(s(r)||"").localeCompare(String(s(u)||""),"zh-Hans-CN")*l):o.sort((r,u)=>((r[t]||0)-(u[t]||0))*l),o}_fireSelect(){let e=this._allFiles.find(s=>s.id===this._selectedFileId)||null;try{this._onFileSelect?.(e)}catch(s){console.error("[file-sidebar] onFileSelect threw:",s)}}_wireToolbar(){this.querySelector("#new-file").addEventListener("click",()=>this._openNewFile()),this.querySelector("#new-folder").addEventListener("click",()=>this._openNewFolder()),this.querySelector("#ai-generate").addEventListener("click",()=>this._openAiGenerate()),this.querySelector("#search-input").addEventListener("input",e=>{this._search=e.target.value.trim(),this._renderTree()}),this.querySelector("#sort-select").addEventListener("change",e=>{let[s,t]=e.target.value.split(":");this._sortBy=s,this._sortDir=t,this._renderTree()}),this.querySelector("#collapse-btn").addEventListener("click",()=>this.toggleCollapse()),this.querySelector("#expand-btn").addEventListener("click",()=>this.toggleCollapse())}_wireDialogs(){let e=this.querySelector("#new-file-dlg"),s=this.querySelector("#new-file-title"),t=this.querySelector("#new-file-error"),l=this.querySelector("#new-file-hint"),o=n=>{n?(t.textContent=n,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent="")};e.querySelector('[data-action="close"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="cancel"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="save"]').addEventListener("click",async()=>{let n=s.value.trim()||"\u672A\u547D\u540D\u6587\u4EF6";try{let b=Date.now(),H={id:Z("fl"),folderId:this._pendingNewFileFolderId??null,title:n,text:"",segments:[],autoAll:!1,createdAt:b,updatedAt:b};await V.put(H),s.value="",o(""),H.folderId&&this._expanded.add(H.folderId),e.close(),await this.refresh(),this.setSelected(H.id,{silent:!0}),this._fireSelect(),this._toast(`\u5DF2\u65B0\u5EFA\u300C${n}\u300D`,"ok")}catch(b){o("\u521B\u5EFA\u5931\u8D25:"+(b?.message||b))}}),s.addEventListener("input",()=>o("")),s.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),e.querySelector('[data-action="save"]').click())}),this._newFileDlg=e,this._newFileHint=l;let r=this.querySelector("#new-folder-dlg"),u=this.querySelector("#new-folder-name"),d=this.querySelector("#new-folder-error"),a=this.querySelector("#new-folder-hint"),i=n=>{n?(d.textContent=n,d.classList.remove("hidden")):(d.classList.add("hidden"),d.textContent="")};r.querySelector('[data-action="close"]').addEventListener("click",()=>r.close()),r.querySelector('[data-action="cancel"]').addEventListener("click",()=>r.close()),r.querySelector('[data-action="save"]').addEventListener("click",async()=>{let n=u.value.trim();if(!n){i("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}try{await W.put({id:Z("f"),parentId:this._pendingNewFolderParentId??null,name:n,createdAt:Date.now(),updatedAt:Date.now()}),u.value="",i(""),this._pendingNewFolderParentId&&this._expanded.add(this._pendingNewFolderParentId),r.close(),await this.refresh(),this._toast(`\u5DF2\u521B\u5EFA\u300C${n}\u300D`,"ok")}catch(b){i("\u521B\u5EFA\u5931\u8D25:"+(b?.message||b))}}),u.addEventListener("input",()=>i("")),u.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),r.querySelector('[data-action="save"]').click())}),this._newFolderDlg=r,this._newFolderHint=a,this._renameTarget=null;let c=this.querySelector("#rename-dlg"),f=this.querySelector("#rename-input"),h=this.querySelector("#rename-error"),v=this.querySelector("#rename-title"),y=n=>{n?(h.textContent=n,h.classList.remove("hidden")):(h.classList.add("hidden"),h.textContent="")};c.querySelector('[data-action="close"]').addEventListener("click",()=>c.close()),c.querySelector('[data-action="cancel"]').addEventListener("click",()=>c.close()),c.querySelector('[data-action="save"]').addEventListener("click",async()=>{let n=f.value.trim();if(!n){y("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}if(!this._renameTarget){c.close();return}let{kind:b,id:H}=this._renameTarget;try{if(b==="file"){let $=await V.get(H);if(!$)throw new Error("\u6587\u4EF6\u4E0D\u5B58\u5728");$.title=n,$.updatedAt=Date.now(),await V.put($)}else{let $=await W.get(H);if(!$)throw new Error("\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");$.name=n,$.updatedAt=Date.now(),await W.put($)}y(""),c.close(),await this.refresh(),this._toast("\u5DF2\u91CD\u547D\u540D","ok")}catch($){y("\u91CD\u547D\u540D\u5931\u8D25:"+($?.message||$))}}),f.addEventListener("input",()=>y("")),f.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),c.querySelector('[data-action="save"]').click())}),this._renameDlg=c,this._renameInput=f,this._renameTitle=v,this._moveTarget=null,this._moveSelectedFolderId=null;let L=this.querySelector("#move-dlg"),q=this.querySelector("#move-tree");L.querySelector('[data-action="close"]').addEventListener("click",()=>L.close()),L.querySelector('[data-action="cancel"]').addEventListener("click",()=>L.close()),L.querySelector('[data-action="save"]').addEventListener("click",async()=>{if(!this._moveTarget){L.close();return}let{kind:n,id:b}=this._moveTarget,H=this._moveSelectedFolderId??null;try{n==="file"?await fe(b,H):await ve(b,H),L.close(),await this.refresh(),this._toast("\u5DF2\u79FB\u52A8","ok")}catch($){this._toast("\u79FB\u52A8\u5931\u8D25:"+($?.message||$),"err")}}),this._moveDlg=L,this._moveTree=q;let w=this.querySelector("#ai-gen-dlg"),E=this.querySelector("#ai-gen-topic"),I=this.querySelector("#ai-gen-style"),k=this.querySelector("#ai-gen-submit"),G=this.querySelector("#ai-gen-status"),N=this.querySelector("#ai-gen-error"),_=this.querySelector("#ai-gen-hint"),p=this.querySelector("#ai-gen-tab-auto"),m=this.querySelector("#ai-gen-tab-manual"),x=this.querySelector("#ai-gen-panel-auto"),T=this.querySelector("#ai-gen-panel-manual"),C=this.querySelector("#ai-gen-m-topic"),U=this.querySelector("#ai-gen-m-style"),B=this.querySelector("#ai-gen-m-response"),z=this.querySelector("#ai-gen-copy-prompt"),K=this.querySelector("#ai-gen-m-submit"),Y=this.querySelector("#ai-gen-m-status"),J=this.querySelector("#ai-gen-m-error"),ce=n=>{n?(N.textContent=n,N.classList.remove("hidden")):(N.classList.add("hidden"),N.textContent="")},ye=n=>{n?(G.textContent=n,G.classList.remove("hidden")):(G.classList.add("hidden"),G.textContent="")},pe=n=>{n?(J.textContent=n,J.classList.remove("hidden")):(J.classList.add("hidden"),J.textContent="")},ke=n=>{n?(Y.textContent=n,Y.classList.remove("hidden")):(Y.classList.add("hidden"),Y.textContent="")},ae=n=>{this._currentAiGenMode=n==="manual"?"manual":"auto",X.set(we,this._currentAiGenMode);let b=this._currentAiGenMode==="auto";p.classList.toggle("border-blue-500",b),p.classList.toggle("text-blue-600",b),p.classList.toggle("dark:text-blue-300",b),p.classList.toggle("border-transparent",!b),p.classList.toggle("text-slate-500",!b),p.classList.toggle("dark:text-slate-400",!b),m.classList.toggle("border-blue-500",!b),m.classList.toggle("text-blue-600",!b),m.classList.toggle("dark:text-blue-300",!b),m.classList.toggle("border-transparent",b),m.classList.toggle("text-slate-500",b),m.classList.toggle("dark:text-slate-400",b),x.classList.toggle("hidden",!b),T.classList.toggle("hidden",b),b?(C.value=E.value,U.value=I.value):(C.value||(C.value=E.value),U.value!==I.value&&(U.value=I.value))};p.addEventListener("click",()=>ae("auto")),m.addEventListener("click",()=>ae("manual")),w.querySelectorAll('[data-action="close"]').forEach(n=>n.addEventListener("click",()=>w.close())),w.querySelectorAll('[data-action="cancel"]').forEach(n=>n.addEventListener("click",()=>w.close())),k.addEventListener("click",()=>this._callAiGenerate()),E.addEventListener("input",()=>ce("")),E.addEventListener("keydown",n=>{(n.metaKey||n.ctrlKey)&&n.key==="Enter"&&(n.preventDefault(),k.click())}),z.addEventListener("click",()=>this._copyAiPrompt()),K.addEventListener("click",()=>this._parseAiResponse()),B.addEventListener("input",()=>pe("")),this._aiGenDlg=w,this._aiGenTopic=E,this._aiGenStyle=I,this._aiGenSubmit=k,this._aiGenStatus=G,this._aiGenError=N,this._aiGenHint=_,this._aiGenMTopic=C,this._aiGenMStyle=U,this._aiGenMResponse=B,this._aiGenMCopyBtn=z,this._aiGenMSubmit=K,this._aiGenMStatus=Y,this._aiGenMError=J,this._setAiGenErr=ce,this._setAiGenStatus=ye,this._setAiGenMErr=pe,this._setAiGenMStatus=ke,this._switchAiTab=ae}_openNewFile(e=null){if(this._pendingNewFileFolderId=e,this.querySelector("#new-file-title").value="",this.querySelector("#new-file-error").classList.add("hidden"),e){let s=this._allFolders.find(l=>l.id===e),t=this._folderPathLabel(e);this._newFileHint.textContent=`\u5C06\u4FDD\u5B58\u5230:${t}${s?` (${s.name})`:""}`,this._newFileHint.classList.remove("hidden")}else this._newFileHint.classList.add("hidden");this._newFileDlg.showModal(),setTimeout(()=>this.querySelector("#new-file-title").focus(),0)}_openNewFolder(e=null){if(this._pendingNewFolderParentId=e,this.querySelector("#new-folder-name").value="",this.querySelector("#new-folder-error").classList.add("hidden"),e){let s=this._folderPathLabel(e);this._newFolderHint.textContent=`\u5C06\u521B\u5EFA\u5230:${s}`,this._newFolderHint.classList.remove("hidden")}else this._newFolderHint.classList.add("hidden");this._newFolderDlg.showModal(),setTimeout(()=>this.querySelector("#new-folder-name").focus(),0)}_folderPathLabel(e){let s=[],t=e,l=new Set;for(;t!=null&&!l.has(t);){l.add(t);let o=this._allFolders.find(r=>r.id===t);if(!o)break;s.unshift(o.name),t=o.parentId??null}return["\u6839\u76EE\u5F55",...s].join(" / ")}_openRename(e,s){this._renameTarget={kind:e,id:s};let t=e==="file"?this._allFiles.find(l=>l.id===s)?.title:this._allFolders.find(l=>l.id===s)?.name;this._renameTitle.textContent=e==="file"?"\u91CD\u547D\u540D\u6587\u4EF6":"\u91CD\u547D\u540D\u6587\u4EF6\u5939",this._renameInput.value=t||"",this.querySelector("#rename-error").classList.add("hidden"),this._renameDlg.showModal(),setTimeout(()=>{this._renameInput.focus(),this._renameInput.select()},0)}_openMove(e,s){this._moveTarget={kind:e,id:s};let t=e==="file"?this._allFiles.find(l=>l.id===s)?.folderId??null:this._allFolders.find(l=>l.id===s)?.parentId??null;this._moveSelectedFolderId=t,this._renderMoveTree(),this._moveDlg.showModal()}_buildManualPromptText(e,s){let t={"\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E":"\u901A\u4FD7\u8BB2\u89E3\u578B,\u76EE\u6807\u7EA6 200 \u5B57,3~5 \u6BB5,\u9002\u5408\u5927\u4F17\u542C\u4F17\u3002","\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0":"\u53D9\u4E8B\u7ED3\u6784,\u6709\u8D77\u627F\u8F6C\u5408,\u76EE\u6807\u7EA6 500 \u5B57,5~8 \u6BB5\u3002","\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3":"\u5C42\u5C42\u9012\u8FDB\u3001\u7531\u6D45\u5165\u6DF1,\u76EE\u6807\u7EA6 1000 \u5B57,8~12 \u6BB5\u3002","\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C":"\u53E4\u8BD7 / \u8BCD\u98CE\u683C,4~8 \u53E5,\u6BCF\u53E5 5~7 \u5B57\u6216 7 \u5B57\u4E3A\u4E3B,\u62BC\u97F5\u3002","\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD":"\u6177\u6168\u6FC0\u6602\u3001\u6709\u53F7\u53EC\u529B,\u76EE\u6807\u7EA6 300 \u5B57,4~6 \u6BB5\u3002"}[s]||"\u76EE\u6807\u7EA6 400 \u5B57,5~7 \u6BB5\u3002";return`\u3010\u4EFB\u52A1\u3011\u8BF7\u6839\u636E\u4E0B\u9762\u7684\u4E3B\u9898\u548C\u98CE\u683C,\u521B\u4F5C\u4E00\u7BC7\u9002\u5408\u6717\u8BFB\u7684\u7A3F\u5B50\u3002

\u3010\u4E3B\u9898\u3011${e}
\u3010\u98CE\u683C\u3011${s}

\u98CE\u683C\u7EC6\u5316:${t}

\u3010\u8F93\u51FA\u8981\u6C42\u3011
1. \u540C\u65F6\u7ED9\u4E00\u4E2A\u7B80\u6D01\u7684\u6587\u4EF6\u6807\u9898(4~20 \u4E2A\u6C49\u5B57 \u6216 3~12 \u4E2A\u82F1\u6587\u5355\u8BCD;\u4E0D\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u524D\u7F00)
2. \u628A\u5185\u5BB9\u6309\u6BB5\u843D / \u53E5\u610F\u5207\u5206\u6210 3~12 \u6BB5(\u6BCF\u6BB5\u5927\u81F4 60~150 \u5B57,\u81EA\u7136\u8FB9\u754C)

\u3010\u4E25\u683C\u8F93\u51FA JSON\u3011\u683C\u5F0F\u5982\u4E0B,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u5916\u7684\u5185\u5BB9:
{"title": "\u4F60\u7684\u6807\u9898", "segments": ["\u7B2C1\u6BB5\u539F\u6587", "\u7B2C2\u6BB5\u539F\u6587", ...]}`}_openAiGenerate(e=null){if(this._pendingAiGenFolderId=e,this._aiGenTopic.value="",this._aiGenStyle.value="\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E",this._aiGenMTopic.value="",this._aiGenMStyle.value=this._aiGenStyle.value,this._aiGenMResponse.value="",this._setAiGenErr(""),this._setAiGenStatus(""),this._setAiGenMErr(""),this._setAiGenMStatus(""),this._aiGenMCopyBtn.textContent="\u{1F4CB} \u590D\u5236\u63D0\u793A\u8BCD",e){let s=this._folderPathLabel(e);this._aiGenHint.textContent=`\u5C06\u4FDD\u5B58\u5230:${s}`,this._aiGenHint.classList.remove("hidden")}else this._aiGenHint.classList.add("hidden");this._switchAiTab(this._currentAiGenMode),this._aiGenDlg.showModal(),setTimeout(()=>{this._currentAiGenMode==="manual"?this._aiGenMTopic.focus():this._aiGenTopic.focus()},0)}async _copyAiPrompt(){let e=this._setAiGenMStatus,s=this._setAiGenMErr,t=(this._aiGenMTopic.value||this._aiGenTopic.value).trim(),l=this._aiGenMStyle.value||this._aiGenStyle.value;if(!t){s("\u8BF7\u5148\u586B\u5199\u4E3B\u9898"),this._aiGenMTopic.focus();return}let o=this._buildManualPromptText(t,l),r=this._aiGenMCopyBtn,u=r.textContent,d=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(o),d=!0)}catch(a){console.warn("[file-sidebar] clipboard.writeText failed:",a)}if(!d)try{let a=document.createElement("textarea");a.value=o,a.style.position="fixed",a.style.top="-9999px",document.body.appendChild(a),a.focus(),a.select(),d=document.execCommand("copy"),document.body.removeChild(a)}catch(a){console.warn("[file-sidebar] execCommand copy fallback failed:",a)}d?(r.textContent="\u2713 \u5DF2\u590D\u5236",s(""),e("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F,\u5230 ChatGPT/Claude \u7B49\u7C98\u8D34\u5373\u53EF"),clearTimeout(this._copyResetTimer),this._copyResetTimer=setTimeout(()=>{r.textContent=u},2e3)):(s("\u590D\u5236\u5931\u8D25,\u8BF7\u624B\u52A8\u9009\u4E2D\u4E0B\u65B9\u63D0\u793A\u8BCD\u6587\u672C\u590D\u5236"),this._aiGenMResponse.value=o+`

(\u4EE5\u4E0A\u662F\u63D0\u793A\u8BCD\u6A21\u677F,AI \u56DE\u590D\u8BF7\u7C98\u8D34\u5230\u4E0B\u65B9 \u2193)
`)}async _parseAiResponse(){let e=this._setAiGenMErr,s=this._setAiGenMStatus,t=(this._aiGenMResponse.value||"").trim();if(!t){e("\u8BF7\u5148\u7C98\u8D34 AI \u7684\u56DE\u590D"),this._aiGenMResponse.focus();return}let l=null,o=t.replace(/^﻿/,"").replace(/[-‍﻿]/g,"");o=o.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();let u=[o.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],o],d=o.indexOf("{"),a=o.lastIndexOf("}");d>=0&&a>d&&u.push(o.slice(d,a+1));let i=o.indexOf("["),c=o.lastIndexOf("]");i>=0&&c>i&&u.push(o.slice(i,c+1));for(let w of u)if(w)try{let E=JSON.parse(w.trim());if(E&&Array.isArray(E.segments)){l=E;break}}catch{}if(!l){for(let w of u)if(w)try{let E=JSON.parse(w.trim());if(Array.isArray(E)){l={title:"",segments:E};break}}catch{}}if(!l){e("\u65E0\u6CD5\u89E3\u6790\u4E3A {title, segments[]} JSON,\u8BF7\u786E\u8BA4\u590D\u5236\u5B8C\u6574(\u652F\u6301 ```json \u4EE3\u7801\u5757)");return}let f=(this._aiGenMTopic.value||this._aiGenTopic.value).trim(),v=String(l.title||"").trim().replace(/^[\s"'""''「」『』《》【】\[\]]+/,"").replace(/[\s"'""''「」『』《》【】\[\]]+$/,"").replace(/\s+/g," ").slice(0,64)||te(f||l.segments?.[0]||"AI \u751F\u6210\u6717\u8BFB\u7A3F",32),y=(l.segments||[]).map(w=>String(w||"").replace(/\s+/g," ").trim()).filter(Boolean).map(w=>w.length>500?w.slice(0,500):w);if(y.length===0){e("\u89E3\u6790\u6210\u529F\u4F46\u6BB5\u843D\u4E3A\u7A7A,\u8BF7\u91CD\u8BD5");return}let L=y.join(`

`);if(s("\u6B63\u5728\u4FDD\u5B58..."),!await this.saveCurrent({text:L,segments:y,autoAll:!1,suggestedTitle:v,folderId:this._pendingAiGenFolderId??null})){e("\u4FDD\u5B58\u5931\u8D25,\u8BF7\u91CD\u8BD5");return}this._aiGenDlg.close(),this._toast(`\u5DF2\u751F\u6210\u300C${v}\u300D(${y.length} \u6BB5)`,"ok")}async _callAiGenerate(){let e=this._setAiGenErr,s=this._setAiGenStatus,t=this._aiGenTopic.value.trim();if(!t){e("\u8BF7\u8F93\u5165\u4E3B\u9898"),this._aiGenTopic.focus();return}if(!S.isConfigured()){e("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key");return}let l=S.get(),o=l.baseUrl.replace(/\/+$/,"")+"/chat/completions",r=this._aiGenStyle.value,u=this._aiGenSubmit,d=u.innerHTML;u.disabled=!0,u.innerHTML=`${g.sparkles}<span>\u751F\u6210\u4E2D...</span>`,e(""),s("\u6B63\u5728\u8BF7\u6C42 AI \u751F\u6210..."),this._aiGenTopic.disabled=!0,this._aiGenStyle.disabled=!0;try{let i=`\u4F60\u662F\u6717\u8BFB\u7A3F\u521B\u4F5C\u52A9\u624B\u3002\u7528\u6237\u7ED9\u4E00\u4E2A\u4E3B\u9898\u548C\u98CE\u683C,\u4F60\u540C\u65F6\u4EA7\u51FA:
1. \u4E00\u4E2A\u7B80\u6D01\u7684\u6587\u4EF6\u6807\u9898(4~20 \u4E2A\u6C49\u5B57 \u6216 3~12 \u4E2A\u82F1\u6587\u5355\u8BCD;\u4E0D\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u524D\u7F00;\u82E5\u4E3B\u9898\u672C\u8EAB\u5DF2\u7ECF\u662F\u7B80\u77ED\u540D\u8BCD\u53EF\u76F4\u63A5\u7528)
2. \u9002\u5408\u6717\u8BFB\u7684\u5185\u5BB9,**\u5DF2\u7ECF\u6309\u6BB5\u843D / \u53E5\u610F\u5207\u5206\u6210 3~12 \u6BB5**(\u6BCF\u6BB5\u5927\u81F4 60~150 \u5B57,\u81EA\u7136\u8FB9\u754C)

\u98CE\u683C\u8981\u6C42:${{"\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E":"\u901A\u4FD7\u8BB2\u89E3\u578B,\u76EE\u6807\u7EA6 200 \u5B57,3~5 \u6BB5,\u9002\u5408\u5927\u4F17\u542C\u4F17\u3002","\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0":"\u53D9\u4E8B\u7ED3\u6784,\u6709\u8D77\u627F\u8F6C\u5408,\u76EE\u6807\u7EA6 500 \u5B57,5~8 \u6BB5\u3002","\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3":"\u5C42\u5C42\u9012\u8FDB\u3001\u7531\u6D45\u5165\u6DF1,\u76EE\u6807\u7EA6 1000 \u5B57,8~12 \u6BB5\u3002","\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C":"\u53E4\u8BD7 / \u8BCD\u98CE\u683C,4~8 \u53E5,\u6BCF\u53E5 5~7 \u5B57\u6216 7 \u5B57\u4E3A\u4E3B,\u62BC\u97F5\u3002","\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD":"\u6177\u6168\u6FC0\u6602\u3001\u6709\u53F7\u53EC\u529B,\u76EE\u6807\u7EA6 300 \u5B57,4~6 \u6BB5\u3002"}[r]||"\u76EE\u6807\u7EA6 400 \u5B57,5~7 \u6BB5\u3002"}

\u4E25\u683C\u8981\u6C42:**\u53EA\u8F93\u51FA JSON**,\u683C\u5F0F:
{"title": "\u4F60\u7684\u6807\u9898", "segments": ["\u7B2C1\u6BB5\u539F\u6587", "\u7B2C2\u6BB5\u539F\u6587", ...]}

\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u5916\u7684\u5185\u5BB9\u3002`,c=new AbortController,f=setTimeout(()=>c.abort(),9e4),h;try{h=await fetch(o,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l.apiKey}`},body:JSON.stringify({model:S.getEffectiveModel(),messages:[{role:"system",content:i},{role:"user",content:`\u3010\u4E3B\u9898\u3011${t}
\u3010\u98CE\u683C\u3011${r}`}],temperature:.7,stream:!1}),signal:c.signal})}finally{clearTimeout(f)}if(!h.ok){let _=await h.text().catch(()=>h.statusText);throw new Error(`HTTP ${h.status} \u2014 ${_.slice(0,200)}`)}let y=(await h.json().catch(()=>null))?.choices?.[0]?.message?.content;if(typeof y!="string"||!y.trim())throw new Error("AI \u8FD4\u56DE\u4E3A\u7A7A");let L=null,w=[y.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],y];for(let _ of w)if(_)try{let p=JSON.parse(_.trim());if(p&&Array.isArray(p.segments)){L=p;break}}catch{}if(!L)throw new Error("AI \u8FD4\u56DE\u65E0\u6CD5\u89E3\u6790\u4E3A {title, segments[]} JSON");let I=String(L.title||"").trim().replace(/^[\s"'""''「」『』《》【】\[\]]+/,"").replace(/[\s"'""''「」『』《》【】\[\]]+$/,"").replace(/\s+/g," ").slice(0,64)||te(t,32),k=(L.segments||[]).map(_=>String(_||"").replace(/\s+/g," ").trim()).filter(Boolean).map(_=>_.length>500?_.slice(0,500):_);if(k.length===0)throw new Error("AI \u672A\u8FD4\u56DE\u4EFB\u4F55\u6BB5\u843D,\u8BF7\u91CD\u8BD5");let G=k.join(`

`);if(!await this.saveCurrent({text:G,segments:k,autoAll:!1,suggestedTitle:I,folderId:this._pendingAiGenFolderId??null}))throw new Error("\u4FDD\u5B58\u5931\u8D25,\u8BF7\u91CD\u8BD5");this._aiGenDlg.close(),this._toast(`\u5DF2\u751F\u6210\u300C${I}\u300D(${k.length} \u6BB5)`,"ok")}catch(a){let i=a?.message||String(a);a?.name==="AbortError"?e("AI \u751F\u6210\u8D85\u65F6 (90s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):a instanceof TypeError?e("\u7F51\u7EDC\u9519\u8BEF:"+i+" (\u53EF\u80FD\u662F CORS)"):e("AI \u751F\u6210\u5931\u8D25:"+i),console.error("[file-sidebar] AI generate failed:",a)}finally{u.disabled=!1,u.innerHTML=d,this._aiGenTopic.disabled=!1,this._aiGenStyle.disabled=!1,s("")}}_renderMoveTree(){let e=this._moveTree,s=this._sortRows(this._allFolders,r=>r.name),t=(r,u)=>{let d=s.filter(i=>i.parentId===r.id);return`
        <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${this._moveSelectedFolderId===r.id?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-white dark:hover:bg-slate-800"}"
             data-move-folder-id="${A(r.id)}" data-depth="${u}">
          <span class="shrink-0 w-4"></span>
          <span class="shrink-0 text-slate-500">${g.folder}</span>
          <span class="flex-1 truncate">${A(r.name)}</span>
        </div>
        ${d.map(i=>t(i,u+1)).join("")}
      `},l=s.filter(r=>r.parentId==null),o=this._moveSelectedFolderId==null;e.innerHTML=`
      <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${o?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-white dark:hover:bg-slate-800"}"
           data-move-folder-id="" data-depth="0">
        <span class="shrink-0 w-4"></span>
        <span class="shrink-0 text-slate-500">${g.folder}</span>
        <span class="flex-1">\u6839\u76EE\u5F55</span>
      </div>
      ${l.map(r=>t(r,1)).join("")}
    `,e.querySelectorAll("[data-move-folder-id]").forEach(r=>{r.addEventListener("click",()=>{this._moveSelectedFolderId=r.dataset.moveFolderId||null,this._renderMoveTree()})})}async _deleteFile(e){let s=this._allFiles.find(t=>t.id===e);if(s&&confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u300C${s.title}\u300D?`))try{await V.del(e),this._selectedFileId===e&&(this._selectedFileId=null,this._fireSelect()),this._toast(`\u5DF2\u5220\u9664\u300C${s.title}\u300D`,"ok"),await this.refresh()}catch(t){this._toast("\u5220\u9664\u5931\u8D25:"+(t?.message||t),"err")}}async _deleteFolder(e){let s=this._allFolders.find(d=>d.id===e);if(!s)return;let t=this._allFolders,l=new Set([e]),o=!0;for(;o;){o=!1;for(let d of t)d.parentId!=null&&l.has(d.parentId)&&!l.has(d.id)&&(l.add(d.id),o=!0)}let r=this._allFiles.filter(d=>d.folderId!=null&&l.has(d.folderId)).length;if(confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u5939\u300C${s.name}\u300D?
\u5C06\u540C\u65F6\u5220\u9664 ${l.size-1} \u4E2A\u5B50\u6587\u4EF6\u5939 + ${r} \u4E2A\u6587\u4EF6,\u4E14\u4E0D\u53EF\u64A4\u9500\u3002`))try{let d=await ge(e);this._selectedFileId&&d.files.includes(this._selectedFileId)&&(this._selectedFileId=null,this._fireSelect()),this._toast(`\u5DF2\u5220\u9664 (${d.folders.length} \u76EE\u5F55, ${d.files.length} \u6587\u4EF6)`,"ok"),await this.refresh()}catch(d){this._toast("\u5220\u9664\u5931\u8D25:"+(d?.message||d),"err")}}async _duplicateFile(e){let s=this._allFiles.find(o=>o.id===e);if(!s)return;let t=Date.now(),l={...s,id:Z("fl"),title:`${s.title} (\u526F\u672C)`,createdAt:t,updatedAt:t};try{await V.put(l),this._toast("\u5DF2\u590D\u5236","ok"),await this.refresh()}catch(o){this._toast("\u590D\u5236\u5931\u8D25:"+(o?.message||o),"err")}}_wireCtxMenu(){this._ctxMenu=this.querySelector("#ctx-menu"),this._onDocClickHideMenu=()=>this._hideCtxMenu(),this._onEscHideMenu=e=>{e.key==="Escape"&&this._hideCtxMenu()},document.addEventListener("click",this._onDocClickHideMenu),document.addEventListener("keydown",this._onEscHideMenu)}_showFolderMenu(e,s,t){this._showCtxMenu(e,s,[{label:"\u65B0\u5EFA\u6587\u4EF6",icon:g.filePlus,onClick:()=>this._openNewFile(t)},{label:"\u65B0\u5EFA\u6587\u4EF6\u5939",icon:g.folderPlus,onClick:()=>this._openNewFolder(t)},{label:"AI \u751F\u6210\u5230\u6B64",icon:g.sparkles,onClick:()=>this._openAiGenerate(t)},{label:"\u91CD\u547D\u540D",icon:g.edit,onClick:()=>this._openRename("folder",t)},{label:"\u79FB\u52A8\u5230...",icon:g.move,onClick:()=>this._openMove("folder",t)},{label:"\u5220\u9664",icon:g.trash,danger:!0,onClick:()=>this._deleteFolder(t)}])}_showCtxMenu(e,s,t){let l=this._ctxMenu;l.innerHTML=t.map((c,f)=>`
      <button type="button" data-ctx-i="${f}"
              class="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${c.danger?"text-red-600 dark:text-red-400":""}">
        <span class="shrink-0">${c.icon||""}</span><span>${A(c.label)}</span>
      </button>
    `).join(""),l.classList.remove("hidden");let o=180,r=t.length*32+8,u=window.innerWidth,d=window.innerHeight,a=Math.min(e,u-o-4),i=Math.min(s,d-r-4);l.style.left=`${a}px`,l.style.top=`${i}px`,l.querySelectorAll("[data-ctx-i]").forEach(c=>{c.addEventListener("click",f=>{f.stopPropagation();let h=Number(c.dataset.ctxI);l.classList.add("hidden"),t[h].onClick()})})}_hideCtxMenu(){this._ctxMenu?.classList.add("hidden")}_toast(e,s="info"){if(this._onToast)try{this._onToast(e,s);return}catch(l){console.error("[file-sidebar] onToast threw:",l)}let t=document.getElementById("__filesb-toast");t||(t=document.createElement("div"),t.id="__filesb-toast",t.className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300",document.body.appendChild(t)),t.textContent=e,t.className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300 "+(s==="ok"?"bg-green-600 text-white":s==="err"?"bg-red-600 text-white":"bg-slate-800 text-white"),t.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{try{t.remove()}catch{}},300)},1800)}};function A(F){return String(F??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("file-sidebar",de);O.addRoute("/",()=>import("./speak.js"));O.addRoute("/speak",()=>import("./speak.js"));O.addRoute("/404",()=>import("./speak.js"));console.info("[app] starting, port=",D("PORT","?"),"API_BASE=",D("API_BASE","(none)"));O.start();window.__app={router:O};
