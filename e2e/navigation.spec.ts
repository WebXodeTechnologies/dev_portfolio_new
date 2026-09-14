import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to works page via header link", async ({ page }) => {
    await page.goto("/");
    await page.click("text=Works");
    await expect(page).toHaveURL("/works");
    await expect(page.locator("h1")).toContainText("Selected Works");
  });
});
