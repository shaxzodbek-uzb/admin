const InvestorIndex = () => import("@/views/investor/index");

const investorRouter = {
  path: "investors",
  meta: {
    label: "Investor"
  },
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [
    {
      path: "",
      name: "InvestorIndex",
      component: InvestorIndex
    }
  ]
};

export default investorRouter;
