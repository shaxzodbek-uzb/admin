const StatisticsIndex = () => import("@/views/statistics/index");

const statisticsRouter = {
  path: "statistics",
  meta: {
    label: "Statistics"
  },
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [
    {
      path: "",
      name: "StatisticsIndex",
      component: StatisticsIndex
    }
  ]
};

export default statisticsRouter;
