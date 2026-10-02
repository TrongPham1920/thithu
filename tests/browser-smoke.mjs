import { chromium } from "playwright";
import assert from "node:assert/strict";
import { it004ReviewExam } from "../src/data/it004-review.ts";
import { it012Exam01 } from "../src/data/it012-exam-01.ts";
import { it005Exam02 } from "../src/data/it005-exam-02.ts";

const bank = [...it004ReviewExam.questions, ...it012Exam01.questions, ...it005Exam02.questions];
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(process.env.APP_TEST_URL || "http://localhost:3000");
  await page.getByRole("heading", { name: "Chọn môn học" }).waitFor();
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(100);
    assert.equal(
      await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
      false,
      `Home overflow at ${width}`,
    );
  }
  await page.screenshot({ path: "/private/tmp/practice-desktop-final.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "/private/tmp/practice-home-mobile-final.png", fullPage: true });

  async function complete(count, mistake = false) {
    let firstId;
    for (let i = 0; i < count; i++) {
      const panel = page.locator("[data-question-id]");
      const id = await panel.getAttribute("data-question-id");
      if (!firstId) firstId = id;
      const q = bank.find((question) => question.id === id);
      assert.ok(q, id);
      for (const [index, part] of (q.parts || [q]).entries()) {
        const option = part.options.find((item) =>
          mistake && i === 0 && index === 0
            ? item.id !== part.correctOptionId
            : item.id === part.correctOptionId,
        );
        const scope = q.parts ? page.locator(`[data-part-id="${part.id}"]`) : panel;
        if (q.kind === "matching")
          await scope.getByRole("combobox").selectOption({ label: option.text });
        else
          await scope
            .getByRole("button")
            .filter({ has: page.getByText(option.text, { exact: true }) })
            .click();
      }
      assert.equal(
        await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),
        false,
        `Question overflow: ${id}`,
      );
      await page.locator(".question-actions").getByRole("button").last().click();
    }
    return firstId;
  }

  await page
    .locator(".exam-entry")
    .filter({ hasText: "Đề số 2" })
    .getByRole("button", { name: "Bắt đầu làm bài" })
    .click();
  const wrongId = await complete(30, true);
  await page.getByRole("button", { name: "Luyện lại 1 câu sai", exact: true }).click();
  assert.equal(await page.locator("[data-question-id]").getAttribute("data-question-id"), wrongId);
  await complete(1);
  await page.getByText("10.00", { exact: false }).first().waitFor();
  const progress = await page.evaluate(() => localStorage.getItem("thi-thu:topic-progress:v1"));
  assert.ok(progress);
  await page.reload();
  await page.getByRole("heading", { name: "Chọn môn học" }).waitFor();
  assert.equal(
    await page.evaluate(() => localStorage.getItem("thi-thu:topic-progress:v1")),
    progress,
  );

  for (const name of ["Cơ sở dữ liệu", "Cấu trúc máy tính"]) {
    await page
      .locator(".subject-tabs")
      .getByRole("button", { name: new RegExp(name) })
      .click();
    await page.getByRole("button", { name: "Luyện 30 câu" }).click();
    await complete(30);
    await page.getByText("10.00", { exact: false }).first().waitFor();
    await page.getByRole("button", { name: "Chọn môn hoặc đề khác" }).click();
  }
  await page.getByRole("button", { name: "Chuyển giao diện sáng/tối" }).click();
  await page.screenshot({ path: "/private/tmp/practice-light-mobile-final.png", fullPage: true });
  assert.deepEqual(errors, []);
  console.log(
    "Passed: 3 subjects, mobile/desktop, multipart grading, wrong-only retry, stored progress, adaptive exams and themes.",
  );
} finally {
  await browser.close();
}
