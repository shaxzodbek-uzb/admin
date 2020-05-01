const ExporterIndex = () => import("@/views/exporter/index");

const exporterRouter = {
  path: "exporters",
  meta: {
    label: "Exporter"
  },
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [
    {
      path: "",
      name: "ExporterIndex",
      component: ExporterIndex
    }
  ]
};

export default exporterRouter;
