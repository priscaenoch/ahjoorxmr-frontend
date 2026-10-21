import { test, expect } from "@playwright/test";

test.describe("critical flows", () => {
  test("landing page renders", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByTestId("landing-hero")).toBeVisible();
  });

  test("navigates to dashboard", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav-dashboard").click();
    await expect(page).toHaveURL(/\/dashboard/);
    await expect(page.getByTestId("dashboard-root")).toBeVisible();
  });

  test("opens join circle modal", async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByTestId("join-circle-trigger").click();
    await expect(page.getByTestId("join-circle-modal")).toBeVisible();
  });

  test("shows contribution confirmation modal", async ({ page }) => {
    await page.goto("/dashboard");
    await page.getByTestId("contribute-trigger").click();
    await expect(page.getByTestId("contribution-confirm-modal")).toBeVisible();
  });
});
