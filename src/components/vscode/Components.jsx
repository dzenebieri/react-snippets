import ReactComponents from './ReactComponents';
import ReactNativeComponents from './ReactNativeComponents';
import Others from './Others';

const Components = () => {
  return (
    <div className='mx-[48px] max-w-[320px] text-xs md:text-sm md:max-w-none md:flex md:flex-col md:items-center md:m-0'>
      <ReactComponents />
      <ReactNativeComponents />
      <Others />
    </div>
  );
};

export default Components;
