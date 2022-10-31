const options = ["Public", "Private"];

export default {
  description: "Create React Page",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "What type of page would you like?",
      choices: options,
    },
    {
      type: "input",
      name: "name",
      message: "Page Name: ",
    },
  ],
  actions(data) {
    const actions = [];
    if (!data) return actions;

    actions.push({
      type: "addMany",
      destination: `src/pages/${data.type}/{{pascalCase name}}Page`,
      templateFiles: "plop/pages/templates/*.hbs",
      base: "plop/pages/templates",
    });
    return actions;
  },
};
