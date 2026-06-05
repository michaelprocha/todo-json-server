/// <reference types="node" />

import { test, expect } from "@playwright/test";
import { writeFile } from "node:fs/promises";

const waitFunction = async (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

test.describe("home page", () => {
  test.describe.configure({ mode: "serial" });

  test.beforeEach(async ({ page }) => {
    await writeFile(
      "./mock/db.json",
      JSON.stringify({
        tasks: [],
        $schema: "./node_modules/json-server/schema.json",
      }),
      {
        flag: "w",
      },
    );

    await waitFunction(500);

    await page.goto("http://localhost:5173/");
  });

  test("check URL", async ({ page }) => {
    await expect(page).toHaveURL("http://localhost:5173/");
  });

  test("check the title", async ({ page }) => {
    await expect(page).toHaveTitle("todo-json-server");
  });

  test("check the heding", async ({ page }) => {
    const hedingH1 = page.getByRole("heading", {
      name: "Gerenciador de Produtividade",
      level: 1,
    });
    await expect(hedingH1).toBeVisible();
  });

  test("add new task", async ({ page }) => {
    const textTask = `Task-${Date.now()}`;

    const input = page.getByRole("textbox");
    await input.fill(textTask);

    const addButton = page.getByRole("button", { name: "Adicionar tarefa" });
    await addButton.click();

    const nameTask = page.getByText(textTask);
    await expect(nameTask).toBeVisible();
  });

  test("Deleting task", async ({ page }) => {
    const textTask = `Task-${Date.now()}`;

    const input = page.getByRole("textbox");
    await input.fill(textTask);

    const addButton = page.getByRole("button", { name: "Adicionar tarefa" });
    await addButton.click();

    const nameTask = page.getByText(textTask);
    await expect(nameTask).toBeVisible();

    await expect(page.getByText("Carregando...")).not.toBeVisible();

    const xIcon = page.getByRole("img", { name: "Deletar tarefa" });
    await xIcon.click();

    await expect(nameTask).not.toBeVisible();
  });
});
