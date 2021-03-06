const AdminDataForm = {
  accountInput: {
    item: [
      {
        id: 0,
        name: "username",
        title: "이름",
        placeholder: "이름",
        itemWidth: 120,
      },
      {
        id: 1,
        name: "email",
        title: "아이디",
        placeholder: "아이디",
        itemWidth: 240,
      },
      {
        id: 2,
        name: "password",
        title: "비밀번호",
        placeholder: "비밀번호",
        itemWidth: 240,
      },
    ],
    account: [
      { id: 0, userName: "김명성", email: "sstaar91", password: "2%wpaae" },
      { id: 1, userName: "고유영", email: "goyuyoung", password: "2%wpaae" },
    ],
  },
  notificationInput: {
    item: [
      {
        id: 0,
        title: "제목",
        name: "position_title",
        placeholder: "제목",
        itemWidth: 930,
      },
    ],
  },
  NotificationUploadDropdown: {
    data: [
      {
        id: 0,
        title: "경력 ",
        name: "career_type",
        itemWidth: 124,
        list: ["신입", "경력", "인턴"],
      },
      {
        id: 1,
        title: "형태",
        name: "work_type",
        itemWidth: 148,
        list: ["정규직", "계약직"],
      },
      { id: 2, title: "마감일", name: "deadline", itemWidth: 180, list: [] },
      {
        id: 3,
        title: "직종",
        name: "position",
        itemWidth: 192,
        list: [
          "개발",
          "디자인",
          "운영",
          "마케팅",
          "영업",
          "기획",
          "크리에이터",
        ],
      },
    ],
  },
};

export default AdminDataForm;
