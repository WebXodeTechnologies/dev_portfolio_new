import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test("should display contact form and validate required inputs", async ({ page }) => {
    await page.goto("/hire-me");
    await page.click("button[type='submit']");
    await expect(page.locator("text=Name is required.")).toBeVisible();
    await expect(page.locator("text=Valid email address is required.")).toBeVisible();
  });
});
