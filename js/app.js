import{a as b,b as i,d as C,e as w,f as V,g as W,h as Y,i as Z,j as J,k as h}from"./chunk-IUFCCRW5.js";import{a as y,b as X}from"./chunk-IGCIOYLB.js";var U=class{constructor(){this.routes=new Map,this.guards=[],this.current=null,this._pageInstance=null}addRoute(e,a){this.routes.set(e,a)}beforeEach(e){this.guards.push(e)}async navigate(e){if(e!==this.current){if(location.hash!=="#"+e){location.hash=e;return}await this._render(e)}}async start(){window.addEventListener("hashchange",()=>this._handleHash()),await this._handleHash()}async _handleHash(){let e=location.hash.replace(/^#/,"")||"/";await this._render(e)}async _render(e){let a=this.routes.get(e)||this.routes.get("/404");if(!a){console.warn(`[router] no route for "${e}"`);return}for(let l of this.guards)if(!await l(e))return;typeof this._pageInstance?.unmount=="function"&&this._pageInstance.unmount();let t=await a();this._pageInstance=t.default||t,y.emit("route:change",{path:e,page:this._pageInstance}),this.current=e}},v=new U;var D=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="flex h-screen flex-col">
        <header class="flex items-center px-2 sm:px-4 py-2 border-b border-slate-200 dark:border-slate-700 gap-2 shrink-0">
          <nav id="nav-tabs" class="flex items-center gap-1">
            <a href="#/" data-nav="/"
               class="px-3 py-1.5 rounded-md text-sm font-medium transition text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
               aria-label="\u6717\u8BFB">\u6717\u8BFB</a>
            <a href="#/files" data-nav="/files"
               class="px-3 py-1.5 rounded-md text-sm font-medium transition text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
               aria-label="\u6587\u4EF6\u7BA1\u7406">\u6587\u4EF6\u7BA1\u7406</a>
          </nav>
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
        <section id="main" class="flex-1 overflow-auto pb-16"></section>
        <app-player-bar></app-player-bar>
      </div>
      <app-settings id="app-settings"></app-settings>
    `,this.mainEl=this.querySelector("#main"),this.settingsEl=this.querySelector("#app-settings"),this.tabEls=this.querySelectorAll("[data-nav]"),this.querySelector("#settings-btn").addEventListener("click",()=>{this.settingsEl?.open?.()}),this.tabEls.forEach(e=>{e.addEventListener("click",a=>{let t=e.dataset.nav;(v.current===t||t==="/"&&v.current==="/speak")&&a.preventDefault()})}),y.on("route:change",({path:e,page:a})=>{this._highlightTab(e),this.mainEl.innerHTML="",typeof a.mount=="function"&&a.mount(this.mainEl)}),this.querySelector("#env-info").textContent=`PORT=${window.__ENV__?.PORT||"?"} \xB7 API=${window.__ENV__?.API_BASE||"(none)"}`}_highlightTab(e){let a=l=>l==="/"||l==="/speak"?"/":l,t=a(e);this.tabEls.forEach(l=>{a(l.dataset.nav)===t?l.className="px-3 py-1.5 rounded-md text-sm font-medium transition bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900":l.className="px-3 py-1.5 rounded-md text-sm font-medium transition text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"})}};customElements.define("app-shell",D);var L={play:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12l8.5 6V6z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>'},N=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="fixed bottom-0 inset-x-0 z-30 pointer-events-none">
        <div class="pointer-events-auto
                    bg-white/95 dark:bg-slate-800/95 backdrop-blur
                    border-t border-slate-200 dark:border-slate-700
                    px-3 sm:px-4 py-2.5
                    flex items-center gap-2 sm:gap-3">
          <button id="pb-prev" type="button" aria-label="\u4E0A\u4E00\u6BB5"
                  class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            ${L.prev}
          </button>
          <button id="pb-play" type="button" aria-label="\u64AD\u653E/\u6682\u505C"
                  class="shrink-0 inline-flex items-center justify-center px-3 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            <span id="pb-play-icon" class="inline-flex items-center justify-center">${L.play}</span>
          </button>
          <button id="pb-next" type="button" aria-label="\u4E0B\u4E00\u6BB5"
                  class="shrink-0 px-2.5 py-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition">
            ${L.next}
          </button>
          <div class="flex-1 min-w-0 px-1 sm:px-2">
            <div id="pb-status" class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate">\u8FD8\u6CA1\u6709\u5206\u6BB5</div>
          </div>
        </div>
      </div>
    `,this._prevBtn=this.querySelector("#pb-prev"),this._playBtn=this.querySelector("#pb-play"),this._nextBtn=this.querySelector("#pb-next"),this._playIconEl=this.querySelector("#pb-play-icon"),this._statusEl=this.querySelector("#pb-status"),this._state={total:0,index:-1,playing:!1,paused:!1},this._prevBtn.addEventListener("click",()=>y.emit("player:cmd",{action:"prev"})),this._nextBtn.addEventListener("click",()=>y.emit("player:cmd",{action:"next"})),this._playBtn.addEventListener("click",()=>{let e=this._state.paused?"resume":this._state.playing?"pause":"play";y.emit("player:cmd",{action:e})}),y.on("playback:state",e=>this._render(e))}_render(e){this._state={total:Number(e?.total)||0,index:Number.isInteger(e?.index)?e.index:-1,playing:!!e?.playing,paused:!!e?.paused};let{total:a,index:t,playing:l,paused:u}=this._state,d=a>0;this._prevBtn.disabled=!d,this._nextBtn.disabled=!d,this._playBtn.disabled=!d,this._playIconEl.innerHTML=l?L.pause:L.play,d?u&&t>=0?this._statusEl.textContent=`\u5DF2\u6682\u505C \xB7 \u7B2C ${t+1} / ${a} \u6BB5`:l&&t>=0?this._statusEl.textContent=`\u6B63\u5728\u6717\u8BFB \xB7 \u7B2C ${t+1} / ${a} \u6BB5`:this._statusEl.textContent=`\u5171 ${a} \u6BB5 \xB7 \u70B9 \u25B6 \u5F00\u59CB\u6717\u8BFB`:this._statusEl.textContent="\u7C98\u8D34\u6587\u672C\u540E\u70B9 \u2728 AI \u62C6\u5206\u5F00\u59CB\u6717\u8BFB"}};customElements.define("app-player-bar",N);var H=class extends HTMLElement{connectedCallback(){this._built||(this._build(),this._built=!0)}_build(){let e=i.get(),a=i.isConfigured(),t=w("zh"),l=w("en");this.innerHTML=`
      <dialog id="dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[720px] w-[min(720px,calc(100vw-32px))] max-h-[calc(100vh-32px)] border border-slate-200 dark:border-slate-700">
        <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
          <header class="flex items-center px-5 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
            <strong class="text-base">\u8BBE\u7F6E</strong>
            <div class="flex-1"></div>
            <button type="button" data-action="close"
                    class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
          </header>
          <div class="overflow-y-auto p-5 flex flex-col gap-3 sm:gap-4">

            ${this._renderAiSection(e,a)}

            ${this._renderTtsSection("zh","\u4E2D\u6587 TTS \u53D1\u97F3",t)}
            ${this._renderTtsSection("en","English TTS",l)}

            ${this._renderEnvSection()}
            ${this._renderLocalDataSection()}

          </div>
        </form>
      </dialog>
    `,this._dlg=this.querySelector("#dlg"),this.querySelector('[data-action="close"]').addEventListener("click",()=>this.close()),this._wireAi(),this._ttsCleanups=[],this._wireTts("zh"),this._wireTts("en"),this._wireLocalData()}_renderAiSection(e,a){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>MiniMax AI \u914D\u7F6E</strong>
          <span id="ai-status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${a?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200"}">
            ${a?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E"}
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
                 placeholder="${n(i.DEFAULTS.baseUrl)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">Model</span>
          <input id="ai-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${n(i.DEFAULTS.model)}" />
        </label>

        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-600 dark:text-slate-300">
            \u5FEB\u901F\u6A21\u578B (Fast Model)
            <span class="text-xs text-slate-400">\u2014 \u300C\u4F7F\u7528\u5FEB\u901F\u6A21\u578B\u300D\u5F00\u5173 ON \u65F6\u4F7F\u7528</span>
          </span>
          <input id="ai-fast-model" type="text" autocomplete="off"
                 class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono"
                 placeholder="${n(i.DEFAULTS.fastModel)}" />
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
    `}_wireAi(){let e=i.get();this.querySelector("#ai-key").value=e.apiKey,this.querySelector("#ai-base").value=e.baseUrl,this.querySelector("#ai-model").value=e.model,this.querySelector("#ai-fast-model").value=e.fastModel,this.querySelector("#ai-use-fast-model").checked=e.fastModelEnabled===!0,this.querySelector("#ai-thinking").checked=e.thinkingEnabled!==!1;let a=this.querySelector("#ai-status"),t=this.querySelector("#ai-msg"),l=this.querySelector("#ai-reply"),u=c=>{a.textContent=c?"\u2713 \u5DF2\u914D\u7F6E":"\u672A\u914D\u7F6E",a.className="ml-auto text-xs px-2 py-0.5 rounded-full "+(c?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200":"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200")},d=(c,p="info")=>{t.textContent=c||"",t.className="text-xs "+(p==="ok"?"text-green-600 dark:text-green-400":p==="err"?"text-red-600 dark:text-red-400":"text-slate-500")},T=()=>({apiKey:this.querySelector("#ai-key").value.trim(),baseUrl:this.querySelector("#ai-base").value.trim()||i.DEFAULTS.baseUrl,model:this.querySelector("#ai-model").value.trim()||i.DEFAULTS.model,fastModel:this.querySelector("#ai-fast-model").value.trim()||i.DEFAULTS.fastModel,fastModelEnabled:this.querySelector("#ai-use-fast-model").checked===!0,thinkingEnabled:this.querySelector("#ai-thinking").checked===!0});this.querySelector("#ai-save").addEventListener("click",()=>{let c=T();if(!c.apiKey){d("\u8BF7\u586B\u5199 API Key","err");return}i.save(c),u(!0),d(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),l.classList.add("hidden"),l.textContent="",this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}),this.querySelector("#ai-reset").addEventListener("click",()=>{i.clear(),this.querySelector("#ai-key").value="",this.querySelector("#ai-base").value="",this.querySelector("#ai-model").value="",this.querySelector("#ai-fast-model").value="",this.querySelector("#ai-use-fast-model").checked=!1,this.querySelector("#ai-thinking").checked=!0,u(!1),d("\u5DF2\u6E05\u7A7A\uFF08\u4E0B\u6B21\u4FDD\u5B58\u4F1A\u7528 .env \u9ED8\u8BA4\u503C\uFF09"),l.classList.add("hidden"),l.textContent=""});let g=this.querySelector("#ai-test");g.addEventListener("click",async()=>{let c=T();if(!c.apiKey){d("\u8BF7\u586B\u5199 API Key","err");return}i.save(c),g.disabled=!0;let p=g.textContent;g.textContent="\u6D4B\u8BD5\u4E2D...",d("\u6B63\u5728\u53D1\u9001\u8BF7\u6C42...","info"),l.classList.add("hidden"),l.textContent="";try{let k=await i.test(c,{timeoutMs:3e4});d(`\u8054\u901A\u6210\u529F (${new Date().toLocaleTimeString()})`,"ok"),l.textContent=k,l.classList.remove("hidden"),u(!0),this._refreshMinimaxVoices("zh"),this._refreshMinimaxVoices("en")}catch(k){d(`\u8054\u901A\u5931\u8D25\uFF1A${k?.message||String(k)}`,"err"),u(!1)}finally{g.disabled=!1,g.textContent=p}})}_renderTtsSection(e,a,t){let l=t.provider==="edge"?"edge-tts-api":t.provider==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",u=t.provider==="minimax"||t.provider==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";return`
      <section data-tts-lang="${e}" class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <strong>${n(a)}</strong>
          <span data-role="status" class="ml-auto text-xs px-2 py-0.5 rounded-full ${u}">
            \u5F53\u524D: ${n(l)}
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
                   placeholder="${n(h.DEFAULT_EDGE_BASE_URL)}" />
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
                   placeholder="${n(h.DEFAULT_MINIMAX_BASE_URL)}" />
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
    `}_$(e,a){return this.querySelector(`section[data-tts-lang="${e}"] [data-role="${a}"]`)}_wireTts(e){let a=w(e);if(!this.querySelector(`section[data-tts-lang="${e}"]`))return;let l=this._$(e,"provider"),u=this._$(e,"browser-block"),d=this._$(e,"edge-block"),T=this._$(e,"minimax-block"),g=this._$(e,"status"),c=this._$(e,"msg");l.value=a.provider;let p=(s,o)=>{let r=this._$(e,s),x=this._$(e,o),f=()=>{x.textContent=r.value};r.addEventListener("input",f),f()};p("browser-rate","browser-rate-val"),p("browser-pitch","browser-pitch-val"),p("browser-volume","browser-volume-val"),p("edge-rate","edge-rate-val"),p("edge-pitch","edge-pitch-val"),p("edge-volume","edge-volume-val"),p("minimax-speed","minimax-speed-val"),p("minimax-vol","minimax-vol-val"),p("minimax-pitch","minimax-pitch-val"),this._$(e,"edge-base").value=a.edgeBaseUrl,this._$(e,"minimax-base").value=a.minimaxBaseUrl,this._$(e,"minimax-model").value=a.minimaxModel;let k=this._$(e,"browser-voice"),P=()=>{let s=W();k.innerHTML='<option value="">(\u7CFB\u7EDF\u9ED8\u8BA4)</option>'+s.map(r=>`<option value="${B(r.name)}">${n(r.name)} (${n(r.lang||"?")})</option>`).join("");let o=w(e).voice;o&&(k.value=o)};P();let Q=Y(P);this._ttsCleanups.push(Q);let M=this._$(e,"edge-voice"),I=[],R=async()=>{M.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';try{let s=await Z(this._$(e,"edge-base").value.trim()||h.DEFAULT_EDGE_BASE_URL);I=s.voices,M.innerHTML=I.map(r=>`<option value="${B(r.shortName)}">${n(r.shortName)} \u2014 ${n(r.friendlyName||r.gender||"")}</option>`).join("");let o=w(e).voice;o&&(M.value=o),m(`\u5DF2\u52A0\u8F7D ${s.count} \u4E2A edge \u8BED\u97F3`,"ok")}catch(s){M.innerHTML='<option value="">(\u52A0\u8F7D\u5931\u8D25\uFF0C\u70B9\u53F3\u4FA7\u5237\u65B0\u91CD\u8BD5)</option>',m("\u52A0\u8F7D edge \u8BED\u97F3\u5931\u8D25\uFF1A"+(s?.message||s),"err")}},E=this._$(e,"minimax-voice"),F=this._$(e,"minimax-voice-meta"),A=async()=>{E.innerHTML='<option value="">\u8F7D\u5165\u4E2D\u2026</option>';let s=i.get().apiKey,o=this._$(e,"minimax-base").value.trim()||h.DEFAULT_MINIMAX_BASE_URL;try{let r=await J(o,s),x=r.voices&&r.voices.length?r.voices:C,f=!!(r.voices&&r.voices.length);E.innerHTML=x.map($=>{let j=$.voice_id||$.shortName,G=$.voice_name||$.friendlyName||"";return`<option value="${B(j)}">${n(j)}${G?" \u2014 "+n(G):""}${$.source&&$.source!=="system"?" ("+$.source+")":""}</option>`}).join("");let K=w(e).minimaxVoice;K&&(E.value=K),F.textContent=f?`\u5171 ${x.length} \u4E2A`:`\u79BB\u7EBF\u515C\u5E95 (${x.length} \u4E2A\u5E38\u7528\u97F3\u8272;\u586B\u597D API Key \u540E\u70B9\u300C\u5237\u65B0\u97F3\u8272\u5217\u8868\u300D)`,m(f?`\u5DF2\u52A0\u8F7D ${x.length} \u4E2A MiniMax \u97F3\u8272`:"\u672A\u914D\u7F6E API Key,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95\u6E05\u5355","ok")}catch(r){E.innerHTML=C.map(f=>`<option value="${B(f.voice_id)}">${n(f.voice_id)} \u2014 ${n(f.voice_name)}</option>`).join("");let x=w(e).minimaxVoice;x&&(E.value=x),F.textContent=`\u52A0\u8F7D\u5931\u8D25,\u4F7F\u7528\u79BB\u7EBF\u515C\u5E95 (${C.length} \u4E2A)`,m("\u52A0\u8F7D MiniMax \u97F3\u8272\u5931\u8D25:"+(r?.message||r),"err")}};this[`_refreshMinimaxVoices_${e}`]=A;let q=s=>{let o=s==="edge"?"edge-tts-api":s==="minimax"?"MiniMax T2A":"\u6D4F\u89C8\u5668\u81EA\u5E26",r=s==="minimax"||s==="edge"?"bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200":"bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";g.textContent=`\u5F53\u524D: ${o}`,g.className="ml-auto text-xs px-2 py-0.5 rounded-full "+r},m=(s,o="info")=>{c.textContent=s||"",c.className="text-xs "+(o==="ok"?"text-green-600 dark:text-green-400":o==="err"?"text-red-600 dark:text-red-400":"text-slate-500")};l.addEventListener("change",()=>{let s=l.value;u.classList.toggle("hidden",s!=="browser"),d.classList.toggle("hidden",s!=="edge"),T.classList.toggle("hidden",s!=="minimax"),q(s),s==="edge"&&I.length===0&&R(),s==="minimax"&&A()}),a.provider==="edge"&&R(),a.provider==="minimax"&&A();let O=()=>{let s=l.value,o={provider:s,edgeBaseUrl:this._$(e,"edge-base").value.trim()||h.DEFAULT_EDGE_BASE_URL,minimaxBaseUrl:this._$(e,"minimax-base").value.trim()||h.DEFAULT_MINIMAX_BASE_URL,minimaxModel:this._$(e,"minimax-model").value||h.DEFAULT_MINIMAX_MODEL};return s==="browser"?{...o,voice:k.value.trim(),rate:Number(this._$(e,"browser-rate").value),pitch:Number(this._$(e,"browser-pitch").value),volume:Number(this._$(e,"browser-volume").value)}:s==="edge"?{...o,voice:M.value.trim(),rate:Number(this._$(e,"edge-rate").value),pitch:Number(this._$(e,"edge-pitch").value),volume:Number(this._$(e,"edge-volume").value)}:{...o,minimaxVoice:E.value.trim(),minimaxSpeed:Number(this._$(e,"minimax-speed").value),minimaxVol:Number(this._$(e,"minimax-vol").value),minimaxPitch:Number(this._$(e,"minimax-pitch").value)}};this._$(e,"save").addEventListener("click",()=>{let s=O();V(e,s),m(`\u5DF2\u4FDD\u5B58 (${new Date().toLocaleTimeString()})`,"ok"),q(s.provider)});let z=this._$(e,"minimax-refresh");z&&z.addEventListener("click",()=>A());let S=this._$(e,"test");S.addEventListener("click",async()=>{let s=O();V(e,s),q(s.provider),S.disabled=!0;let o=S.textContent;S.textContent="\u64AD\u653E\u4E2D...",m("\u6B63\u5728\u5408\u6210\u5E76\u64AD\u653E...","info");try{let r=e==="en"?"Hello, this is a test read. You should hear the configured voice and speed.":"\u4F60\u597D,\u8FD9\u662F\u6D4B\u8BD5\u6717\u8BFB\u3002\u53EF\u4EE5\u542C\u5230\u5F53\u524D\u8BED\u97F3\u4E0E\u8BED\u901F\u3002";await h.speak({text:r,lang:e,...s},{onStart:()=>m("\u64AD\u653E\u4E2D...","info"),onEnd:()=>m(`\u64AD\u653E\u5B8C\u6BD5 (${new Date().toLocaleTimeString()})`,"ok"),onError:x=>m("\u64AD\u653E\u5931\u8D25\uFF1A"+(x?.message||x),"err")})}catch(r){m("\u64AD\u653E\u5931\u8D25\uFF1A"+(r?.message||r),"err")}finally{S.disabled=!1,S.textContent=o}}),this._$(e,"stop").addEventListener("click",()=>{h.stop(),m("\u5DF2\u505C\u6B62","info")})}_refreshMinimaxVoices(e){this[`_refreshMinimaxVoices_${e}`]?.()}_renderEnvSection(){return`
      <section class="border-t border-slate-200 dark:border-slate-700 pt-4 flex flex-col gap-3">
        <strong>\u73AF\u5883\u53D8\u91CF (\u6765\u81EA .env)</strong>
        <table class="w-full text-sm">
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">PORT</th><td class="py-1 font-mono">${b("PORT","?")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">API_BASE</th><td class="py-1 font-mono">${b("API_BASE","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_BASE_URL</th><td class="py-1 font-mono">${b("AI_BASE_URL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_MODEL</th><td class="py-1 font-mono">${b("AI_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">AI_FAST_MODEL</th><td class="py-1 font-mono">${b("AI_FAST_MODEL","(\u672A\u8BBE\u7F6E)")}</td></tr>
          <tr><th class="text-left py-1 pr-3 text-slate-500 font-normal w-32">DEBUG</th><td class="py-1 font-mono">${b("DEBUG","false")}</td></tr>
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
    `}_wireLocalData(){this.querySelector("#clear-storage").addEventListener("click",()=>{confirm("\u786E\u8BA4\u6E05\u7A7A\u6240\u6709\u672C\u5730\u6570\u636E?")&&X.clear()})}open(){this._built||(this._build(),this._built=!0),this._dlg.showModal()}close(){this._dlg.close()}disconnectedCallback(){for(let e of this._ttsCleanups||[])e?.()}};function n(_){return String(_??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function B(_){return String(_??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}customElements.define("app-settings",H);v.addRoute("/",()=>import("./speak.js"));v.addRoute("/speak",()=>import("./speak.js"));v.addRoute("/files",()=>import("./files.js"));v.addRoute("/404",()=>import("./speak.js"));console.info("[app] starting, port=",b("PORT","?"),"API_BASE=",b("API_BASE","(none)"));v.start();window.__app={router:v};
