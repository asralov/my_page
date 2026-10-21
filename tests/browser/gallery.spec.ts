import { test, expect } from "@playwright/test";

for (const width of [375, 430, 768, 1024, 1440]) {
  test(`dark layout and progressive gallery at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("/");
    const initial = width < 768 ? 3 : 5;
    await expect(page.locator("[data-project]")).toHaveCount(initial);
    await expect(page.getByRole("status").first()).toHaveText(
      `Showing ${initial} of 12 projects`,
    );
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator("body")
        .evaluate((el) => getComputedStyle(el).backgroundColor),
    ).toBe("rgb(11, 16, 32)");
    for (const img of await page.locator("main img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveJSProperty("complete", true);
      expect(
        await img.evaluate((el: HTMLImageElement) => el.naturalWidth),
      ).toBeGreaterThan(0);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({
      path: `docs/v3/after-${width}.png`,
      fullPage: true,
    });
    await page.getByRole("button", { name: "View more projects" }).click();
    await expect(page.locator("[data-project]")).toHaveCount(initial + 2);
    let count = initial + 2;
    while (count < 12) {
      await page.getByRole("button", { name: "View more projects" }).click();
      count = Math.min(count + 2, 12);
      await expect(page.locator("[data-project]")).toHaveCount(count);
    }
    await expect(
      page.getByRole("button", { name: "View more projects" }),
    ).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Show less" })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("[data-project]")).toHaveCount(initial);
    await expect(
      page.getByRole("heading", { name: /The project collection/ }),
    ).toBeFocused();
    expect(errors).toEqual([]);
  });
}
test("filters reset expansion and count only matching projects plus Storm", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto("/");
  await page.getByRole("button", { name: "View more projects" }).click();
  await page.getByRole("button", { name: "Games", exact: true }).click();
  await expect(page.locator("[data-project]")).toHaveCount(3);
  await expect(page.getByRole("status").first()).toHaveText(
    "Showing 3 of 7 projects · including featured Storm",
  );
  await page.getByRole("button", { name: "View more projects" }).click();
  await expect(page.locator("[data-project]")).toHaveCount(5);
  await page.getByRole("button", { name: "View more projects" }).click();
  await expect(page.locator("[data-project]")).toHaveCount(7);
  await expect(page.locator("[data-project]").first()).toHaveAttribute(
    "data-project",
    "storm",
  );
  await page.getByRole("button", { name: "All work", exact: true }).click();
  await expect(page.locator("[data-project]")).toHaveCount(3);
});
test("mobile menu, native navigation, Escape and reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: /Menu/ }).click();
  await expect(page.getByRole("button", { name: /Close/ })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: /Menu/ })).toBeFocused();
  await page.getByRole("button", { name: /Menu/ }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("button", { name: /Menu/ })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  expect(
    await page
      .locator("#projects")
      .evaluate((el) => el.getBoundingClientRect().top),
  ).toBeGreaterThanOrEqual(68);
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
});
test("responsive initial counts and retained expansion on resize", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator("[data-project]")).toHaveCount(5);
  await page.setViewportSize({ width: 375, height: 900 });
  await expect(page.locator("[data-project]")).toHaveCount(3);
  await page.getByRole("button", { name: "View more projects" }).click();
  await expect(page.locator("[data-project]")).toHaveCount(5);
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator("[data-project]")).toHaveCount(7);
});

test('Word Search keeps its Windows download after filtering', async ({page}) => {
  await page.setViewportSize({width:375,height:900});
  await page.goto('/');
  await page.getByRole('button',{name:'Games',exact:true}).click();
  const card=page.locator('[data-project="6"]');
  await expect(card).toBeVisible();
  await expect(card.getByRole('link',{name:'Download for Windows (.exe)'})).toHaveAttribute('href','https://github.com/asralov/my_page/releases/download/v1.0.0/Game.exe');
});
