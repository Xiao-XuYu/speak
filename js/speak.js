import{a as M,c as g,d as k,e as $,m as S,o as j,q as P,u as L}from"./chunk-LUY3X4E5.js";var F="speak-state",I="speak-auto-all",G="speak-current-file",O="ai-gen-mode",B=`\u4F60\u662F\u6587\u672C\u5206\u6BB5\u52A9\u624B\u3002\u628A\u7528\u6237\u7C98\u8D34\u7684\u957F\u6587\u672C\u6309\u8BED\u4E49 / \u573A\u666F / \u6BB5\u843D\u5207\u6210\u82E5\u5E72\u4E2A\u9002\u5408\u6717\u8BFB\u7684\u5C0F\u6BB5\u3002
\u8981\u6C42:
1. \u6309\u53E5\u53F7\u3001\u95EE\u53F7\u3001\u611F\u53F9\u53F7\u3001\u6BB5\u843D\u7B49\u81EA\u7136\u8FB9\u754C\u5207\u5206,\u6BCF\u6BB5\u5927\u81F4 1~3 \u53E5\u3001\u957F\u5EA6\u9002\u4E2D(\u53C2\u8003\u6BCF\u6BB5 60~150 \u5B57)\u3002
2. \u4FDD\u6301\u539F\u6587\u8BED\u4E49\u5B8C\u6574,\u4E0D\u8981\u6539\u5199\u6216\u6DA6\u8272,\u4E0D\u8981\u6F0F\u5B57\u3001\u4E0D\u8981\u5408\u5E76\u76F8\u90BB\u7684\u53E5\u5B50\u3002
3. \u6BB5\u4E0E\u6BB5\u4E4B\u95F4\u8981\u76F8\u5BF9\u72EC\u7ACB,\u9002\u5408\u5355\u72EC\u6717\u8BFB\u4E0E\u8DF3\u8BFB\u3002
4. \u4E0D\u8981\u628A\u6574\u6BB5\u539F\u6837\u8FD4\u56DE,\u4E5F\u4E0D\u8981\u5207\u5F97\u8FC7\u788E(\u9010\u5B57)\u3002

\u53EA\u8F93\u51FA JSON,\u683C\u5F0F: {"segments": ["\u7B2C1\u6BB5\u539F\u6587...", "\u7B2C2\u6BB5\u539F\u6587...", ...]}`,m={eye:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14zm14 0l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',release:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'},D={title:"\u6717\u8BFB",mount(e){let t=g.get(F,{text:"",segments:[]}),s=g.get(I,!1)===!0,a=g.get(G,null);this._root=e,this._text=t.text||"",this._segments=Array.isArray(t.segments)?t.segments:[],this._currentFile=null,this._currentFileId=a,this._playingIndex=-1,this._lastIndex=-1,this._isPaused=!1,this._playGen=0,this._userScrollingUntil=0,e.innerHTML=`
      <div class="flex h-full min-h-0">

        <!-- \u5DE6:\u53EF\u6298\u53E0\u6587\u4EF6\u4FA7\u680F -->
        <file-sidebar id="file-sidebar"></file-sidebar>

        <!-- \u53F3:\u4E3B\u533A -->
        <main class="flex-1 min-w-0 flex flex-col bg-white dark:bg-slate-800">

          <!-- \u9876\u90E8\u5DE5\u5177\u680F -->
          <div class="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0 flex-wrap">
            <button id="view-text" type="button"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
              ${m.eye}<span>\u67E5\u770B / \u7F16\u8F91</span>
            </button>
            <button id="ai-split" type="button"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-xs sm:text-sm">
              ${m.sparkles}<span>AI \u62C6\u5206</span>
            </button>
            <button id="ai-generate" type="button"
                    title="AI \u91CD\u65B0\u751F\u6210\u5F53\u524D\u6587\u4EF6\u7684\u5185\u5BB9"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm">
              ${m.sparkles}<span>AI \u751F\u6210</span>
            </button>
            <button id="clear" type="button"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
              ${m.trash}<span>\u6E05\u7A7A</span>
            </button>
            <div class="flex-1"></div>
            <label class="inline-flex items-center gap-2 cursor-pointer select-none pl-2 sm:pl-3 ml-1 border-l border-slate-200 dark:border-slate-700">
              <span class="text-xs sm:text-sm text-slate-600 dark:text-slate-300">\u987A\u5E8F\u81EA\u52A8\u64AD\u653E</span>
              <span class="relative inline-block h-6 w-11 shrink-0">
                <input id="auto-all" type="checkbox"
                       class="peer absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer m-0"
                       aria-label="\u987A\u5E8F\u81EA\u52A8\u64AD\u653E">
                <span aria-hidden="true" class="pointer-events-none absolute inset-0 rounded-full bg-slate-300 dark:bg-slate-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500/50 transition-colors duration-300 ease-out shadow-inner"></span>
                <span aria-hidden="true" class="pointer-events-none absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow ring-1 ring-slate-900/5 transform peer-checked:translate-x-5 transition-transform duration-300 ease-out"></span>
              </span>
            </label>
          </div>

          <!-- \u6B4C\u8BCD\u89C6\u56FE -->
          <div class="flex-1 flex flex-col gap-2 px-2 sm:px-3 py-3 min-h-0">
            <div id="lyrics-wrap" class="relative flex flex-col flex-1 min-h-0">
              <div id="lyrics-scroller" class="lyrics-scroller flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-0"
                   style="scroll-behavior:smooth; touch-action: pan-y manipulation; -webkit-tap-highlight-color: transparent; overscroll-behavior: contain;">
                <div id="lyrics-list" class="flex flex-col items-stretch"></div>
              </div>
              <div class="pointer-events-none absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-white dark:from-slate-800 to-transparent"></div>
            </div>
          </div>

        </main>

        <!-- \u67E5\u770B / \u7F16\u8F91 dialog -->
        <dialog id="text-dialog" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[720px] w-[min(720px,calc(100vw-32px))] max-h-[calc(100vh-32px)] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
            <header class="flex items-center px-5 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong class="text-base">\u67E5\u770B / \u7F16\u8F91\u957F\u6587\u672C</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="overflow-y-auto p-5 flex flex-col gap-3">
              <textarea id="src-text" rows="14" class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm sm:text-base resize-y" placeholder="\u5728\u8FD9\u91CC\u7C98\u8D34\u4F60\u8981\u6717\u8BFB\u7684\u6587\u672C..." style="min-height:18rem"></textarea>
              <div class="flex items-center gap-3 flex-wrap">
                <span id="dlg-text-meta" class="text-xs text-slate-500"></span>
                <div class="flex-1"></div>
                <button type="button" data-action="paste-into-dlg"
                        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs sm:text-sm">
                  ${m.clipboard}<span>\u7C98\u8D34</span>
                </button>
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u4FDD\u5B58</button>
              </div>
            </div>
          </form>
        </dialog>

        <!-- \u4FDD\u5B58\u5230\u6587\u4EF6 dialog(\u7ED9\u67E5\u770B dialog \u7528) -->
        <dialog id="save-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[480px] w-[min(480px,calc(100vw-32px))] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <strong id="save-dlg-title" class="text-sm">\u4FDD\u5B58\u4E3A\u65B0\u6587\u4EF6</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>
            <div class="p-4 flex flex-col gap-3">
              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">\u6587\u4EF6\u6807\u9898</span>
                <div class="flex items-stretch gap-2">
                  <input id="save-title" type="text" class="flex-1 min-w-0 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm" placeholder="\u672A\u547D\u540D\u6587\u4EF6">
                  <button type="button" id="ai-title-btn"
                          class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm shrink-0"
                          title="\u6839\u636E\u5F53\u524D\u6717\u8BFB\u5185\u5BB9\u81EA\u52A8\u751F\u6210\u5408\u9002\u7684\u6587\u4EF6\u6807\u9898">
                    ${m.sparkles}<span class="hidden sm:inline">AI \u751F\u6210\u6807\u9898</span><span class="sm:hidden">AI</span>
                  </button>
                </div>
              </label>
              <div class="flex items-center gap-2 text-xs text-slate-500">
                <span id="save-stats">\u2014</span>
              </div>
              <p id="save-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
              <div class="flex items-center gap-2 justify-end pt-1">
                <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                <button type="button" data-action="save"   class="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition text-sm">\u4FDD\u5B58</button>
              </div>
            </div>
          </form>
        </dialog>

        <!-- AI \u91CD\u65B0\u751F\u6210 dialog(\u4F5C\u7528\u4E8E\u5F53\u524D\u52A0\u8F7D\u7684\u6587\u4EF6) -->
        <dialog id="ai-gen-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[520px] w-[min(520px,calc(100vw-32px))] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0 gap-2">
              <span class="text-blue-600 dark:text-blue-300">${m.sparkles}</span>
              <strong class="text-sm">AI \u91CD\u65B0\u751F\u6210</strong>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>

            <!-- \u5F53\u524D\u6587\u4EF6\u63D0\u793A -->
            <div class="px-4 py-2 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 shrink-0">
              <div class="text-xs text-slate-500 dark:text-slate-400">\u4F5C\u7528\u4E8E\u5F53\u524D\u6587\u4EF6</div>
              <div id="ai-gen-current-title" class="text-sm font-medium truncate text-slate-700 dark:text-slate-200"></div>
            </div>

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
                    <option value="\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3">\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3(\u7EA6 2000 \u5B57)</option>
                    <option value="\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3">\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3(\u7EA6 3000 \u5B57)</option>
                    <option value="\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4">\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4(\u7EA6 5000 \u5B57)</option>
                    <option value="\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C">\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C(4~8 \u53E5)</option>
                    <option value="\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD">\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD(\u7EA6 300 \u5B57)</option>
                  </select>
                </label>
                <p class="text-xs text-amber-600 dark:text-amber-400">\u26A0 \u751F\u6210\u540E**\u76F4\u63A5\u8986\u76D6**\u5F53\u524D\u6587\u4EF6,\u65E7\u5185\u5BB9\u4E0D\u53EF\u6062\u590D</p>
                <p id="ai-gen-status" class="hidden text-xs text-blue-600 dark:text-blue-300"></p>
                <p id="ai-gen-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>
                <div class="flex items-center gap-2 justify-end pt-1">
                  <button type="button" data-action="cancel" class="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">\u53D6\u6D88</button>
                  <button type="button" id="ai-gen-submit"
                          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-sm">
                    ${m.sparkles}<span>\u751F\u6210</span>
                  </button>
                </div>
              </div>

              <!-- tab=manual \u9762\u677F -->
              <div id="ai-gen-panel-manual" class="hidden flex flex-col gap-3">
                <div class="rounded-md border border-blue-200 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-900/20 p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                  <div class="font-medium mb-1 text-blue-700 dark:text-blue-300">\u{1F4A1} \u4F7F\u7528\u6B65\u9AA4</div>
                  <ol class="list-decimal pl-4 space-y-0.5">
                    <li>\u4E3B\u9898\u5DF2\u9884\u586B\u4E3A\u5F53\u524D\u6587\u4EF6\u6807\u9898,\u53EF\u6309\u9700\u4FEE\u6539</li>
                    <li>\u70B9\u300C\u{1F4CB} \u590D\u5236\u63D0\u793A\u8BCD\u300D</li>
                    <li>\u5230\u7F51\u9875 AI(ChatGPT / Claude / \u8C46\u5305 / Gemini \u7B49)\u7C98\u8D34\u63D0\u793A\u8BCD,\u5F97\u5230\u56DE\u590D</li>
                    <li>\u628A AI \u56DE\u590D\u590D\u5236\u56DE\u6765,\u7C98\u8D34\u5230\u4E0B\u65B9\u6587\u672C\u6846</li>
                    <li>\u70B9\u300C\u89E3\u6790\u5E76\u4FDD\u5B58\u300D,\u4F1A\u8986\u76D6\u5F53\u524D\u6587\u4EF6\u5E76\u91CD\u65B0\u52A0\u8F7D</li>
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
                    <option value="\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3">\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3(\u7EA6 2000 \u5B57)</option>
                    <option value="\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3">\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3(\u7EA6 3000 \u5B57)</option>
                    <option value="\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4">\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4(\u7EA6 5000 \u5B57)</option>
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
      </div>
    `,e.querySelector("#view-text").addEventListener("click",()=>this._openTextDialog()),e.querySelector("#ai-split").addEventListener("click",()=>this._aiSplit());let r=e.querySelector("#ai-generate");r.addEventListener("click",()=>this._openAiGenerate()),e.querySelector("#clear").addEventListener("click",()=>this._clearAll()),this._aiGenBtn=r,this._refreshAiGenBtnState(),e.querySelector('#text-dialog [data-action="close"]').addEventListener("click",()=>this._closeTextDialog(!1)),e.querySelector('#text-dialog [data-action="cancel"]').addEventListener("click",()=>this._closeTextDialog(!1)),e.querySelector('#text-dialog [data-action="save"]').addEventListener("click",()=>this._closeTextDialog(!0)),e.querySelector('#text-dialog [data-action="paste-into-dlg"]').addEventListener("click",()=>this._pasteIntoDialog());let n=e.querySelector("#src-text"),i=e.querySelector("#dlg-text-meta"),c=()=>{let o=n.value,p=o.length,l=o?o.split(/\r?\n/).filter(y=>y.trim()).length:0;i.textContent=p>0?`${p} \u5B57 \xB7 ${l} \u884C`:"\u672A\u8F93\u5165"};n.addEventListener("input",c),e.querySelector('#save-dlg [data-action="close"]').addEventListener("click",()=>this._closeSaveDialog()),e.querySelector('#save-dlg [data-action="cancel"]').addEventListener("click",()=>this._closeSaveDialog()),e.querySelector('#save-dlg [data-action="save"]').addEventListener("click",()=>this._confirmSaveFile()),e.querySelector("#ai-title-btn").addEventListener("click",()=>this._callAiTitle()),this._wireAiGenDialog(e),e.querySelector("#auto-all").checked=s,e.querySelector("#auto-all").addEventListener("change",o=>{g.set(I,o.target.checked===!0)}),e.querySelector("#lyrics-scroller").addEventListener("scroll",()=>{this._userScrollingUntil=Date.now()+2500},{passive:!0});let x=e.querySelector("#file-sidebar");x.onFileSelect=o=>this._onFileSelectFromSidebar(o),x.onToast=(o,p)=>this._toast(o,p),this._unsubFilesLoaded=M.on("files:loaded",({autoAll:o}={})=>{if(typeof o=="boolean"){let p=this._root.querySelector("#auto-all");p&&p.checked!==o&&(p.checked=o,g.set(I,o))}}),this._updateMeta(),this._renderLyrics(),this._emitPlaybackState(),this._unsubPlayerCmd=M.on("player:cmd",({action:o})=>this._onPlayerCmd(o))},unmount(){this._userStopped=!0,S.stop(),this._unsubPlayerCmd?.(),this._unsubFilesLoaded?.(),this._root=null},async _onFileSelectFromSidebar(e){if(!e){this._currentFile=null,this._currentFileId=null,g.del(G),this._refreshAiGenBtnState();return}this._text=e.text||"",this._segments=Array.isArray(e.segments)?e.segments:[],this._currentFile=e,this._currentFileId=e.id,g.set(F,{text:this._text,segments:this._segments}),g.set(G,e.id);let t=this._root.querySelector("#auto-all"),s=e.autoAll===!0;t.checked!==s&&(t.checked=s,g.set(I,s)),this._stopAll({silent:!0}),this._updateMeta(),this._renderLyrics(),this._refreshAiGenBtnState(),this._toast(`\u5DF2\u52A0\u8F7D\u300C${e.title}\u300D`,"ok")},_openTextDialog(){let e=this._root.querySelector("#src-text");e.value=this._text;let t=this._root.querySelector("#dlg-text-meta"),s=this._text.length,a=this._linesOf(this._text);t.textContent=s>0?`${s} \u5B57 \xB7 ${a} \u884C`:"\u672A\u8F93\u5165",this._root.querySelector("#text-dialog").showModal(),setTimeout(()=>e.focus(),0)},_closeTextDialog(e){if(e){let t=this._root.querySelector("#src-text").value;t!==this._text&&(this._text=t,this._segments=[],this._saveState(),this._updateMeta(),this._renderLyrics())}this._root.querySelector("#text-dialog").close()},async _pasteIntoDialog(){let e=this._root.querySelector("#src-text");if(!navigator.clipboard?.readText){this._setAiStatus("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u526A\u8D34\u677F\u8BFB\u53D6","err");return}try{let t=await navigator.clipboard.readText();t&&(e.value=t,e.dispatchEvent(new Event("input")))}catch(t){this._setAiStatus("\u7C98\u8D34\u5931\u8D25:"+(t?.message||t),"err")}},_updateMeta(){let e=this._text.length,t=this._segments.length;t&&console.info(`[meta] ${t} \u6BB5${e?` \xB7 ${e} \u5B57`:""}`)},_linesOf(e){return e?e.split(/\r?\n/).filter(t=>t.trim().length>0).length:0},_saveState(){g.set(F,{text:this._text,segments:this._segments})},_clearAll(){!this._text&&this._segments.length===0||confirm("\u786E\u8BA4\u6E05\u7A7A\u6587\u672C\u4E0E\u5206\u6BB5?")&&(this._text="",this._segments=[],this._saveState(),this._updateMeta(),this._renderLyrics(),this._stopAll())},_onPlayerCmd(e){if(this._segments.length===0){e==="play"&&this._playFull();return}switch(e){case"play":if(this._isPaused&&this._playingIndex>=0){this._isPaused=!1,S.resume(),this._emitPlaybackState();return}let t=this._playingIndex>=0?this._playingIndex:this._lastIndex>=0?this._lastIndex:0;this._playFrom(t);break;case"pause":this._playingIndex>=0&&!this._isPaused&&(this._isPaused=!0,S.pause(),this._emitPlaybackState());break;case"resume":this._isPaused?(this._isPaused=!1,S.resume(),this._emitPlaybackState()):this._onPlayerCmd("play");break;case"prev":{let s=this._playingIndex>=0?this._playingIndex:this._lastIndex,a=s>0?s-1:0;this._segments[a]!=null&&this._playFrom(a);break}case"next":{let s=this._playingIndex>=0?this._playingIndex:this._lastIndex,a=s<0?0:Math.min(s+1,this._segments.length-1);this._segments[a]!=null&&this._playFrom(a);break}}},_emitPlaybackState(){M.emit("playback:state",{total:this._segments.length,index:this._playingIndex,playing:this._playingIndex>=0&&!this._isPaused,paused:this._playingIndex>=0&&this._isPaused})},_renderLyrics(){let e=this._root.querySelector("#lyrics-list"),t=this._root.querySelector("#lyrics-scroller");if(this._segments.length===0){e.innerHTML=`
        <div id="lyrics-empty" class="flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 px-6 py-12 sm:py-16 gap-2">
          <div class="text-3xl sm:text-4xl select-none" aria-hidden="true">\u266A</div>
          <p class="text-sm">\u8FD8\u6CA1\u6709\u5206\u6BB5\u3002</p>
          <p class="text-xs">\u4ECE\u5DE6\u4FA7\u9009\u4E2A\u6587\u4EF6,\u6216\u5728\u5DE5\u5177\u680F\u70B9 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${m.eye} \u67E5\u770B / \u7F16\u8F91</span> \u6DFB\u52A0\u6587\u672C,\u7136\u540E\u70B9 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${m.sparkles} AI \u62C6\u5206</span></p>
        </div>
      `,t&&(t.scrollTop=0),this._emitPlaybackState();return}e.innerHTML=this._segments.map((s,a)=>`
      <button type="button" data-lyric-index="${a}"
        aria-label="\u4ECE\u7B2C ${a+1} \u6BB5\u5F00\u59CB\u6717\u8BFB"
        class="lyric group block w-full text-center px-4 py-3 sm:py-4 cursor-pointer rounded-lg transition-all duration-300 ease-out leading-relaxed whitespace-pre-wrap break-words
               text-slate-500 dark:text-slate-400 text-base sm:text-lg
               hover:bg-slate-100/60 dark:hover:bg-slate-700/40 hover:text-slate-700 dark:hover:text-slate-200
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
        ${H(s)}
      </button>
    `).join(""),e.style.paddingTop="4rem",e.style.paddingBottom="4rem",e.querySelectorAll("[data-lyric-index]").forEach(s=>{s.addEventListener("click",()=>{let a=Number(s.dataset.lyricIndex);this._playFrom(a)})}),t.scrollTop=0,this._playingIndex=-1,this._lastIndex=-1,this._emitPlaybackState()},_markPlaying(e){this._playingIndex=e,this._isPaused=!1,e>=0&&(this._lastIndex=e);let s=this._root.querySelector("#lyrics-list").querySelectorAll("[data-lyric-index]"),a=["lyric-active","aria-current","text-blue-600","dark:text-blue-300","font-bold"],r=["text-slate-500","dark:text-slate-400"];if(s.forEach(n=>{n.classList.remove(...a),n.classList.add(...r),n.removeAttribute("aria-current")}),e>=0&&s[e]){let n=s[e];if(n.classList.remove(...r),n.classList.add(...a),n.setAttribute("aria-current","true"),Date.now()<this._userScrollingUntil){this._emitPlaybackState();return}try{n.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}this._emitPlaybackState()},async _playFull(){let e=(this._text||"").trim();if(!e){this._setAiStatus("\u6CA1\u6709\u53EF\u6717\u8BFB\u7684\u6587\u672C","err");return}this._isPaused=!1,await S.speak({text:e},{onStart:()=>{this._emitPlaybackState()},onEnd:()=>{this._emitPlaybackState()},onError:t=>{this._setAiStatus("\u6717\u8BFB\u5931\u8D25:"+(t?.message||t),"err"),this._emitPlaybackState()}})},async _playFrom(e){if(this._segments.length===0)return;let t=Math.max(0,Math.min(e,this._segments.length-1)),s=this._root.querySelector("#auto-all").checked===!0;this._stopAll({silent:!0}),s?await this._playRange(t,this._segments.length-1):await this._playRange(t,t)},async _playRange(e,t){let s=++this._playGen;this._userStopped=!1;for(let a=e;a<=t&&!(this._userStopped||this._playGen!==s);a++){this._markPlaying(a);let r=this._segments[a]||"",n=N(r);if(await S.speak({text:r,lang:n},{onStart:()=>{},onEnd:()=>{},onError:i=>{this._setAiStatus(`\u7B2C ${a+1} \u6BB5\u6717\u8BFB\u5931\u8D25:${i?.message||i}`,"err"),this._userStopped=!0}}),e===t||this._userStopped||this._playGen!==s)break}this._playGen===s&&this._markPlaying(-1)},_stopAll({silent:e=!1}={}){this._userStopped=!0,S.stop(),this._markPlaying(-1),e||this._setAiStatus("\u5DF2\u505C\u6B62","info"),this._emitPlaybackState()},async _aiSplit(){let e=(this._text||"").trim();if(!e){this._setAiStatus("\u6CA1\u6709\u53EF\u62C6\u5206\u7684\u6587\u672C","err");return}if(!k.isConfigured()){this._setAiStatus("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key","err");return}let t=this._root.querySelector("#ai-split"),s=t.innerHTML;t.disabled=!0,t.innerHTML=`${m.sparkles}<span>\u62C6\u5206\u4E2D...</span>`,this._setAiStatus("\u6B63\u5728\u8BF7\u6C42 AI \u62C6\u5206...","info");try{let a=await this._callAiSplit(e);if(!Array.isArray(a)||a.length===0)throw new Error("AI \u672A\u8FD4\u56DE\u6709\u6548\u5206\u6BB5");this._stopAll({silent:!0}),this._segments=a.map(r=>String(r).trim()).filter(Boolean),this._saveState(),this._renderLyrics(),this._updateMeta(),this._setAiStatus(`\u62C6\u5206\u5B8C\u6210,\u5171 ${this._segments.length} \u6BB5`,"ok")}catch(a){this._setAiStatus("AI \u62C6\u5206\u5931\u8D25,\u5DF2\u964D\u7EA7\u4E3A\u672C\u5730\u5207\u5206:"+(a?.message||a),"err");let r=$.split(e);this._stopAll({silent:!0}),this._segments=r,this._saveState(),this._renderLyrics(),this._updateMeta()}finally{t.disabled=!1,t.innerHTML=s}},async _callAiSplit(e){let t=k.get(),s=t.baseUrl.replace(/\/+$/,"")+"/chat/completions",a=`\u3010\u5F85\u62C6\u5206\u6587\u672C\u3011
${e.slice(0,12e3)}`,r=new AbortController,n=setTimeout(()=>r.abort(),6e4),i;try{i=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.apiKey}`},body:JSON.stringify({model:k.getEffectiveModel(),messages:[{role:"system",content:B},{role:"user",content:a}],temperature:.2,stream:!1}),signal:r.signal})}catch(x){throw x?.name==="AbortError"?new Error("\u8BF7\u6C42\u8D85\u65F6 (60s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):x instanceof TypeError?new Error(`\u7F51\u7EDC\u9519\u8BEF:${x.message} (\u53EF\u80FD\u662F CORS / \u8DE8\u57DF\u88AB\u62E6)`):x}finally{clearTimeout(n)}if(!i.ok){let x=await i.text().catch(()=>i.statusText);throw new Error(`HTTP ${i.status} \u2014 ${x.slice(0,200)}`)}let h=(await i.json().catch(()=>null))?.choices?.[0]?.message?.content?.trim();if(!h)throw new Error("\u8FD4\u56DE\u4E3A\u7A7A");return R(h,e)},async _callAiTitle(){let e=this._root.querySelector("#ai-title-btn"),t=this._root.querySelector("#save-title"),s=this._root.querySelector("#save-error"),a=l=>{l?(s.textContent=l,s.classList.remove("hidden")):(s.classList.add("hidden"),s.textContent="")},r=(this._text||"").trim();if(!r){a("\u6CA1\u6709\u53EF\u751F\u6210\u6807\u9898\u7684\u6587\u672C");return}if(!k.isConfigured()){a("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key");return}let n=k.get(),i=n.baseUrl.replace(/\/+$/,"")+"/chat/completions",c=e.innerHTML;e.disabled=!0,e.innerHTML=`${m.sparkles}<span>\u751F\u6210\u4E2D...</span>`,a("");let h=r.length>4e3?r.slice(0,4e3)+"\u2026":r,x=`\u4F60\u662F\u6587\u4EF6\u547D\u540D\u52A9\u624B\u3002\u6839\u636E\u7528\u6237\u63D0\u4F9B\u7684\u6717\u8BFB\u6587\u672C\u5185\u5BB9,\u751F\u6210\u4E00\u4E2A\u7B80\u6D01\u51C6\u786E\u7684\u6587\u4EF6\u6807\u9898\u3002

\u8981\u6C42:
1. \u957F\u5EA6 4~20 \u4E2A\u6C49\u5B57 (\u82F1\u6587 3~12 \u4E2A\u8BCD)\u3002
2. \u4E0D\u8981\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u4E4B\u7C7B\u7684\u524D\u7F00\u3002
3. \u80FD\u6982\u62EC\u5168\u6587\u4E3B\u9898\u6216\u6838\u5FC3\u5185\u5BB9;\u82E5\u6587\u672C\u662F\u53E4\u8BD7 / \u53E4\u6587,\u4F18\u5148\u53D6\u539F\u6587\u6807\u9898\u6216\u9996\u53E5\u6982\u62EC\u3002
4. \u53EA\u8F93\u51FA\u6807\u9898\u672C\u8EAB,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u9009\u9879\u6216\u6362\u884C\u3002`,o=new AbortController,p=setTimeout(()=>o.abort(),3e4);try{let l=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n.apiKey}`},body:JSON.stringify({model:k.getEffectiveModel(),messages:[{role:"system",content:x},{role:"user",content:`\u3010\u6717\u8BFB\u6587\u672C\u3011
${h}`}],temperature:.4,stream:!1}),signal:o.signal});if(!l.ok){let f=await l.text().catch(()=>l.statusText);throw new Error(`HTTP ${l.status} \u2014 ${f.slice(0,200)}`)}let u=(await l.json().catch(()=>null))?.choices?.[0]?.message?.content;if(typeof u!="string"||!u.trim())throw new Error("\u8FD4\u56DE\u4E3A\u7A7A");let b=u.trim().replace(/^[\s"'""''「」『』《》【】\[\]【】]+/,"").replace(/[\s"'""''「」『』《》【】\[\]【】]+$/,"").replace(/\s+/g," ").trim().slice(0,64);if(!b)throw new Error("AI \u8FD4\u56DE\u65E0\u6CD5\u89E3\u6790\u4E3A\u6807\u9898");t.value=b,t.dispatchEvent(new Event("input",{bubbles:!0})),t.focus(),t.setSelectionRange(b.length,b.length),a("")}catch(l){l?.name==="AbortError"?a("AI \u751F\u6210\u6807\u9898\u8D85\u65F6 (30s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):l instanceof TypeError?a("AI \u751F\u6210\u6807\u9898\u5931\u8D25 \u2014 \u7F51\u7EDC\u9519\u8BEF:"+(l.message||l)+" (\u53EF\u80FD\u662F CORS)"):a("AI \u751F\u6210\u6807\u9898\u5931\u8D25:"+(l?.message||l)),console.error("[speak] AI title failed:",l)}finally{clearTimeout(p),e.disabled=!1,e.innerHTML=c}},_setAiStatus(e,t="info"){let s=this._root.querySelector("#lyrics-empty p:first-of-type");if(s){if(!e){s.textContent="\u8FD8\u6CA1\u6709\u5206\u6BB5\u3002",s.className="text-sm";return}s.textContent=e,s.className="text-sm "+(t==="ok"?"text-green-600 dark:text-green-400":t==="err"?"text-red-600 dark:text-red-400":"text-slate-500")}},_openSaveDialog(){if(!this._text||!this._text.trim()){this._setAiStatus("\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u672C","err");return}let e=this._root.querySelector("#save-dlg"),t=this._root.querySelector("#save-dlg-title"),s=this._root.querySelector("#save-title"),a=this._root.querySelector("#save-stats"),r=this._root.querySelector("#save-error");this._currentFile?(t.textContent="\u4FDD\u5B58\u5230\u5F53\u524D\u6587\u4EF6",s.value=this._currentFile.title):(t.textContent="\u4FDD\u5B58\u4E3A\u65B0\u6587\u4EF6",s.value=L(this._text,32)),a.textContent=`${this._text.length} \u5B57 \xB7 ${this._segments.length} \u6BB5 \xB7 \u987A\u5E8F\u81EA\u52A8\u64AD\u653E: ${this._root.querySelector("#auto-all").checked?"\u5F00":"\u5173"}`,r.classList.add("hidden"),r.textContent="",e.showModal(),setTimeout(()=>{s.focus(),s.select()},0)},_closeSaveDialog(){this._root.querySelector("#save-dlg").close()},async _confirmSaveFile(){let e=this._root.querySelector("#save-title"),t=this._root.querySelector("#save-error"),s=i=>{i?(t.textContent=i,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent="")},a=e.value.trim();if(!a){s("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A");return}s("");let r=this._root.querySelector("#auto-all").checked===!0,n=Date.now();try{let i;this._currentFile?i={...this._currentFile,title:a,text:this._text,segments:Array.isArray(this._segments)?this._segments:[],autoAll:r,updatedAt:n}:i={id:j("fl"),folderId:null,title:a,text:this._text,segments:Array.isArray(this._segments)?this._segments:[],autoAll:r,createdAt:n,updatedAt:n},await P.put(i),this._currentFile=i,this._currentFileId=i.id,g.set(G,i.id),this._closeSaveDialog(),this._toast(`\u5DF2\u4FDD\u5B58\u300C${a}\u300D`,"ok");let c=this._root.querySelector("#file-sidebar");c&&(await c.refresh(),c.setSelected(i.id,{silent:!0}))}catch(i){console.error("[speak] save file failed:",i),s("\u4FDD\u5B58\u5931\u8D25:"+(i?.message||i))}},_refreshAiGenBtnState(){if(!this._aiGenBtn)return;let e=!!this._currentFile;this._aiGenBtn.disabled=!e,this._aiGenBtn.title=e?`AI \u91CD\u65B0\u751F\u6210\u300C${this._currentFile.title}\u300D\u7684\u5185\u5BB9`:"\u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u9009\u4E2D\u4E00\u4E2A\u6587\u4EF6"},_wireAiGenDialog(e){let t=e.querySelector("#ai-gen-dlg"),s=e.querySelector("#ai-gen-topic"),a=e.querySelector("#ai-gen-style"),r=e.querySelector("#ai-gen-submit"),n=e.querySelector("#ai-gen-status"),i=e.querySelector("#ai-gen-error"),c=e.querySelector("#ai-gen-tab-auto"),h=e.querySelector("#ai-gen-tab-manual"),x=e.querySelector("#ai-gen-panel-auto"),o=e.querySelector("#ai-gen-panel-manual"),p=e.querySelector("#ai-gen-m-topic"),l=e.querySelector("#ai-gen-m-style"),y=e.querySelector("#ai-gen-m-response"),u=e.querySelector("#ai-gen-copy-prompt"),b=e.querySelector("#ai-gen-m-submit"),f=e.querySelector("#ai-gen-m-status"),v=e.querySelector("#ai-gen-m-error"),C=d=>{d?(i.textContent=d,i.classList.remove("hidden")):(i.classList.add("hidden"),i.textContent="")},_=d=>{d?(n.textContent=d,n.classList.remove("hidden")):(n.classList.add("hidden"),n.textContent="")},T=d=>{d?(v.textContent=d,v.classList.remove("hidden")):(v.classList.add("hidden"),v.textContent="")},z=d=>{d?(f.textContent=d,f.classList.remove("hidden")):(f.classList.add("hidden"),f.textContent="")},q=d=>{this._currentAiGenMode=d==="manual"?"manual":"auto",g.set(O,this._currentAiGenMode);let E=this._currentAiGenMode==="auto";for(let[w,A]of[[c,E],[h,!E]])w.classList.toggle("border-blue-500",A),w.classList.toggle("text-blue-600",A),w.classList.toggle("dark:text-blue-300",A),w.classList.toggle("border-transparent",!A),w.classList.toggle("text-slate-500",!A),w.classList.toggle("dark:text-slate-400",!A);x.classList.toggle("hidden",!E),o.classList.toggle("hidden",E),E?(p.value=s.value,l.value=a.value):(p.value||(p.value=s.value),l.value!==a.value&&(l.value=a.value))};c.addEventListener("click",()=>q("auto")),h.addEventListener("click",()=>q("manual")),t.querySelectorAll('[data-action="close"]').forEach(d=>d.addEventListener("click",()=>t.close())),t.querySelectorAll('[data-action="cancel"]').forEach(d=>d.addEventListener("click",()=>t.close())),r.addEventListener("click",()=>this._callAiGenerate()),s.addEventListener("input",()=>C("")),s.addEventListener("keydown",d=>{(d.metaKey||d.ctrlKey)&&d.key==="Enter"&&(d.preventDefault(),r.click())}),u.addEventListener("click",()=>this._copyAiPrompt()),b.addEventListener("click",()=>this._parseAiResponse()),y.addEventListener("input",()=>T("")),this._aiGenDlg=t,this._aiGenTopic=s,this._aiGenStyle=a,this._aiGenSubmit=r,this._aiGenStatus=n,this._aiGenError=i,this._aiGenMTopic=p,this._aiGenMStyle=l,this._aiGenMResponse=y,this._aiGenMCopyBtn=u,this._aiGenMSubmit=b,this._aiGenMStatus=f,this._aiGenMError=v,this._switchAiTab=q,this._currentAiGenMode=g.get(O,"auto")==="manual"?"manual":"auto"},_buildManualPromptText(e,t){let s={"\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E":"\u901A\u4FD7\u8BB2\u89E3\u578B,\u76EE\u6807\u7EA6 200 \u5B57,3~5 \u6BB5,\u9002\u5408\u5927\u4F17\u542C\u4F17\u3002","\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0":"\u53D9\u4E8B\u7ED3\u6784,\u6709\u8D77\u627F\u8F6C\u5408,\u76EE\u6807\u7EA6 500 \u5B57,5~8 \u6BB5\u3002","\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3":"\u5C42\u5C42\u9012\u8FDB\u3001\u7531\u6D45\u5165\u6DF1,\u76EE\u6807\u7EA6 1000 \u5B57,8~12 \u6BB5\u3002","\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3":"\u5B8C\u6574\u7CFB\u7EDF\u8BB2\u89E3,\u76EE\u6807\u7EA6 2000 \u5B57,10~15 \u6BB5,\u9002\u5408\u4E13\u9898\u5B66\u4E60\u3002","\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3":"\u5B66\u672F\u8BBA\u8FF0\u98CE\u683C,\u5C42\u5C42\u8BBA\u8BC1,\u76EE\u6807\u7EA6 3000 \u5B57,12~18 \u6BB5\u3002","\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4":"\u957F\u7BC7\u5B8C\u6574\u8BBA\u8BF4,\u76EE\u6807\u7EA6 5000 \u5B57,15~25 \u6BB5,\u9002\u5408\u6DF1\u5EA6\u4E13\u9898\u3002","\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C":"\u53E4\u8BD7 / \u8BCD\u98CE\u683C,4~8 \u53E5,\u6BCF\u53E5 5~7 \u5B57\u6216 7 \u5B57\u4E3A\u4E3B,\u62BC\u97F5\u3002","\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD":"\u6177\u6168\u6FC0\u6602\u3001\u6709\u53F7\u53EC\u529B,\u76EE\u6807\u7EA6 300 \u5B57,4~6 \u6BB5\u3002"}[t]||"\u76EE\u6807\u7EA6 400 \u5B57,5~7 \u6BB5\u3002";return`\u3010\u4EFB\u52A1\u3011\u8BF7\u6839\u636E\u4E0B\u9762\u7684\u4E3B\u9898\u548C\u98CE\u683C,\u521B\u4F5C\u4E00\u7BC7\u9002\u5408\u6717\u8BFB\u7684\u7A3F\u5B50\u3002

\u3010\u4E3B\u9898\u3011${e}
\u3010\u98CE\u683C\u3011${t}

\u98CE\u683C\u7EC6\u5316:${s}

\u3010\u8F93\u51FA\u8981\u6C42\u3011
1. \u540C\u65F6\u7ED9\u4E00\u4E2A\u7B80\u6D01\u7684\u6587\u4EF6\u6807\u9898(4~20 \u4E2A\u6C49\u5B57 \u6216 3~12 \u4E2A\u82F1\u6587\u5355\u8BCD;\u4E0D\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u524D\u7F00)
2. \u628A\u5185\u5BB9\u6309\u6BB5\u843D / \u53E5\u610F\u5207\u5206\u6210 3~12 \u6BB5(\u6BCF\u6BB5\u5927\u81F4 60~150 \u5B57,\u81EA\u7136\u8FB9\u754C)

\u3010\u4E25\u683C\u8F93\u51FA JSON\u3011\u683C\u5F0F\u5982\u4E0B,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u5916\u7684\u5185\u5BB9:
{"title": "\u4F60\u7684\u6807\u9898", "segments": ["\u7B2C1\u6BB5\u539F\u6587", "\u7B2C2\u6BB5\u539F\u6587", ...]}`},_openAiGenerate(){if(!this._currentFile){this._setAiStatus("\u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u9009\u4E2D\u4E00\u4E2A\u6587\u4EF6","err");return}let e=this._currentFile,t=e.title||"";this._aiGenTopic.value=t,this._aiGenStyle.value="\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E",this._aiGenMTopic.value=t,this._aiGenMStyle.value=this._aiGenStyle.value,this._aiGenMResponse.value="";let s=this._root.querySelector("#ai-gen-current-title");s&&(s.textContent=e.title||"(\u672A\u547D\u540D)"),this._setAiGenErr(""),this._setAiGenStatus(""),this._setAiGenMErr(""),this._setAiGenMStatus(""),this._aiGenMCopyBtn.textContent="\u{1F4CB} \u590D\u5236\u63D0\u793A\u8BCD",this._switchAiTab(this._currentAiGenMode),this._aiGenDlg.showModal(),setTimeout(()=>{this._currentAiGenMode==="manual"?this._aiGenMTopic.focus():this._aiGenTopic.focus()},0)},_setAiGenErr(e){let t=this._root?.querySelector("#ai-gen-error");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiGenStatus(e){let t=this._root?.querySelector("#ai-gen-status");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiGenMErr(e){let t=this._root?.querySelector("#ai-gen-m-error");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiGenMStatus(e){let t=this._root?.querySelector("#ai-gen-m-status");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},async _callAiGenerate(){if(!this._currentFile){this._setAiGenErr("\u5F53\u524D\u6CA1\u6709\u52A0\u8F7D\u6587\u4EF6");return}if(!k.isConfigured()){this._setAiGenErr("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key");return}let e=this._aiGenTopic.value.trim();if(!e){this._setAiGenErr("\u8BF7\u8F93\u5165\u4E3B\u9898"),this._aiGenTopic.focus();return}let t=this._aiGenStyle.value,s=k.get(),a=s.baseUrl.replace(/\/+$/,"")+"/chat/completions",r=this._aiGenSubmit,n=r.innerHTML;r.disabled=!0,r.innerHTML=`${m.sparkles}<span>\u751F\u6210\u4E2D...</span>`,this._setAiGenErr(""),this._setAiGenStatus("\u6B63\u5728\u8BF7\u6C42 AI \u751F\u6210..."),this._aiGenTopic.disabled=!0,this._aiGenStyle.disabled=!0;try{let c=`\u4F60\u662F\u6717\u8BFB\u7A3F\u521B\u4F5C\u52A9\u624B\u3002\u7528\u6237\u7ED9\u4E00\u4E2A\u4E3B\u9898\u548C\u98CE\u683C,\u4F60\u540C\u65F6\u4EA7\u51FA:
1. \u4E00\u4E2A\u7B80\u6D01\u7684\u6587\u4EF6\u6807\u9898(4~20 \u4E2A\u6C49\u5B57 \u6216 3~12 \u4E2A\u82F1\u6587\u5355\u8BCD;\u4E0D\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u524D\u7F00;\u82E5\u4E3B\u9898\u672C\u8EAB\u5DF2\u7ECF\u662F\u7B80\u77ED\u540D\u8BCD\u53EF\u76F4\u63A5\u7528)
2. \u9002\u5408\u6717\u8BFB\u7684\u5185\u5BB9,**\u5DF2\u7ECF\u6309\u6BB5\u843D / \u53E5\u610F\u5207\u5206\u6210 3~12 \u6BB5**(\u6BCF\u6BB5\u5927\u81F4 60~150 \u5B57,\u81EA\u7136\u8FB9\u754C)

\u98CE\u683C\u8981\u6C42:${{"\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E":"\u901A\u4FD7\u8BB2\u89E3\u578B,\u76EE\u6807\u7EA6 200 \u5B57,3~5 \u6BB5,\u9002\u5408\u5927\u4F17\u542C\u4F17\u3002","\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0":"\u53D9\u4E8B\u7ED3\u6784,\u6709\u8D77\u627F\u8F6C\u5408,\u76EE\u6807\u7EA6 500 \u5B57,5~8 \u6BB5\u3002","\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3":"\u5C42\u5C42\u9012\u8FDB\u3001\u7531\u6D45\u5165\u6DF1,\u76EE\u6807\u7EA6 1000 \u5B57,8~12 \u6BB5\u3002","\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3":"\u5B8C\u6574\u7CFB\u7EDF\u8BB2\u89E3,\u76EE\u6807\u7EA6 2000 \u5B57,10~15 \u6BB5,\u9002\u5408\u4E13\u9898\u5B66\u4E60\u3002","\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3":"\u5B66\u672F\u8BBA\u8FF0\u98CE\u683C,\u5C42\u5C42\u8BBA\u8BC1,\u76EE\u6807\u7EA6 3000 \u5B57,12~18 \u6BB5\u3002","\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4":"\u957F\u7BC7\u5B8C\u6574\u8BBA\u8BF4,\u76EE\u6807\u7EA6 5000 \u5B57,15~25 \u6BB5,\u9002\u5408\u6DF1\u5EA6\u4E13\u9898\u3002","\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C":"\u53E4\u8BD7 / \u8BCD\u98CE\u683C,4~8 \u53E5,\u6BCF\u53E5 5~7 \u5B57\u6216 7 \u5B57\u4E3A\u4E3B,\u62BC\u97F5\u3002","\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD":"\u6177\u6168\u6FC0\u6602\u3001\u6709\u53F7\u53EC\u529B,\u76EE\u6807\u7EA6 300 \u5B57,4~6 \u6BB5\u3002"}[t]||"\u76EE\u6807\u7EA6 400 \u5B57,5~7 \u6BB5\u3002"}

\u4E25\u683C\u8981\u6C42:**\u53EA\u8F93\u51FA JSON**,\u683C\u5F0F:
{"title": "\u4F60\u7684\u6807\u9898", "segments": ["\u7B2C1\u6BB5\u539F\u6587", "\u7B2C2\u6BB5\u539F\u6587", ...]}

\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u5916\u7684\u5185\u5BB9\u3002`,h=new AbortController,x=setTimeout(()=>h.abort(),9e4),o;try{o=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.apiKey}`},body:JSON.stringify({model:k.getEffectiveModel(),messages:[{role:"system",content:c},{role:"user",content:`\u3010\u4E3B\u9898\u3011${e}
\u3010\u98CE\u683C\u3011${t}`}],temperature:.7,stream:!1}),signal:h.signal})}finally{clearTimeout(x)}if(!o.ok){let _=await o.text().catch(()=>o.statusText);throw new Error(`HTTP ${o.status} \u2014 ${_.slice(0,200)}`)}let l=(await o.json().catch(()=>null))?.choices?.[0]?.message?.content;if(typeof l!="string"||!l.trim())throw new Error("AI \u8FD4\u56DE\u4E3A\u7A7A");let y=null,u=l.match(/```(?:json)?\s*([\s\S]*?)```/i);for(let _ of[u?.[1],l])if(_)try{let T=JSON.parse(_.trim());if(T&&Array.isArray(T.segments)){y=T;break}}catch{}if(!y)throw new Error("AI \u8FD4\u56DE\u65E0\u6CD5\u89E3\u6790\u4E3A {title, segments[]} JSON");let f=String(y.title||"").trim().replace(/^[\s"'""''「」『』《》【】\[\]]+/,"").replace(/[\s"'""''「」『』《》【】\[\]]+$/,"").replace(/\s+/g," ").slice(0,64)||this._currentFile.title||L(e,32),v=(y.segments||[]).map(_=>String(_||"").replace(/\s+/g," ").trim()).filter(Boolean).map(_=>_.length>500?_.slice(0,500):_);if(v.length===0)throw new Error("AI \u672A\u8FD4\u56DE\u4EFB\u4F55\u6BB5\u843D,\u8BF7\u91CD\u8BD5");let C=v.join(`

`);await this._applyAiGenerated({title:f,text:C,segments:v}),this._aiGenDlg.close(),this._toast(`\u5DF2\u91CD\u65B0\u751F\u6210\u300C${f}\u300D(${v.length} \u6BB5)`,"ok")}catch(i){let c=i?.message||String(i);i?.name==="AbortError"?this._setAiGenErr("AI \u751F\u6210\u8D85\u65F6 (90s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):i instanceof TypeError?this._setAiGenErr("\u7F51\u7EDC\u9519\u8BEF:"+c+" (\u53EF\u80FD\u662F CORS)"):this._setAiGenErr("AI \u751F\u6210\u5931\u8D25:"+c),console.error("[speak] AI generate failed:",i)}finally{r.disabled=!1,r.innerHTML=n,this._aiGenTopic.disabled=!1,this._aiGenStyle.disabled=!1,this._setAiGenStatus("")}},async _copyAiPrompt(){if(!this._currentFile)return;let e=(this._aiGenMTopic.value||this._aiGenTopic.value).trim(),t=this._aiGenMStyle.value||this._aiGenStyle.value;if(!e){this._setAiGenMErr("\u8BF7\u5148\u586B\u5199\u4E3B\u9898"),this._aiGenMTopic.focus();return}let s=this._buildManualPromptText(e,t),a=this._aiGenMCopyBtn,r=a.textContent,n=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(s),n=!0)}catch(i){console.warn("[speak] clipboard.writeText failed:",i)}if(!n)try{let i=document.createElement("textarea");i.value=s,i.style.position="fixed",i.style.top="-9999px",document.body.appendChild(i),i.focus(),i.select(),n=document.execCommand("copy"),document.body.removeChild(i)}catch(i){console.warn("[speak] execCommand copy fallback failed:",i)}n?(a.textContent="\u2713 \u5DF2\u590D\u5236",this._setAiGenMErr(""),this._setAiGenMStatus("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F,\u5230 ChatGPT/Claude \u7B49\u7C98\u8D34\u5373\u53EF"),clearTimeout(this._copyResetTimer),this._copyResetTimer=setTimeout(()=>{a.textContent=r},2e3)):(this._setAiGenMErr("\u590D\u5236\u5931\u8D25,\u8BF7\u624B\u52A8\u9009\u4E2D\u4E0B\u65B9\u63D0\u793A\u8BCD\u6587\u672C\u590D\u5236"),this._aiGenMResponse.value=s+`

(\u4EE5\u4E0A\u662F\u63D0\u793A\u8BCD\u6A21\u677F,AI \u56DE\u590D\u8BF7\u7C98\u8D34\u5230\u4E0B\u65B9 \u2193)
`)},async _parseAiResponse(){if(!this._currentFile)return;let e=(this._aiGenMResponse.value||"").trim();if(!e){this._setAiGenMErr("\u8BF7\u5148\u7C98\u8D34 AI \u7684\u56DE\u590D"),this._aiGenMResponse.focus();return}let t=e.replace(/^﻿/,"").replace(/[-‍﻿]/g,"");t=t.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();let a=[t.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],t],r=t.indexOf("{"),n=t.lastIndexOf("}");r>=0&&n>r&&a.push(t.slice(r,n+1));let i=t.indexOf("["),c=t.lastIndexOf("]");i>=0&&c>i&&a.push(t.slice(i,c+1));let h=null;for(let u of a)if(u)try{let b=JSON.parse(u.trim());if(b&&Array.isArray(b.segments)){h=b;break}}catch{}if(!h){for(let u of a)if(u)try{let b=JSON.parse(u.trim());if(Array.isArray(b)){h={title:"",segments:b};break}}catch{}}if(!h){this._setAiGenMErr("\u65E0\u6CD5\u89E3\u6790\u4E3A {title, segments[]} JSON,\u8BF7\u786E\u8BA4\u590D\u5236\u5B8C\u6574(\u652F\u6301 json \u4EE3\u7801\u5757)");return}let x=(this._aiGenMTopic.value||this._aiGenTopic.value).trim(),p=String(h.title||"").trim().replace(/^[\s"'""''「」『』《》【】\[\]]+/,"").replace(/[\s"'""''「」『』《》【】\[\]]+$/,"").replace(/\s+/g," ").slice(0,64)||this._currentFile.title||L(x||h.segments?.[0]||"AI \u751F\u6210\u6717\u8BFB\u7A3F",32),l=(h.segments||[]).map(u=>String(u||"").replace(/\s+/g," ").trim()).filter(Boolean).map(u=>u.length>500?u.slice(0,500):u);if(l.length===0){this._setAiGenMErr("\u89E3\u6790\u6210\u529F\u4F46\u6BB5\u843D\u4E3A\u7A7A,\u8BF7\u91CD\u8BD5");return}let y=l.join(`

`);this._setAiGenMStatus("\u6B63\u5728\u4FDD\u5B58..."),await this._applyAiGenerated({title:p,text:y,segments:l}),this._aiGenDlg.close(),this._toast(`\u5DF2\u91CD\u65B0\u751F\u6210\u300C${p}\u300D(${l.length} \u6BB5)`,"ok")},async _applyAiGenerated({title:e,text:t,segments:s}){let a=Date.now(),r={...this._currentFile,title:e,text:t,segments:s,updatedAt:a};await P.put(r),this._currentFile=r,this._currentFileId=r.id,g.set(G,r.id),this._text=t,this._segments=s,this._saveState(),this._stopAll({silent:!0}),this._updateMeta(),this._renderLyrics();let n=this._root.querySelector("#file-sidebar");n&&await n.refresh(),this._refreshAiGenBtnState()},_toast(e,t="info"){let s=document.getElementById("__speak-toast");s||(s=document.createElement("div"),s.id="__speak-toast",s.style.transition="opacity 300ms",document.body.appendChild(s)),s.textContent=e,s.className="fixed top-12 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm "+(t==="ok"?"bg-green-600 text-white":t==="err"?"bg-red-600 text-white":"bg-slate-800 text-white"),s.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},320)},1800)}};function H(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function N(e){let t=String(e||"");return/[一-鿿぀-ゟ゠-ヿ가-힯]/.test(t)?"zh":"en"}function R(e,t){let a=[e.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],e];for(let n of a)if(n)try{let i=JSON.parse(n.trim());if(Array.isArray(i))return i.filter(c=>typeof c=="string"&&c.trim());if(i&&Array.isArray(i.segments))return i.segments.filter(c=>typeof c=="string"&&c.trim())}catch{}let r=e.split(/\r?\n/).map(n=>n.trim()).filter(n=>n&&!n.startsWith("{")&&!n.startsWith("["));return r.length>=2?r:$.split(t)}var W=D;export{W as default,D as page};
