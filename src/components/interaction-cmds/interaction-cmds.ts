export async function initInteractionCmds(): Promise<void> {
  try {
    const res = await fetch("/src/components/interaction-cmds/interaction-cmds.json");
    if (!res.ok) throw new Error("Errore JSON interaction-cmds");

    const data = await res.json();

    const container = document.getElementById("interaction-cmds-container");
    if (!container) return;

    container.innerHTML = data.items
      .map((item: any) => `<div class="interaction-cmds">${item.title}</div>`)
      .join("");

  } catch (err) {
    console.error(err);
  }
}