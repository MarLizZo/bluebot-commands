export async function initGambaCmds(): Promise<void> {
  try {
    const res = await fetch("/src/components/gamba-cmds/gamba-cmds.json");
    if (!res.ok) throw new Error("Errore JSON gamba-cmds");

    const data = await res.json();

    const container = document.getElementById("gamba-cmds-container");
    if (!container) return;

    container.innerHTML = data.items
      .map((item: any) => `<div class="gamba-cmds">${item.title}</div>`)
      .join("");

  } catch (err) {
    console.error(err);
  }
}