import CloseIcon from "@mui/icons-material/Close";
import { ModalButtonClose, SectionModal } from "./styledModal";

interface ModalContentProps {
  onClose: () => void;
  text: string;
}

export const ModalContent = (props: ModalContentProps) => {
  return (
    <SectionModal>
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/8b32MdGKp_4?si=K8HGO7yWjXQibEZw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <ModalButtonClose onClick={props.onClose} title="закрыть">
        <CloseIcon />
      </ModalButtonClose>
    </SectionModal>
  );
};
