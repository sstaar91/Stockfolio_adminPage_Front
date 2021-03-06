# Stockfolio Admin Page

## Reference

- 해당 프로젝트에서는 [스톡폴리오](https://stockfolio.ai/) 관리자 페이지 제작에 참여했습니다.
- 오픈소스로 만들었지만 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.

## Stockfolio Project Family

- F.E<br>
  [김명성](https://github.com/sstaar91)
  [문주영](https://github.com/moonjuyoung1)
  <br>
- B.E<br>
  [고유영](https://github.com/lunayyko)
  [김도담](https://github.com/damdream)
  <br>

## What is Stockfolio Project?

- 스톡영상 제공 및 영상 제작 사업을 진행하는 [스톡폴리오](https://stockfolio.ai/) 와의 기업협업 프로젝트입니다.
- 이번 프로젝트에서는 관리자 페이지를 작업해, 스톡폴리오 채용 공고에 지원한 지원자를 확인하거나
  채용 공고를 직접 작성하거나, 관리자를 관리할 수 있는 기능을 담았습니다.

### 개발 인원 및 기간

- 개발기간 : 2021/10/06 ~ 2021/10/30
- 개발 인원 : 프론트엔드 2명, 백엔드 2명

## 적용 기술 및 구현 기능

### 적용 기술

 TypeScript, React.js framwork, Mobx<br>

### 직접 구현 기능

#### 지원자 상세 페이지

- 지원자 상세 페이지 레이아웃 작업
- 지원자 별 comment 추가, 삭제, 수정 기능 구현
- comment 평가항목 별 배경색 변경 기능 구현
- 유저 토큰에 따라 comment 수정하기 버튼 노출 기능

#### 공고등록 페이지

- 공고등록 페이지 레이아웃 작업
- 위지윅 웹 에디터 (CKEditor5 사용)로 공고 업로드 기능 구현
- iframe 태그 사용으로 웹에디터로 올린 공고가 페이지에 보일 수 있도록 구현

#### 어드민 페이지

- 어드민 페이지 레이아웃 작업
- 최고 관리자일 경우에만 관리자 계정 추가, 삭제, 수정 할 수 있도록 구현

* 아래부터는 해당 페이지에 적용된 기능입니다.

#### 로그인

- 등록된 최고 관리자 토큰 확인 후, 구분할 수 있도록 이름 옆에 이모지 생성

#### 메인 페이지

- 새로운 공고, 새로운 지원자, 오늘 마감 공고를 한눈에 확인할 수 있는 페이지 제작
- 관리자가 읽지 않은 지원자의 이름 옆에 new 라는 아이콘 생성
- 읽고 나면 해당 new 버튼 사라지는 기능

#### 공고 상세 페이지

- 해당 공고에 지원한 지원자 확인 기능

<br>
