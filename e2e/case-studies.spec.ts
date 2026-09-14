import { test, expect } from "@playwright/test";

test.describe("Case Studies", () => {
  test("should navigate to case study detail page", async ({ page }) => {
    await page.goto("/case-studies");
    await page.click("text=Cloud Infrastructure Dashboard");
    await expect(page).toHaveURL("/case-studies/cloud-dashboard");
  });
});
