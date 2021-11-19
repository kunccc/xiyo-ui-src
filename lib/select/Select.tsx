import * as React from 'react';
import {useState, useEffect} from 'react';
import Icon from '../icon/Icon';
import './select.scss';

interface Props {
  options: { value: boolean | string | number | object, label: string, disabled?: boolean }[];
  onChange?: (value: boolean | string | number | object | undefined) => void;
  size?: 'small' | 'normal' | 'large';
  disabled?: boolean;
  defaultValue?: string;
  clearable?: boolean;
  noDataText?: string;
}

const Select: React.FC<Props> = props => {
  const [label, setLabel] = useState('请选择');
  const [visible, setVisible] = useState(false);
  const [clearVisible, setClearVisible] = useState(false);
  useEffect(() => {
    if (props.defaultValue === undefined) return;
    props.options.forEach(option => {
      if (props.defaultValue === option.label) {
        setLabel(props.defaultValue);
        props.onChange?.(option.value);
      }
    });
  }, []);
  useEffect(() => {
    if (!props.clearable) return;
    props.options.forEach(option => {
      if (label === option.label) setClearVisible(true);
    });
  }, [label]);
  useEffect(() => {
    if (!props.noDataText) return;
    let hasData;
    props.options.forEach(option => {
      if (label === option.label) hasData = true;
    });
    if (!hasData) setLabel(props.noDataText);
  }, [label]);
  useEffect(() => {
    window.onclick = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).classList?.contains('select-focus') ||
        ((e.target as HTMLElement).parentNode as HTMLElement).classList?.contains('select-focus') ||
        (((e.target as HTMLElement).parentNode as HTMLElement).parentNode as HTMLElement).classList?.contains('select-focus')
      ) return;
      setVisible(false);
    };
  }, []);
  const onSelectClick = () => {
    if (props.disabled) return;
    setTimeout(() => setVisible(v => !v));
  };
  const onLiClick = (e: React.MouseEvent, option: { value: boolean | string | number | object, label: string, disabled?: boolean }) => {
    const {value, label, disabled} = option;
    if (disabled) {
      e.stopPropagation();
      return;
    }
    props.onChange?.(value);
    setLabel(label);
  };
  const clear = (e: React.MouseEvent) => {
    setClearVisible(false);
    setLabel(props.noDataText ? props.noDataText : '请选择');
    props.onChange?.(undefined);
    e.stopPropagation();
  };
  return (
    <div
      className={`xiyo-select ${visible ? 'select-focus' : ''} ${props.size ? props.size : ''} ${props.disabled ? 'disabled' : ''}`.trim()}
      onClick={onSelectClick}>
      <span>{label}</span>
      {clearVisible ? <Icon name="close" onClick={clear}/> :
        <Icon name="linearArrow" className={visible ? 'visible' : ''.trim()}/>}
      <ul className={`xiyo-select-dropdown ${visible ? 'visible' : ''}`.trim()}>
        {props.options.map(option => (
          <li key={option.label} onClick={(e: React.MouseEvent) => onLiClick(e, option)}
              className={`${label === option.label ? 'selected' : ''} ${option.disabled ? 'disabled' : ''}`.trim()}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Select;