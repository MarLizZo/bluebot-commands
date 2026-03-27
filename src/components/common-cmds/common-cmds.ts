export async function initCommonCmds(): Promise<void> {
  try {
    const res = await fetch("/src/components/common-cmds/common-cmds.json");
    if (!res.ok) throw new Error("Errore JSON common-cmds");

    const data = await res.json();

    const container = document.getElementById("common-cmds-container");
    if (!container) return;

    container.innerHTML = data.items
      .map((item: any) => `<div class="common-cmds">${item.title}</div>`)
      .join("");

  } catch (err) {
    console.error(err);
  }
}