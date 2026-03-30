async function e(){try{let e=await fetch(`./moderators-cmds.json`);if(!e.ok)throw Error(`Error JSON moderators-cmds`);let t=await e.json(),n=document.getElementById(`moderators-cmds-container`);if(!n)return;n.innerHTML=t.map((e,t)=>{let n=t%2==0?``:`bg-even`,r=e.synthax?`<p><span class="font-semibold mt-3 synth">Synthax: </span>${e.synthax}</p>`:``;return`
        <div class="flex w-full moderators-cmds ${n}">
          <div
                 class="line flex flex-col md:flex-row justify-center md:justify-start md:items-center w-3/12 md:w-2/12">
                 <i class="bi bi-copy fs-5 md:me-3 ps-1 md:ps-0" onclick="copyToClipboard('${e.command.toString()}', this)"></i>
                 <p>${e.command}</p>
             </div>
            <div class="line flex flex-col justify-center w-3/12">
                 <p>${e.permissions}</p>
             </div>
             <div class="line flex flex-col justify-center w-6/12 md:w-7/12">
                <p>${e.description}</p>
                ${r}
             </div>
        </div>
        `}).join(``)}catch(e){console.error(e)}}export{e as initModeratorsCmds};