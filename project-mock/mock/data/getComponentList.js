/**
 * @description 生成組件列表
 */

const Mock = require("mockjs");

function getComponentList() {
  return [
    // Info
    {
      fe_id: "fe_1",
      type: "questionInfo", // 組件類型，名稱要一致
      title: "問卷訊息",
      isHidden: false,
      isLocked: false,
      props: { title: "問卷標題", desc: "問卷描述" },
    },
    // Title
    {
      fe_id: "fe_2",
      type: "questionTitle",
      title: "標題",
      isHidden: false,
      isLocked: false,
      props: { text: "個人信息", level: 1, isCenter: false },
    },
    // Input
    {
      fe_id: "fe_3",
      type: "questionInput",
      title: "輸入框1",
      isHidden: false,
      isLocked: false,
      props: { title: "您的姓名", placeholder: "請輸入姓名..." },
    },
    // Input
    {
      fe_id: "fe_4",
      type: "questionInput",
      title: "輸入框2",
      isHidden: false,
      isLocked: false,
      props: { title: "您的電話", placeholder: "請輸入電話..." },
    },
    // Textarea
    {
      fe_id: "fe_5",
      type: "questionTextarea",
      title: "多行輸入",
      isHidden: false,
      isLocked: false,
      props: { title: "您的愛好", placeholder: "請輸入愛好..." },
    },
    // Paragraph
    {
      fe_id: "fe_6",
      type: "questionParagraph",
      title: "段落",
      isHidden: false,
      isLocked: false,
      props: { text: "我是段落1\n我是段落2", isCenter: false },
    },
    // Radio
    {
      fe_id: "fe_7",
      type: "questionRadio",
      title: "單選",
      isHidden: false,
      isLocked: false,
      props: {
        title: "單選標題",
        isVertical: false,
        options: [
          { value: "item1", text: "選項1" },
          { value: "item2", text: "選項2" },
          { value: "item3", text: "選項3" },
        ],
        value: "",
      },
    },
    // Checkbox
    {
      fe_id: "fe_8",
      type: "questionCheckbox",
      title: "多選",
      isHidden: false,
      isLocked: false,
      props: {
        title: "多選標題",
        isVertical: false,
        list: [
          { value: "item1", text: "選項1", checked: true },
          { value: "item2", text: "選項2", checked: false },
          { value: "item3", text: "選項3", checked: false },
        ],
      },
    },
  ];
}

module.exports = getComponentList;
