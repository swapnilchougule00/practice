export const structure = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "public",
      children: [
        {
          name: "vite.svg",
          isFolder: false,
        },
        {
          name: "tailwind.svg",
          isFolder: false,
        },
      ],
      isFolder: true,
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "auto.jsx",
              isFolder: false,
            },
            {
              name: "box.jsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "index.jsx",
          isFolder: false,
        },
      ],
      isFolder: true,
    },
    {
      name: "index.html",
      isFolder: false,
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};
