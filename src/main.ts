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
    loadComponent("loader", "/src/components/loader.html"),
    loadComponent("common-cmds", "/src/components/common-cmds/common-cmds.html", initCommonCmds),
    loadComponent("interaction-cmds", "/src/components/interaction-cmds/interaction-cmds.html", initInteractionCmds),
    loadComponent("fish-cmds", "/src/components/fish-cmds/fish-cmds.html", initFishCmds),
    loadComponent("gamba-cmds", "/src/components/gamba-cmds/gamba-cmds.html", initGambaCmds),
    loadComponent("moderators-cmds", "/src/components/moderators-cmds/moderators-cmds.html", initModeratorsCmds),
  ]).then(() => {
    setTimeout(() => {
      const loader = document.getElementById("loader");
      const app = document.getElementById("app");
      loader?.classList.add("hidden");
      app?.classList.remove("hidden");
    }, 1500)});
}

init();

const collapse = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + "px";

  requestAnimationFrame(() => {
    el.style.height = "0px";
  });
}

const expand = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + "px";

  el.addEventListener(
    "transitionend",
    () => {
      el.style.height = "auto";
    },
    { once: true }
  );
}

const toggle = (el: HTMLElement) => {
  const isCollapsed = el.style.height === "0px";

  if (isCollapsed) {
    expand(el);
  } else {
    collapse(el);
  }
}

const toggleCollapse = (trigger: string, block: string) => {
  switch (trigger) {
    case "coll-icon-common":
      document.getElementById("coll-icon-common")?.classList.toggle("rotated");
      const elementcmd : HTMLElement = document.getElementById(block)!;
      toggle(elementcmd);
      break;
    case "coll-icon-interactions":
      document.getElementById("coll-icon-interactions")?.classList.toggle("rotated");
      const elementinter : HTMLElement = document.getElementById(block)!;
      toggle(elementinter);
      break;
    case "coll-icon-fish":
        document.getElementById("coll-icon-fish")?.classList.toggle("rotated");
      const elementfish : HTMLElement = document.getElementById(block)!;
      toggle(elementfish);
      break;
    case "coll-icon-gamba":
      document.getElementById("coll-icon-gamba")?.classList.toggle("rotated");
      const elementgamba : HTMLElement = document.getElementById(block)!;
      toggle(elementgamba);
      break;
    case "coll-icon-moderators":
      document.getElementById("coll-icon-moderators")?.classList.toggle("rotated");
      const elementmod : HTMLElement = document.getElementById(block)!;
      toggle(elementmod);
      break;
    default:
      break;
  }
}

const copyToClipboard = (cmd: string, element: HTMLElement) => {
  navigator.clipboard.writeText(cmd).then(() => {
    element.classList.add("text-blue-400");
    setTimeout(() => {
      element.classList.remove("text-blue-400");
    }, 1000);
  });
}

(window as any).toggleCollapse = toggleCollapse;
(window as any).copyToClipboard = copyToClipboard;