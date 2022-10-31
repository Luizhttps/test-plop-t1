export default {
  description: "Create React Custom Hook",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Hook Name: ",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/hooks/use{{pascalCase name}}.ts",
      templateFile: "plop/hooks/templates/hook.ts.hbs",
    },
  ],
};
