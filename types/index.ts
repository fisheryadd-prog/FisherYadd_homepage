export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: string; // 图标组件名称，用于动态导入
  gradient: string;
  tags: string[];
  status: string;
}
