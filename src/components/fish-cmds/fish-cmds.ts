export async function initFishCmds(): Promise<void> {
  try {
    const res = await fetch("/src/components/fish-cmds/fish-cmds.json");
    if (!res.ok) throw new Error("Errore JSON fish-cmds");

    const data = await res.json();

    const container = document.getElementById("fish-cmds-container");
    if (!container) return;

    container.innerHTML = data.items
      .map((item: any) => `<div class="fish-cmds">${item.title}</div>`)
      .join("");

  } catch (err) {
    console.error(err);
  }
}