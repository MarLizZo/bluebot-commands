(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<div class="flex items-center w-full h-full">\r
    <div class="flex items-center justify-center h-full">\r
        <img src="profile_pic.png" class="profile-pic rounded-full shadow"\r
            alt="BlueAgua_">\r
        <div class="ms-3 flex flex-col justify-center font-medium">\r
            <h6 class="mb-1 text-sm md:text-base">BlueAgua_</h6>\r
            <h6 class="mb-1 text-sm md:text-base">Twitch bot commands</h6>\r
        </div>\r
    </div>\r
    <div class="ms-4 flex flex-col grow h-full">\r
        <div class="flex justify-end items-center h-custom-48">\r
            <a href="https://streamlabs.com/blueagua_/tip" target="_blank" data-tooltip="Donation">\r
                <i class="bi bi-currency-dollar md:text-xl"></i>\r
            </a>\r
            <a href="https://streamelements.com/blueagua_/store" target="_blank" class="mx-6"\r
                data-tooltip="Stream store">\r
                <i class="bi bi-shop-window md:text-xl"></i>\r
            </a>\r
            <a href="https://subs.twitch.tv/blueagua_" target="_blank"\r
                class="sub-btn px-3 md:px-4 rounded-lg text-sm text-neutral-800">Subscribe</a>\r
        </div>\r
        <div class="separator grow"></div>\r
        <div class="flex justify-end items-center me-1 h-custom-48">\r
            <a href="https://www.twitch.tv/blueagua_" target="_blank" class="me-6" data-tooltip="Twitch">\r
                <i class="bi bi-twitch md:text-xl"></i>\r
            </a>\r
            <a href="https://discord.gg/8k4uq7kEGS" target="_blank" class="me-6" data-tooltip="Discord">\r
                <i class="bi bi-discord md:text-xl"></i>\r
            </a>\r
            <a href="https://www.tiktok.com/@blueagua_" target="_blank" class="me-6" data-tooltip="Tiktok">\r
                <i class="bi bi-tiktok md:text-xl"></i></a>\r
            <a href="https://www.instagram.com/blueaguattv/" target="_blank" class="me-6" data-tooltip="Instagram">\r
                <i class="bi bi-instagram md:text-xl"></i>\r
            </a>\r
            <a href="https://www.youtube.com/@BlueAguaTTV" target="_blank" class="" data-tooltip="Youtube">\r
                <i class="bi bi-youtube md:text-xl"></i>\r
            </a>\r
        </div>\r
    </div>\r
</div>`,t=`<div class="flex items-center justify-center w-full h-full">\r
    <div class="flex md:justify-center items-center w-6/12 md:w-7/12 text-sm md:text-base">\r
        <h5 class="m-0">Follow us on Twitch!</h5>\r
    </div>\r
    <div\r
        class="flex flex-col justify-center items-center sm:flex-row sm:justify-end sm:items-center w-6/12 sm:w-5/12 text-sm">\r
        <div class="flex justify-center sm:justify-start sm:items-center mb-1 sm:mb-0">\r
            <p class="sm:me-1">Made with</p>\r
            <img src="droplet_love.png" class="love-img">\r
        </div>\r
        <p class="sm:ms-2">by Mar.LizZo</p>\r
    </div>\r
</div>`,n=`<div class="wrapper">\r
    <div class="circle"></div>\r
    <div class="circle"></div>\r
    <div class="circle"></div>\r
    <div class="shadow"></div>\r
    <div class="shadow"></div>\r
    <div class="shadow"></div>\r
</div>`,r=`<div class="flex flex-col w-full items-center">\r
    <h2 class="w-full text-left text-xl md:text-2xl font-medium mb-5 title" id="cmds-group-common">\r
        > Common commands\r
    </h2>\r
    <div class="flex t-head w-full">\r
        <div class="w-3/12 md:w-2/12 flex items-center">Command</div>\r
        <div class="w-3/12 flex items-center">Permission</div>\r
        <div class="w-6/12 md:w-7/12 flex items-center justify-between">\r
            <p>Response</p>\r
            <i id="coll-icon-common" class="bi text-xl bi-arrow-bar-up transition-all cursor-pointer"\r
                onclick="toggleCollapse('coll-icon-common', 'common-cmds-container')"></i>\r
        </div>\r
    </div>\r
\r
    <div id="common-cmds-container" class="flex flex-col t-body w-full collapsible">\r
        \r
    </div>\r
</div>`,i=`<div class="flex flex-col w-full items-center">\r
    <h2 class="w-full text-left text-xl md:text-2xl font-medium mb-5 title" id="cmds-group-interactions">\r
        > Interaction commands\r
    </h2>\r
    <div class="flex t-head w-full">\r
        <div class="w-3/12 md:w-2/12 flex items-center">Command</div>\r
        <div class="w-3/12 flex items-center">Permission</div>\r
        <div class="w-6/12 md:w-7/12 flex items-center justify-between">\r
            <p>Response</p>\r
            <i id="coll-icon-interactions" class="bi text-xl bi-arrow-bar-up transition-all cursor-pointer"\r
                onclick="toggleCollapse('coll-icon-interactions', 'interactions-cmds-container')"></i>\r
        </div>\r
    </div>\r
\r
    <div id="interactions-cmds-container" class="flex flex-col t-body w-full collapsible">\r
        \r
    </div>\r
</div>`,a=`<div class="flex flex-col w-full items-center">\r
    <h2 class="w-full text-left text-xl md:text-2xl font-medium mb-5 title" id="cmds-group-common">\r
        > Fishing commands\r
    </h2>\r
    <div class="flex t-head w-full">\r
        <div class="w-3/12 md:w-2/12 flex items-center">Command</div>\r
        <div class="w-3/12 flex items-center">Permission</div>\r
        <div class="w-6/12 md:w-7/12 flex items-center justify-between">\r
            <p>Response</p>\r
            <i id="coll-icon-fish" class="bi text-xl bi-arrow-bar-up transition-all cursor-pointer"\r
                onclick="toggleCollapse('coll-icon-fish', 'fish-cmds-container')"></i>\r
        </div>\r
    </div>\r
\r
    <div id="fish-cmds-container" class="flex flex-col t-body w-full collapsible">\r
        \r
    </div>\r
</div>`,o=`<div class="flex flex-col w-full items-center">\r
    <h2 class="w-full text-left text-xl md:text-2xl font-medium mb-5 title" id="cmds-group-gamba">\r
        > Gamba commands\r
    </h2>\r
    <div class="flex t-head w-full">\r
        <div class="w-3/12 md:w-2/12 flex items-center">Command</div>\r
        <div class="w-3/12 flex items-center">Permission</div>\r
        <div class="w-6/12 md:w-7/12 flex items-center justify-between">\r
            <p>Response</p>\r
            <i id="coll-icon-gamba" class="bi text-xl bi-arrow-bar-up transition-all cursor-pointer"\r
                onclick="toggleCollapse('coll-icon-gamba', 'gamba-cmds-container')"></i>\r
        </div>\r
    </div>\r
\r
    <div id="gamba-cmds-container" class="flex flex-col t-body w-full collapsible">\r
        \r
    </div>\r
</div>`,s=`<div class="flex flex-col w-full items-center">\r
    <h2 class="w-full text-left text-xl md:text-2xl font-medium mb-5 title" id="cmds-group-moderators">\r
        > Moderators commands\r
    </h2>\r
    <div class="flex t-head w-full">\r
        <div class="w-3/12 md:w-2/12 flex items-center">Command</div>\r
        <div class="w-3/12 flex items-center">Permission</div>\r
        <div class="w-6/12 md:w-7/12 flex items-center justify-between">\r
            <p>Response</p>\r
            <i id="coll-icon-moderators" class="bi text-xl bi-arrow-bar-up transition-all cursor-pointer"\r
                onclick="toggleCollapse('coll-icon-moderators', 'moderators-cmds-container')"></i>\r
        </div>\r
    </div>\r
\r
    <div id="moderators-cmds-container" class="flex flex-col t-body w-full collapsible">\r
        \r
    </div>\r
</div>`,c=`modulepreload`,l=function(e){return`/`+e},u={},d=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=l(t,n),t in u)return;u[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:c,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},f={commonCmds:()=>d(()=>import(`./common-cmds-CFtzGsM-.js`),[]),interactionCmds:()=>d(()=>import(`./interaction-cmds-NxaML8b4.js`),[]),fishCmds:()=>d(()=>import(`./fish-cmds-BiZHSNfw.js`),[]),gambaCmds:()=>d(()=>import(`./gamba-cmds-13R8i8OY.js`),[]),moderatorsCmds:()=>d(()=>import(`./moderators-cmds-BDnmYXbd.js`),[])},p=(e,t)=>{let n=document.getElementById(e);n&&(n.innerHTML=t)},m=()=>{p(`header`,e),p(`footer`,t),p(`loader`,n),p(`common-cmds`,r),p(`interaction-cmds`,i),p(`fish-cmds`,a),p(`gamba-cmds`,o),p(`moderators-cmds`,s)},h=async()=>{(await f.commonCmds()).initCommonCmds(),(await f.interactionCmds()).initInteractionCmds(),(await f.fishCmds()).initFishCmds(),(await f.gambaCmds()).initGambaCmds(),(await f.moderatorsCmds()).initModeratorsCmds()};(async()=>{m(),await h()})().then(()=>{setTimeout(()=>{let e=document.getElementById(`loader`),t=document.getElementById(`app`);e?.classList.add(`hidden`),t?.classList.remove(`hidden`)},1500)});var g=e=>{e.style.height=e.scrollHeight+`px`,requestAnimationFrame(()=>{e.style.height=`0px`})},_=e=>{e.style.height=e.scrollHeight+`px`,e.addEventListener(`transitionend`,()=>{e.style.height=`auto`},{once:!0})},v=e=>{e.style.height===`0px`?_(e):g(e)};window.toggleCollapse=(e,t)=>{switch(e){case`coll-icon-common`:document.getElementById(`coll-icon-common`)?.classList.toggle(`rotated`),v(document.getElementById(t));break;case`coll-icon-interactions`:document.getElementById(`coll-icon-interactions`)?.classList.toggle(`rotated`),v(document.getElementById(t));break;case`coll-icon-fish`:document.getElementById(`coll-icon-fish`)?.classList.toggle(`rotated`),v(document.getElementById(t));break;case`coll-icon-gamba`:document.getElementById(`coll-icon-gamba`)?.classList.toggle(`rotated`),v(document.getElementById(t));break;case`coll-icon-moderators`:document.getElementById(`coll-icon-moderators`)?.classList.toggle(`rotated`),v(document.getElementById(t));break;default:break}},window.copyToClipboard=(e,t)=>{navigator.clipboard.writeText(e).then(()=>{t.classList.add(`text-blue-400`),setTimeout(()=>{t.classList.remove(`text-blue-400`)},1e3)})};