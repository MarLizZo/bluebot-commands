import type { CommandItem } from "../../commands-interface";

export async function initCommonCmds(): Promise<void> {
  try {
    const res = await fetch("./common-cmds.json");
    if (!res.ok) throw new Error("Error JSON common-cmds");

    const data: CommandItem[] = await res.json();

    const container = document.getElementById("common-cmds-container");
    if (!container) return;

    container.innerHTML = data
      .map((item: CommandItem, index: number) => {
        const evenClass = index % 2 === 0 ? "" : "bg-even";
        const synthax = item.synthax ? `<p><span class="font-semibold mt-3 synth">Synthax: </span>${item.synthax}</p>` : "";
        let aliasesHtml = '';
        if (item.aliases) {
            item.aliases.forEach((al, index) => {
            aliasesHtml += `<span>${al}</span>`;
            if (index != item.aliases!.length - 1) {
                aliasesHtml += ' - ';
              }
          })}
        return `
        <div class="flex w-full common-cmds ${evenClass}">
          <div
                 class="line flex flex-col md:flex-row justify-center md:justify-start md:items-center w-3/12 md:w-2/12">
                 <i class="bi bi-copy fs-5 md:me-3 ps-1 md:ps-0" onclick="copyToClipboard('${item.command.toString()}', this)"></i>
                 <div class="flex flex-col pe-2 synth-container">
                   <p>${item.command}</p>
                   <p style="font-size: small">${aliasesHtml}</p>
                 </div>
             </div>
            <div class="line flex flex-col justify-center w-3/12">
                 <p>${item.permissions}</p>
             </div>
             <div class="line flex flex-col justify-center w-6/12 md:w-7/12">
                <p>${item.description}</p>
                ${synthax}
             </div>
        </div>
        `})
      .join("");

  } catch (err) {
    console.error(err);
  }
}