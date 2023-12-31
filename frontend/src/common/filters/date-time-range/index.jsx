import { useState } from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateTimeRangeSelector = () => {
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div>
      <DateTimeRangePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DateTimeRangeSelector;