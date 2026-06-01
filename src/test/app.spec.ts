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
});
