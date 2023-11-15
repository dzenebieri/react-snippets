import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import CopyIcon from './CopyIcon';
import CopiedIcon from './CopiedIcon';

const Copy = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.value = textToCopy;
      textAreaRef.current.select();
    }
    document.execCommand('copy');
    setIsCopied(true);
    setTimeout(() => { setIsCopied(false); }, 1000);
  };

  return (
    <div className='flex items-center'>
      <button onClick={copyToClipboard}>{isCopied ? <CopiedIcon /> : <CopyIcon />}</button>
      {isCopied && <span className='text-[rgb(35,134,54)]'>Copied to clipboard!</span>}
      <textarea readOnly ref={textAreaRef} style={{ position: 'absolute', left: '-9999px', }} name='clipboard' />
    </div >
  );
};

export default Copy;

Copy.propTypes = { textToCopy: PropTypes.string, };
