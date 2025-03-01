import '../tabbedpane/PortChannelForm.scss';
import { useState } from 'react';


const DiscoveryForm = ({ handleSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    address: '',
    discover_from_config: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value.trim()
    }));
  };

  const handleFormData = () => {
    if (formData.address.trim().length === 0) {
      formData.discover_from_config = true;
    }
    handleSubmit(formData);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleFormData();
    }} className="port-channel-form">
      <div className="form-field">
        <label>Address:</label>

        <input
          type="text" name="address" onChange={handleChange} placeholder='Network Address or Device Ip.'
        />
      </div>
      <div className="form-field">
        <p>If submitted with no address, discovery from server config will be triggered.</p>
        <input type="submit" value="Submit" />
        <button type='button' onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );

};

export default DiscoveryForm;
