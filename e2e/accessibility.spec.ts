import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("should have main landmark", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main")).toBeVisible();
  });
});
