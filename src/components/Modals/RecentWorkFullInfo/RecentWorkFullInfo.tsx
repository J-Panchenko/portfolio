import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { CustomButton } from 'components/Buttons';
import PhotoSlider from 'components/PhotoSlider';
import './RecentWorkFullInfo.scss';

interface RecentWorkFullInfoProps {
  isOpen: boolean;
  onClose: () => void;
  selectedWork: WorkItem;
}

function RecentWorkFullInfo({
  isOpen,
  onClose,
  selectedWork,
}: RecentWorkFullInfoProps) {

  return (
    <Modal
      id="recent-work-full-info"
      isOpen={isOpen}
      onClose={onClose}
      onEsc={onClose}
      motionPreset="scale"
      size="5xl"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent background="whitesmoke" width="fit-content">
        <ModalHeader>
          <h3 className="recent-work-full-info__title">
            {selectedWork.title}
          </h3>
          <p className="recent-work-full-info__subtitle">
            {selectedWork.subtitle}
          </p>
        </ModalHeader>
        <ModalCloseButton />
        <div className="recent-work-full-info__container">
          <PhotoSlider photos={selectedWork.images} full />
          <div className="recent-work-full-info__info">
            <ul className="recent-work-full-info__info-tags">
              {selectedWork.tags.map((tag: string) => (
                <li key={tag} className="recent-work-full-info__info-tag">
                  {tag}
                </li>))}
            </ul>
            <p className="recent-work-full-info__info-duties">
              {selectedWork.myDuties}
            </p>
            <div className="recent-work-full-info__info-links">
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

export default RecentWorkFullInfo;
