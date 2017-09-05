// Webpack only import assets when it is in a js file
import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
  font-family: 'Test-Icon-Font';
  src:  url('/Test-Icon-Font.eot?b6srph');
  src:  url('/Test-Icon-Font.eot?b6srph#iefix') format('embedded-opentype'),
    url('/Test-Icon-Font.ttf?b6srph') format('truetype'),
    url('/Test-Icon-Font.woff?b6srph') format('woff'),
    url('/Test-Icon-Font.svg?b6srph#Test-Icon-Font') format('svg');
  font-weight: normal;
  font-style: normal;
}`;

