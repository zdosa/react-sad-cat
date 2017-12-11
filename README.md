# React Sad Cat
Snackbar like notification appearing in bottom left corner with customizable message.

## Installing
```
npm install react-sad-cat
```

## Using
Just add it in any component, preferably under some conditional controlling when it should appear.
```js
import * as React from 'react';
import { SadCat } from 'react-sad-cat';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <SadCat duration={2000} message={'I am so saaad'}/>
      </div>
    );
  }
}
```

## Props
| Name         | Type            | Required  | Description                                 |
|------------  |---------------  |---------  |-------------------------------------------- |
| duration     | integer         | yes       | Time until Sad Cat disappears (in ms)       |
| message      | string          | no        | Optional message in block under Sad Cat     |
