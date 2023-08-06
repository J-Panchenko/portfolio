import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { Tooltip as ChakraTooltip } from '@chakra-ui/react';

interface TooltipProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  label: string;
  children: ReactNode;
  small?: boolean;
}

function Tooltip({ isOpen, setIsOpen, label, children, small }: TooltipProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <ChakraTooltip
      isOpen={isOpen}
      label={label}
      color="gray.700"
      backgroundColor="whiteAlpha.800"
      fontSize={small ? 'sm' : 'lg'}
      placement="top"
      textAlign="center"
      whiteSpace="nowrap"
      maxW="3xl"
    >
      {children}
    </ChakraTooltip>
  );
}

export default Tooltip;
