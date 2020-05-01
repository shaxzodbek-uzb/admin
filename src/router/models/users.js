// Users
const UsersIndex = () => import("@/views/users/index");
const UsersShow = () => import("@/views/users/show");

const usersRouter = {
  path: "users",
  meta: {
    label: "Users"
  },
  component: {
    render(c) {
      return c("router-view");
    }
  },
  children: [
    {
      path: "",
      name: "UsersIndex",
      component: UsersIndex
    },
    {
      path: ":id",
      meta: {
        label: "User Details"
      },
      name: "UsersShow",
      component: UsersShow
    }
  ]
};

export default usersRouter;
