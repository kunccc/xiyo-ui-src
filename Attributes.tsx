import * as React from 'react';

interface Props {
  attributes: { parameter: string; description: string; type: string; options?: string; default?: string }[]
}

const Attributes: React.FC<Props> = props => {
  return (
    <div className="attributes">
      <h3>Attributes</h3>
      <table>
        <thead>
        <tr>
          <th>参数</th>
          <th>描述</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        {props.attributes.map(attribute => (
          <tr key={attribute.parameter}>
            <td>{attribute.parameter}</td>
            <td>{attribute.description}</td>
            <td>{attribute.type}</td>
            <td>{attribute.options || '—'}</td>
            <td>{attribute.default || '—'}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;