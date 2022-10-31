const options = ["Default", "Atom", "Molecule", "Organism"];

export default {
  description: "Create React Functional Component",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "What type of component would you like?",
      choices: options,
    },
    {
      type: "input",
      name: "name",
      message: "Component Name: ",
    },
  ],
  actions(data) {
    const actions = [];
    if (!data) return actions;

    actions.push({
      type: "addMany",
      destination: `src/components/${
        data.type === "Default"
          ? `{{pascalCase name}}`
          : `AtomicKit/${data.type}s/{{pascalCase name}}`
      }`,
      templateFiles: "plop/components/templates/*.hbs",
      base: "plop/components/templates",
    });
    return actions;
  },
};
