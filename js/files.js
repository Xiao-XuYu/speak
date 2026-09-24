import{a as $,b as w,c as f,d as g,e as F,f as S,g as I,h as E}from"./chunk-UVODTIDZ.js";import{a as _,b as k}from"./chunk-IGCIOYLB.js";var L="speak-state",u={folder:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',folderOpen:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14l1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>',file:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',plus:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',search:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',trash:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',edit:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',move:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>',chevronRight:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',chevronDown:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',close:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'},q={title:"\u6587\u4EF6\u7BA1\u7406",mount(e){this._root=e,this._allFolders=[],this._allFiles=[],this._expanded=new Set,this._search="",this._sortBy="updatedAt",this._sortDir="desc",this._selectedFileId=null,this._currentFolderId=null,e.innerHTML=`
      <div class="flex flex-col h-full">

        <!-- \u9876\u90E8\u5DE5\u5177\u680F:\u9762\u5305\u5C51 + \u65B0\u5EFA\u6587\u4EF6\u5939 + \u641C\u7D22 + \u6392\u5E8F -->
        <div class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-3 sm:px-4 py-2.5 sm:py-3 flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          <nav id="breadcrumbs" class="flex items-center gap-1 min-w-0 flex-1 overflow-x-auto text-sm"></nav>
          <div class="flex items-center gap-2 shrink-0">
            <button id="new-folder" type="button"
                    class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 transition text-xs sm:text-sm">
              ${u.plus}<span>\u65B0\u5EFA\u6587\u4EF6\u5939</span>
            </button>
            <label class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 focus-within:border-blue-500 transition text-xs sm:text-sm">
              ${u.search}
              <input id="search-input" type="search" placeholder="\u641C\u7D22\u6807\u9898/\u5185\u5BB9..." class="w-32 sm:w-44 bg-transparent focus:outline-none">
            </label>
            <select id="sort-select" class="px-2 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-xs sm:text-sm focus:outline-none focus:border-blue-500">
              <option value="updatedAt:desc">\u6700\u8FD1\u66F4\u65B0</option>
              <option value="createdAt:desc">\u6700\u65B0\u521B\u5EFA</option>
              <option value="title:asc">\u6807\u9898 A\u2192Z</option>
              <option value="title:desc">\u6807\u9898 Z\u2192A</option>
              <option value="updatedAt:asc">\u6700\u65E9\u66F4\u65B0</option>
            </select>
          </div>
        </div>

        <!-- \u4E3B\u533A\u57DF:\u5DE6\u6811 + \u53F3\u9884\u89C8 -->
        <div class="flex flex-1 min-h-0">

          <!-- \u5DE6:\u6811\u89C6\u56FE -->
          <aside id="tree-pane" class="w-72 sm:w-80 shrink-0 border-r border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex flex-col min-h-0">
            <div id="tree-scroller" class="flex-1 overflow-y-auto overflow-x-hidden p-2 min-h-0"></div>
          </aside>

          <!-- \u53F3:\u9884\u89C8/\u7F16\u8F91\u9762\u677F -->
          <section id="preview-pane" class="flex-1 min-w-0 overflow-y-auto bg-white dark:bg-slate-800">
            <div id="preview-empty" class="h-full flex flex-col items-center justify-center text-center text-slate-400 dark:text-slate-500 px-6 py-12 gap-2">
              <div class="text-3xl sm:text-4xl select-none" aria-hidden="true">\u{1F4C1}</div>
              <p class="text-sm">\u4ECE\u5DE6\u4FA7\u9009\u4E00\u4E2A\u6587\u4EF6\u67E5\u770B\u9884\u89C8</p>
              <p class="text-xs">\u6216\u5728 \u6717\u8BFB \u9875\u7528\u300C\u{1F4BE} \u4FDD\u5B58\u5230\u6587\u4EF6\u300D\u4FDD\u5B58\u5F53\u524D\u6587\u672C</p>
            </div>
            <div id="preview-content" class="hidden p-5 sm:p-6 flex flex-col gap-4"></div>
          </section>
        </div>

        <!-- \u65B0\u5EFA\u6587\u4EF6\u5939 dialog -->
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

        <!-- \u91CD\u547D\u540D dialog -->
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

        <!-- \u79FB\u52A8\u5230 dialog -->
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

        <!-- \u4E0A\u4E0B\u6587\u83DC\u5355(\u81EA\u5B9A\u4E49,\u4E0D\u7528\u6D4F\u89C8\u5668\u539F\u751F) -->
        <div id="ctx-menu" class="hidden fixed z-50 min-w-[160px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg py-1 text-sm"></div>

      </div>
    `,this._wireToolbar(),this._wireDialogs(),this._wireCtxMenu(),this._wireTreeEvents(),this._unsubRemote=$(t=>{t.store!=="folders"&&t.store!=="files"||(t.store==="files"&&t.op==="del"&&t.key===this._selectedFileId&&(this._selectedFileId=null),this._refresh())}),this._unsubSaveReq=_.on("files:save-current",async({text:t,segments:s,autoAll:r,suggestedTitle:o}={})=>{await this._saveCurrentFromBus({text:t,segments:s,autoAll:r,suggestedTitle:o})}),this._refresh()},unmount(){this._unsubRemote?.(),this._unsubSaveReq?.(),document.removeEventListener("click",this._onDocClickHideMenu),document.removeEventListener("keydown",this._onEscHideMenu),this._root=null},async _refresh(){try{let[e,t]=await Promise.all([f.getAll(),g.getAll()]);this._allFolders=e||[],this._allFiles=t||[]}catch(e){console.error("[files] _refresh failed:",e),this._setStatus("\u52A0\u8F7D\u5931\u8D25:"+(e?.message||e),"err");return}this._renderBreadcrumbs(),this._renderTree(),this._renderPreview()},_wireToolbar(){this._root.querySelector("#new-folder").addEventListener("click",()=>this._openNewFolder()),this._root.querySelector("#search-input").addEventListener("input",e=>{this._search=e.target.value.trim(),this._renderTree()}),this._root.querySelector("#sort-select").addEventListener("change",e=>{let[t,s]=e.target.value.split(":");this._sortBy=t,this._sortDir=s,this._renderTree()})},_renderBreadcrumbs(){let e=this._root.querySelector("#breadcrumbs"),t=this._computeTrail(this._currentFolderId),s=[{id:null,name:"\u6839\u76EE\u5F55"},...t];e.innerHTML=s.map((r,o)=>{let i=o===s.length-1;return`
        ${o>0?'<span class="text-slate-400 dark:text-slate-500">/</span>':""}
        <button type="button" data-crumb-id="${p(r.id??"")}"
                class="px-1.5 py-0.5 rounded ${i?"text-slate-900 dark:text-slate-100 font-semibold":"text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"}">${p(r.name)}</button>
      `}).join(""),e.querySelectorAll("[data-crumb-id]").forEach(r=>{r.addEventListener("click",()=>{let o=r.dataset.crumbId||null;this._currentFolderId=o,this._selectedFileId=null,this._renderBreadcrumbs(),this._renderTree(),this._renderPreview()})})},_computeTrail(e){let t=[],s=e,r=new Set;for(;s!=null&&!r.has(s);){r.add(s);let o=this._allFolders.find(i=>i.id===s);if(!o)break;t.unshift({id:o.id,name:o.name}),s=o.parentId}return t},_renderTree(){let e=this._root.querySelector("#tree-scroller"),t=this._sortRows(this._allFolders,a=>a.name,"title"),s=this._sortRows(this._allFiles,a=>a.title,"title"),r=(this._search||"").toLowerCase(),o=r?new Set(this._allFiles.filter(a=>(a.title||"").toLowerCase().includes(r)||(a.text||"").toLowerCase().includes(r)).map(a=>a.id)):null;if(r){let a=new Set(o);for(let l of o){let m=this._allFiles.find(v=>v.id===l);if(!m)continue;let x=m.folderId,d=new Set;for(;x!=null&&!d.has(x);)d.add(x),a.add(x),x=this._allFolders.find(y=>y.id===x)?.parentId??null}let c=s.filter(l=>o.has(l.id));e.innerHTML=`
        <div class="text-xs text-slate-500 px-2 py-1.5">
          \u641C\u7D22 "${p(this._search)}": ${o.size} \u4E2A\u6587\u4EF6
        </div>
        ${c.map(l=>this._renderSearchResultRow(l)).join("")||'<div class="text-xs text-slate-400 dark:text-slate-500 px-2 py-3 text-center">\u6CA1\u627E\u5230\u5339\u914D\u7684\u6587\u4EF6</div>'}
      `,e.querySelectorAll("[data-search-file-id]").forEach(l=>{l.addEventListener("click",()=>{let m=l.dataset.searchFileId;this._selectedFileId=m;let x=this._allFiles.find(d=>d.id===m);if(x){this._currentFolderId=x.folderId;let d=x.folderId,v=new Set;for(;d!=null&&!v.has(d);)v.add(d),this._expanded.add(d),d=this._allFolders.find(C=>C.id===d)?.parentId??null}this._renderBreadcrumbs(),this._renderTree(),this._renderPreview()})});return}let i=t.filter(a=>a.parentId==null),h=(a,c)=>{let l=this._expanded.has(a.id),m=t.filter(v=>v.parentId===a.id),x=s.filter(v=>v.folderId===a.id);return`
        <div>
          <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                      ${this._currentFolderId===a.id?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200":"hover:bg-slate-100 dark:hover:bg-slate-700/50"}"
               data-folder-id="${p(a.id)}" data-depth="${c}">
            <button type="button" data-toggle="${p(a.id)}" class="shrink-0 w-5 h-5 flex items-center justify-center text-slate-400">
              ${m.length+x.length>0?l?u.chevronDown:u.chevronRight:'<span class="w-4"></span>'}
            </button>
            <span class="shrink-0 text-slate-500 dark:text-slate-400">${l?u.folderOpen:u.folder}</span>
            <span class="flex-1 truncate" title="${p(a.name)}">${p(a.name)}</span>
            <span class="text-xs text-slate-400 dark:text-slate-500">${m.length+x.length}</span>
            <button type="button" data-folder-menu="${p(a.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
          </div>
          ${l?`<div class="ml-4">
            ${m.map(v=>h(v,c+1)).join("")}
            ${x.map(v=>this._renderFileRow(v,c+1)).join("")}
          </div>`:""}
        </div>
      `},n=s.filter(a=>a.folderId==null),b=this._currentFolderId==null;e.innerHTML=`
      <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm font-medium
                  ${b?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200":"hover:bg-slate-100 dark:hover:bg-slate-700/50"}"
           data-folder-id="" data-depth="0">
        <span class="shrink-0 w-5 h-5"></span>
        <span class="shrink-0 text-slate-500 dark:text-slate-400">${u.folderOpen}</span>
        <span class="flex-1">\u6839\u76EE\u5F55</span>
        <span class="text-xs text-slate-400 dark:text-slate-500">${i.length+n.length}</span>
      </div>
      <div class="ml-4">
        ${i.map(a=>h(a,1)).join("")}
        ${n.map(a=>this._renderFileRow(a,1)).join("")}
        ${i.length+n.length===0?'<div class="text-xs text-slate-400 dark:text-slate-500 px-3 py-3 text-center">\u8FD8\u6CA1\u6709\u5185\u5BB9</div>':""}
      </div>
    `,e.querySelectorAll("[data-folder-id]").forEach(a=>{a.addEventListener("click",c=>{if(c.target.closest("[data-toggle]")||c.target.closest("[data-folder-menu]"))return;let l=a.dataset.folderId||null;this._currentFolderId=l,l&&this._expanded.add(l),this._selectedFileId=null,this._renderBreadcrumbs(),this._renderTree(),this._renderPreview()})}),e.querySelectorAll("[data-toggle]").forEach(a=>{a.addEventListener("click",c=>{c.stopPropagation();let l=a.dataset.toggle;this._expanded.has(l)?this._expanded.delete(l):this._expanded.add(l),this._renderTree()})}),e.querySelectorAll("[data-folder-menu]").forEach(a=>{a.addEventListener("click",c=>{c.stopPropagation();let l=a.dataset.folderMenu;this._showCtxMenu(c.clientX,c.clientY,[{label:"\u91CD\u547D\u540D",icon:u.edit,onClick:()=>this._openRename("folder",l)},{label:"\u79FB\u52A8\u5230...",icon:u.move,onClick:()=>this._openMove("folder",l)},{label:"\u5220\u9664",icon:u.trash,danger:!0,onClick:()=>this._deleteFolder(l)}])})}),e.querySelectorAll("[data-file-id]").forEach(a=>{a.addEventListener("click",()=>{this._selectedFileId=a.dataset.fileId,this._renderTree(),this._renderPreview()})}),e.querySelectorAll("[data-file-menu]").forEach(a=>{a.addEventListener("click",c=>{c.stopPropagation();let l=a.dataset.fileMenu;this._showCtxMenu(c.clientX,c.clientY,[{label:"\u91CD\u547D\u540D",icon:u.edit,onClick:()=>this._openRename("file",l)},{label:"\u590D\u5236\u4E00\u4EFD",icon:u.copy,onClick:()=>this._duplicateFile(l)},{label:"\u79FB\u52A8\u5230...",icon:u.move,onClick:()=>this._openMove("file",l)},{label:"\u5220\u9664",icon:u.trash,danger:!0,onClick:()=>this._deleteFile(l)}])})})},_renderFileRow(e,t){return`
      <div class="group flex items-center gap-1 px-1 py-1 rounded cursor-pointer text-sm
                  ${this._selectedFileId===e.id?"bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200":"hover:bg-slate-100 dark:hover:bg-slate-700/50"}"
           data-file-id="${p(e.id)}" data-depth="${t}">
        <span class="shrink-0 w-5 h-5"></span>
        <span class="shrink-0 text-slate-500 dark:text-slate-400">${u.file}</span>
        <span class="flex-1 truncate" title="${p(e.title)}">${p(e.title)}</span>
        <span class="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">${e.segments?.length??0}\u6BB5</span>
        <button type="button" data-file-menu="${p(e.id)}" class="opacity-0 group-hover:opacity-100 px-1 py-0.5 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 dark:hover:text-slate-200 transition" aria-label="\u66F4\u591A">\u22EF</button>
      </div>
    `},_renderSearchResultRow(e){let t=(e.text||"").replace(/\s+/g," ").slice(0,80);return`
      <button type="button" data-search-file-id="${p(e.id)}"
              class="w-full text-left px-2 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700/50 transition flex flex-col gap-0.5">
        <div class="flex items-center gap-1.5 text-sm">
          <span class="shrink-0 text-slate-500 dark:text-slate-400">${u.file}</span>
          <span class="flex-1 truncate font-medium">${p(e.title)}</span>
        </div>
        ${t?`<div class="text-xs text-slate-500 dark:text-slate-400 truncate ml-6">${p(t)}\u2026</div>`:""}
      </button>
    `},_sortRows(e,t,s){let r=this._sortBy,o=this._sortDir==="asc"?1:-1,i=[...e];return r==="title"?i.sort((h,n)=>String(t(h)||"").localeCompare(String(t(n)||""),"zh-Hans-CN")*o):i.sort((h,n)=>((h[r]||0)-(n[r]||0))*o),i},_renderPreview(){let e=this._root.querySelector("#preview-empty"),t=this._root.querySelector("#preview-content"),s=this._allFiles.find(n=>n.id===this._selectedFileId);if(!s){e.classList.remove("hidden"),t.classList.add("hidden");return}e.classList.add("hidden"),t.classList.remove("hidden");let r=Array.isArray(s.segments)?s.segments.length:0,o=(s.text||"").length,h=(s.folderId?this._allFolders.find(n=>n.id===s.folderId):null)?.name??"\u6839\u76EE\u5F55";t.innerHTML=`
      <div class="flex items-start gap-3 flex-wrap">
        <div class="flex-1 min-w-0">
          <h2 class="text-lg sm:text-xl font-semibold break-all">${p(s.title)}</h2>
          <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-3 flex-wrap">
            <span>${u.folderOpen}<span class="ml-1">${p(h)}</span></span>
            <span>${o} \u5B57</span>
            <span>${r} \u6BB5</span>
            <span>${s.autoAll?"\u987A\u5E8F\u81EA\u52A8\u64AD\u653E":"\u5355\u6BB5\u64AD\u653E"}</span>
          </div>
          <div class="text-xs text-slate-400 dark:text-slate-500 mt-1">
            \u521B\u5EFA ${T(s.createdAt)} \xB7 \u66F4\u65B0 ${T(s.updatedAt)}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <button id="preview-load" type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 active:scale-95 transition text-sm">
            ${u.play}<span>\u52A0\u8F7D\u5E76\u6717\u8BFB</span>
          </button>
          <button id="preview-rename" type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition text-sm">
            ${u.edit}<span>\u91CD\u547D\u540D</span>
          </button>
          <button id="preview-delete" type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition text-sm">
            ${u.trash}<span>\u5220\u9664</span>
          </button>
        </div>
      </div>

      <section class="border-t border-slate-200 dark:border-slate-700 pt-4">
        <h3 class="text-sm font-semibold mb-2">\u6B63\u6587\u9884\u89C8</h3>
        <pre class="text-sm whitespace-pre-wrap break-words bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-md p-3 max-h-60 overflow-y-auto">${p(s.text||"")}</pre>
      </section>

      <section class="border-t border-slate-200 dark:border-slate-700 pt-4">
        <h3 class="text-sm font-semibold mb-2">\u5206\u6BB5\u9884\u89C8 (${r})</h3>
        ${r>0?`<ol class="list-decimal list-inside space-y-1.5 text-sm bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-md p-3 max-h-60 overflow-y-auto">
              ${s.segments.map(n=>`<li class="break-words"><span>${p(n)}</span></li>`).join("")}
            </ol>`:'<div class="text-xs text-slate-400 dark:text-slate-500">\u65E0\u5206\u6BB5</div>'}
      </section>
    `,t.querySelector("#preview-load").addEventListener("click",()=>this._loadToSpeak(s)),t.querySelector("#preview-rename").addEventListener("click",()=>this._openRename("file",s.id)),t.querySelector("#preview-delete").addEventListener("click",()=>this._deleteFile(s.id))},_loadToSpeak(e){if(!e)return;let t=k.get(L,{text:"",segments:[]}),s=(t.text||"")!==""||(t.segments||[]).length>0,r=(t.text||"")===(e.text||"");s&&!r&&!confirm(`\u786E\u8BA4\u7528\u300C${e.title}\u300D\u7684\u5185\u5BB9\u8986\u76D6\u5F53\u524D\u6717\u8BFB\u9875?
\u5F53\u524D\u672A\u4FDD\u5B58\u7684\u5185\u5BB9\u4F1A\u4E22\u5931\u3002`)||(k.set(L,{text:e.text||"",segments:Array.isArray(e.segments)?e.segments:[]}),_.emit("files:loaded",{fileId:e.id,autoAll:e.autoAll===!0}),location.hash="/")},async _saveCurrentFromBus({text:e,segments:t,autoAll:s,suggestedTitle:r}={}){let o=String(e||"").trim();if(!o){this._toast("\u5F53\u524D\u6717\u8BFB\u9875\u6CA1\u6709\u53EF\u4FDD\u5B58\u7684\u6587\u672C","err");return}let i=(r||E(o)).slice(0,80),h=this._currentFolderId,n=Date.now(),b={id:w("fl"),folderId:h??null,title:i,text:e,segments:Array.isArray(t)?t:[],autoAll:s===!0,createdAt:n,updatedAt:n};try{await g.put(b),this._selectedFileId=b.id,this._toast(`\u5DF2\u4FDD\u5B58\u300C${i}\u300D`,"ok"),await this._refresh(),this._currentFolderId=h??null,this._expanded.add(h),this._renderBreadcrumbs(),this._renderTree(),this._renderPreview()}catch(a){this._toast("\u4FDD\u5B58\u5931\u8D25:"+(a?.message||a),"err")}},_wireDialogs(){let e=this._root.querySelector("#new-folder-dlg"),t=this._root.querySelector("#rename-dlg"),s=this._root.querySelector("#move-dlg"),r=this._root.querySelector("#new-folder-name"),o=this._root.querySelector("#new-folder-error"),i=l=>{l?(o.textContent=l,o.classList.remove("hidden")):(o.classList.add("hidden"),o.textContent="")};e.querySelector('[data-action="close"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="cancel"]').addEventListener("click",()=>e.close()),e.querySelector('[data-action="save"]').addEventListener("click",async()=>{let l=r.value.trim();if(!l){i("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}try{await f.put({id:w("f"),parentId:this._currentFolderId??null,name:l,createdAt:Date.now(),updatedAt:Date.now()}),r.value="",i(""),e.close(),await this._refresh(),this._toast(`\u5DF2\u521B\u5EFA\u6587\u4EF6\u5939\u300C${l}\u300D`,"ok")}catch(m){i("\u521B\u5EFA\u5931\u8D25:"+(m?.message||m))}}),r.addEventListener("input",()=>i("")),r.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),e.querySelector('[data-action="save"]').click())}),this._renameTarget=null;let h=this._root.querySelector("#rename-input"),n=this._root.querySelector("#rename-error"),b=this._root.querySelector("#rename-title"),a=l=>{l?(n.textContent=l,n.classList.remove("hidden")):(n.classList.add("hidden"),n.textContent="")};t.querySelector('[data-action="close"]').addEventListener("click",()=>t.close()),t.querySelector('[data-action="cancel"]').addEventListener("click",()=>t.close()),t.querySelector('[data-action="save"]').addEventListener("click",async()=>{let l=h.value.trim();if(!l){a("\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A");return}if(!this._renameTarget){t.close();return}let{kind:m,id:x}=this._renameTarget;try{if(m==="file"){let d=await g.get(x);if(!d)throw new Error("\u6587\u4EF6\u4E0D\u5B58\u5728");d.title=l,d.updatedAt=Date.now(),await g.put(d)}else{let d=await f.get(x);if(!d)throw new Error("\u6587\u4EF6\u5939\u4E0D\u5B58\u5728");d.name=l,d.updatedAt=Date.now(),await f.put(d)}a(""),t.close(),await this._refresh(),this._toast("\u5DF2\u91CD\u547D\u540D","ok")}catch(d){a("\u91CD\u547D\u540D\u5931\u8D25:"+(d?.message||d))}}),h.addEventListener("input",()=>a("")),h.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),t.querySelector('[data-action="save"]').click())}),this._renameDlg=t,this._renameInput=h,this._renameTitle=b,this._moveTarget=null,this._moveSelectedFolderId=null;let c=this._root.querySelector("#move-tree");s.querySelector('[data-action="close"]').addEventListener("click",()=>s.close()),s.querySelector('[data-action="cancel"]').addEventListener("click",()=>s.close()),s.querySelector('[data-action="save"]').addEventListener("click",async()=>{if(!this._moveTarget){s.close();return}let{kind:l,id:m}=this._moveTarget,x=this._moveSelectedFolderId??null;try{l==="file"?await S(m,x):await I(m,x),s.close(),await this._refresh(),this._toast("\u5DF2\u79FB\u52A8","ok")}catch(d){this._toast("\u79FB\u52A8\u5931\u8D25:"+(d?.message||d),"err")}}),this._moveDlg=s,this._moveTree=c},_openNewFolder(){this._root.querySelector("#new-folder-name").value="",this._root.querySelector("#new-folder-error").classList.add("hidden"),this._root.querySelector("#new-folder-dlg").showModal(),setTimeout(()=>this._root.querySelector("#new-folder-name").focus(),0)},_openRename(e,t){this._renameTarget={kind:e,id:t};let s=e==="file"?this._allFiles.find(r=>r.id===t)?.title:this._allFolders.find(r=>r.id===t)?.name;this._renameTitle.textContent=e==="file"?"\u91CD\u547D\u540D\u6587\u4EF6":"\u91CD\u547D\u540D\u6587\u4EF6\u5939",this._renameInput.value=s||"",this._root.querySelector("#rename-error").classList.add("hidden"),this._renameDlg.showModal(),setTimeout(()=>{this._renameInput.focus(),this._renameInput.select()},0)},_openMove(e,t){this._moveTarget={kind:e,id:t};let s=e==="file"?this._allFiles.find(r=>r.id===t)?.folderId??null:this._allFolders.find(r=>r.id===t)?.parentId??null;this._moveSelectedFolderId=s,this._renderMoveTree(),this._moveDlg.showModal()},_renderMoveTree(){let e=this._moveTree,t=this._sortRows(this._allFolders,i=>i.name,"title"),s=(i,h)=>{let n=t.filter(a=>a.parentId===i.id);return`
        <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${this._moveSelectedFolderId===i.id?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-slate-100 dark:hover:bg-slate-700/50"}"
             data-move-folder-id="${p(i.id)}" data-depth="${h}">
          <span class="shrink-0 w-4"></span>
          <span class="shrink-0 text-slate-500">${u.folder}</span>
          <span class="flex-1 truncate">${p(i.name)}</span>
        </div>
        ${n.map(a=>s(a,h+1)).join("")}
      `},r=t.filter(i=>i.parentId==null),o=this._moveSelectedFolderId==null;e.innerHTML=`
      <div class="flex items-center gap-1 px-1 py-0.5 rounded cursor-pointer ${o?"bg-blue-100 dark:bg-blue-900/40":"hover:bg-slate-100 dark:hover:bg-slate-700/50"}"
           data-move-folder-id="" data-depth="0">
        <span class="shrink-0 w-4"></span>
        <span class="shrink-0 text-slate-500">${u.folder}</span>
        <span class="flex-1">\u6839\u76EE\u5F55</span>
      </div>
      ${r.map(i=>s(i,1)).join("")}
    `,e.querySelectorAll("[data-move-folder-id]").forEach(i=>{i.addEventListener("click",()=>{this._moveSelectedFolderId=i.dataset.moveFolderId||null,this._renderMoveTree()})})},async _deleteFile(e){let t=this._allFiles.find(s=>s.id===e);if(t&&confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u300C${t.title}\u300D?`))try{await g.del(e),this._selectedFileId===e&&(this._selectedFileId=null),this._toast(`\u5DF2\u5220\u9664\u300C${t.title}\u300D`,"ok"),await this._refresh()}catch(s){this._toast("\u5220\u9664\u5931\u8D25:"+(s?.message||s),"err")}},async _deleteFolder(e){let t=this._allFolders.find(n=>n.id===e);if(!t)return;let s=this._allFolders,r=new Set([e]),o=!0;for(;o;){o=!1;for(let n of s)n.parentId!=null&&r.has(n.parentId)&&!r.has(n.id)&&(r.add(n.id),o=!0)}let i=this._allFiles.filter(n=>n.folderId!=null&&r.has(n.folderId)).length;if(confirm(`\u786E\u8BA4\u5220\u9664\u6587\u4EF6\u5939\u300C${t.name}\u300D?
\u5C06\u540C\u65F6\u5220\u9664 ${r.size-1} \u4E2A\u5B50\u6587\u4EF6\u5939 + ${i} \u4E2A\u6587\u4EF6,\u4E14\u4E0D\u53EF\u64A4\u9500\u3002`))try{let n=await F(e);this._currentFolderId&&r.has(this._currentFolderId)&&(this._currentFolderId=null),this._toast(`\u5DF2\u5220\u9664\u6587\u4EF6\u5939 (${n.folders.length} \u76EE\u5F55, ${n.files.length} \u6587\u4EF6)`,"ok"),await this._refresh()}catch(n){this._toast("\u5220\u9664\u5931\u8D25:"+(n?.message||n),"err")}},async _duplicateFile(e){let t=this._allFiles.find(o=>o.id===e);if(!t)return;let s=Date.now(),r={...t,id:w("fl"),title:`${t.title} (\u526F\u672C)`,createdAt:s,updatedAt:s};try{await g.put(r),this._toast("\u5DF2\u590D\u5236","ok"),await this._refresh()}catch(o){this._toast("\u590D\u5236\u5931\u8D25:"+(o?.message||o),"err")}},_wireCtxMenu(){this._ctxMenu=this._root.querySelector("#ctx-menu"),this._onDocClickHideMenu=()=>this._hideCtxMenu(),this._onEscHideMenu=e=>{e.key==="Escape"&&this._hideCtxMenu()},document.addEventListener("click",this._onDocClickHideMenu),document.addEventListener("keydown",this._onEscHideMenu)},_showCtxMenu(e,t,s){let r=this._ctxMenu;r.innerHTML=s.map((c,l)=>`
      <button type="button" data-ctx-i="${l}"
              class="w-full text-left px-3 py-1.5 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 ${c.danger?"text-red-600 dark:text-red-400":""}">
        <span class="shrink-0">${c.icon||""}</span><span>${p(c.label)}</span>
      </button>
    `).join(""),r.classList.remove("hidden");let o=180,i=s.length*32+8,h=window.innerWidth,n=window.innerHeight,b=Math.min(e,h-o-4),a=Math.min(t,n-i-4);r.style.left=`${b}px`,r.style.top=`${a}px`,r.querySelectorAll("[data-ctx-i]").forEach(c=>{c.addEventListener("click",l=>{l.stopPropagation();let m=Number(c.dataset.ctxI);r.classList.add("hidden"),s[m].onClick()})})},_hideCtxMenu(){this._ctxMenu?.classList.add("hidden")},_wireTreeEvents(){},_setStatus(e,t="info"){this._toast(e,t)},_toast(e,t="info"){let s=document.getElementById("__files-toast");s||(s=document.createElement("div"),s.id="__files-toast",s.className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300",document.body.appendChild(s)),s.textContent=e,s.className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-md shadow-lg text-sm transition-opacity duration-300 "+(t==="ok"?"bg-green-600 text-white":t==="err"?"bg-red-600 text-white":"bg-slate-800 text-white"),s.style.opacity="1",clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{s.style.opacity="0",setTimeout(()=>{try{s.remove()}catch{}},300)},2e3)}};function p(e){return String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function T(e){if(!e)return"\u2014";let t=new Date(e),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())} ${s(t.getHours())}:${s(t.getMinutes())}`}var j=q;export{j as default,q as page};
