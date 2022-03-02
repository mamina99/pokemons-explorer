import { Modal, Box } from "@mui/material";
import BaseStates from "./BaseStates";
import GeneralInformation from "./GeneralInformation";
import PokemonNameAndImage from "./PokemonNameAndImage";

interface ModalProps {
    show: boolean;
    close: any;
}
export default function PokemonDetails({show, close }: ModalProps) {
  return (
    <div role="dialog">
      <Modal
        open={show}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-container">
          <PokemonNameAndImage />
          <div className="right-wrapper">
            <GeneralInformation />
            <BaseStates />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
