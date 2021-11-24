import React from 'react';
import './icon.scss';

const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext);
try {importAll((require as any).context('/icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
  name: string
} & React.SVGAttributes<SVGElement>

const Icon: React.FC<Props> = ({name, children, className, ...rest}) => {
  return (
    <svg className={`xiyo-icon ${className ? className : ''}`.trim()} {...rest}>
      <use xlinkHref={'#' + name}/>
    </svg>
  );
};

export default Icon;