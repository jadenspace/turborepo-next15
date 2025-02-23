import { camelCaseToSentence } from "@/shared/utils/string";

interface MenuTree {
  id: number;
  name?: string;
  title?: string;
  parent: string;
  url: string;
  accessBranch?: string[]; // 접근제한 있는 경우
  isDeploy: boolean; // deploy 여부
  onlyPublish?: boolean; // 브랜치별이 아닌 공통 배포인 경우
}

export const parentMenuList = (
  [
    "sales",
    "customers",
    "catalog",
    "catalogManagement",
    "content",
    "marketing",
    "system",
  ] as const
).map((item, idx) => ({
  name: item,
  title: camelCaseToSentence(item),
  id: idx + 1,
}));

export const subMenuList = [
  {
    title: "add sub category",
    parent: "category",
    url: "/category/add",
    isDeploy: true,
    onlyPublish: true,
  },
  {
    title: "edit sub category",
    parent: "category",
    url: "/category/edit",
    isDeploy: true,
    onlyPublish: true,
  },
  { parent: "category", url: "/category/products", isDeploy: true },
  { parent: "product", url: "/product/detail", isDeploy: false },
] as const;

export const menuList = [
  {
    name: "orderList",
    title: "Order List",
    parent: "sales",
    url: "/order-list",
    isDeploy: false,
  },
  {
    name: "returnList",
    title: "Return List",
    parent: "sales",
    url: "/return-list",
    isDeploy: false,
  },
  {
    name: "customer",
    title: "Customer",
    parent: "customers",
    url: "/customer",
    isDeploy: false,
  },
  {
    name: "notification",
    title: "Product Notification",
    parent: "customers",
    url: "/product-notification",
    isDeploy: false,
  },
  {
    name: "category",
    title: "Category",
    parent: "catalog",
    url: "/category",
    isDeploy: true,
  },
  {
    name: "product",
    title: "Product (작업중)",
    parent: "catalog",
    url: "/product",
    isDeploy: false,
  },
  {
    name: "collection",
    title: "Collection",
    parent: "catalogManagement",
    url: "/collection",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "filter",
    title: "Filter",
    parent: "catalogManagement",
    url: "/filter",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "productGroup",
    title: "Product Group",
    parent: "catalogManagement",
    url: "/product-group",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "globalEFixedPrice",
    title: "Global E Fixed Price",
    parent: "catalogManagement",
    url: "/fixed-price",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "rxLenses",
    title: "RX Lenses",
    parent: "catalogManagement",
    url: "/rx-lenses",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "packageImage",
    title: "Package Image",
    parent: "catalogManagement",
    url: "/package-image",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "main",
    title: "Main",
    parent: "content",
    url: "/main",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "search",
    title: "Search",
    parent: "content",
    url: "/search",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "stories",
    title: "Stories",
    parent: "content",
    url: "/stories",
    accessBranch: ["master"],
    isDeploy: false,
  },
  // {
  //   name: "siteMap",
  //   title: "Site Map",
  //   parent: "marketing",
  //   url: "/site-map",
  //   accessBranch: ["master"],
  //   isDeploy: false,
  // },
  {
    name: "productFeed",
    title: "Product Feed",
    parent: "marketing",
    url: "/product-feed",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "headerBanner",
    title: "Header Banner",
    parent: "system",
    url: "/header-banner",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "user",
    title: "User",
    parent: "system",
    url: "/auth/user",
    accessBranch: ["master"],
    isDeploy: false,
  },
  {
    name: "role",
    title: "Role",
    parent: "system",
    url: "/auth/role",
    accessBranch: ["master"],
    isDeploy: false,
  },
  ...subMenuList,
].map((item, idx) => ({ ...item, id: idx + 1 })) as MenuTree[];
