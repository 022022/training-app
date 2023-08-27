import FullScreenButton from '../FullScreen/FullScreenButton';
import SettingsModal from '../SettingsModal/SettingsModal';

export default function SettingsPanel(){
  return <div className='flex justify-end items-center gap-4'>
    <SettingsModal/>
    <FullScreenButton/>
  </div>
}