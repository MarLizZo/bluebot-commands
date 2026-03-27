//import { setupCounter } from './counter.ts'

type ComponentInit = () => Promise<void>;

async function loadComponent(
  id: string,
  htmlPath: string,
  init?: ComponentInit
): Promise<void> {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const res = await fetch(htmlPath);
    if (!res.ok) throw new Error(`Errore fetch: ${htmlPath}`);
    el.innerHTML = await res.text();

    // inizializza il componente (logica + dati)
    if (init) await init();
  } catch (err) {
    console.error(err);
  }
}

import { initCommonCmds } from "./components/common-cmds/common-cmds";
import { initFishCmds } from "./components/fish-cmds/fish-cmds";
import { initInteractionCmds } from "./components/interaction-cmds/interaction-cmds";
import { initGambaCmds } from "./components/gamba-cmds/gamba-cmds";
import { initModeratorsCmds } from "./components/moderators-cmds/moderators-cmds";

async function init() {
  await Promise.all([
    loadComponent("header", "/src/components/header.html"),
    loadComponent("footer", "/src/components/footer.html"),
    /*loadComponent("common-cmds", "/src/components/common-cmds/common-cmds.html", initCommonCmds),
    loadComponent("interaction-cmds", "/src/components/interaction-cmds/interaction-cmds.html", initInteractionCmds),
    loadComponent("fish-cmds", "/src/components/fish-cmds/fish-cmds.html", initFishCmds),
    loadComponent("gamba-cmds", "/src/components/gamba-cmds/gamba-cmds.html", initGambaCmds),
    loadComponent("moderators-cmds", "/src/components/moderators-cmds/moderators-cmds.html", initModeratorsCmds),*/
  ]);
}

init();