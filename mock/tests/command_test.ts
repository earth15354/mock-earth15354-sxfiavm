import { test, expect } from "@playwright/test";

// Test Plan

/**
 * Test Empty Command Input, should add to history but not to file
 */
test("Submit with an empty command", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByRole("button").click();
  await expect(page.locator("text=Command input")).toHaveText("");
});

/**
 * Testing:
 * * Viewing & Searching before loading
 * * Invalid command
 */
test("View & search before load", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Test view before load
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: No data loaded to display.").first()
  ).toBeVisible();

  //Test search before load
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search name bob");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: No data loaded to search.").first()
  ).toBeVisible();

  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("inv");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("Output: invalid command").first()).toBeVisible();
});

/**
 * Test Load Related Calls
 */
test("Invalid load related call", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // No Filepath after load
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: No filepath provided").first()
  ).toBeVisible();

  // Invalid Filepath after load
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file invalid_path");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: File at invalid_path not found").first()
  ).toBeVisible();

  // Valid load call
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/large_csv.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page
      .getByText("Output: Successfully loaded file at ./data/large_csv.csv")
      .first()
  ).toBeVisible();
});

/**
 * Test Search Options
 */
test("Search related calls", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Load Data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/large_csv.csv");
  await page.getByRole("button", { name: "Submit" }).click();

  // Search with no arguments
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page
      .getByText(
        "Output: Invalid search command. Please enter in the format: search <column> <value>"
      )
      .first()
  ).toBeVisible();

  // Search with extra arguments
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search Type Red extra");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page
      .getByText(
        "Output: Invalid search command. Please enter in the format: search <column> <value>"
      )
      .first()
  ).toBeVisible();

  // Search element in CSV with Column
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search White");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("[[RI,White,$1,058.47,395773.6521, $1.00,75%]]").first()
  ).toBeVisible();

  // Search element in CSV without Columns
  await page.getByLabel("Command input").fill("search White");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("[[RI,White,$1,058.47,395773.6521, $1.00,75%]]").first()
  ).toBeVisible();

  // Search element not in CSV with column
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search Type Red");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: Cannot find term you are searching for").first()
  ).toBeVisible();

  // Search element not in CSV without column
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search Red");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: Cannot find term you are searching for").first()
  ).toBeVisible();
});

/**
 * Test View Related Calls
 *
 */
test("View related calls", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Load Data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/one.csv");
  await page.getByRole("button", { name: "Submit" }).click();

  // Check view data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Check view with extra arguments (fails)
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view extra arguments");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText(
      "Output: Incorrect View Call. Please call 'view' with no aditional arguments"
    )
  ).toBeVisible();
});

/**
 * Integration Tests
 * * Loading twice, viewing or searching
 * * Loading, viewing, searching
 *
 */
test("Integration Testing", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Consecutive Loads
  // Load Data for the first time
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/large_csv.csv");
  await page.getByRole("button", { name: "Submit" }).click();
  // Load Second data for the second time
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/one.csv");
  await page.getByRole("button", { name: "Submit" }).click();

  // Try to view -> [[one]]
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Try to search something of the first data, wont work
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search White");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: Cannot find term you are searching for").first()
  ).toBeVisible();

  // Try to search something of the second data, will work
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search one");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  ////////////////////////////////////////////////

  // Load, view, search test
  // Load Data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/one.csv");
  await page.getByRole("button", { name: "Submit" }).click();

  // Check view data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Check search data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search one");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();
});

/**
 * Test Empty Command Input, should add to history but not to file
 */
test("Submit with an empty command", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Load Empty File
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/empty_csv.csv");

  // Search empty
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search Type Red");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: Cannot find term you are searching for").first()
  ).toBeVisible();

  // View empty
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search Type Red");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("").first()).toBeVisible();
});

/**
 * Test Mode/Verbose Switching
 */
test("Mode/Verbose Switching", async ({ page }) => {
  await page.goto("http://localhost:8000/");

  // Starts as brief (default)

  // Load Data
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/one.csv");
  await page.getByRole("button", { name: "Submit" }).click();

  // View
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Search
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search one");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Switch to verbose -> can still access loaded file
  await page.getByRole("button", { name: "Mode: Brief" }).click();

  // View
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("view");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Search
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search one");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.getByText("[[one]]").first()).toBeVisible();

  // Switch brief
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("load_file ./data/empty.csv");
  await page.getByRole("button", { name: "Submit" }).click();

  // Search
  await page.getByLabel("Command input").click();
  await page.getByLabel("Command input").fill("search column no"); //empty CSV
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByText("Output: Cannot find term you are searching for").first()
  ).toBeVisible();
});
