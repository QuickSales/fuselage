import ReactDOM from 'react-dom';

import QuickSalesLogo from './QuickSalesLogo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QuickSalesLogo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
