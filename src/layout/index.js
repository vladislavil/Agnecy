import './base';
import './grid';
import './wrapper';
import './content';
import initHeader from './header';
import './footer';

export default () => {
  console.log('init layout');
  initHeader();
};
