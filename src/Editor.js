import FilerobotImageEditor, {
  TABS,
  TOOLS
} from "react-filerobot-image-editor";

const Editor = ({ imgSrc, onSave }) => {
  return (
    <FilerobotImageEditor
      source={imgSrc}
      onSave={(editedImageObject, designState) =>
        onSave(editedImageObject, editedImageObject)
      }
      annotationsCommon={{
        fill: "#ff0000"
      }}
      defaultSavedImageQuality={1}
      Text={{ text: "Filerobot..." }}
      Rotate={{ angle: 90, componentType: "slider" }}
      tabsIds={[
        TABS.ADJUST,
        TABS.ANNOTATE,
        TABS.WATERMARK,
        TABS.FINETUNE,
        TABS.RESIZE,
        TABS.FILTERS
      ]}
      defaultTabId={TABS.ANNOTATE} // or 'Annotate'
      defaultToolId={TOOLS.TEXT} // or 'Text'
    />
  );
};
export default Editor;
