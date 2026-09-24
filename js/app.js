import{a as M,b as S,c as te,d as g,f as R,g as T,h as U,i as se,j as ae,k as le,l as re,m as E,n as oe,o as V,p as B,q as I,r as ie,s as ne,t as de,u as ce}from"./chunk-G25RJVHP.js";var j=class{constructor(){this.routes=new Map,this.guards=[],this.current=null,this._pageInstance=null}addRoute(e,s){this.routes.set(e,s)}beforeEach(e){this.guards.push(e)}async navigate(e){if(e!==this.current){if(location.hash!=="#"+e){location.hash=e;return}await this._render(e)}}async start(){window.addEventListener("hashchange",()=>this._handleHash()),await this._handleHash()}async _handleHash(){let e=location.hash.replace(/^#/,"")||"/";await this._render(e)}async _render(e){let s=this.routes.get(e)||this.routes.get("/404");if(!s){console.warn(`[router] no route for "${e}"`);return}for(let a of this.guards)if(!await a(e))return;typeof this._pageInstance?.unmount=="function"&&this._pageInstance.unmount();let t=await s();this._pageInstance=t.default||t,M.emit("route:change",{path:e,page:this._pageInstance}),this.current=e}},q=new j;var z=class extends HTMLElement{connectedCallback(){this.innerHTML=`
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
    `,this.mainEl=this.querySelector("#main"),this.settingsEl=this.querySelector("#app-settings"),this.querySelector("#settings-btn").addEventListener("click",()=>{this.settingsEl?.open?.()}),M.on("route:change",({path:e,page:s})=>{this.mainEl.innerHTML="",typeof s.mount=="function"&&s.mount(this.mainEl)}),this.querySelector("#env-info").textContent=`PORT=${window.__ENV__?.PORT||"?"} \xB7 API=${window.__ENV__?.API_BASE||"(none)"}`}};customElements.define("app-shell",z);var D={play:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12l8.5 6V6z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>'},O=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="fixed bottom-0 inset-x-0 z-30 pointer-events-none">
        <div class="pointer-events-auto
                    bg-white/95 dark:bg-slate-800/95 backdrop-blur
                    border-t border-slate-200 dark:border-slate-700
                    px-3 sm:px-4 py-2.5
                    flex items-center gap-2 sm:gap-3">
          <button id="pb-prev" type="button" aria-label="\u4E0A\u4E00\u6BB5"
                  class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            ${D.prev}
          </button>
          <button id="pb-play" type="button" aria-label="\u64AD\u653E/\u6682\u505C"
                  class="shrink-0 inline-flex items-center justify-center px-3 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <span id="pb-play-icon" class="inline-flex items-center justify-center">${D.play}</span>
          </button>
          <button id="pb-next" type="button" aria-label="\u4E0B\u4E00\u6BB5"
                  class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            ${D.next}
          </button>
          <div class="flex-1 min-w-0 px-1 sm:px-2">
            <div id="pb-status" class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">\u8FD8\u6CA1\u6709\u5206\u6BB5</div>
          </div>
        </div>
      </div>
    `,this._prevBtn=this.querySelector("#pb-prev"),this._playBtn=this.querySelector("#pb-play"),this._nextBtn=this.querySelector("#pb-next"),this._playIconEl=this.querySelector("#pb-play-icon"),this._statusEl=this.querySelector("#pb-status"),this._state={total:0,index:-1,playing:!1,paused:!1},this._prevBtn.addEventListener("click",()=>M.emit("player:cmd",{action:"prev"})),this._nextBtn.addEventListener("click",()=>M.emit("player:cmd",{action:"next"})),this._playBtn.addEventListener("click",()=>{let e=this._state.paused?"resume":this._state.playing?"pause":"play";M.emit("player:cmd",{action:e})}),M.on("playback:state",e=>this._render(e))}_render(e){this._state={total:Number(e?.total)||0,index:Number.isInteger(e?.index)?e.index:-1,playing:!!e?.playing,paused:!!e?.paused};let{total:s,index:t,playing:a,paused:i}=this._state,o=s>0;this._prevBtn.disabled=!o,this._nextBtn.disabled=!o,this._playBtn.disabled=!o,this._playIconEl.innerHTML=a?D.pause:D.play,o?i&&t>=0?this._statusEl.textContent=`\u5DF2\u6682\u505C \xB7 \u7B2C ${t+1} / ${s} \u6BB5`:a&&t>=0?this._statusEl.textContent=`\u6B63\u5728\u6717\u8BFB \xB7 \u7B2C ${t+1} / ${s} \u6BB5`:this._statusEl.textContent=`\u5171 ${s} \u6BB5 \xB7 \u70B9 \u25B6 \u5F00\u59CB\u6717\u8BFB`:this._statusEl.textContent="\u7C98\u8D34\u6587\u672C\u540E\u70B9 \u2728 AI \u62C6\u5206\u5F00\u59CB\u6717\u8BFB"}};customElements.define("app-player-bar",O);var K=class extends HTMLElement{connectedCallback(){this._built||(this._build(),this._built=!0)}_build(){let e=g.get(),s=g.isConfigured(),t=T("zh"),a=T("en");this.innerHTML=`
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
                 placeholder="${w(g.DEFAULTS.baseUrl)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
          <input id="ai-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${w(g.DEFAULTS.model)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">
            \u5FEB\u901F\u6A21\u578B (Fast Model)
            <span class="text-xs text-slate-400">\u2014 \u300C\u4F7F\u7528\u5FEB\u901F\u6A21\u578B\u300D\u5F00\u5173 ON \u65F6\u4F7F\u7528</span>
          </span>
          <input id="ai-fast-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${w(g.DEFAULTS.fastModel)}" />
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
    `}_wireAi(){let e=g.get();this.querySelector("#ai-key").value=e.apiKey,this.querySelector("#ai-base").value=e.baseUrl,this.querySelector("#ai-model").value=e.model,this.querySelector("#ai-fast-model").value=e.fastModel,this.querySelector("#ai-use-fast-model").checked=e.fastModelEnabled===!0,this.querySelector("#ai-thinking").checked=e.thinkingEnabled!==!1;let s=this.querySelector("#ai-status"),t=this.querySelector("#ai-msg"),a=this.querySelector("#ai-reply"),i=l=>{s.textContent=l?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E",s.className="ml-auto text-xs px-2 py-0.5 rounded-full "+(l?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")},o=(l,r="info")=>{t.textContent=l||"",t.className="text-xs "+(r==="ok"?"text-green-600 dark:text-green-400":r==="err"?"text-red-600 dark:text-red-400":"text-slate-500")},u=()=>({apiKey:this.querySelector("#ai-key").value.trim(),baseUrl:this.querySelector("#ai-base").value.trim()||g.DEFAULTS.baseUrl,model:this.querySelector("#ai-model").value.trim()||g.DEFAULTS.model,fastModel:this.querySelector("#ai-fast-model").value.trim()||g.DEFAULTS.fastModel,fastModelEnabled:this.querySelector("#ai-use-fast-model").checked===!0,thinkingEnabled:this.querySelector("#ai-thinking").checked===!0});this.querySelector("#ai-save").addEventListener("click",()=>{let l=u();if(!l.apiKey){o("\u8BF7\u586B\u5199 API Key","err");return}g.save(l),i(!0),o(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),a.classList.add("hidden"),a.textContent="",this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}),this.querySelector("#ai-reset").addEventListener("click",()=>{g.clear(),this.querySelector("#ai-key").value="",this.querySelector("#ai-base").value="",this.querySelector("#ai-model").value="",this.querySelector("#ai-fast-model").value="",this.querySelector("#ai-use-fast-model").checked=!1,this.querySelector("#ai-thinking").checked=!0,i(!1),o("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09"),a.classList.add("hidden"),a.textContent=""});let d=this.querySelector("#ai-test");d.addEventListener("click",async()=>{let l=u();if(!l.apiKey){o("\u8BF7\u586B\u5199 API Key","err");return}g.save(l),d.disabled=!0;let r=d.textContent;d.textContent="\u6D4B\u8BD5\u4E2D...",o("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info"),a.classList.add("hidden"),a.textContent="";try{let n=await g.test(l,{timeoutMs:3e4});o(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),a.textContent=n,a.classList.remove("hidden"),i(!0),this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}catch(n){o(`\u8054\u901A\u5931\u8D25\uFF1A${n?.message||String(n)}`,"err"),i(!1)}finally{d.disabled=!1,d.textContent=r}})}_renderTtsSection(e,s,t){let a=t.provider==="edge"?"edge-tts-api":t.provider==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",i=t.provider==="minimax"||t.provider==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";return`
      <section data-tts-lang="${e}" class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>${w(s)}</strong>
          <span data-role="status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${i}">
            \u5F53\u524D: ${w(a)}
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
                   placeholder="${w(E.DEFAULT_EDGE_BASE_URL)}" />
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
                   placeholder="${w(E.DEFAULT_MINIMAX_BASE_URL)}" />
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
    `}_$(e,s){return this.querySelector(`section[data-tts-lang="${e}"] [data-role="${s}"]`)}_wireTts(e){let s=T(e);if(!this.querySelector(`section[data-tts-lang="${e}"]`))return;let a=this._$(e,"provider"),i=this._$(e,"browser-block"),o=this._$(e,"edge-block"),u=this._$(e,"minimax-block"),d=this._$(e,"status"),l=this._$(e,"msg");a.value=s.provider;let r=(p,v)=>{let h=this._$(e,p),k=this._$(e,v),L=()=>{k.textContent=h.value};h.addEventListener("input",L),L()};r("browser-rate","browser-rate-val"),r("browser-pitch","browser-pitch-val"),r("browser-volume","browser-volume-val"),r("edge-rate","edge-rate-val"),r("edge-pitch","edge-pitch-val"),r("edge-volume","edge-volume-val"),r("minimax-speed","minimax-speed-val"),r("minimax-vol","minimax-vol-val"),r("minimax-pitch","minimax-pitch-val"),this._$(e,"edge-base").value=s.edgeBaseUrl,this._$(e,"minimax-base").value=s.minimaxBaseUrl,this._$(e,"minimax-model").value=s.minimaxModel;let n=this._$(e,"browser-voice"),c=()=>{let p=se();n.innerHTML='<option value="">(\u7CFB\u7EDF\u9ED8\u8BA4)</option>'+p.map(h=>`<option value="${N(h.name)}">${w(h.name)} (${w(h.lang||"?")})</option>`).join("");let v=T(e).voice;v&&(n.value=v)};c();let x=ae(c);this._ttsCleanups.push(x);let b=this._$(e,"edge-voice"),m=[],G=async()=>{b.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';try{let p=await le(this._$(e,"edge-base").value.trim()||E.DEFAULT_EDGE_BASE_URL);m=p.voices,b.innerHTML=m.map(h=>`<option value="${N(h.shortName)}">${w(h.shortName)} \u2014 ${w(h.friendlyName||h.gender||"")}</option>`).join("");let v=T(e).voice;v&&(b.value=v),_(`\u5DF2\u52A0\u8F7D ${p.count} \u4E2A edge \u8BED\u97F3`,"ok")}catch(p){b.innerHTML='<option value="">(\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u53F3\u4FA7\u5237\u65B0\u91CD\u8BD5)</option>',_("\u52A0\u8F7D edge \u8BED\u97F3\u5931\u8D25\uFF1A"+(p?.message||p),"err")}},F=this._$(e,"minimax-voice"),Y=this._$(e,"minimax-voice-meta"),H=async()=>{F.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';let p=g.get().apiKey,v=this._$(e,"minimax-base").value.trim()||E.DEFAULT_MINIMAX_BASE_URL;try{let h=await re(v,p),k=h.voices&&h.voices.length?h.voices:R,L=!!(h.voices&&h.voices.length);F.innerHTML=k.map(C=>{let Q=C.voice_id||C.shortName,ee=C.voice_name||C.friendlyName||"";return`<option value="${N(Q)}">${w(Q)}${ee?" \u2014 "+w(ee):""}${C.source&&C.source!=="system"?" ("+C.source+")":""}</option>`}).join("");let J=T(e).minimaxVoice;J&&(F.value=J),Y.textContent=L?`\u5171 ${k.length} \u4E2A`:`\u79BB\u7EBF\u515C\u5E95 (${k.length} \u4E2A\u5E38\u7528\u97F3\u8272;\u586B\u597D API Key \u540E\u70B9\u300C\u5237\u65B0\u97F3\u8272\u5217\u8868\u300D)`,_(L?`\u5DF2\u52A0\u8F7D ${k.length} \u4E2A MiniMax \u97F3\u8272`:"\u672A\u914D\u7F6E API Key,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95\u6E05\u5355","ok")}catch(h){F.innerHTML=R.map(L=>`<option value="${N(L.voice_id)}">${w(L.voice_id)} \u2014 ${w(L.voice_name)}</option>`).join("");let k=T(e).minimaxVoice;k&&(F.value=k),Y.textContent=`\u52A0\u8F7D\u5931\u8D25,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95 (${R.length} \u4E2A)`,_("\u52A0\u8F7D MiniMax \u97F3\u8272\u5931\u8D25:"+(h?.message||h),"err")}};this[`_refreshMinimaxVoices_${e}`]=H;let P=p=>{let v=p==="edge"?"edge-tts-api":p==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",h=p==="minimax"||p==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";d.textContent=`\u5F53\u524D: ${v}`,d.className="ml-auto text-xs px-2 py-0.5 rounded-full "+h},_=(p,v="info")=>{l.textContent=p||"",l.className="text-xs "+(v==="ok"?"text-green-600 dark:text-green-400":v==="err"?"text-red-600 dark:text-red-400":"text-slate-500")};a.addEventListener("change",()=>{let p=a.value;i.classList.toggle("hidden",p!=="browser"),o.classList.toggle("hidden",p!=="edge"),u.classList.toggle("hidden",p!=="minimax"),P(p),p==="edge"&&m.length===0&&G(),p==="minimax"&&H()}),s.provider==="edge"&&G(),s.provider==="minimax"&&H();let Z=()=>{let p=a.value,v={provider:p,edgeBaseUrl:this._$(e,"edge-base").value.trim()||E.DEFAULT_EDGE_BASE_URL,minimaxBaseUrl:this._$(e,"minimax-base").value.trim()||E.DEFAULT_MINIMAX_BASE_URL,minimaxModel:this._$(e,"minimax-model").value||E.DEFAULT_MINIMAX_MODEL};return p==="browser"?{...v,voice:n.value.trim(),rate:Number(this._$(e,"browser-rate").value),pitch:Number(this._$(e,"browser-pitch").value),volume:Number(this._$(e,"browser-volume").value)}:p==="edge"?{...v,voice:b.value.trim(),rate:Number(this._$(e,"edge-rate").value),pitch:Number(this._$(e,"edge-pitch").value),volume:Number(this._$(e,"edge-volume").value)}:{...v,minimaxVoice:F.value.trim(),minimaxSpeed:Number(this._$(e,"minimax-speed").value),minimaxVol:Number(this._$(e,"minimax-vol").value),minimaxPitch:Number(this._$(e,"minimax-pitch").value)}};this._$(e,"save").addEventListener("click",()=>{let p=Z();U(e,p),_(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),P(p.provider)});let W=this._$(e,"minimax-refresh");W&&W.addEventListener("click",()=>H());let A=this._$(e,"test");A.addEventListener("click",async()=>{let p=Z();U(e,p),P(p.provider),A.disabled=!0;let v=A.textContent;A.textContent="\u64AD\u653E\u4E2D...",_("\u6B63\u5728\u5408\u6210\u5E76\u64AD\u653E...","info");try{let h=e==="en"?"Hello, this is a test read. You should hear the configured voice and speed.":"\u4F60\u597D,\u8FD9\u662F\u6D4B\u8BD5\u6717\u8BFB\u3002\u53EF\u4EE5\u542C\u5230\u5F53\u524D\u8BED\u97F3\u4E0E\u8BED\u901F\u3002";await E.speak({text:h,lang:e,...p},{onStart:()=>_("\u64AD\u653E\u4E2D...","info"),onEnd:()=>_(`\u64AD\u653E\u5B8C\u6BD5 (${new Date().toLocaleTimeString()})`,"ok"),onError:k=>_("\u64AD\u653E\u5931\u8D25\uFF1A"+(k?.message||k),"err")})}catch(h){_("\u64AD\u653E\u5931\u8D25\uFF1A"+(h?.message||h),"err")}finally{A.disabled=!1,A.textContent=v}}),this._$(e,"stop").addEventListener("click",()=>{E.stop(),_("\u5DF2\u505C\u6B62","info")})}_refreshMinimaxVoices(e){this[`_refreshMinimaxVoices_${e}`]?.()}_renderEnvSection(){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <strong>\u73AF\u5883\u53D8\u91CF (\u6765\u81EA .env)</strong>
        <table class="w-full text-sm">
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">PORT</th><td class="py-1 font-mono">${S("PORT","?")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">API_BASE</th><td class="py-1 font-mono">${S("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_BASE_URL</th><td class="py-1 font-mono">${S("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_MODEL</th><td class="py-1 font-mono">${S("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_FAST_MODEL</th><td class="py-1 font-mono">${S("AI_FAST_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">DEBUG</th><td class="py-1 font-mono">${S("DEBUG","false")}</td></tr>
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
    `}_wireLocalData(){this.querySelector("#clear-storage").addEventListener("click",()=>{confirm("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?")&&te.clear()})}open(){this._built||(this._build(),this._built=!0),this._dlg.showModal()}close(){this._dlg.close()}disconnectedCallback(){for(let e of this._ttsCleanups||[])e?.()}};function w($){return String($??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function N($){return String($??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("app-settings",K);var f={folder:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',folderOpen:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14l1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y1="12"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',edit:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',move:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',chevronRight:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',chevronDown:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',panelLeft:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>',panelRight:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="15" y1="4" x2="15" y2="20"/></svg>'},X=class extends HTMLElement{constructor(){super(),this._collapsed=!1,this._allFolders=[],this._allFiles=[],this._expanded=new Set,this._search="",this._sortBy="updatedAt",this._sortDir="desc",this._selectedFileId=null,this._currentFolderId=null,this._onFileSelect=null,this._onToast=null}set onFileSelect(e){this._onFileSelect=typeof e=="function"?e:null}set onToast(e){this._onToast=typeof e=="function"?e:null}setSelected(e,s={}){if(this._selectedFileId=e,e){let t=this._allFiles.find(a=>a.id===e);if(t){this._currentFolderId=t.folderId??null;let a=t.folderId,i=new Set;for(;a!=null&&!i.has(a);)i.add(a),this._expanded.add(a),a=this._allFolders.find(o=>o.id===a)?.parentId??null}}s.silent||this._render()}async refresh(){try{let[e,s]=await Promise.all([B.getAll(),I.getAll()]);this._allFolders=e||[],this._allFiles=s||[]}catch(e){console.error("[file-sidebar] refresh failed:",e),this._toast("\u52A0\u8F7D\u5931\u8D25:"+(e?.message||e),"err");return}this._render()}async saveCurrent({text:e,segments:s,autoAll:t,suggestedTitle:a,folderId:i=null}={}){let o=String(e||"").trim();if(!o)return this._toast("\u5F53\u524D\u6717\u8BFB\u9875\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u672C","err"),null;let u=(a||ce(o)).slice(0,80),d=Date.now(),l={id:V("fl"),folderId:i??null,title:u,text:e,segments:Array.isArray(s)?s:[],autoAll:t===!0,createdAt:d,updatedAt:d};try{return await I.put(l),this._selectedFileId=l.id,this._toast(`\u5DF2\u4FDD\u5B58\u300C${u}\u300D`,"ok"),await this.refresh(),this.setSelected(l.id,{silent:!0}),l}catch(r){return this._toast("\u4FDD\u5B58\u5931\u8D25:"+(r?.message||r),"err"),null}}toggleCollapse(){this._collapsed=!this._collapsed,this._render()}connectedCallback(){this._built||(this._built=!0,this.innerHTML=`
      <aside class="relative h-full flex shrink-0 transition-[width] duration-200 ease-out
                    bg-slate-50 dark:bg-slate-900/50 border-r border-slate-200 dark:border-slate-700"
             id="sidebar-body">
        <!-- \u6298\u53E0\u6001:\u53EA\u5269\u7A84\u6761 + toggle -->
        <div id="collapsed-bar"
             class="hidden h-full w-10 flex-col items-center py-2 gap-2 bg-slate-100 dark:bg-slate-800/60">
          <button id="expand-btn" type="button" title="\u5C55\u5F00\u6587\u4EF6\u6811"
                  class="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
            ${f.panelRight}
          </button>
        </div>

        <!-- \u5C55\u5F00\u6001:\u5DE5\u5177\u680F + \u6811 + dialogs -->
        <div id="expanded-panel" class="hidden h-full w-72 sm:w-80 flex-col min-h-0">
          <header class="flex items-center gap-1 px-2 sm:px-3 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <span class="inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-slate-700 dark:text-slate-200 shrink-0">
              ${f.folder}<span>\u6587\u4EF6</span>
            </span>
            <div class="flex-1"></div>
            <button id="new-folder" type="button" title="\u65B0\u5EFA\u6587\u4EF6\u5939"
                    class="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
              ${f.plus}
            </button>
            <button id="collapse-btn" type="button" title="\u6298\u53E0\u4FA7\u680F"
                    class="p-1.5 rounded-md text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition">
              ${f.panelLeft}
            </button>
          </header>

          <div class="flex items-center gap-2 px-2 sm:px-3 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <label class="flex-1 inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-slate-300 dark:border-slate-600 focus-within:border-blue-500 transition min-w-0">
              ${f.search}
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
    `,this._body=this.querySelector("#sidebar-body"),this._collapsedBar=this.querySelector("#collapsed-bar"),this._expandedPanel=this.querySelector("#expanded-panel"),this._wireToolbar(),this._wireDialogs(),this._wireCtxMenu(),this._unsubRemote=oe(e=>{e.store!=="folders"&&e.store!=="files"||(e.store==="files"&&e.op==="del"&&e.key===this._selectedFileId&&(this._selectedFileId=null),this.refresh())}),this._render(),this.refresh())}disconnectedCallback(){this._unsubRemote?.(),document.removeEventListener("click",this._onDocClickHideMenu),document.removeEventListener("keydown",this._onEscHideMenu)}_render(){this._body&&(this._collapsed?(this._body.classList.remove("w-72","sm:w-80"),this._body.classList.add("w-10"),this._collapsedBar.classList.remove("hidden"),this._collapsedBar.classList.add("flex"),this._expandedPanel.classList.add("hidden"),this._expandedPanel.classList.remove("flex")):(this._body.classList.add("w-72","sm:w-80"),this._body.classList.remove("w-10"),this._collapsedBar.classList.add("hidden"),this._collapsedBar.classList.remove("flex"),this._expandedPanel.classList.remove("hidden"),this._expandedPanel.classList.add("flex")),this._renderTree())}_renderTree(){if(!this._expandedPanel)return;let e=this.querySelector("#tree-scroller");if(!e)return;let s=this._sortRows(this._allFolders,l=>l.name,"title"),t=this._sortRows(this._allFiles,l=>l.title,"title"),a=(this._search||"").toLowerCase(),i=a?new Set(this._allFiles.filter(l=>(l.title||"").toLowerCase().includes(a)||(l.text||"").toLowerCase().includes(a)).map(l=>l.id)):null;if(a){let l=t.filter(r=>i.has(r.id));e.innerHTML=`
        <div class="text-xs text-slate-500 dark:text-slate-400 px-2 py-1.5">
          ${i.size} \u4E2A\u5339\u914D
        </div>
        ${l.length?l.map(r=>this._renderSearchResultRow(r)).join(""):'<div class="text-xs text-slate-400 dark:text-slate-500 px-2 py-3 text-center">\u65E0\u5339\u914D</div>'}
      `,e.querySelectorAll("[data-search-file-id]").forEach(r=>{r.addEventListener("click",()=>{let n=r.dataset.searchFileId;this._selectedFileId=n;let c=this._allFiles.find(x=>x.id===n);if(c){this._currentFolderId=c.folderId??null;let x=c.folderId,b=new Set;for(;x!=null&&!b.has(x);)b.add(x),this._expanded.add(x),x=this._allFolders.find(m=>m.id===x)?.parentId??null}this._fireSelect(),this._render()})});return}let o=s.filter(l=>l.parentId==null),u=(l,r)=>{let n=this._expanded.has(l.id),c=s.filter(b=>b.parentId===l.id),x=t.filter(b=>b.folderId===l.id);return`
        <div>
          <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                      hover:bg-white dark:hover:bg-slate-800"
               data-folder-id="${y(l.id)}" data-depth="${r}">
            <button type="button" data-toggle="${y(l.id)}" class="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400">
              ${c.length+x.length>0?n?f.chevronDown:f.chevronRight:'<span class="w-4"></span>'}
            </button>
            <span class="shrink-0 text-slate-500 dark:text-slate-400">${n?f.folderOpen:f.folder}</span>
            <span class="flex-1 truncate" title="${y(l.name)}">${y(l.name)}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500">${c.length+x.length}</span>
            <button type="button" data-folder-menu="${y(l.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
          </div>
          ${n?`<div class="ml-4">
            ${c.map(b=>u(b,r+1)).join("")}
            ${x.map(b=>this._renderFileRow(b,r+1)).join("")}
          </div>`:""}
        </div>
      `},d=t.filter(l=>l.folderId==null);e.innerHTML=`
      <div class="ml-4">
        ${o.map(l=>u(l,1)).join("")}
        ${d.map(l=>this._renderFileRow(l,1)).join("")}
        ${o.length+d.length===0?'<div class="text-xs text-slate-400 dark:text-slate-500 px-3 py-3 text-center">\u8FD8\u6CA1\u6709\u5185\u5BB9</div>':""}
      </div>
    `,e.querySelectorAll("[data-toggle]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();let n=l.dataset.toggle;this._expanded.has(n)?this._expanded.delete(n):this._expanded.add(n),this._renderTree()})}),e.querySelectorAll("[data-folder-id]").forEach(l=>{l.addEventListener("click",r=>{if(r.target.closest("[data-toggle]")||r.target.closest("[data-folder-menu]"))return;let n=l.dataset.folderId;this._expanded.has(n)?this._expanded.delete(n):this._expanded.add(n),this._renderTree()})}),e.querySelectorAll("[data-folder-menu]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();let n=l.dataset.folderMenu;this._showCtxMenu(r.clientX,r.clientY,[{label:"\u91CD\u547D\u540D",icon:f.edit,onClick:()=>this._openRename("folder",n)},{label:"\u79FB\u52A8\u5230...",icon:f.move,onClick:()=>this._openMove("folder",n)},{label:"\u5220\u9664",icon:f.trash,danger:!0,onClick:()=>this._deleteFolder(n)}])})}),e.querySelectorAll("[data-file-id]").forEach(l=>{l.addEventListener("click",()=>{this._selectedFileId=l.dataset.fileId,this._fireSelect(),this._renderTree()})}),e.querySelectorAll("[data-file-menu]").forEach(l=>{l.addEventListener("click",r=>{r.stopPropagation();let n=l.dataset.fileMenu;this._showCtxMenu(r.clientX,r.clientY,[{label:"\u91CD\u547D\u540D",icon:f.edit,onClick:()=>this._openRename("file",n)},{label:"\u590D\u5236\u4E00\u4EFD",icon:f.copy,onClick:()=>this._duplicateFile(n)},{label:"\u79FB\u52A8\u5230...",icon:f.move,onClick:()=>this._openMove("file",n)},{label:"\u5220\u9664",icon:f.trash,danger:!0,onClick:()=>this._deleteFile(n)}])})})}_renderFileRow(e,s){return`
      <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                  ${this._selectedFileId===e.id?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200":"hover:bg-white dark:hover:bg-slate-800"}"
           data-file-id="${y(e.id)}" data-depth="${s}">
        <span class="shrink-0 w-5 h-5"></span>
        <span class="shrink-0 text-slate-500 dark:text-slate-400">${f.file}</span>
        <span class="flex-1 truncate" title="${y(e.title)}">${y(e.title)}</span>
        <button type="button" data-file-menu="${y(e.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
      </div>
    `}_renderSearchResultRow(e){let s=(e.text||"").replace(/\s+/g," ").slice(0,80);return`
      <button type="button" data-search-file-id="${y(e.id)}"
              class="w-full text-left px-2 py-2 rounded hover:bg-white dark:hover:bg-slate-800 transition flex flex-col gap-0.5">
        <div class="flex items-center gap-1.5 text-sm">
          <span class="shrink-0 text-slate-500 dark:text-slate-400">${f.file}</span>
          <span class="flex-1 truncate font-medium">${y(e.title)}</span>
        </div>
        ${s?`<div class="text-xs text-slate-500 dark:text-slate-400 truncate ml-6">${y(s)}\u2026</div>`:""}
      </button>
    `}_sortRows(e,s){let t=this._sortBy,a=this._sortDir==="asc"?1:-1,i=[...e];return t==="title"?i.sort((o,u)=>String(s(o)||"").localeCompare(String(s(u)||""),"zh-Hans-CN")*a):i.sort((o,u)=>((o[t]||0)-(u[t]||0))*a),i}_fireSelect(){let e=this._allFiles.find(s=>s.id===this._selectedFileId)||null;try{this._onFileSelect?.(e)}catch(s){console.error("[file-sidebar] onFileSelect threw:",s)}}_wireToolbar(){this.querySelector("#new-folder").addEventListener("click",()=>this._openNewFolder()),this.querySelector("#search-input").addEventListener("input",e=>{this._search=e.target.value.trim(),this._renderTree()}),this.querySelector("#sort-select").addEventListener("change",e=>{let[s,t]=e.target.value.split(":");this._sortBy=s,this._sortDir=t,this._renderTree()}),this.querySelector("#collapse-btn").addEventListener("click",()=>this.toggleCollapse()),this.querySelector("#expand-btn").addEventListener("click",()=>this.toggleCollapse())}_wireDialogs(){let e=this.querySelector("#new-folder-dlg"),s=this.querySelector("#new-folder-name"),t=this.querySelector("#new-folder-error"),a=c=>{c?(t.textContent=c,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent="")};e.querySelector('[data-action="close"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="cancel"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="save"]').addEventListener("click",async()=>{let c=s.value.trim();if(!c){a("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}try{await B.put({id:V("f"),parentId:null,name:c,createdAt:Date.now(),updatedAt:Date.now()}),s.value="",a(""),e.close(),await this.refresh(),this._toast(`\u5DF2\u521B\u5EFA\u300C${c}\u300D`,"ok")}catch(x){a("\u521B\u5EFA\u5931\u8D25:"+(x?.message||x))}}),s.addEventListener("input",()=>a("")),s.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),e.querySelector('[data-action="save"]').click())}),this._renameTarget=null;let i=this.querySelector("#rename-dlg"),o=this.querySelector("#rename-input"),u=this.querySelector("#rename-error"),d=this.querySelector("#rename-title"),l=c=>{c?(u.textContent=c,u.classList.remove("hidden")):(u.classList.add("hidden"),u.textContent="")};i.querySelector('[data-action="close"]').addEventListener("click",()=>i.close()),i.querySelector('[data-action="cancel"]').addEventListener("click",()=>i.close()),i.querySelector('[data-action="save"]').addEventListener("click",async()=>{let c=o.value.trim();if(!c){l("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}if(!this._renameTarget){i.close();return}let{kind:x,id:b}=this._renameTarget;try{if(x==="file"){let m=await I.get(b);if(!m)throw new Error("\u6587\u4EF6\u4E0D\u5B58\u5728");m.title=c,m.updatedAt=Date.now(),await I.put(m)}else{let m=await B.get(b);if(!m)throw new Error("\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");m.name=c,m.updatedAt=Date.now(),await B.put(m)}l(""),i.close(),await this.refresh(),this._toast("\u5DF2\u91CD\u547D\u540D","ok")}catch(m){l("\u91CD\u547D\u540D\u5931\u8D25:"+(m?.message||m))}}),o.addEventListener("input",()=>l("")),o.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),i.querySelector('[data-action="save"]').click())}),this._renameDlg=i,this._renameInput=o,this._renameTitle=d,this._moveTarget=null,this._moveSelectedFolderId=null;let r=this.querySelector("#move-dlg"),n=this.querySelector("#move-tree");r.querySelector('[data-action="close"]').addEventListener("click",()=>r.close()),r.querySelector('[data-action="cancel"]').addEventListener("click",()=>r.close()),r.querySelector('[data-action="save"]').addEventListener("click",async()=>{if(!this._moveTarget){r.close();return}let{kind:c,id:x}=this._moveTarget,b=this._moveSelectedFolderId??null;try{c==="file"?await ne(x,b):await de(x,b),r.close(),await this.refresh(),this._toast("\u5DF2\u79FB\u52A8","ok")}catch(m){this._toast("\u79FB\u52A8\u5931\u8D25:"+(m?.message||m),"err")}}),this._moveDlg=r,this._moveTree=n}_openNewFolder(){this.querySelector("#new-folder-name").value="",this.querySelector("#new-folder-error").classList.add("hidden"),this.querySelector("#new-folder-dlg").showModal(),setTimeout(()=>this.querySelector("#new-folder-name").focus(),0)}_openRename(e,s){this._renameTarget={kind:e,id:s};let t=e==="file"?this._allFiles.find(a=>a.id===s)?.title:this._allFolders.find(a=>a.id===s)?.name;this._renameTitle.textContent=e==="file"?"\u91CD\u547D\u540D\u6587\u4EF6":"\u91CD\u547D\u540D\u6587\u4EF6\u5939",this._renameInput.value=t||"",this.querySelector("#rename-error").classList.add("hidden"),this._renameDlg.showModal(),setTimeout(()=>{this._renameInput.focus(),this._renameInput.select()},0)}_openMove(e,s){this._moveTarget={kind:e,id:s};let t=e==="file"?this._allFiles.find(a=>a.id===s)?.folderId??null:this._allFolders.find(a=>a.id===s)?.parentId??null;this._moveSelectedFolderId=t,this._renderMoveTree(),this._moveDlg.showModal()}_renderMoveTree(){let e=this._moveTree,s=this._sortRows(this._allFolders,o=>o.name),t=(o,u)=>{let d=s.filter(r=>r.parentId===o.id);return`
        <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${this._moveSelectedFolderId===o.id?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-white dark:hover:bg-slate-800"}"
             data-move-folder-id="${y(o.id)}" data-depth="${u}">
          <span class="shrink-0 w-4"></span>
          <span class="shrink-0 text-slate-500">${f.folder}</span>
          <span class="flex-1 truncate">${y(o.name)}</span>
        </div>
        ${d.map(r=>t(r,u+1)).join("")}
      `},a=s.filter(o=>o.parentId==null),i=this._moveSelectedFolderId==null;e.innerHTML=`
      <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${i?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-white dark:hover:bg-slate-800"}"
           data-move-folder-id="" data-depth="0">
        <span class="shrink-0 w-4"></span>
        <span class="shrink-0 text-slate-500">${f.folder}</span>
        <span class="flex-1">\u6839\u76EE\u5F55</span>
      </div>
      ${a.map(o=>t(o,1)).join("")}
    `,e.querySelectorAll("[data-move-folder-id]").forEach(o=>{o.addEventListener("click",()=>{this._moveSelectedFolderId=o.dataset.moveFolderId||null,this._renderMoveTree()})})}async _deleteFile(e){let s=this._allFiles.find(t=>t.id===e);if(s&&confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u300C${s.title}\u300D?`))try{await I.del(e),this._selectedFileId===e&&(this._selectedFileId=null,this._fireSelect()),this._toast(`\u5DF2\u5220\u9664\u300C${s.title}\u300D`,"ok"),await this.refresh()}catch(t){this._toast("\u5220\u9664\u5931\u8D25:"+(t?.message||t),"err")}}async _deleteFolder(e){let s=this._allFolders.find(d=>d.id===e);if(!s)return;let t=this._allFolders,a=new Set([e]),i=!0;for(;i;){i=!1;for(let d of t)d.parentId!=null&&a.has(d.parentId)&&!a.has(d.id)&&(a.add(d.id),i=!0)}let o=this._allFiles.filter(d=>d.folderId!=null&&a.has(d.folderId)).length;if(confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u5939\u300C${s.name}\u300D?
\u5C06\u540C\u65F6\u5220\u9664 ${a.size-1} \u4E2A\u5B50\u6587\u4EF6\u5939 + ${o} \u4E2A\u6587\u4EF6,\u4E14\u4E0D\u53EF\u64A4\u9500\u3002`))try{let d=await ie(e);this._selectedFileId&&d.files.includes(this._selectedFileId)&&(this._selectedFileId=null,this._fireSelect()),this._toast(`\u5DF2\u5220\u9664 (${d.folders.length} \u76EE\u5F55, ${d.files.length} \u6587\u4EF6)`,"ok"),await this.refresh()}catch(d){this._toast("\u5220\u9664\u5931\u8D25:"+(d?.message||d),"err")}}async _duplicateFile(e){let s=this._allFiles.find(i=>i.id===e);if(!s)return;let t=Date.now(),a={...s,id:V("fl"),title:`${s.title} (\u526F\u672C)`,createdAt:t,updatedAt:t};try{await I.put(a),this._toast("\u5DF2\u590D\u5236","ok"),await this.refresh()}catch(i){this._toast("\u590D\u5236\u5931\u8D25:"+(i?.message||i),"err")}}_wireCtxMenu(){this._ctxMenu=this.querySelector("#ctx-menu"),this._onDocClickHideMenu=()=>this._hideCtxMenu(),this._onEscHideMenu=e=>{e.key==="Escape"&&this._hideCtxMenu()},document.addEventListener("click",this._onDocClickHideMenu),document.addEventListener("keydown",this._onEscHideMenu)}_showCtxMenu(e,s,t){let a=this._ctxMenu;a.innerHTML=t.map((n,c)=>`
      <button type="button" data-ctx-i="${c}"
              class="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${n.danger?"text-red-600 dark:text-red-400":""}">
        <span class="shrink-0">${n.icon||""}</span><span>${y(n.label)}</span>
      </button>
    `).join(""),a.classList.remove("hidden");let i=180,o=t.length*32+8,u=window.innerWidth,d=window.innerHeight,l=Math.min(e,u-i-4),r=Math.min(s,d-o-4);a.style.left=`${l}px`,a.style.top=`${r}px`,a.querySelectorAll("[data-ctx-i]").forEach(n=>{n.addEventListener("click",c=>{c.stopPropagation();let x=Number(n.dataset.ctxI);a.classList.add("hidden"),t[x].onClick()})})}_hideCtxMenu(){this._ctxMenu?.classList.add("hidden")}_toast(e,s="info"){if(this._onToast)try{this._onToast(e,s);return}catch(a){console.error("[file-sidebar] onToast threw:",a)}let t=document.getElementById("__filesb-toast");t||(t=document.createElement("div"),t.id="__filesb-toast",t.className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300",document.body.appendChild(t)),t.textContent=e,t.className="fixed top-14 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300 "+(s==="ok"?"bg-green-600 text-white":s==="err"?"bg-red-600 text-white":"bg-slate-800 text-white"),t.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{try{t.remove()}catch{}},300)},1800)}};function y($){return String($??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("file-sidebar",X);q.addRoute("/",()=>import("./speak.js"));q.addRoute("/speak",()=>import("./speak.js"));q.addRoute("/404",()=>import("./speak.js"));console.info("[app] starting, port=",S("PORT","?"),"API_BASE=",S("API_BASE","(none)"));q.start();window.__app={router:q};
