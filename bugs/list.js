import { CONTAINER_BUGS } from "./container/list";
import { TABPANEL_BUGS } from "./tabpanel/list";
import { WINDOW_BUGS } from "./window/list";

export const BUG_LIST = [
  ...TABPANEL_BUGS,
  ...WINDOW_BUGS,
  ...CONTAINER_BUGS,
  // Add more bug xtype lists above
].map(({ BUG_META, default: BugDemoComponent }) => ({
  BUG_META: {
    // Defaults
    faq: [],
    ...BUG_META,
  },
  BugDemoComponent,
}));
