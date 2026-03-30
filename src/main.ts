import header from "./components/header.html?raw";
import footer from "./components/footer.html?raw";
import loader from "./components/loader.html?raw";
import commoncmd from "./components/common-cmds/common-cmds.html?raw";
import interactionscmd from "./components/interaction-cmds/interaction-cmds.html?raw";
import fishcmd from "./components/fish-cmds/fish-cmds.html?raw";
import gambacmd from "./components/gamba-cmds/gamba-cmds.html?raw";
import moderatorscmd from "./components/moderators-cmds/moderators-cmds.html?raw";

const components = {
  commonCmds: () => import("./components/common-cmds/common-cmds"), 
  interactionCmds: () => import("./components/interaction-cmds/interaction-cmds"), 
  fishCmds: () => import("./components/fish-cmds/fish-cmds"), 
  gambaCmds: () => import("./components/gamba-cmds/gamba-cmds"), 
  moderatorsCmds: () => import("./components/moderators-cmds/moderators-cmds")
};

const sprayHtml = (id: string, html: string) => {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
};

const loadStatic = () => {
  sprayHtml("header", header);
  sprayHtml("footer", footer);
  sprayHtml("loader", loader);
  sprayHtml("common-cmds", commoncmd);
  sprayHtml("interaction-cmds", interactionscmd);
  sprayHtml("fish-cmds", fishcmd);
  sprayHtml("gamba-cmds", gambacmd);
  sprayHtml("moderators-cmds", moderatorscmd);
}

const loadComponents = async () => {
  const common = await components.commonCmds();
  common.initCommonCmds();
  const interaction = await components.interactionCmds();
  interaction.initInteractionCmds();
  const fish = await components.fishCmds();
  fish.initFishCmds();
  const gamba = await components.gambaCmds();
  gamba.initGambaCmds();
  const moderators = await components.moderatorsCmds();
  moderators.initModeratorsCmds();
};

const init = async () => {
  loadStatic();
  await loadComponents();
}

init().then(() => {
    setTimeout(() => {
      const loader = document.getElementById("loader");
      const app = document.getElementById("app");
      loader?.classList.add("hidden");
      app?.classList.remove("hidden");
    }, 1500)});


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
