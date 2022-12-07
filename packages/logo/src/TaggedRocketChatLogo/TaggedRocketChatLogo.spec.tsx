import ReactDOM from 'react-dom';

import TaggedQuickSalesLogo from './TaggedQuickSalesLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaggedQuickSalesLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
