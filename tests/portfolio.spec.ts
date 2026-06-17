import { test, expect } from '@playwright/test';

const BASE_URL = 'https://dlate-1201.github.io/';

test.describe('개인 포트폴리오 웹사이트 회귀 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('홈페이지가 정상 로드되고 주요 영역이 표시된다', async ({ page }) => {
    await expect(page).toHaveURL(BASE_URL);
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();

    await expect(
      page.getByRole('heading', { name: '프로젝트와 GitHub 링크' })
    ).toBeVisible();
  });

  test('Projects 섹션에 QA 테스트 리포트 프로젝트가 표시된다', async ({ page }) => {
  const projectsSection = page.locator('#projects');

  await projectsSection.scrollIntoViewIfNeeded();

  await expect(
    projectsSection.getByRole('heading', {
      name: '개인 포트폴리오 웹사이트 QA 테스트 리포트',
      exact: true,
    })
  ).toBeVisible();

  const reportLink = projectsSection.getByRole('link', {
    name: '리포트 보기',
    exact: true,
  });

  await expect(reportLink).toBeVisible();

  await expect(reportLink).toHaveAttribute(
    'href',
    /QA-TEST-REPORT-1201\/blob\/main\/qa-test-report\.md/
  );
});

  test('Contact 섹션에 Gmail, GitHub, LinkedIn 링크가 표시된다', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();

    await expect(page.getByRole('link', { name: /Gmail/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /GitHub/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /LinkedIn/i })).toBeVisible();
  });

  test('모바일 화면에서도 주요 영역이 표시된다', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(BASE_URL);

    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();

    await page.locator('#projects').scrollIntoViewIfNeeded();

    await expect(
      page.getByRole('heading', { name: '프로젝트와 GitHub 링크' })
    ).toBeVisible();
  });
});