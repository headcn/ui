import { Command } from "commander";

export const build = new Command()
  .name("build")
  .description("build components for headcn registry.")
  .action(async () => {
    console.log(process.cwd());
  });
