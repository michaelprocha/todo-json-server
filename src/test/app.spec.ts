import { test, expect } from "@playwright/test";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
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
    const input = page.getByRole("textbox");
    await input.fill("task123");
    const addButton = page.getByRole("button");
    await addButton.click();
    await expect(page.getByText("task123")).toBeVisible();
  });
});
