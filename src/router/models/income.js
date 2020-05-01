const IncomeIndex = () => import("@/views/income/index");

const incomeRouter = {
  path: "incomes",
  meta: {
    label: "Income"
  },
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [
    {
      path: "",
      name: "IncomeIndex",
      component: IncomeIndex
    }
  ]
};

export default incomeRouter;
