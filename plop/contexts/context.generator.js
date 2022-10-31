const options = ["With hook", "Without hook"];

export default {
  description: "Create React Context",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "What type of context would you like?",
      choices: options,
    },
    {
      type: "input",
      name: "name",
      message: "Context Name: ",
    },
  ],
  actions(data) {
    const actions = [];
    if (!data) return actions;

    actions.push({
      type: "add",
      path: "src/contexts/{{pascalCase name}}/{{pascalCase name}}Context.tsx",
      templateFile: "plop/contexts/templates/context.tsx.hbs",
    });

    if (data.type === "With hook") {
      actions.push({
        type: "add",
        path: "src/contexts/{{pascalCase name}}/use{{pascalCase name}}.ts",
        templateFile: "plop/contexts/templates/hook.ts.hbs",
      });
    }

    return actions;
  },
};

/*
{
  type: "add",
  path: "src/context/{{pascalCase name}}.tsx",
  templateFile: "./templates/context/context.hbs",
},
{
  type: "append",
  path: "src/hooks/index.ts",
  templateFile: "./templates/hooks/index.hbs",
},
{
  type: "add",
  path: "src/hooks/use{{pascalCase name}}/index.ts",
  templateFile: "./templates/hooks/hook/index.hbs",
},
{
  type: "add",
  path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.ts",
  templateFile: "./templates/hooks/hook/hook.hbs",
},
{
  type: "add",
  path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.test.ts",
  templateFile: "./templates/hooks/hook/hook.test.hbs",
}, */
