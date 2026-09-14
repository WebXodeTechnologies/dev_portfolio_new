import { test, expect } from "@playwright/test";

test.describe("Responsive Design", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should display mobile menu button on small viewports", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("button[aria-label='Open menu']")).toBeVisible();
  });
});
