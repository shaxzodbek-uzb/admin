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
      name: "index",
      component: UsersIndex
    },
    {
      path: ":id",
      meta: {
        label: "User Details"
      },
      name: "User",
      component: UsersShow
    }
  ]
};

export default usersRouter;
