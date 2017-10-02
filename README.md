# react-bell-icon [![npm](https://img.shields.io/npm/v/react-bell-icon.svg?maxAge=000)](https://www.npmjs.com/package/react-bell-icon) [![npm](https://img.shields.io/npm/dm/react-bell-icon.svg?maxAge=000)](https://www.npmjs.com/package/react-bell-icon)

SVG bell icon for react with animations (2.71kB only)

**Demo:**  https://gauravchl.github.io/react-bell-icon/demo/

<img width="73" alt="screen shot 2017-10-02 at 12 11 33 pm" src="https://user-images.githubusercontent.com/3471415/31066486-ede76d76-a76a-11e7-9146-d9119c952a5e.png">


**Install:**
```
npm install react-bell-icon
```


**Use:**
```html
import BellIcon from 'react-bell-icon';

<BellIcon width='40' active={true} animate={true} />

```

<img src="https://user-images.githubusercontent.com/3471415/31066487-f29af78e-a76a-11e7-90c1-2f01642294d7.gif" width="100" >


**Props:**

Props | Type | Description
------|------ | -------------
width    | string | width of bell icon, default is 40
height | string | height of bell icon, default is 40
animationSpeed     | string | Animation speed in seconds, default is 0.3
color    | string | Color for icon, default is black(#000)
animate | boolean | Control whether bell should animate or not, default value = false
active | boolean | Control whether bell is active or not, default value = false
style | object |  For inline style, applied to SVG tag
