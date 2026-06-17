# Web Regression Suite

개인 포트폴리오 웹사이트를 대상으로 한 Playwright 기반 웹 회귀 테스트 자동화 프로젝트입니다.

## 테스트 대상

- 배포 사이트: https://dlate-1201.github.io/
- 테스트 목적: 웹사이트 수정 후 주요 기능과 링크가 정상적으로 유지되는지 자동 검증

## 사용 기술

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## 테스트 범위

현재 자동화 테스트는 다음 항목을 검증합니다.

| 구분 | 검증 내용 |
|---|---|
| 페이지 로딩 | `nav`, `main`, 주요 heading 표시 여부 |
| Projects 섹션 | QA 테스트 리포트 프로젝트 카드 표시 여부 |
| 리포트 링크 | `qa-test-report.md` 링크 연결 여부 |
| Contact 섹션 | Gmail, GitHub, LinkedIn 링크 표시 여부 |
| 모바일 화면 | 모바일 viewport에서 주요 영역 표시 여부 |
| 브라우저 | Chromium, Firefox, WebKit 기준 실행 |

## 실행 방법

의존성 설치:

```bash
npm install

테스트 실행:

npx playwright test

HTML 리포트 확인:

npx playwright show-report

UI 모드 실행:

npx playwright test --ui

## 테스트 결과

2026-06-18 기준, 총 12개 테스트가 통과했습니다.

12 passed

## 프로젝트 의의

이 프로젝트는 단순한 수동 확인이 아니라, 배포된 웹사이트를 대상으로 주요 기능과 링크가 유지되는지 반복 실행 가능한 방식으로 검증하는 것을 목표로 합니다.

또한 GitHub Actions를 통해 향후 코드 변경 시 자동 테스트 실행 구조로 확장할 수 있습니다.
