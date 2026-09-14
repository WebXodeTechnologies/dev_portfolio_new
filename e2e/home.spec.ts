import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load homepage and display header & hero title", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("Full-Stack Developer");
  });
});
