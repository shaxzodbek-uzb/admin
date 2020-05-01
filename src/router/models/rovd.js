const RovdIndex = () => import("@/views/rovd/index");

const rovdRouter = {
  path: "rovd",
  meta: {
    label: "Rovd"
  },
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [
    {
      path: "",
      name: "RovdIndex",
      component: RovdIndex
    }
  ]
};

export default rovdRouter;
