export async function initModeratorsCmds(): Promise<void> {
  try {
    const res = await fetch("/src/components/moderators-cmds/moderators-cmds.json");
    if (!res.ok) throw new Error("Errore JSON moderators-cmds");

    const data = await res.json();

    const container = document.getElementById("moderators-cmds-container");
    if (!container) return;

    container.innerHTML = data.items
      .map((item: any) => `<div class="moderators-cmds">${item.title}</div>`)
      .join("");

  } catch (err) {
    console.error(err);
  }
}