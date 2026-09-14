import { test, expect } from "@playwright/test";

test.describe("Works Page", () => {
  test("should display selected works grid", async ({ page }) => {
    await page.goto("/works");
    await expect(page.locator("h1")).toContainText("Selected Works");
  });
});
