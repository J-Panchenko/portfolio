import { CustomButton, PhotoSlider } from 'components';
import {
  Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,
} from '@chakra-ui/react';
import { useScreenDimensions } from 'hooks';
import './RecentWorkModal.scss';

interface RecentWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedWork: WorkItem;
}

function RecentWorkModal({
  isOpen,
  onClose,
  selectedWork,
}: RecentWorkModalProps) {
  const { screenWidth } = useScreenDimensions();

  return (
    <Modal
      id="recent-work-modal"
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
      motionPreset="scale"
      size={screenWidth > 1024 ? '5xl' : 'full'}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent background="whitesmoke" width="fit-content">
        <ModalHeader>
          <h3 className="recent-work-modal__title">
            {selectedWork.title}
          </h3>
          <p className="recent-work-modal__subtitle">
            {selectedWork.subtitle}
          </p>
        </ModalHeader>
        <ModalCloseButton />
        <div className="recent-work-modal__container">
          <PhotoSlider photos={selectedWork.images} full />
          <div className="recent-work-modal__info">
            <ul className="recent-work-modal__info-tags">
              {selectedWork.tags.map((tag: string) => (
                <li key={tag} className="recent-work-modal__info-tag">
                  {tag}
                </li>))}
            </ul>
            <p
              className="recent-work-modal__info-duties"
              dangerouslySetInnerHTML={{ __html: selectedWork.myDuties }}
            />
            <div className="recent-work-modal__info-links">
              {selectedWork.aboutLink && (
                <CustomButton
                  variant="ghost"
                  colorScheme="secondary"
                  text="See More"
                  onClick={() => window.open(selectedWork.aboutLink, '_blank')}
                />
              )}
              {selectedWork.website && (
                <CustomButton
                  text="Visit Website"
                  onClick={() => window.open(selectedWork.website, '_blank')}
                />
              )}
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default RecentWorkModal;
