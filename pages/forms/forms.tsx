import { FormOptions } from "tinacms";

export const getHomeForm = (mdFile: any) => {
  return {
    id: mdFile.fileName,
    label: mdFile.fileName,
    initialValues: {
      ...mdFile,
      title: "مع دورات اليقين التدريبية مهمتنا هي زيادة المعرفة للجميع",
      innerTitle: "تجربة",
      countDownSct: {
        tagline: "احصل علي دورات مجانية عند التسجيل",
        header: "قم بالتسجيل الآن",
        subtext: `هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال
لوريم إيبسوم`,
      },
      welcomeSct: {
        header: `نرحب بكم مع ...
اليقين للبحث والتطوير`,
      },
    },

    fields: [
      /*
      {
        name: "innerTitle",
        label: "ما هو",
        component: "text",
      },
      */
    ],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getAboutForm = () => {
  const id = "about";
  return {
    id,
    label: id,
    initialValues: {
      title: "من نحن",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getGalleryForm = () => {
  const id = "gallery";
  return {
    id,
    label: id,
    initialValues: {
      title: "معرض الصور",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getPricingForm = () => {
  const id = "pricing";
  return {
    id,
    label: id,
    initialValues: {
      title: "خطط الاسعار",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getFAQForm = () => {
  const id = "faq";
  return {
    id,
    label: id,
    initialValues: {
      title: "الاسئلة المتكررة",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getTeachersForm = () => {
  const id = "teachers";
  return {
    id,
    label: id,
    initialValues: {
      title: " معلمي دورات اليقين",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getContactusForm = () => {
  const id = "contactus";
  return {
    id,
    label: id,
    initialValues: {
      title: "اتصل بنا",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};

export const getNewsForm = () => {
  const id = "news";
  return {
    id,
    label: id,
    initialValues: {
      title: "اخبار دورات اليقين",
    },
    fields: [],
    onSubmit: (formState: any) => {
      console.log(formState);
      return;
    },
  } as FormOptions<any, any>;
};
