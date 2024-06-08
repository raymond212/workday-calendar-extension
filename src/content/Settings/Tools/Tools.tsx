import { useEffect, useState } from 'react';
import './Tools.css';
import '../Settings.css';
import InfoModal from '../../InfoModal/InfoModal';
import QuestionIcon from '../../Icons/QuestionIcon';

interface IProps {
    setInfoPopupMessage: (message: string) => void;
}

const Tools = ({setInfoPopupMessage}:IProps) => {
  const [autofillEnabled, setAutofillEnabled] = useState(false);
  const [autofillSavedScheduleTerm, setAutofillSavedScheduleTerm] = useState<string>('1');

  useEffect(() => {
    // Retrieve the stored state from localStorage
    const storedAutofillSavedScheduleTerm = localStorage.getItem('autofillSavedScheduleTerm');
    setAutofillSavedScheduleTerm(storedAutofillSavedScheduleTerm || '1');
  }, []);

  useEffect(() => {
    // Retrieve the stored state from localStorage
    const storedAutofillEnabled = localStorage.getItem('autofillEnabled') === 'true';
    setAutofillEnabled(storedAutofillEnabled);
  }, []);

  const handleAutofillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isEnabled = e.target.checked;
    setAutofillEnabled(isEnabled);
    // Store the state in localStorage
    localStorage.setItem('autofillEnabled', isEnabled.toString());

    const event = new CustomEvent('autofillToggle', { detail: { enabled: isEnabled } });
    window.dispatchEvent(event);
  };

  const handleAutofillSavedScheduleTerm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const savedScheduleTerm = e.target.value;
    setAutofillSavedScheduleTerm(e.target.value);
    // Store the state in localStorage
    localStorage.setItem('autofillSavedScheduleTerm', savedScheduleTerm);
  };


  return (
    <div>
      <div className="SettingsHeader">Tools</div>
      <hr className='Divider' />
      <div className="ToolsBodyContainer">
        <div className='ToolItem'>
          <div className="ToolContainer">
            <div><input type="checkbox" checked={autofillEnabled} onChange={handleAutofillChange} /></div>                
            <div>Enable Autofill</div>
          </div>
          <div className='ToolItemInfoButton' onClick={() => setInfoPopupMessage("Autofills the menus for \"Find Course Sections\" and \"Saved Schedules\"")}>
            <QuestionIcon size={16} color='black' />
          </div>
        </div>
        <div className='ToolItem'>
          <div className="ToolContainer">
            <select name="term" id="term" value={autofillSavedScheduleTerm} onChange={handleAutofillSavedScheduleTerm}>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <label htmlFor="term">Term for Autofilling Saved Schedules Menu</label>
          </div>
          <div className='ToolItemInfoButton' onClick={() => setInfoPopupMessage("The term to autofill in the \"View My Saved Schedules\" menu")}>
            <QuestionIcon size={16} color='black' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
