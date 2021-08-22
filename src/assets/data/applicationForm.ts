const applicationForm = {
  basicInfo: {
    isRequired: true,
    isListed: false,
    hasCheckBox: false,
    title: "기본 정보",
    desc: "지원자님의 개인정보는 채용 담당자만 볼 수 있습니다.",
    item: [
      {
        name: "userName",
        type: "text",
        placeholder: "이름을 입력해주세요",
        title: "이름",
        itemWidth: 18.367,
      },
      {
        name: "email",
        type: "email",
        placeholder: "이메일을 입력해주세요",
        title: "이메일",
        itemWidth: 46.53,
      },
      {
        name: "phoneNumber",
        type: "tel",
        placeholder: "전화번호를 입력해주세요",
        title: "전화번호",
        itemWidth: 31.836,
      },
    ],
  },
  career: {
    isRequired: true,
    isListed: true,
    hasCheckBox: true,
    title: "경력사항",
    desc: "아르바이트 및 증빙이 불가능한 경력만 있을 경우 [경력없음]을 체크해주세요.",
    item: [
      {
        name: "companyName",
        type: "text",
        placeholder: "회사명을 입력해주세요.",
        title: "회사명",
        itemWidth: 30,
      },
      {
        name: "rank",
        type: "text",
        placeholder: "직급을 입력해주세요.",
        title: "직급",
        itemWidth: 25,
      },
      {
        name: "joinDate",
        type: "date",
        placeholder: "입사일",
        title: "입사",
        itemWidth: 20,
      },
      {
        name: "leavingDate",
        type: "date",
        placeholder: "퇴사일",
        title: "퇴사",
        itemWidth: 20,
      },
      {
        name: "businessTask",
        type: "text",
        placeholder: "담당업무를 입력해주세요.",
        title: "담당업무",
        itemWidth: 100,
      },
    ],
  },
  project: {
    isRequired: true,
    isListed: true,
    hasCheckBox: true,
    title: "프로젝트 수행이력",
    desc: "프로젝트 수행이력이 없는 지원자는 [수행이력 없음]을 체크해주세요.",
    item: [
      {
        name: "projectName",
        type: "text",
        placeholder: "프로젝트명을 입력해주세요.",
        title: "프로젝트명",
        itemWidth: 100,
      },
      {
        name: "association",
        type: "text",
        placeholder: "소속기관명을 입력해주세요.",
        title: "소속기관명",
        itemWidth: 57,
      },
      {
        name: "startDate",
        type: "date",
        placeholder: "시작일",
        title: "시작",
        itemWidth: 20,
      },
      {
        name: "endDate",
        type: "date",
        placeholder: "종료일",
        title: "종료",
        itemWidth: 20,
      },
      {
        name: "mainStack",
        type: "text",
        placeholder: "주 사용 기술을 입력해주세요.",
        title: "주 사용 기술",
        itemWidth: 100,
      },
      {
        name: "projectInfo",
        type: "text",
        placeholder: "프로젝트 내용을 입력해주세요.",
        title: "프로젝트에 대한 소개와 본인이 수행한 역할을 작성해주세요.",
        itemWidth: 100,
      },
    ],
  },
  introduction: {
    isRequired: false,
    isListed: false,
    hasCheckBox: false,
    title: "자기소개",
    desc: "자신을 솔직하게 과감없이 2000자 내외로 소개해주세요.",
    item: [
      {
        name: "aboutMe",
        type: "textarea",
        placeholder: "자기소개를 해주세요.",
        title: "자기소개",
        itemWidth: 100,
      },
    ],
  },
  portfolio: {
    isRequired: true,
    isListed: false,
    hasCheckBox: false,
    title: "포트폴리오",
    desc: "포트폴리오 파일은 1개만 첨부됩니다. 복수 파일을 올리실 경우 압축하여 올려주세요. 또한 용량이 200MB보다 클 경우 클라우드 공유 URL 링크를 추가해주세요.",
    item: [
      {
        name: "portfolioFile",
        type: "file",
        placeholder: "첨부파일을 업로드해주세요.",
        title: "첨부파일",
        itemWidth: 35.51,
      },
      {
        name: "portfolioUrl",
        type: "url",
        placeholder: "URL을 입력해주세요.",
        title: "URL",
        itemWidth: 62.857,
      },
    ],
  },
  education: {
    isRequired: false,
    isListed: false,
    hasCheckBox: false,
    title: "학력정보",
    desc: "최종적으로 졸업한 학력만 입력해주세요.",
    item: [
      {
        name: "background",
        type: "select",
        placeholder: "최종학력",
        title: "학력",
        options: [
          "고등학교",
          "검정고시",
          "사이버대학",
          "대학교 (2~3년제)",
          "대학교 (4년제 이상)",
          "대학원 (석사)",
          "대학교 (박사)",
        ],
        itemWidth: 18.367,
      },
      {
        name: "schoolName",
        type: "text",
        placeholder: "학교명을 입력해주세요.",
        title: "학교명",
        itemWidth: 33,
      },
      {
        name: "major",
        type: "text",
        placeholder: "전공을 입력해주세요.",
        title: "전공",
        itemWidth: 23.265,
      },
      {
        name: "grade",
        type: "text",
        placeholder: "최종학점을 입력해주세요.",
        title: "학점",
        itemWidth: 20.4,
      },
      {
        name: "enrollDate",
        type: "date",
        placeholder: "입학일을 입력해주세요.",
        title: "입학",
        itemWidth: 37.755,
      },
      {
        name: "graduateDate",
        type: "date",
        placeholder: "졸업일을 입력해주세요.",
        title: "졸업",
        itemWidth: 37.755,
      },
      {
        name: "graduateState",
        type: "select",
        placeholder: "졸업상태",
        title: "졸업상태",
        options: ["졸업", "중태", "휴학", "졸업예정", "재학", "수료"],
        itemWidth: 21.224,
      },
    ],
  },
};

export default applicationForm;
