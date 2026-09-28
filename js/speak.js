import{a as C,c as b,d as v,e as G,m as y,o as B,q as L,u as P}from"./chunk-X3YS4SMP.js";var F="speak-state",I="speak-auto-all",E="speak-current-file",j="ai-gen-mode",D="ai-split-style",k=[{value:"\u7EC6\u5207 \xB7 \u4E00\u53E5\u4E00\u6BB5",hint:"\u51E0\u4E4E\u6BCF\u4E2A\u5B8C\u6574\u53E5\u5B50\u5355\u72EC\u6210\u6BB5,\u9002\u5408\u7CBE\u542C / \u8DDF\u8BFB / \u5355\u53E5\u7EC3\u4E60,\u5E73\u5747\u6BB5\u957F\u7EA6 30~80 \u5B57,\u9884\u8BA1 20~50 \u6BB5\u3002",targetChars:60},{value:"\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6",hint:"\u6309\u6BB5\u843D / \u53E5\u610F\u81EA\u7136\u5207\u5206,\u6BCF\u6BB5 2~4 \u53E5,\u9002\u5408\u5E38\u89C4\u6717\u8BFB,\u5E73\u5747\u6BB5\u957F\u7EA6 80~150 \u5B57,\u9884\u8BA1 8~20 \u6BB5\u3002",targetChars:120},{value:"\u7C97\u5207 \xB7 \u6BB5\u843D\u805A\u5408",hint:"\u628A\u591A\u4E2A\u77ED\u6BB5\u843D / \u77ED\u53E5\u805A\u5408\u6210\u4E00\u6BB5,\u9002\u5408\u5FEB\u901F\u626B\u8BFB,\u5E73\u5747\u6BB5\u957F\u7EA6 150~300 \u5B57,\u9884\u8BA1 5~12 \u6BB5\u3002",targetChars:220},{value:"\u8D85\u7C97 \xB7 \u591A\u6BB5\u805A\u5408",hint:"\u805A\u5408\u591A\u4E2A\u81EA\u7136\u6BB5\u843D\u6210\u4E00\u6BB5,\u9002\u5408\u6574\u4F53\u542C / \u5B8C\u6574\u6717\u8BFB,\u5E73\u5747\u6BB5\u957F\u7EA6 300~600 \u5B57,\u9884\u8BA1 3~8 \u6BB5\u3002",targetChars:450}];function N(e){let t=k.find(s=>s.value===e)||k[1];return`\u4F60\u662F\u6587\u672C\u5206\u6BB5\u52A9\u624B\u3002\u7528\u6237\u4F1A\u7ED9\u4F60\u4E00\u6BB5\u5DF2\u6709\u7684\u957F\u6587\u672C,\u4F60\u8981\u628A\u5B83\u5207\u5206\u6210\u82E5\u5E72\u4E2A\u9002\u5408\u6717\u8BFB\u7684\u5C0F\u6BB5,\u7EDD\u4E0D\u91CD\u5199\u3001\u4E0D\u589E\u5220\u3002

\u3010\u9009\u5B9A\u7684\u7C92\u5EA6 / \u957F\u5EA6\u3011
- \u98CE\u683C:${t.value}
- \u8981\u6C42:${t.hint}
- \u5E73\u5747\u6BB5\u957F:${t.targetChars} \u5B57 (\u5141\u8BB8 \xB150% \u6D6E\u52A8)
- \u6BB5\u6570:\u53C2\u8003\u4E0A\u65B9\u7684"\u9884\u8BA1"\u533A\u95F4,\u4E0D\u8981\u8FDC\u8D85\u4E5F\u4E0D\u8981\u8FDC\u5C11\u4E8E

\u3010\u5207\u5206\u539F\u5219\u3011
1. \u4E25\u683C\u6309\u7528\u6237\u9009\u5B9A\u7684\u7C92\u5EA6\u5207\u5206\u3002\u6BB5\u843D / \u81EA\u7136\u53E5\u7FA4 / \u53E5\u672B\u6807\u70B9 \u662F\u9996\u9009\u8FB9\u754C;\u4E0D\u8981\u628A\u534A\u53E5\u8BDD\u5207\u5230\u4E0B\u4E00\u6BB5\u3002
2. \u6BB5\u4E0E\u6BB5\u4E4B\u95F4\u4FDD\u6301\u8BED\u4E49\u72EC\u7ACB,\u9002\u5408\u5355\u72EC\u6717\u8BFB\u4E0E\u8DF3\u8BFB\u3002
3. \u4FDD\u6301\u539F\u6587\u5B8C\u6574 \u2014\u2014 \u65E2\u4E0D\u8981\u6F0F\u5B57,\u4E5F\u4E0D\u8981\u5408\u5E76\u76F8\u90BB\u7684\u5B8C\u6574\u53E5\u5B50\u3002

\u3010\u8F93\u51FA\u7EA6\u675F \u2014 \u975E\u5E38\u91CD\u8981\u3011
- **\u7EDD\u5BF9\u4E0D\u8981**\u7ED9\u7247\u6BB5\u52A0\u4EFB\u4F55\u524D\u7F00 / \u5E8F\u53F7 / \u6807\u53F7
  - \u4E0D\u8981\u300C\u7B2C 1 \u6BB5\u300D\u300C\u7B2C\u4E00\u6BB5\u300D\u300C\u7B2C1\u6BB5\u300D\u300C\u7B2C\u4E8C\u6BB5\u300D\u4E4B\u7C7B
  - \u4E0D\u8981\u300C1.\u300D\u300C2\u3001\u300D\u300C\uFF081\uFF09\u300D\u300C[1]\u300D\u4E4B\u7C7B
  - \u4E0D\u8981\u4EFB\u4F55\u6807\u9898\u3001bullet\u3001\u5F15\u53F7\u3001\u4E66\u540D\u53F7\u3001emoji
- \u76F4\u63A5\u3001\u5E72\u51C0\u3001\u539F\u539F\u672C\u672C\u5730\u8F93\u51FA\u539F\u6587\u6587\u672C,\u4E00\u5B57\u4E0D\u6539\u3001\u4E00\u5B57\u4E0D\u6F0F\u3002

\u3010\u4E25\u683C\u8F93\u51FA JSON,\u53EA\u6B64\u4E00\u79CD,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u6807\u8BB0\u3001\u4E0D\u8981\u591A\u4F59\u6362\u884C / \u6CE8\u91CA\u3011
{"segments":["\u539F\u6587\u7247\u6BB5A","\u539F\u6587\u7247\u6BB5B",...]}`}var f={eye:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',sparkles:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.6 4.4L18 8l-4.4 1.6L12 14l-1.6-4.4L6 8l4.4-1.6L12 2zM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14zm14 0l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',clipboard:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',release:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',panelLeft:'<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>'},H={title:"\u6717\u8BFB",mount(e){let t=b.get(F,{text:"",segments:[]}),s=b.get(I,"__UNSET__"),i;s===!0?i=!0:s===!1?i=!1:s==="__UNSET__"?(i=!0,b.set(I,!0)):i=!0;let r=b.get(E,null);this._root=e,this._text=t.text||"",this._segments=Array.isArray(t.segments)?t.segments:[],this._currentFile=null,this._currentFileId=r,this._playingIndex=-1,this._lastIndex=-1,this._isPaused=!1,this._playGen=0,this._userScrollingUntil=0,this._aiSplitBusy=!1,this._segmentProgress=0,this._progStartAt=null,this._progElapsedMs=0,this._progPausedAt=null,this._progRafId=null,this._progDurationMs=0,e.innerHTML=`
      <div class="flex h-full min-h-0">

        <!-- \u5DE6:\u53EF\u6298\u53E0\u6587\u4EF6\u4FA7\u680F -->
        <file-sidebar id="file-sidebar"></file-sidebar>

        <!-- \u53F3:\u4E3B\u533A -->
        <main class="flex-1 min-w-0 flex flex-col bg-white dark:bg-slate-800">

          <!-- \u9876\u90E8\u5DE5\u5177\u680F -->
          <div class="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border-b border-slate-200 dark:border-slate-700 shrink-0 flex-wrap">
            <!-- \u79FB\u52A8\u7AEF:\u6253\u5F00\u6587\u4EF6\u62BD\u5C49 -->
            <button id="open-sidebar" type="button"
                    title="\u6587\u4EF6"
                    aria-label="\u6253\u5F00\u6587\u4EF6\u5217\u8868"
                    class="sm:hidden shrink-0 inline-flex items-center justify-center w-11 h-11 -ml-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition">
              ${f.panelLeft}
            </button>
            <button id="ai-split" type="button"
                    class="inline-flex items-center gap-1.5 px-2.5 min-h-11 sm:min-h-0 sm:py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-xs sm:text-sm">
              ${f.sparkles}<span class="hidden sm:inline">AI \u62C6\u5206</span>
            </button>
            <button id="ai-generate" type="button"
                    title="AI \u91CD\u65B0\u751F\u6210\u5F53\u524D\u6587\u4EF6\u7684\u5185\u5BB9"
                    class="inline-flex items-center gap-1.5 px-2.5 min-h-11 sm:min-h-0 sm:py-1.5 rounded-md border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm">
              ${f.sparkles}<span class="hidden sm:inline">AI \u751F\u6210</span>
            </button>
            <button id="clear" type="button"
                    class="inline-flex items-center gap-1.5 px-2.5 min-h-11 sm:min-h-0 sm:py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
              ${f.trash}<span class="hidden sm:inline">\u6E05\u7A7A</span>
            </button>
            <div class="flex-1"></div>
            <label class="inline-flex items-center gap-2 cursor-pointer select-none sm:pl-3 sm:ml-1 sm:border-l border-slate-200 dark:border-slate-700"
                   title="\u987A\u5E8F\u81EA\u52A8\u64AD\u653E">
              <span class="hidden sm:inline text-xs sm:text-sm text-slate-600 dark:text-slate-300">\u987A\u5E8F\u81EA\u52A8\u64AD\u653E</span>
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

        <!-- AI \u62C6\u5206 dialog(2026-09-28 \u5408\u5E76\u4E86\u300C\u67E5\u770B / \u7F16\u8F91\u300D+ \u52A0 manual tab)
             \u5DE5\u5177\u680F\u53EA\u5269 \u2728 AI \u62C6\u5206 \u4E00\u9897,\u5F39\u6846\u91CC\u540C\u65F6\u652F\u6301:
             - \u67E5\u770B / \u7F16\u8F91\u957F\u6587\u672C(textarea + \u5B57\u6570\u7EDF\u8BA1 + \u7C98\u8D34)
             - \u9009 4 \u6863\u7C92\u5EA6
             - \u81EA\u52A8 tab:\u70B9\u300C\u5F00\u59CB\u62C6\u5206\u300D\u76F4\u63A5\u8C03 API
             - \u624B\u52A8 tab:\u590D\u5236\u63D0\u793A\u8BCD \u2192 \u53D1\u7ED9\u7F51\u9875 AI \u2192 \u7C98\u8D34\u56DE\u590D \u2192 \u89E3\u6790\u5E76\u5E94\u7528 -->
        <dialog id="ai-split-dlg" class="p-0 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 backdrop:bg-black/40 max-w-[640px] w-[min(640px,calc(100vw-32px))] max-h-[calc(100vh-32px)] border border-slate-200 dark:border-slate-700">
          <form method="dialog" class="flex flex-col max-h-[calc(100vh-32px)]">
            <header class="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0 gap-2">
              <span class="text-blue-600 dark:text-blue-300">${f.sparkles}</span>
              <strong class="text-sm">AI \u62C6\u5206</strong>
              <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">\u67E5\u770B / \u7F16\u8F91\u6587\u672C,\u9009\u7C92\u5EA6\u5F00\u59CB\u62C6\u5206</span>
              <div class="flex-1"></div>
              <button type="button" data-action="close" class="px-2 py-1 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700" aria-label="\u5173\u95ED">\u2715</button>
            </header>

            <!-- tabs:\u81EA\u52A8 / \u624B\u52A8 -->
            <div class="flex items-stretch border-b border-slate-200 dark:border-slate-700 shrink-0 text-sm">
              <button type="button" data-split-tab="auto" id="ai-split-tab-auto"
                      class="flex-1 py-2 px-3 text-center transition border-b-2 border-transparent text-slate-500 dark:text-slate-400">
                \u81EA\u52A8\u62C6\u5206
              </button>
              <button type="button" data-split-tab="manual" id="ai-split-tab-manual"
                      class="flex-1 py-2 px-3 text-center transition border-b-2 border-transparent text-slate-500 dark:text-slate-400">
                \u624B\u52A8 AI \u62C6\u5206
              </button>
            </div>

            <div class="p-4 flex flex-col gap-3 overflow-y-auto">

              <!-- \u957F\u6587\u672C textarea(\u67E5\u770B / \u7F16\u8F91) - auto \u548C manual \u5171\u7528 -->
              <div class="flex flex-col gap-1">
                <div class="flex items-center gap-2">
                  <span class="text-xs text-slate-600 dark:text-slate-300">\u957F\u6587\u672C</span>
                  <div class="flex-1"></div>
                  <span id="dlg-text-meta" class="text-xs text-slate-500"></span>
                </div>
                <textarea id="src-text" rows="10"
                          class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 font-mono text-sm sm:text-base resize-y"
                          placeholder="\u5728\u8FD9\u91CC\u7C98\u8D34\u4F60\u8981\u6717\u8BFB\u7684\u6587\u672C..."
                          style="min-height:14rem"></textarea>
              </div>

              <!-- \u7C92\u5EA6\u9009\u62E9 - auto \u548C manual \u5171\u7528 -->
              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-600 dark:text-slate-300">\u7C92\u5EA6 / \u957F\u5EA6</span>
                <select id="ai-split-style"
                        class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-sm">
                  <option value="\u7EC6\u5207 \xB7 \u4E00\u53E5\u4E00\u6BB5">\u7EC6\u5207 \xB7 \u4E00\u53E5\u4E00\u6BB5(\u6BCF\u6BB5\u7EA6 30~80 \u5B57,\u9884\u8BA1 20~50 \u6BB5)</option>
                  <option value="\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6" selected>\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6(\u6BCF\u6BB5\u7EA6 80~150 \u5B57,\u9884\u8BA1 8~20 \u6BB5)</option>
                  <option value="\u7C97\u5207 \xB7 \u6BB5\u843D\u805A\u5408">\u7C97\u5207 \xB7 \u6BB5\u843D\u805A\u5408(\u6BCF\u6BB5\u7EA6 150~300 \u5B57,\u9884\u8BA1 5~12 \u6BB5)</option>
                  <option value="\u8D85\u7C97 \xB7 \u591A\u6BB5\u805A\u5408">\u8D85\u7C97 \xB7 \u591A\u6BB5\u805A\u5408(\u6BCF\u6BB5\u7EA6 300~600 \u5B57,\u9884\u8BA1 3~8 \u6BB5)</option>
                </select>
              </label>

              <!-- ============== AUTO \u9762\u677F ============== -->
              <div id="ai-split-panel-auto" class="flex flex-col gap-3">
                <p class="text-xs text-amber-600 dark:text-amber-400">\u26A0 \u5F00\u59CB\u62C6\u5206\u4F1A**\u76F4\u63A5\u8986\u76D6**\u5F53\u524D\u5206\u6BB5,\u65E7\u5206\u6BB5\u4E0D\u53EF\u6062\u590D</p>
                <p id="ai-split-status" class="hidden text-xs text-blue-600 dark:text-blue-300"></p>
                <p id="ai-split-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>

                <!-- \u5E95\u90E8\u6309\u94AE -->
                <div class="flex items-center gap-2 pt-1 flex-wrap">
                  <button type="button" data-action="paste-into-dlg"
                          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs sm:text-sm">
                    ${f.clipboard}<span>\u7C98\u8D34</span>
                  </button>
                  <div class="flex-1"></div>
                  <button type="button" data-action="cancel" class="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs sm:text-sm">\u53D6\u6D88</button>
                  <button type="button" data-action="save" class="px-3 py-1.5 rounded-md border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition text-xs sm:text-sm">\u4FDD\u5B58</button>
                  <button type="button" id="ai-split-submit"
                          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm">
                    ${f.sparkles}<span>\u5F00\u59CB\u62C6\u5206</span>
                  </button>
                </div>
              </div>

              <!-- ============== MANUAL \u9762\u677F ============== -->
              <div id="ai-split-panel-manual" class="hidden flex flex-col gap-3">
                <div class="rounded-md border border-blue-200 dark:border-blue-800 bg-blue-50/60 dark:bg-blue-900/20 p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                  <div class="font-medium mb-1 text-blue-700 dark:text-blue-300">\u{1F4A1} \u4F7F\u7528\u6B65\u9AA4</div>
                  <ol class="list-decimal pl-4 space-y-0.5">
                    <li>\u4E0A\u65B9\u957F\u6587\u672C\u548C\u7C92\u5EA6\u5DF2\u8BBE\u597D,\u6309\u9700\u8C03\u6574</li>
                    <li>\u70B9\u300C\u{1F4CB} \u590D\u5236\u62C6\u5206\u63D0\u793A\u8BCD\u300D</li>
                    <li>\u5230\u7F51\u9875 AI(ChatGPT / Claude / \u8C46\u5305 / Gemini \u7B49)\u7C98\u8D34\u63D0\u793A\u8BCD,\u5F97\u5230\u56DE\u590D</li>
                    <li>\u628A AI \u56DE\u590D\u590D\u5236\u56DE\u6765,\u7C98\u8D34\u5230\u4E0B\u65B9\u6587\u672C\u6846</li>
                    <li>\u70B9\u300C\u89E3\u6790\u5E76\u5E94\u7528\u300D,\u4F1A\u8986\u76D6\u5F53\u524D\u5206\u6BB5</li>
                  </ol>
                </div>

                <div class="flex items-center gap-2 flex-wrap">
                  <button type="button" id="ai-split-m-copy"
                          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs">
                    \u{1F4CB} \u590D\u5236\u62C6\u5206\u63D0\u793A\u8BCD
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
                  <textarea id="ai-split-m-response" rows="8"
                            class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:border-blue-500 focus:outline-none bg-white dark:bg-slate-900 text-xs font-mono resize-y"
                            placeholder='{"segments": ["\u539F\u6587\u7247\u6BB5A", "\u539F\u6587\u7247\u6BB5B", ...]}&#10;&#10;(\u652F\u6301\u5E26 json \u4EE3\u7801\u5757\u6807\u8BB0\u7684\u683C\u5F0F)'
                            style="min-height:10rem"></textarea>
                </label>

                <p id="ai-split-m-status" class="hidden text-xs text-blue-600 dark:text-blue-300"></p>
                <p id="ai-split-m-error" class="hidden text-xs text-red-600 dark:text-red-400"></p>

                <!-- \u5E95\u90E8\u6309\u94AE -->
                <div class="flex items-center gap-2 pt-1 flex-wrap">
                  <button type="button" data-action="paste-into-dlg"
                          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs sm:text-sm">
                    ${f.clipboard}<span>\u7C98\u8D34\u6587\u672C</span>
                  </button>
                  <div class="flex-1"></div>
                  <button type="button" data-action="cancel" class="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-xs sm:text-sm">\u53D6\u6D88</button>
                  <button type="button" data-action="save" class="px-3 py-1.5 rounded-md border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition text-xs sm:text-sm">\u4FDD\u5B58</button>
                  <button type="button" id="ai-split-m-submit"
                          class="px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition disabled:opacity-50 text-xs sm:text-sm">
                    \u89E3\u6790\u5E76\u5E94\u7528
                  </button>
                </div>
              </div>
            </div>
          </form>
        </dialog>

        <!-- \u4FDD\u5B58\u5230\u6587\u4EF6 dialog(\u72EC\u7ACB\u529F\u80FD,\u4E0D\u5F71\u54CD) -->
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
                    ${f.sparkles}<span class="hidden sm:inline">AI \u751F\u6210\u6807\u9898</span><span class="sm:hidden">AI</span>
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
              <span class="text-blue-600 dark:text-blue-300">${f.sparkles}</span>
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
                    ${f.sparkles}<span>\u751F\u6210</span>
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
    `,e.querySelector("#ai-split").addEventListener("click",()=>this._openAiSplitDialog());let l=e.querySelector("#ai-generate");l.addEventListener("click",()=>this._openAiGenerate()),e.querySelector("#clear").addEventListener("click",()=>this._clearAll()),this._aiGenBtn=l,this._refreshAiGenBtnState(),e.querySelector("#open-sidebar")?.addEventListener("click",()=>{this._sidebar?.toggleMobileDrawer?.()});let a=e.querySelector("#src-text"),o=e.querySelector("#dlg-text-meta"),c=()=>{let p=a.value,n=p.length,h=p?p.split(/\r?\n/).filter(g=>g.trim()).length:0;o.textContent=n>0?`${n} \u5B57 \xB7 ${h} \u884C`:"\u672A\u8F93\u5165"};a.addEventListener("input",c),e.querySelector('#save-dlg [data-action="close"]').addEventListener("click",()=>this._closeSaveDialog()),e.querySelector('#save-dlg [data-action="cancel"]').addEventListener("click",()=>this._closeSaveDialog()),e.querySelector('#save-dlg [data-action="save"]').addEventListener("click",()=>this._confirmSaveFile()),e.querySelector("#ai-title-btn").addEventListener("click",()=>this._callAiTitle()),this._wireAiSplitDialog(e),this._wireAiGenDialog(e),e.querySelector("#auto-all").checked=i,e.querySelector("#auto-all").addEventListener("change",p=>{let n=p.target.checked===!0;b.set(I,n);let h=this._currentFile;h&&h.autoAll!==n&&(h.autoAll=n,h.updatedAt=Date.now(),L.put(h).catch(g=>console.warn("[speak] sync autoAll to file failed:",g)))}),e.querySelector("#lyrics-scroller").addEventListener("scroll",()=>{this._userScrollingUntil=Date.now()+2500},{passive:!0});let d=e.querySelector("#file-sidebar");d.onFileSelect=p=>this._onFileSelectFromSidebar(p),d.onToast=(p,n)=>this._toast(p,n),this._sidebar=d,this._unsubFilesLoaded=C.on("files:loaded",({autoAll:p}={})=>{if(typeof p=="boolean"){let n=this._root.querySelector("#auto-all");n&&n.checked!==p&&(n.checked=p,b.set(I,p))}}),this._updateMeta(),this._renderLyrics(),this._emitPlaybackState(),this._unsubPlayerCmd=C.on("player:cmd",p=>this._onPlayerCmd(p))},unmount(){this._userStopped=!0,y.stop(),this._unsubPlayerCmd?.(),this._unsubFilesLoaded?.(),this._root=null},async _onFileSelectFromSidebar(e){if(!e){this._currentFile=null,this._currentFileId=null,b.del(E),this._refreshAiGenBtnState();return}this._text=e.text||"",this._segments=Array.isArray(e.segments)?e.segments:[],this._currentFile=e,this._currentFileId=e.id,b.set(F,{text:this._text,segments:this._segments}),b.set(E,e.id);let t=this._root.querySelector("#auto-all"),s=e.autoAll===!0;t.checked!==s&&(t.checked=s,b.set(I,s)),this._stopAll({silent:!0}),this._updateMeta(),this._renderLyrics(),this._refreshAiGenBtnState(),this._toast(`\u5DF2\u52A0\u8F7D\u300C${e.title}\u300D`,"ok"),this._sidebar?.closeMobileDrawer?.()},_updateMeta(){let e=this._text.length,t=this._segments.length;t&&console.info(`[meta] ${t} \u6BB5${e?` \xB7 ${e} \u5B57`:""}`)},_linesOf(e){return e?e.split(/\r?\n/).filter(t=>t.trim().length>0).length:0},_saveState(){b.set(F,{text:this._text,segments:this._segments})},_clearAll(){!this._text&&this._segments.length===0||confirm("\u786E\u8BA4\u6E05\u7A7A\u6587\u672C\u4E0E\u5206\u6BB5?")&&(this._text="",this._segments=[],this._saveState(),this._updateMeta(),this._renderLyrics(),this._stopAll())},_onPlayerCmd(e){let t=e?.action;if(this._segments.length===0){t==="play"&&this._playFull();return}switch(t){case"play":if(this._isPaused&&this._playingIndex>=0){this._isPaused=!1,y.resume(),this._emitPlaybackState();return}let s=this._playingIndex>=0?this._playingIndex:this._lastIndex>=0?this._lastIndex:0;this._playFrom(s);break;case"pause":this._playingIndex>=0&&!this._isPaused&&(this._isPaused=!0,this._pauseProgress(),y.pause(),this._emitPlaybackState());break;case"resume":this._isPaused?(this._isPaused=!1,this._resumeProgress(),y.resume(),this._emitPlaybackState()):this._onPlayerCmd({action:"play"});break;case"prev":{let i=this._playingIndex>=0?this._playingIndex:this._lastIndex,r=i>0?i-1:0;this._segments[r]!=null&&this._playFrom(r);break}case"next":{let i=this._playingIndex>=0?this._playingIndex:this._lastIndex,r=i<0?0:Math.min(i+1,this._segments.length-1);this._segments[r]!=null&&this._playFrom(r);break}case"seek":{if(this._playingIndex<0)break;let i=Number(e.progress);if(!Number.isFinite(i))break;this._seekToProgress(i);break}}},_emitPlaybackState(){C.emit("playback:state",{total:this._segments.length,index:this._playingIndex,playing:this._playingIndex>=0&&!this._isPaused,paused:this._playingIndex>=0&&this._isPaused,progress:this._playingIndex>=0?this._computeProgress():0})},_estimateDurationMs(e,t=1){let s=String(e||"").length;if(s===0)return 500;let i=Number(t)>0?Number(t):1,r=s/4*1e3/i;return Math.max(800,r)},_startProgress(e){this._progDurationMs=Math.max(500,Number(e)||500),this._progStartAt=performance.now(),this._progElapsedMs=0,this._progPausedAt=null,this._segmentProgress=0,this._scheduleProgressTick()},_pauseProgress(){this._progStartAt==null||this._progPausedAt!=null||(this._progElapsedMs+=performance.now()-this._progStartAt,this._progPausedAt=performance.now(),this._progRafId!=null&&(cancelAnimationFrame(this._progRafId),this._progRafId=null))},_resumeProgress(){this._progStartAt==null||this._progPausedAt==null||(this._progStartAt=performance.now(),this._progPausedAt=null,this._scheduleProgressTick())},_stopProgress(){this._progRafId!=null&&(cancelAnimationFrame(this._progRafId),this._progRafId=null),this._progStartAt=null,this._progElapsedMs=0,this._progPausedAt=null,this._progDurationMs=0,this._segmentProgress=0},_scheduleProgressTick(){this._progRafId!=null&&cancelAnimationFrame(this._progRafId),this._progRafId=requestAnimationFrame(()=>this._tickProgress())},_tickProgress(){if(this._progRafId=null,this._progStartAt==null||this._progDurationMs<=0||this._progPausedAt!=null)return;let e=this._computeProgress();this._segmentProgress=e,this._emitPlaybackState(),e<1&&this._scheduleProgressTick()},_computeProgress(){if(this._progStartAt==null||this._progDurationMs<=0)return 0;let e=this._progPausedAt!=null?this._progElapsedMs:this._progElapsedMs+(performance.now()-this._progStartAt);return Math.min(1,Math.max(0,e/this._progDurationMs))},_seekToProgress(e){let t=Math.max(0,Math.min(1,e)),s=this._segments[this._playingIndex]||"";if(!s)return;if(this._progDurationMs<=0){let a=O(s),c=y.getConfig(a)?.rate??1;this._progDurationMs=this._estimateDurationMs(s,c)}if(this._progElapsedMs=t*this._progDurationMs,this._progStartAt=performance.now(),this._progPausedAt=this._isPaused?performance.now():null,this._segmentProgress=t,this._scheduleProgressTick(),this._emitPlaybackState(),this._isPaused)return;let i=Math.floor(t*s.length),r=s.slice(i);if(!r.trim())return;let l=++this._playGen;this._userStopped=!1,y.stop(),(async()=>{try{await y.speak({text:r,lang:O(r)},{onStart:()=>{},onEnd:()=>{this._playGen===l&&(this._segmentProgress=1,this._emitPlaybackState())},onError:a=>{this._playGen===l&&this._setAiStatus(`\u7B2C ${this._playingIndex+1} \u6BB5\u6717\u8BFB\u5931\u8D25:${a?.message||a}`,"err")}})}catch{}})()},_renderLyrics(){let e=this._root.querySelector("#lyrics-list"),t=this._root.querySelector("#lyrics-scroller");if(this._segments.length===0){let i=!!this._sidebar?._isMobile?`\u70B9\u5DE5\u5177\u680F\u7684 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${f.panelLeft}</span> \u9009\u4E2A\u6587\u4EF6`:"\u4ECE\u5DE6\u4FA7\u9009\u4E2A\u6587\u4EF6";e.innerHTML=`
        <div id="lyrics-empty" class="flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 px-6 py-12 sm:py-16 gap-2">
          <div class="text-3xl sm:text-4xl select-none" aria-hidden="true">\u266A</div>
          <p class="text-sm">\u8FD8\u6CA1\u6709\u5206\u6BB5\u3002</p>
          <p class="text-xs">${i},\u6216\u5728\u5DE5\u5177\u680F\u70B9 <span class="font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">${f.sparkles} AI \u62C6\u5206</span> \u7C98\u8D34\u6587\u672C\u5E76\u6309\u7C92\u5EA6\u5207\u6BB5</p>
        </div>
      `,t&&(t.scrollTop=0),this._emitPlaybackState();return}e.innerHTML=this._segments.map((s,i)=>`
      <button type="button" data-lyric-index="${i}"
        aria-label="\u4ECE\u7B2C ${i+1} \u6BB5\u5F00\u59CB\u6717\u8BFB"
        class="lyric group block w-full text-center px-4 py-3 sm:py-4 cursor-pointer rounded-lg transition-all duration-300 ease-out leading-relaxed whitespace-pre-wrap break-words
               text-slate-500 dark:text-slate-400 text-base sm:text-lg
               hover:bg-slate-100/60 dark:hover:bg-slate-700/40 hover:text-slate-700 dark:hover:text-slate-200
               focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50">
        ${J(s)}
      </button>
    `).join(""),e.style.paddingTop="4rem",e.style.paddingBottom="4rem",e.querySelectorAll("[data-lyric-index]").forEach(s=>{s.addEventListener("click",()=>{let i=Number(s.dataset.lyricIndex);this._playFrom(i)})}),t.scrollTop=0,this._playingIndex=-1,this._lastIndex=-1,this._emitPlaybackState()},_markPlaying(e){this._playingIndex=e,this._isPaused=!1,e>=0&&(this._lastIndex=e);let s=this._root.querySelector("#lyrics-list").querySelectorAll("[data-lyric-index]"),i=["lyric-active","aria-current","text-blue-600","dark:text-blue-300","font-bold"],r=["text-slate-500","dark:text-slate-400"];if(s.forEach(l=>{l.classList.remove(...i),l.classList.add(...r),l.removeAttribute("aria-current")}),e>=0&&s[e]){let l=s[e];if(l.classList.remove(...r),l.classList.add(...i),l.setAttribute("aria-current","true"),Date.now()<this._userScrollingUntil){this._emitPlaybackState();return}try{l.scrollIntoView({block:"center",behavior:"smooth"})}catch{}}this._emitPlaybackState()},async _playFull(){let e=(this._text||"").trim();if(!e){this._setAiStatus("\u6CA1\u6709\u53EF\u6717\u8BFB\u7684\u6587\u672C","err");return}this._isPaused=!1,await y.speak({text:e},{onStart:()=>{this._emitPlaybackState()},onEnd:()=>{this._emitPlaybackState()},onError:t=>{this._setAiStatus("\u6717\u8BFB\u5931\u8D25:"+(t?.message||t),"err"),this._emitPlaybackState()}})},async _playFrom(e){if(this._segments.length===0)return;let t=Math.max(0,Math.min(e,this._segments.length-1)),s=this._root.querySelector("#auto-all").checked===!0;this._stopAll({silent:!0}),s?await this._playRange(t,this._segments.length-1):await this._playRange(t,t)},async _playRange(e,t){let s=++this._playGen;this._userStopped=!1;for(let i=e;i<=t&&!(this._userStopped||this._playGen!==s);i++){this._markPlaying(i);let r=this._segments[i]||"",l=O(r),o=y.getConfig(l)?.rate??1,c=this._estimateDurationMs(r,o);if(await y.speak({text:r,lang:l},{onStart:()=>{this._playGen===s&&(this._startProgress(c),this._emitPlaybackState())},onEnd:()=>{this._playGen===s&&(this._segmentProgress=1,this._emitPlaybackState())},onError:u=>{this._playGen===s&&(this._setAiStatus(`\u7B2C ${i+1} \u6BB5\u6717\u8BFB\u5931\u8D25:${u?.message||u}`,"err"),this._userStopped=!0)}}),e===t||this._userStopped||this._playGen!==s)break}this._playGen===s&&(this._stopProgress(),this._markPlaying(-1))},_stopAll({silent:e=!1}={}){this._userStopped=!0,y.stop(),this._stopProgress(),this._markPlaying(-1),e||this._setAiStatus("\u5DF2\u505C\u6B62","info"),this._emitPlaybackState()},async _aiSplit(){if(this._aiSplitBusy)return;let e=(this._aiSplitSrc?.value||"").trim();if(!e){this._setAiSplitError("\u6CA1\u6709\u53EF\u62C6\u5206\u7684\u6587\u672C,\u8BF7\u5148\u7C98\u8D34");return}if(!v.isConfigured()){this._setAiSplitError("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key");return}e!==this._text&&(this._text=e,this._segments=[],this._saveState(),this._updateMeta(),this._renderLyrics());let t=this._aiSplitStyle?.value||b.get(D,"\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6"),s=k.some(a=>a.value===t)?t:"\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6";b.set(D,s);let i=k.find(a=>a.value===s)||k[1],r=this._aiSplitSubmit,l=r.innerHTML;r.disabled=!0,this._aiSplitBusy=!0,r.innerHTML=`${f.sparkles}<span>\u62C6\u5206\u4E2D...</span>`,this._setAiSplitError(""),this._setAiSplitStatus(`\u6B63\u5728\u8BF7\u6C42 AI \u62C6\u5206(${i.value.split(" \xB7 ")[0]})...`);try{let a=await this._callAiSplit(e,s);if(!Array.isArray(a)||a.length===0)throw new Error("AI \u672A\u8FD4\u56DE\u6709\u6548\u5206\u6BB5");let o=a.map(u=>String(u).replace(/\s+/g," ").trim()).filter(Boolean);if(o.length===0)throw new Error("AI \u8FD4\u56DE\u7684\u5206\u6BB5\u5168\u90E8\u4E3A\u7A7A");this._stopAll({silent:!0}),this._segments=o,this._saveState(),this._renderLyrics(),this._updateMeta();let c=await this._syncCurrentFile({text:e});this._setAiSplitStatus(`\u62C6\u5206\u5B8C\u6210,\u5171 ${this._segments.length} \u6BB5`),this._toast(c?`AI \u62C6\u5206\u5B8C\u6210 \xB7 \u5DF2\u4FDD\u5B58\u5230\u300C${this._currentFile.title}\u300D(\u5171 ${this._segments.length} \u6BB5)`:`AI \u62C6\u5206\u5B8C\u6210,\u5171 ${this._segments.length} \u6BB5(\u672A\u4FDD\u5B58\u5230\u6587\u4EF6)`,"ok"),setTimeout(()=>this._aiSplitDlg?.close?.(),350)}catch(a){this._setAiSplitError("AI \u62C6\u5206\u5931\u8D25,\u5DF2\u964D\u7EA7\u4E3A\u672C\u5730\u5207\u5206: "+(a?.message||a));let o=G.split(e,i.targetChars);this._stopAll({silent:!0}),this._segments=o,this._saveState(),this._renderLyrics(),this._updateMeta();let c=await this._syncCurrentFile({text:e});this._toast(c?`\u5DF2\u7528\u672C\u5730\u5207\u5206 \xB7 \u5DF2\u4FDD\u5B58\u5230\u300C${this._currentFile.title}\u300D(\u5171 ${this._segments.length} \u6BB5)`:`\u5DF2\u7528\u672C\u5730\u5207\u5206,\u5171 ${this._segments.length} \u6BB5(\u672A\u4FDD\u5B58\u5230\u6587\u4EF6)`,"ok"),setTimeout(()=>this._aiSplitDlg?.close?.(),600)}finally{r.disabled=!1,this._aiSplitBusy=!1,r.innerHTML=l}},async _callAiSplit(e,t){let s=v.get(),i=s.baseUrl.replace(/\/+$/,"")+"/chat/completions",r=`\u3010\u9009\u5B9A\u7684\u7C92\u5EA6 / \u957F\u5EA6\u3011${t}
\u3010\u5F85\u62C6\u5206\u6587\u672C\u3011
${e.slice(0,12e3)}`,l=(s.model||"").trim()||"MiniMax-M3",a=s.thinkingEnabled?null:{type:"disabled"},o=s.thinkingEnabled?"":" (\u601D\u8003\u5DF2\u5173)";this._setAiSplitStatus(`\u6B63\u5728\u8BF7\u6C42 AI \u62C6\u5206(${t.split(" \xB7 ")[0]}) \xB7 \u6A21\u578B ${l}${o}...`);let c=new AbortController,u=setTimeout(()=>c.abort(),12e4),d,p=performance.now();try{let g={model:l,messages:[{role:"system",content:N(t)},{role:"user",content:r}],temperature:.2,stream:!1};a&&(g.thinking=a),d=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.apiKey}`},body:JSON.stringify(g),signal:c.signal})}catch(g){throw g?.name==="AbortError"?new Error("\u8BF7\u6C42\u8D85\u65F6 (120s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):g instanceof TypeError?new Error(`\u7F51\u7EDC\u9519\u8BEF:${g.message} (\u53EF\u80FD\u662F CORS / \u8DE8\u57DF\u88AB\u62E6)`):g}finally{clearTimeout(u)}if(!d.ok){let g=await d.text().catch(()=>d.statusText);throw new Error(`HTTP ${d.status} \u2014 ${g.slice(0,200)}`)}let h=(await d.json().catch(()=>null))?.choices?.[0]?.message?.content?.trim();if(!h)throw new Error("\u8FD4\u56DE\u4E3A\u7A7A");return console.info(`[ai-split] model=${l} elapsed=${Math.round(performance.now()-p)}ms contentLen=${h.length}`),K(h,e)},async _callAiTitle(){let e=this._root.querySelector("#ai-title-btn"),t=this._root.querySelector("#save-title"),s=this._root.querySelector("#save-error"),i=n=>{n?(s.textContent=n,s.classList.remove("hidden")):(s.classList.add("hidden"),s.textContent="")},r=(this._text||"").trim();if(!r){i("\u6CA1\u6709\u53EF\u751F\u6210\u6807\u9898\u7684\u6587\u672C");return}if(!v.isConfigured()){i("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key");return}let l=v.get(),a=l.baseUrl.replace(/\/+$/,"")+"/chat/completions",o=e.innerHTML;e.disabled=!0,e.innerHTML=`${f.sparkles}<span>\u751F\u6210\u4E2D...</span>`,i("");let c=r.length>4e3?r.slice(0,4e3)+"\u2026":r,u=`\u4F60\u662F\u6587\u4EF6\u547D\u540D\u52A9\u624B\u3002\u6839\u636E\u7528\u6237\u63D0\u4F9B\u7684\u6717\u8BFB\u6587\u672C\u5185\u5BB9,\u751F\u6210\u4E00\u4E2A\u7B80\u6D01\u51C6\u786E\u7684\u6587\u4EF6\u6807\u9898\u3002

\u8981\u6C42:
1. \u957F\u5EA6 4~20 \u4E2A\u6C49\u5B57 (\u82F1\u6587 3~12 \u4E2A\u8BCD)\u3002
2. \u4E0D\u8981\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u4E4B\u7C7B\u7684\u524D\u7F00\u3002
3. \u80FD\u6982\u62EC\u5168\u6587\u4E3B\u9898\u6216\u6838\u5FC3\u5185\u5BB9;\u82E5\u6587\u672C\u662F\u53E4\u8BD7 / \u53E4\u6587,\u4F18\u5148\u53D6\u539F\u6587\u6807\u9898\u6216\u9996\u53E5\u6982\u62EC\u3002
4. \u53EA\u8F93\u51FA\u6807\u9898\u672C\u8EAB,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u9009\u9879\u6216\u6362\u884C\u3002`,d=new AbortController,p=setTimeout(()=>d.abort(),3e4);try{let n=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l.apiKey}`},body:JSON.stringify({model:v.getEffectiveModel(),messages:[{role:"system",content:u},{role:"user",content:`\u3010\u6717\u8BFB\u6587\u672C\u3011
${c}`}],temperature:.4,stream:!1}),signal:d.signal});if(!n.ok){let m=await n.text().catch(()=>n.statusText);throw new Error(`HTTP ${n.status} \u2014 ${m.slice(0,200)}`)}let g=(await n.json().catch(()=>null))?.choices?.[0]?.message?.content;if(typeof g!="string"||!g.trim())throw new Error("\u8FD4\u56DE\u4E3A\u7A7A");let _=g.trim().replace(/^[\s"'""''「」『』《》【】\[\]【】]+/,"").replace(/[\s"'""''「」『』《》【】\[\]【】]+$/,"").replace(/\s+/g," ").trim().slice(0,64);if(!_)throw new Error("AI \u8FD4\u56DE\u65E0\u6CD5\u89E3\u6790\u4E3A\u6807\u9898");t.value=_,t.dispatchEvent(new Event("input",{bubbles:!0})),t.focus(),t.setSelectionRange(_.length,_.length),i("")}catch(n){n?.name==="AbortError"?i("AI \u751F\u6210\u6807\u9898\u8D85\u65F6 (30s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):n instanceof TypeError?i("AI \u751F\u6210\u6807\u9898\u5931\u8D25 \u2014 \u7F51\u7EDC\u9519\u8BEF:"+(n.message||n)+" (\u53EF\u80FD\u662F CORS)"):i("AI \u751F\u6210\u6807\u9898\u5931\u8D25:"+(n?.message||n)),console.error("[speak] AI title failed:",n)}finally{clearTimeout(p),e.disabled=!1,e.innerHTML=o}},_setAiStatus(e,t="info"){let s=this._root.querySelector("#lyrics-empty p:first-of-type");if(s){if(!e){s.textContent="\u8FD8\u6CA1\u6709\u5206\u6BB5\u3002",s.className="text-sm";return}s.textContent=e,s.className="text-sm "+(t==="ok"?"text-green-600 dark:text-green-400":t==="err"?"text-red-600 dark:text-red-400":"text-slate-500")}},_openSaveDialog(){if(!this._text||!this._text.trim()){this._setAiStatus("\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u672C","err");return}let e=this._root.querySelector("#save-dlg"),t=this._root.querySelector("#save-dlg-title"),s=this._root.querySelector("#save-title"),i=this._root.querySelector("#save-stats"),r=this._root.querySelector("#save-error");this._currentFile?(t.textContent="\u4FDD\u5B58\u5230\u5F53\u524D\u6587\u4EF6",s.value=this._currentFile.title):(t.textContent="\u4FDD\u5B58\u4E3A\u65B0\u6587\u4EF6",s.value=P(this._text,32)),i.textContent=`${this._text.length} \u5B57 \xB7 ${this._segments.length} \u6BB5 \xB7 \u987A\u5E8F\u81EA\u52A8\u64AD\u653E: ${this._root.querySelector("#auto-all").checked?"\u5F00":"\u5173"}`,r.classList.add("hidden"),r.textContent="",e.showModal(),setTimeout(()=>{s.focus(),s.select()},0)},_closeSaveDialog(){this._root.querySelector("#save-dlg").close()},async _confirmSaveFile(){let e=this._root.querySelector("#save-title"),t=this._root.querySelector("#save-error"),s=a=>{a?(t.textContent=a,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent="")},i=e.value.trim();if(!i){s("\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A");return}s("");let r=this._root.querySelector("#auto-all").checked===!0,l=Date.now();try{let a;this._currentFile?a={...this._currentFile,title:i,text:this._text,segments:Array.isArray(this._segments)?this._segments:[],autoAll:r,updatedAt:l}:a={id:B("fl"),folderId:null,title:i,text:this._text,segments:Array.isArray(this._segments)?this._segments:[],autoAll:r,createdAt:l,updatedAt:l},await L.put(a),this._currentFile=a,this._currentFileId=a.id,b.set(E,a.id),this._closeSaveDialog(),this._toast(`\u5DF2\u4FDD\u5B58\u300C${i}\u300D`,"ok");let o=this._root.querySelector("#file-sidebar");o&&(await o.refresh(),o.setSelected(a.id,{silent:!0}))}catch(a){console.error("[speak] save file failed:",a),s("\u4FDD\u5B58\u5931\u8D25:"+(a?.message||a))}},_refreshAiGenBtnState(){if(!this._aiGenBtn)return;let e=!!this._currentFile;this._aiGenBtn.disabled=!e,this._aiGenBtn.title=e?`AI \u91CD\u65B0\u751F\u6210\u300C${this._currentFile.title}\u300D\u7684\u5185\u5BB9`:"\u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u9009\u4E2D\u4E00\u4E2A\u6587\u4EF6"},_wireAiGenDialog(e){let t=e.querySelector("#ai-gen-dlg"),s=e.querySelector("#ai-gen-topic"),i=e.querySelector("#ai-gen-style"),r=e.querySelector("#ai-gen-submit"),l=e.querySelector("#ai-gen-status"),a=e.querySelector("#ai-gen-error"),o=e.querySelector("#ai-gen-tab-auto"),c=e.querySelector("#ai-gen-tab-manual"),u=e.querySelector("#ai-gen-panel-auto"),d=e.querySelector("#ai-gen-panel-manual"),p=e.querySelector("#ai-gen-m-topic"),n=e.querySelector("#ai-gen-m-style"),h=e.querySelector("#ai-gen-m-response"),g=e.querySelector("#ai-gen-copy-prompt"),_=e.querySelector("#ai-gen-m-submit"),m=e.querySelector("#ai-gen-m-status"),A=e.querySelector("#ai-gen-m-error"),S=x=>{x?(a.textContent=x,a.classList.remove("hidden")):(a.classList.add("hidden"),a.textContent="")},z=x=>{x?(l.textContent=x,l.classList.remove("hidden")):(l.classList.add("hidden"),l.textContent="")},R=x=>{x?(A.textContent=x,A.classList.remove("hidden")):(A.classList.add("hidden"),A.textContent="")},U=x=>{x?(m.textContent=x,m.classList.remove("hidden")):(m.classList.add("hidden"),m.textContent="")},q=x=>{this._currentAiGenMode=x==="manual"?"manual":"auto",b.set(j,this._currentAiGenMode);let T=this._currentAiGenMode==="auto";for(let[w,M]of[[o,T],[c,!T]])w.classList.toggle("border-blue-500",M),w.classList.toggle("text-blue-600",M),w.classList.toggle("dark:text-blue-300",M),w.classList.toggle("border-transparent",!M),w.classList.toggle("text-slate-500",!M),w.classList.toggle("dark:text-slate-400",!M);u.classList.toggle("hidden",!T),d.classList.toggle("hidden",T),T?(p.value=s.value,n.value=i.value):(p.value||(p.value=s.value),n.value!==i.value&&(n.value=i.value))};o.addEventListener("click",()=>q("auto")),c.addEventListener("click",()=>q("manual")),t.querySelectorAll('[data-action="close"]').forEach(x=>x.addEventListener("click",()=>t.close())),t.querySelectorAll('[data-action="cancel"]').forEach(x=>x.addEventListener("click",()=>t.close())),r.addEventListener("click",()=>this._callAiGenerate()),s.addEventListener("input",()=>S("")),s.addEventListener("keydown",x=>{(x.metaKey||x.ctrlKey)&&x.key==="Enter"&&(x.preventDefault(),r.click())}),g.addEventListener("click",()=>this._copyAiPrompt()),_.addEventListener("click",()=>this._parseAiResponse()),h.addEventListener("input",()=>R("")),this._aiGenDlg=t,this._aiGenTopic=s,this._aiGenStyle=i,this._aiGenSubmit=r,this._aiGenStatus=l,this._aiGenError=a,this._aiGenMTopic=p,this._aiGenMStyle=n,this._aiGenMResponse=h,this._aiGenMCopyBtn=g,this._aiGenMSubmit=_,this._aiGenMStatus=m,this._aiGenMError=A,this._switchAiTab=q,this._currentAiGenMode=b.get(j,"auto")==="manual"?"manual":"auto"},_buildManualPromptText(e,t){let s={"\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E":"\u901A\u4FD7\u8BB2\u89E3\u578B,\u76EE\u6807\u7EA6 200 \u5B57,3~5 \u6BB5,\u9002\u5408\u5927\u4F17\u542C\u4F17\u3002","\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0":"\u53D9\u4E8B\u7ED3\u6784,\u6709\u8D77\u627F\u8F6C\u5408,\u76EE\u6807\u7EA6 500 \u5B57,5~8 \u6BB5\u3002","\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3":"\u5C42\u5C42\u9012\u8FDB\u3001\u7531\u6D45\u5165\u6DF1,\u76EE\u6807\u7EA6 1000 \u5B57,8~12 \u6BB5\u3002","\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3":"\u5B8C\u6574\u7CFB\u7EDF\u8BB2\u89E3,\u76EE\u6807\u7EA6 2000 \u5B57,10~15 \u6BB5,\u9002\u5408\u4E13\u9898\u5B66\u4E60\u3002","\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3":"\u5B66\u672F\u8BBA\u8FF0\u98CE\u683C,\u5C42\u5C42\u8BBA\u8BC1,\u76EE\u6807\u7EA6 3000 \u5B57,12~18 \u6BB5\u3002","\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4":"\u957F\u7BC7\u5B8C\u6574\u8BBA\u8BF4,\u76EE\u6807\u7EA6 5000 \u5B57,15~25 \u6BB5,\u9002\u5408\u6DF1\u5EA6\u4E13\u9898\u3002","\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C":"\u53E4\u8BD7 / \u8BCD\u98CE\u683C,4~8 \u53E5,\u6BCF\u53E5 5~7 \u5B57\u6216 7 \u5B57\u4E3A\u4E3B,\u62BC\u97F5\u3002","\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD":"\u6177\u6168\u6FC0\u6602\u3001\u6709\u53F7\u53EC\u529B,\u76EE\u6807\u7EA6 300 \u5B57,4~6 \u6BB5\u3002"}[t]||"\u76EE\u6807\u7EA6 400 \u5B57,5~7 \u6BB5\u3002";return`\u3010\u4EFB\u52A1\u3011\u8BF7\u6839\u636E\u4E0B\u9762\u7684\u4E3B\u9898\u548C\u98CE\u683C,\u521B\u4F5C\u4E00\u7BC7\u9002\u5408\u6717\u8BFB\u7684\u7A3F\u5B50\u3002

\u3010\u4E3B\u9898\u3011${e}
\u3010\u98CE\u683C\u3011${t}

\u98CE\u683C\u7EC6\u5316:${s}

\u3010\u8F93\u51FA\u8981\u6C42\u3011
1. \u540C\u65F6\u7ED9\u4E00\u4E2A\u7B80\u6D01\u7684\u6587\u4EF6\u6807\u9898(4~20 \u4E2A\u6C49\u5B57 \u6216 3~12 \u4E2A\u82F1\u6587\u5355\u8BCD;\u4E0D\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u524D\u7F00)
2. \u628A\u5185\u5BB9\u6309\u6BB5\u843D / \u53E5\u610F\u5207\u5206\u6210 3~12 \u6BB5(\u6BCF\u6BB5\u5927\u81F4 60~150 \u5B57,\u81EA\u7136\u8FB9\u754C)

\u3010\u4E25\u683C\u8F93\u51FA JSON\u3011\u683C\u5F0F\u5982\u4E0B,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u5916\u7684\u5185\u5BB9:
{"title": "\u4F60\u7684\u6807\u9898", "segments": ["\u7B2C1\u6BB5\u539F\u6587", "\u7B2C2\u6BB5\u539F\u6587", ...]}`},_wireAiSplitDialog(e){let t=e.querySelector("#ai-split-dlg"),s=e.querySelector("#ai-split-style"),i=e.querySelector("#ai-split-submit"),r=e.querySelector("#src-text"),l=e.querySelector("#ai-split-tab-auto"),a=e.querySelector("#ai-split-tab-manual"),o=e.querySelector("#ai-split-panel-auto"),c=e.querySelector("#ai-split-panel-manual"),u=e.querySelector("#ai-split-m-copy"),d=e.querySelector("#ai-split-m-submit"),p=e.querySelector("#ai-split-m-response");t.querySelectorAll('[data-action="close"]').forEach(h=>h.addEventListener("click",()=>this._closeAiSplitDialog(!1))),t.querySelectorAll('[data-action="cancel"]').forEach(h=>h.addEventListener("click",()=>this._closeAiSplitDialog(!1))),t.querySelectorAll('[data-action="save"]').forEach(h=>h.addEventListener("click",()=>this._closeAiSplitDialog(!0))),t.querySelectorAll('[data-action="paste-into-dlg"]').forEach(h=>h.addEventListener("click",()=>this._pasteIntoAiSplitDialog())),i.addEventListener("click",()=>this._aiSplit()),u.addEventListener("click",()=>this._copySplitManualPrompt()),d.addEventListener("click",()=>this._parseSplitManualResponse());let n=h=>{this._currentSplitMode=h==="manual"?"manual":"auto",b.set("ai-split-mode",this._currentSplitMode);let g=this._currentSplitMode==="auto";for(let[_,m]of[[l,g],[a,!g]])_.classList.toggle("border-blue-500",m),_.classList.toggle("text-blue-600",m),_.classList.toggle("dark:text-blue-300",m),_.classList.toggle("border-transparent",!m),_.classList.toggle("text-slate-500",!m),_.classList.toggle("dark:text-slate-400",!m);o.classList.toggle("hidden",!g),c.classList.toggle("hidden",g),this._setAiSplitError(""),this._setAiSplitStatus(""),this._setAiSplitMError(""),this._setAiSplitMStatus("")};l.addEventListener("click",()=>n("auto")),a.addEventListener("click",()=>n("manual"));for(let h of[r,s])h.addEventListener("keydown",g=>{(g.metaKey||g.ctrlKey)&&g.key==="Enter"&&(g.preventDefault(),this._currentSplitMode==="auto"?i.click():d.click())});p.addEventListener("input",()=>this._setAiSplitMError("")),this._aiSplitDlg=t,this._aiSplitStyle=s,this._aiSplitSubmit=i,this._aiSplitStatusEl=e.querySelector("#ai-split-status"),this._aiSplitErrorEl=e.querySelector("#ai-split-error"),this._aiSplitStatsEl=e.querySelector("#ai-split-current-stats"),this._aiSplitSrc=r,this._aiSplitMCopyBtn=u,this._aiSplitMSubmit=d,this._aiSplitMResponse=p,this._aiSplitMStatusEl=e.querySelector("#ai-split-m-status"),this._aiSplitMErrorEl=e.querySelector("#ai-split-m-error"),this._switchSplitTab=n,this._currentSplitMode=b.get("ai-split-mode","auto")==="manual"?"manual":"auto"},_openAiSplitDialog(){let e=this._aiSplitSrc;e.value=this._text||"",e.dispatchEvent(new Event("input",{bubbles:!0}));let t=b.get(D,"\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6"),s=k.some(i=>i.value===t)?t:"\u5E38\u89C4 \xB7 \u9ED8\u8BA4\u7C92\u5EA6";this._aiSplitStyle.value=s,this._setAiSplitStatus(""),this._setAiSplitError(""),this._setAiSplitMStatus(""),this._setAiSplitMError(""),this._switchSplitTab(this._currentSplitMode),this._aiSplitDlg.showModal(),setTimeout(()=>e.focus(),0)},_closeAiSplitDialog(e){if(!this._aiSplitBusy){if(e){let t=this._aiSplitSrc.value;t!==this._text&&(this._text=t,this._segments=[],this._saveState(),this._updateMeta(),this._renderLyrics(),this._syncCurrentFile({text:t}).then(s=>{this._toast(s?`\u6587\u672C\u5DF2\u4FDD\u5B58\u5230\u300C${this._currentFile.title}\u300D(${t.length} \u5B57)`:`\u6587\u672C\u5DF2\u4FDD\u5B58(${t.length} \u5B57 \xB7 \u672A\u5173\u8054\u6587\u4EF6,\u8BB0\u5F97\u4E3B\u52A8\u4FDD\u5B58\u4E3A\u65B0\u6587\u4EF6)`,"ok")}))}this._aiSplitDlg.close()}},async _pasteIntoAiSplitDialog(){let e=this._aiSplitSrc;if(!navigator.clipboard?.readText){this._setAiSplitStatus("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u526A\u8D34\u677F\u8BFB\u53D6"),this._setAiSplitError("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u526A\u8D34\u677F\u8BFB\u53D6");return}try{let t=await navigator.clipboard.readText();t?(e.value=t,e.dispatchEvent(new Event("input",{bubbles:!0})),this._setAiSplitError(""),this._setAiSplitStatus(`\u5DF2\u7C98\u8D34 ${t.length} \u5B57`)):this._setAiSplitError("\u526A\u5207\u677F\u4E3A\u7A7A")}catch(t){this._setAiSplitError("\u7C98\u8D34\u5931\u8D25:"+(t?.message||t))}},_setAiSplitStatus(e){let t=this._aiSplitStatusEl;t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiSplitError(e){let t=this._aiSplitErrorEl;t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiSplitMStatus(e){let t=this._aiSplitMStatusEl;t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiSplitMError(e){let t=this._aiSplitMErrorEl;t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_buildSplitManualPrompt(e,t){let s=k.find(l=>l.value===t)||k[1],i=String(e||"").slice(0,12e3),r=(e||"").length>12e3?`

(\u4EE5\u4E0A\u662F\u539F\u6587\u7684\u524D 12000 \u5B57,\u5982\u9700\u62C6\u5B8C\u5168\u6587\u8BF7\u5206\u6279\u5582\u5165)
`:"";return`\u4F60\u662F\u6587\u672C\u5206\u6BB5\u52A9\u624B\u3002\u7528\u6237\u4F1A\u7ED9\u4F60\u4E00\u6BB5\u5DF2\u6709\u7684\u957F\u6587\u672C,\u4F60\u8981\u628A\u5B83\u5207\u5206\u6210\u82E5\u5E72\u4E2A\u9002\u5408\u6717\u8BFB\u7684\u5C0F\u6BB5,\u7EDD\u4E0D\u91CD\u5199\u3001\u4E0D\u589E\u5220\u3002

\u3010\u9009\u5B9A\u7684\u7C92\u5EA6 / \u957F\u5EA6\u3011
- \u98CE\u683C:${s.value}
- \u8981\u6C42:${s.hint}
- \u5E73\u5747\u6BB5\u957F:${s.targetChars} \u5B57 (\u5141\u8BB8 \xB150% \u6D6E\u52A8)
- \u6BB5\u6570:\u53C2\u8003\u4E0A\u65B9\u7684"\u9884\u8BA1"\u533A\u95F4,\u4E0D\u8981\u8FDC\u8D85\u4E5F\u4E0D\u8981\u8FDC\u5C11\u4E8E

\u3010\u5207\u5206\u539F\u5219\u3011
1. \u4E25\u683C\u6309\u7528\u6237\u9009\u5B9A\u7684\u7C92\u5EA6\u5207\u5206\u3002\u6BB5\u843D / \u81EA\u7136\u53E5\u7FA4 / \u53E5\u672B\u6807\u70B9 \u662F\u9996\u9009\u8FB9\u754C;\u4E0D\u8981\u628A\u534A\u53E5\u8BDD\u5207\u5230\u4E0B\u4E00\u6BB5\u3002
2. \u6BB5\u4E0E\u6BB5\u4E4B\u95F4\u4FDD\u6301\u8BED\u4E49\u72EC\u7ACB,\u9002\u5408\u5355\u72EC\u6717\u8BFB\u4E0E\u8DF3\u8BFB\u3002
3. \u4FDD\u6301\u539F\u6587\u5B8C\u6574 \u2014\u2014 \u65E2\u4E0D\u8981\u6F0F\u5B57,\u4E5F\u4E0D\u8981\u5408\u5E76\u76F8\u90BB\u7684\u5B8C\u6574\u53E5\u5B50\u3002

\u3010\u8F93\u51FA\u7EA6\u675F \u2014 \u975E\u5E38\u91CD\u8981\u3011
- **\u7EDD\u5BF9\u4E0D\u8981**\u7ED9\u7247\u6BB5\u52A0\u4EFB\u4F55\u524D\u7F00 / \u5E8F\u53F7 / \u6807\u53F7
  - \u4E0D\u8981\u300C\u7B2C 1 \u6BB5\u300D\u300C\u7B2C\u4E00\u6BB5\u300D\u300C\u7B2C1\u6BB5\u300D\u300C\u7B2C\u4E8C\u6BB5\u300D\u4E4B\u7C7B
  - \u4E0D\u8981\u300C1.\u300D\u300C2\u3001\u300D\u300C\uFF081\uFF09\u300D\u300C[1]\u300D\u4E4B\u7C7B
  - \u4E0D\u8981\u4EFB\u4F55\u6807\u9898\u3001bullet\u3001\u5F15\u53F7\u3001\u4E66\u540D\u53F7\u3001emoji
- \u76F4\u63A5\u3001\u5E72\u51C0\u3001\u539F\u539F\u672C\u672C\u5730\u8F93\u51FA\u539F\u6587\u6587\u672C,\u4E00\u5B57\u4E0D\u6539\u3001\u4E00\u5B57\u4E0D\u6F0F\u3002

\u3010\u5F85\u62C6\u5206\u6587\u672C\u3011
${i}${r}

\u3010\u4E25\u683C\u8F93\u51FA JSON,\u53EA\u6B64\u4E00\u79CD,\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u6807\u8BB0\u3001\u4E0D\u8981\u591A\u4F59\u6362\u884C / \u6CE8\u91CA\u3011
{"segments":["\u539F\u6587\u7247\u6BB5A","\u539F\u6587\u7247\u6BB5B",...]}`},async _copySplitManualPrompt(){let e=(this._aiSplitSrc?.value||"").trim();if(!e){this._setAiSplitMError("\u6CA1\u6709\u53EF\u62C6\u5206\u7684\u6587\u672C,\u8BF7\u5148\u5728\u957F\u6587\u672C\u6846\u7C98\u8D34"),this._aiSplitSrc.focus();return}let t=this._aiSplitStyle.value,s=this._buildSplitManualPrompt(e,t),i=this._aiSplitMCopyBtn,r=i.textContent,l=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(s),l=!0)}catch(a){console.warn("[speak] clipboard.writeText failed:",a)}if(!l)try{let a=document.createElement("textarea");a.value=s,a.style.position="fixed",a.style.top="-9999px",document.body.appendChild(a),a.focus(),a.select(),l=document.execCommand("copy"),document.body.removeChild(a)}catch(a){console.warn("[speak] execCommand copy fallback failed:",a)}l?(i.textContent="\u2713 \u5DF2\u590D\u5236",this._setAiSplitMError(""),this._setAiSplitMStatus("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F,\u5230 ChatGPT/Claude \u7B49\u7C98\u8D34\u5373\u53EF"),clearTimeout(this._copySplitTimer),this._copySplitTimer=setTimeout(()=>{i.textContent=r},2e3)):(this._setAiSplitMError("\u590D\u5236\u5931\u8D25,\u8BF7\u624B\u52A8\u9009\u4E2D\u4E0B\u65B9\u6587\u672C\u590D\u5236(\u5DF2\u5199\u5230\u56DE\u590D\u6846\u91CC)"),this._aiSplitMResponse.value=s+`

(\u4EE5\u4E0A\u662F\u63D0\u793A\u8BCD\u6A21\u677F,AI \u56DE\u590D\u8BF7\u7C98\u8D34\u5230\u4E0B\u65B9 \u2193)
`)},async _parseSplitManualResponse(){let e=(this._aiSplitMResponse?.value||"").trim();if(!e){this._setAiSplitMError("\u8BF7\u5148\u7C98\u8D34 AI \u7684\u56DE\u590D"),this._aiSplitMResponse?.focus();return}let t=this._parseAiSplitJsonObj(e);if(!t){this._setAiSplitMError("\u65E0\u6CD5\u89E3\u6790\u4E3A {segments: [...]} JSON,\u8BF7\u786E\u8BA4\u590D\u5236\u5B8C\u6574(\u652F\u6301 json \u4EE3\u7801\u5757\u6807\u8BB0)");return}let s=(t.segments||[]).map(l=>String(l||"")).map(l=>$(l)).map(l=>l.replace(/\s+/g," ").trim()).filter(Boolean).map(l=>l.length>500?l.slice(0,500):l);if(s.length===0){this._setAiSplitMError("\u89E3\u6790\u6210\u529F\u4F46\u6BB5\u843D\u4E3A\u7A7A,\u8BF7\u91CD\u8BD5");return}let i=(this._aiSplitSrc?.value||"").trim();i!==this._text&&(this._text=i),this._stopAll({silent:!0}),this._segments=s,this._saveState(),this._renderLyrics(),this._updateMeta();let r=await this._syncCurrentFile({text:i});this._setAiSplitMStatus(`\u89E3\u6790\u6210\u529F,\u5171 ${this._segments.length} \u6BB5`),this._toast(r?`\u624B\u52A8\u62C6\u5206\u5B8C\u6210 \xB7 \u5DF2\u4FDD\u5B58\u5230\u300C${this._currentFile.title}\u300D(\u5171 ${this._segments.length} \u6BB5)`:`\u624B\u52A8\u62C6\u5206\u5B8C\u6210,\u5171 ${this._segments.length} \u6BB5(\u672A\u4FDD\u5B58\u5230\u6587\u4EF6)`,"ok"),setTimeout(()=>this._aiSplitDlg?.close?.(),350)},_parseAiSplitJsonObj(e){let t=String(e||"");if(!t.trim())return null;t=t.replace(/^﻿/,"").replace(/[​-‍﻿]/g,""),t=t.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();let s=t.match(/```(?:json)?\s*([\s\S]*?)```/i),i=[];s?.[1]&&i.push(s[1].trim()),i.push(t);let r=t.indexOf("{"),l=t.lastIndexOf("}");r>=0&&l>r&&i.push(t.slice(r,l+1));let a=t.indexOf("["),o=t.lastIndexOf("]");a>=0&&o>a&&i.push(t.slice(a,o+1));for(let c of i)if(c)try{let u=JSON.parse(c.trim());if(u&&Array.isArray(u.segments))return{segments:u.segments}}catch{}for(let c of i)if(c)try{let u=JSON.parse(c.trim());if(Array.isArray(u))return{segments:u}}catch{}return null},_openAiGenerate(){if(!this._currentFile){this._setAiStatus("\u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u9009\u4E2D\u4E00\u4E2A\u6587\u4EF6","err");return}let e=this._currentFile,t=e.title||"";this._aiGenTopic.value=t,this._aiGenStyle.value="\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E",this._aiGenMTopic.value=t,this._aiGenMStyle.value=this._aiGenStyle.value,this._aiGenMResponse.value="";let s=this._root.querySelector("#ai-gen-current-title");s&&(s.textContent=e.title||"(\u672A\u547D\u540D)"),this._setAiGenErr(""),this._setAiGenStatus(""),this._setAiGenMErr(""),this._setAiGenMStatus(""),this._aiGenMCopyBtn.textContent="\u{1F4CB} \u590D\u5236\u63D0\u793A\u8BCD",this._switchAiTab(this._currentAiGenMode),this._aiGenDlg.showModal(),setTimeout(()=>{this._currentAiGenMode==="manual"?this._aiGenMTopic.focus():this._aiGenTopic.focus()},0)},_setAiGenErr(e){let t=this._root?.querySelector("#ai-gen-error");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiGenStatus(e){let t=this._root?.querySelector("#ai-gen-status");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiGenMErr(e){let t=this._root?.querySelector("#ai-gen-m-error");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},_setAiGenMStatus(e){let t=this._root?.querySelector("#ai-gen-m-status");t&&(e?(t.textContent=e,t.classList.remove("hidden")):(t.classList.add("hidden"),t.textContent=""))},async _callAiGenerate(){if(!this._currentFile){this._setAiGenErr("\u5F53\u524D\u6CA1\u6709\u52A0\u8F7D\u6587\u4EF6");return}if(!v.isConfigured()){this._setAiGenErr("\u8BF7\u5148\u5728 \u2699 \u8BBE\u7F6E \u2192 MiniMax AI \u914D\u7F6E \u586B\u5199 API Key");return}let e=this._aiGenTopic.value.trim();if(!e){this._setAiGenErr("\u8BF7\u8F93\u5165\u4E3B\u9898"),this._aiGenTopic.focus();return}let t=this._aiGenStyle.value,s=v.get(),i=s.baseUrl.replace(/\/+$/,"")+"/chat/completions",r=this._aiGenSubmit,l=r.innerHTML;r.disabled=!0,r.innerHTML=`${f.sparkles}<span>\u751F\u6210\u4E2D...</span>`,this._setAiGenErr(""),this._setAiGenStatus("\u6B63\u5728\u8BF7\u6C42 AI \u751F\u6210..."),this._aiGenTopic.disabled=!0,this._aiGenStyle.disabled=!0;try{let o=`\u4F60\u662F\u6717\u8BFB\u7A3F\u521B\u4F5C\u52A9\u624B\u3002\u7528\u6237\u7ED9\u4E00\u4E2A\u4E3B\u9898\u548C\u98CE\u683C,\u4F60\u540C\u65F6\u4EA7\u51FA:
1. \u4E00\u4E2A\u7B80\u6D01\u7684\u6587\u4EF6\u6807\u9898(4~20 \u4E2A\u6C49\u5B57 \u6216 3~12 \u4E2A\u82F1\u6587\u5355\u8BCD;\u4E0D\u5E26\u4E66\u540D\u53F7 / \u5F15\u53F7 / emoji / "\u6807\u9898:" \u524D\u7F00;\u82E5\u4E3B\u9898\u672C\u8EAB\u5DF2\u7ECF\u662F\u7B80\u77ED\u540D\u8BCD\u53EF\u76F4\u63A5\u7528)
2. \u9002\u5408\u6717\u8BFB\u7684\u5185\u5BB9,**\u5DF2\u7ECF\u6309\u6BB5\u843D / \u53E5\u610F\u5207\u5206\u6210 3~12 \u6BB5**(\u6BCF\u6BB5\u5927\u81F4 60~150 \u5B57,\u81EA\u7136\u8FB9\u754C)

\u98CE\u683C\u8981\u6C42:${{"\u77ED\u6587 \xB7 \u77E5\u8BC6\u79D1\u666E":"\u901A\u4FD7\u8BB2\u89E3\u578B,\u76EE\u6807\u7EA6 200 \u5B57,3~5 \u6BB5,\u9002\u5408\u5927\u4F17\u542C\u4F17\u3002","\u4E2D\u7BC7 \xB7 \u6545\u4E8B\u53D9\u8FF0":"\u53D9\u4E8B\u7ED3\u6784,\u6709\u8D77\u627F\u8F6C\u5408,\u76EE\u6807\u7EA6 500 \u5B57,5~8 \u6BB5\u3002","\u957F\u6587 \xB7 \u6DF1\u5EA6\u8BB2\u89E3":"\u5C42\u5C42\u9012\u8FDB\u3001\u7531\u6D45\u5165\u6DF1,\u76EE\u6807\u7EA6 1000 \u5B57,8~12 \u6BB5\u3002","\u8BE6\u5C3D\u957F\u6587 \xB7 \u7CFB\u7EDF\u8BB2\u89E3":"\u5B8C\u6574\u7CFB\u7EDF\u8BB2\u89E3,\u76EE\u6807\u7EA6 2000 \u5B57,10~15 \u6BB5,\u9002\u5408\u4E13\u9898\u5B66\u4E60\u3002","\u8BBA\u6587\u7EA7 \xB7 \u5B66\u672F\u8BB2\u89E3":"\u5B66\u672F\u8BBA\u8FF0\u98CE\u683C,\u5C42\u5C42\u8BBA\u8BC1,\u76EE\u6807\u7EA6 3000 \u5B57,12~18 \u6BB5\u3002","\u957F\u7BC7 \xB7 \u5B8C\u6574\u8BBA\u8BF4":"\u957F\u7BC7\u5B8C\u6574\u8BBA\u8BF4,\u76EE\u6807\u7EA6 5000 \u5B57,15~25 \u6BB5,\u9002\u5408\u6DF1\u5EA6\u4E13\u9898\u3002","\u77ED\u8BD7 \xB7 \u53E4\u98CE\u4EFF\u4F5C":"\u53E4\u8BD7 / \u8BCD\u98CE\u683C,4~8 \u53E5,\u6BCF\u53E5 5~7 \u5B57\u6216 7 \u5B57\u4E3A\u4E3B,\u62BC\u97F5\u3002","\u6F14\u8BB2 \xB7 \u603B\u7ED3\u9648\u8BCD":"\u6177\u6168\u6FC0\u6602\u3001\u6709\u53F7\u53EC\u529B,\u76EE\u6807\u7EA6 300 \u5B57,4~6 \u6BB5\u3002"}[t]||"\u76EE\u6807\u7EA6 400 \u5B57,5~7 \u6BB5\u3002"}

\u4E25\u683C\u8981\u6C42:**\u53EA\u8F93\u51FA JSON**,\u683C\u5F0F:
{"title": "\u4F60\u7684\u6807\u9898", "segments": ["\u7B2C1\u6BB5\u539F\u6587", "\u7B2C2\u6BB5\u539F\u6587", ...]}

\u4E0D\u8981\u4EFB\u4F55\u89E3\u91CA\u3001\u4E0D\u8981 markdown \u4EE3\u7801\u5757\u5916\u7684\u5185\u5BB9\u3002`,c=new AbortController,u=setTimeout(()=>c.abort(),9e4),d;try{d=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.apiKey}`},body:JSON.stringify({model:v.getEffectiveModel(),messages:[{role:"system",content:o},{role:"user",content:`\u3010\u4E3B\u9898\u3011${e}
\u3010\u98CE\u683C\u3011${t}`}],temperature:.7,stream:!1}),signal:c.signal})}finally{clearTimeout(u)}if(!d.ok){let S=await d.text().catch(()=>d.statusText);throw new Error(`HTTP ${d.status} \u2014 ${S.slice(0,200)}`)}let n=(await d.json().catch(()=>null))?.choices?.[0]?.message?.content;if(typeof n!="string"||!n.trim())throw new Error("AI \u8FD4\u56DE\u4E3A\u7A7A");let h=this._parseAiJsonToObj(n);if(!h)throw new Error("AI \u8FD4\u56DE\u65E0\u6CD5\u89E3\u6790\u4E3A {title, segments[]} JSON");let _=String(h.title||"").trim().replace(/^[\s"'""''「」『』《》【】\[\]]+/,"").replace(/[\s"'""''「」『』《》【】\[\]]+$/,"").replace(/\s+/g," ").slice(0,64)||this._currentFile.title||P(e,32),m=(h.segments||[]).map(S=>String(S||"").replace(/\s+/g," ").trim()).filter(Boolean).map(S=>S.length>500?S.slice(0,500):S);if(m.length===0)throw new Error("AI \u672A\u8FD4\u56DE\u4EFB\u4F55\u6BB5\u843D,\u8BF7\u91CD\u8BD5");let A=m.join(`

`);await this._applyAiGenerated({title:_,text:A,segments:m}),this._aiGenDlg.close(),this._toast(`\u5DF2\u91CD\u65B0\u751F\u6210\u300C${_}\u300D(${m.length} \u6BB5)`,"ok")}catch(a){let o=a?.message||String(a);a?.name==="AbortError"?this._setAiGenErr("AI \u751F\u6210\u8D85\u65F6 (90s),\u8BF7\u68C0\u67E5\u7F51\u7EDC\u6216 AI \u670D\u52A1"):a instanceof TypeError?this._setAiGenErr("\u7F51\u7EDC\u9519\u8BEF:"+o+" (\u53EF\u80FD\u662F CORS)"):this._setAiGenErr("AI \u751F\u6210\u5931\u8D25:"+o),console.error("[speak] AI generate failed:",a)}finally{r.disabled=!1,r.innerHTML=l,this._aiGenTopic.disabled=!1,this._aiGenStyle.disabled=!1,this._setAiGenStatus("")}},async _copyAiPrompt(){if(!this._currentFile)return;let e=(this._aiGenMTopic.value||this._aiGenTopic.value).trim(),t=this._aiGenMStyle.value||this._aiGenStyle.value;if(!e){this._setAiGenMErr("\u8BF7\u5148\u586B\u5199\u4E3B\u9898"),this._aiGenMTopic.focus();return}let s=this._buildManualPromptText(e,t),i=this._aiGenMCopyBtn,r=i.textContent,l=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(s),l=!0)}catch(a){console.warn("[speak] clipboard.writeText failed:",a)}if(!l)try{let a=document.createElement("textarea");a.value=s,a.style.position="fixed",a.style.top="-9999px",document.body.appendChild(a),a.focus(),a.select(),l=document.execCommand("copy"),document.body.removeChild(a)}catch(a){console.warn("[speak] execCommand copy fallback failed:",a)}l?(i.textContent="\u2713 \u5DF2\u590D\u5236",this._setAiGenMErr(""),this._setAiGenMStatus("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F,\u5230 ChatGPT/Claude \u7B49\u7C98\u8D34\u5373\u53EF"),clearTimeout(this._copyResetTimer),this._copyResetTimer=setTimeout(()=>{i.textContent=r},2e3)):(this._setAiGenMErr("\u590D\u5236\u5931\u8D25,\u8BF7\u624B\u52A8\u9009\u4E2D\u4E0B\u65B9\u63D0\u793A\u8BCD\u6587\u672C\u590D\u5236"),this._aiGenMResponse.value=s+`

(\u4EE5\u4E0A\u662F\u63D0\u793A\u8BCD\u6A21\u677F,AI \u56DE\u590D\u8BF7\u7C98\u8D34\u5230\u4E0B\u65B9 \u2193)
`)},_parseAiJsonToObj(e){let t=String(e||"");if(!t.trim())return null;t=t.replace(/^﻿/,"").replace(/[-‍﻿]/g,""),t=t.replace(/<think>[\s\S]*?<\/think>/gi,"").trim();let i=[t.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],t],r=t.indexOf("{"),l=t.lastIndexOf("}");r>=0&&l>r&&i.push(t.slice(r,l+1));let a=t.indexOf("["),o=t.lastIndexOf("]");a>=0&&o>a&&i.push(t.slice(a,o+1));for(let c of i)if(c)try{let u=JSON.parse(c.trim());if(u&&Array.isArray(u.segments))return u}catch{}for(let c of i)if(c)try{let u=JSON.parse(c.trim());if(Array.isArray(u))return{title:"",segments:u}}catch{}return null},async _parseAiResponse(){if(!this._currentFile)return;let e=(this._aiGenMResponse.value||"").trim();if(!e){this._setAiGenMErr("\u8BF7\u5148\u7C98\u8D34 AI \u7684\u56DE\u590D"),this._aiGenMResponse.focus();return}let t=this._parseAiJsonToObj(e);if(!t){this._setAiGenMErr("\u65E0\u6CD5\u89E3\u6790\u4E3A {title, segments[]} JSON,\u8BF7\u786E\u8BA4\u590D\u5236\u5B8C\u6574(\u652F\u6301 json \u4EE3\u7801\u5757)");return}let s=(this._aiGenMTopic.value||this._aiGenTopic.value).trim(),r=String(t.title||"").trim().replace(/^[\s"'""''「」『』《》【】\[\]]+/,"").replace(/[\s"'""''「」『』《》【】\[\]]+$/,"").replace(/\s+/g," ").slice(0,64)||this._currentFile.title||P(s||t.segments?.[0]||"AI \u751F\u6210\u6717\u8BFB\u7A3F",32),l=(t.segments||[]).map(o=>String(o||"").replace(/\s+/g," ").trim()).filter(Boolean).map(o=>o.length>500?o.slice(0,500):o);if(l.length===0){this._setAiGenMErr("\u89E3\u6790\u6210\u529F\u4F46\u6BB5\u843D\u4E3A\u7A7A,\u8BF7\u91CD\u8BD5");return}let a=l.join(`

`);this._setAiGenMStatus("\u6B63\u5728\u4FDD\u5B58..."),await this._applyAiGenerated({title:r,text:a,segments:l}),this._aiGenDlg.close(),this._toast(`\u5DF2\u91CD\u65B0\u751F\u6210\u300C${r}\u300D(${l.length} \u6BB5)`,"ok")},async _applyAiGenerated({title:e,text:t,segments:s}){let i=Date.now(),r={...this._currentFile,title:e,text:t,segments:s,updatedAt:i};await L.put(r),this._currentFile=r,this._currentFileId=r.id,b.set(E,r.id),this._text=t,this._segments=s,this._saveState(),this._stopAll({silent:!0}),this._updateMeta(),this._renderLyrics();let l=this._root.querySelector("#file-sidebar");l&&await l.refresh(),this._refreshAiGenBtnState()},async _syncCurrentFile(e={}){let t=this._currentFile;if(!t)return!1;let s=Date.now(),i={...t,text:e.text!==void 0?e.text:this._text,segments:Array.isArray(e.segments)?e.segments:this._segments,updatedAt:s};await L.put(i),this._currentFile=i,this._currentFileId=i.id,b.set(E,i.id),this._saveState();let r=this._root.querySelector("#file-sidebar");if(r)try{await r.refresh()}catch(l){console.warn("[speak] sidebar refresh failed:",l)}return!0},_toast(e,t="info"){let s=document.getElementById("__speak-toast");s||(s=document.createElement("div"),s.id="__speak-toast",s.style.transition="opacity 300ms",document.body.appendChild(s)),s.textContent=e,s.className="fixed top-12 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm "+(t==="ok"?"bg-green-600 text-white":t==="err"?"bg-red-600 text-white":"bg-slate-800 text-white"),s.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},320)},1800)}};function J(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function O(e){let t=String(e||"");return/[一-鿿぀-ゟ゠-ヿ가-힯]/.test(t)?"zh":"en"}function K(e,t){let s=String(e||"");if(!s.trim())return G.split(t);s=s.replace(/^﻿/,""),s=s.replace(/<think>[\s\S]*?<\/think>/gi," ");let r=[s.match(/```(?:json)?\s*([\s\S]*?)```/i)?.[1],s],l=s.indexOf("{"),a=s.lastIndexOf("}");l>=0&&a>l&&r.push(s.slice(l,a+1));let o=s.indexOf("["),c=s.lastIndexOf("]");o>=0&&c>o&&r.push(s.slice(o,c+1));for(let d of r)if(d)try{let p=JSON.parse(d.trim());if(Array.isArray(p))return p.map($).filter(n=>typeof n=="string"&&n.trim());if(p&&Array.isArray(p.segments))return p.segments.map($).filter(n=>typeof n=="string"&&n.trim())}catch{}let u=s.split(/\r?\n/).map(d=>$(d)).filter(d=>d&&!d.startsWith("{")&&!d.startsWith("["));return u.length>=2?u:G.split(t)}function $(e){let t=String(e??"");if(!t)return"";let s=/^\s*(?:[\[【(（]\s*\d{1,3}\s*[\]】)）]|第\s*\d{1,3}\s*段\s*[:：、\.]?\s*|第\s*[一二三四五六七八九十]+\s*段\s*[:：、\.]?\s*|\d{1,3}\s*[、.．\)）:：]\s*|[一二三四五六七八九十]+\s*[、\.)）]\s*|Segment\s*\d{1,3}\s*[:：\.]?\s*)/i,i;do i=t,t=t.replace(s,""),t=t.replace(/^[\s,，.。:：]+/,"");while(t!==i&&t.length>0);return t.trim()}var Z=H;export{Z as default,H as page};
