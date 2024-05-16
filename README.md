# Reext Bug Report Demo

## Setup

1. Clone the repository
2. Run `npm install`
3. Copy extjs to /public as per docs
4. Run `npm run dev`
5. Open `http://localhost:3000` in your browser to see the bug list. (Double click will open the bug component)

## Add a new bug

1. Create a new file under `/bugs/:xtype/:BugName.js`
2. Add metadata (See below)
```javascript
 "use client";
 import ReExt from "@gusmano/reext"; 
 import { BUG_WORKAROUND } from "../constants";

 export const BUG_META = {
    path: "ExampleBug.js", // Replace
    xtype: "tabpanel", // Replace
    title: "Static + Dynamic TabPanel", // Replace
    description:
      "Dynamic tabs are not rendered correctly when there's also a static Tab.", // Replace
    resolved: BUG_UNRESOLVED,
  };

  // Export your Bug component
  export default ExampleBug() {
    return (<ReExt ... />)
  }
```
3. Add the bug to the list in `/bugs/:xtype/list.js`
4. Done!
