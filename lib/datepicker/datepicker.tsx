import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import Icon from '../icon/Icon';
import './datepicker.scss';

interface Props {
  onChanged?: ({}) => void;
  defaultValue?: Date;
  align?: 'left' | 'center' | 'right';
  todayOptional?: boolean;
  clearable?: boolean;
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
  useEffect(() => {
    if (props.defaultValue === undefined) return;
    const time = props.defaultValue;
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    setCurrentYear(year);
    setCurrentMonth(month);
    setDisplayedDate(`${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`);
  }, []);
  const onTdClick = (item: { year: number, month: number, date: number, day: number }) => {
    setCurrentYear(item.year);
    setCurrentMonth(item.month);
    setDisplayedDate(`${item.year}-${item.month < 10 ? '0' + item.month : item.month}-${item.date < 10 ? '0' + item.date : item.date}`);
    setTimeout(() => setPickerVisible(false), 100);
    props.onChanged?.(item);
  };
  const onTodayClick = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();
    setCurrentYear(year);
    setCurrentMonth(month);
    setDisplayedDate(`${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`);
    setTimeout(() => setPickerVisible(false), 100);
    props.onChanged?.({year, month, date, day});
  };
  const onClearClick = () => {
    setDisplayedDate('');
    setTimeout(() => setPickerVisible(false), 100);
    props.onChanged?.({});
  };
  return (
    <div className="xiyo-datepicker" ref={datepicker}>
      <div className={`xiyo-datepicker-selector ${props.clearable && displayedDate ? 'clearable' : ''}`}>
        <input className={`xiyo-datepicker-selector-wrapper ${pickerVisible ? 'focus' : ''}`}
               placeholder={`${displayedDate ? displayedDate : '请选择日期'}`} readOnly
               onClick={() => setPickerVisible(v => !v)}/>
        <Icon name="calendar" className="xiyo-icon-calendar" onClick={() => setPickerVisible(v => !v)}/>
        {props.clearable ? <Icon name="close" className="xiyo-icon-close" onClick={onClearClick}/> : null}
      </div>
      <div
        className={`xiyo-datepicker-wrapper ${pickerVisible ? 'visible' : ''} ${props.align ? props.align : 'left'}`}>
        <div className="xiyo-datepicker-wrapper-header">
          <button onClick={() => setCurrentYear(v => v - 1)}><span className="last-year-btn"/></button>
          <button onClick={() => setCurrentMonth(v => v - 1)}><span className="last-month-btn"/></button>
          {currentYear}年{currentMonth}月
          <button onClick={() => setCurrentMonth(v => v + 1)}><span className="next-month-btn"/></button>
          <button onClick={() => setCurrentYear(v => v + 1)}><span className="next-year-btn"/></button>
        </div>
        <table className={`xiyo-datepicker-wrapper-body ${props.todayOptional ? 'hasFooter' : ''}`}>
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
                    className={`${item.month !== currentMonth ? 'faded' : ''} ${displayedDate === `${item.year}-${item.month < 10 ? '0' + item.month : item.month}-${item.date < 10 ? '0' + item.date : item.date}` ? 'selected' : ''}`}>
                  <span>{item.date}</span></td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
        {props.todayOptional ?
          <button className="xiyo-datepicker-wrapper-footer" onClick={onTodayClick}>今天</button> : null}
      </div>
    </div>
  );
};

export default Datepicker;