import React from "react";
import { InlineForm } from "react-tinacms-inline";
import { useForm, usePlugin } from "tinacms";
import VideoTwoAlter from "./VideoTwoAlter";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function VideoComponentWrapper({ title, innerTitle }: any) {
  const onTinaSave = async (formNewState: any) => {
    await sleep(3000);
    console.log(formNewState);
  };

  const [_, form] = useForm({
    initialValues: {
      title,
      innerTitle,
    },
    label: "videoComp",
    id: "videoComp",
    onSubmit: async (newFormState: any) => {
      await onTinaSave(newFormState);
      return;
    },
  });
  usePlugin(form);
  return (
    <>
      <InlineForm form={form}>
        <VideoTwoAlter />
      </InlineForm>
    </>
  );
}
