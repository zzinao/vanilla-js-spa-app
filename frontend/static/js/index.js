const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => console.log("home"),
    },
    {
      path: "/posts",
      view: () => console.log("posts"),
    },
    {
      path: "/settings",
      view: () => console.log(setting),
    },
  ];
};
