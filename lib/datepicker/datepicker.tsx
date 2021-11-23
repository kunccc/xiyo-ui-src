import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Icon from '../icon/Icon';
import './datepicker.scss';

interface Props {
  onChanged?: ({}) => void;
}

const Datepicker: React.FC<Props> = props => {
  const datepicker = useRef(null);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [displayedDate, setDisplayedDate] = useState('');
  const [data, setData] = useState<{ year: number, month: number, date: number, day: number }[][]>([]);
  useEffect(() => {
    if (currentMonth < 1) {
      setCurrentMonth(12);
      setCurrentYear(v => v - 1);
    } else if (currentMonth > 12) {
      setCurrentMonth(1);
      setCurrentYear(v => v + 1);
    }
  }, [currentMonth]);
  useEffect(() => {
    const firstDateDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth, 0).getDate();
    const lastMonthLastDate = new Date(currentYear, currentMonth - 1, 0).getDate();
    let result: { year: number, month: number, date: number, day: number }[][] = [];
    for (let i = 0; i < 6 * 7; i++) {
      let year = currentYear;
      let month = currentMonth;
      let day = i % 7;
      let date;
      if (i < firstDateDay) {
        date = lastMonthLastDate - (firstDateDay - i - 1);
        month -= 1;
        if (month < 1) {
          month = 12;
          year -= 1;
        }
      } else {
        date = i - firstDateDay + 1;
        if (date > lastDate) {
          date -= lastDate;
          month += 1;
          if (month > 12) {
            month = 1;
            year += 1;
          }
        }
      }
      if (day === 0) result.push([]);
      result[result.length - 1].push({year, month, date, day});
    }
    setData(result);
  }, [currentYear, currentMonth]);
  useEffect(() => {
    let listener = (e: MouseEvent) => {
      if ((datepicker.current! as Node).contains(e.target as HTMLElement)) return;
      setPickerVisible(false);
    };
    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, []);
  const onTdClick = (item: { year: number, month: number, date: number, day: number }) => {
    setDisplayedDate(`${item.year}-${item.month}-${item.date < 10 ? '0' + item.date : item.date}`);
    setCurrentYear(item.year);
    setCurrentMonth(item.month);
    props.onChanged?.(item);
    setTimeout(() => setPickerVisible(false), 100);
  };
  return (
    <div className="xiyo-datepicker" ref={datepicker}>
      <input className={`xiyo-datepicker-selector ${pickerVisible ? 'focus' : ''}`}
             placeholder={`${displayedDate ? displayedDate : '请选择日期'}`} readOnly
             onClick={() => setPickerVisible(v => !v)}/>
      <Icon name="calendar" onClick={() => setPickerVisible(v => !v)}/>
      <div className={`xiyo-datepicker-wrapper ${pickerVisible ? 'visible' : ''}`}>
        <div className="xiyo-datepicker-wrapper-header">
          <button onClick={() => setCurrentMonth(v => v - 1)}>&lt;</button>
          {currentYear}年{currentMonth}月
          <button onClick={() => setCurrentMonth(v => v + 1)}>&gt;</button>
        </div>
        <table className="xiyo-datepicker-wrapper-body">
          <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
          </thead>
          <tbody>
          {data.map((week, index) => (
            <tr key={index}>
              {week.map(item => (
                <td key={item.date} onClick={() => onTdClick(item)}
                    className={`${item.month !== currentMonth ? 'faded' : ''} ${displayedDate === `${item.year}-${item.month}-${item.date < 10 ? '0' + item.date : item.date}` ? 'selected' : ''}`}>
                  <span>{item.date}</span></td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Datepicker;