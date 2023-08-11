import { FiAlertCircle } from 'react-icons/fi';
import { error } from 'data';
import { motion } from 'framer-motion';
import './ErrorMessage.scss';

interface ErrorMessageProps {
  message?: string;
}

function ErrorMessage({ message = error.unknown }: ErrorMessageProps) {
  return (
    <motion.p
      className="error-message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.2, delay: 0.5 }}
    >
      <FiAlertCircle className="error-message__icon"/>
      <span className="error-message__text">
        {message ? message : error.unknown}
      </span>
    </motion.p>
  );
}

export default ErrorMessage;
