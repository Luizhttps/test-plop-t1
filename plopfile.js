import componentGenerator from "./plop/components/component.generator.js";
import pageGenerator from "./plop/pages/page.generator.js";
import hookGenerator from "./plop/hooks/hook.generator.js";
import contextGenerator from "./plop/contexts/context.generator.js";

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("Component", componentGenerator);
  plop.setGenerator("Page", pageGenerator);
  plop.setGenerator("Hook", hookGenerator);
  plop.setGenerator("Context", contextGenerator);
}
