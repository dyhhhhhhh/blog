module.exports = {
  base: '/blog/',
  title: 'Heng的博客',
  description: '前端',
  themeConfig: {
    nav: [
      {text: "主页", link: "/"},
      {
        text: "前端",
        items: [
          {text: "html", link: "/fe/html/"},
          {text: "css", link: "/fe/css/"},
          {text: 'vue', link: "/fe/vue/"},
          {text: 'react', link: "/fe/react/"},
          {text: 'webpack', link: "/fe/webpack/"},
          {text: '性能优化', link: '/fe/optimization/'}
        ]
      },
      {text: "后端", link: "/be/"},
      {
        text: '基础',
        items: [
          {text: '算法和数据结构', link: '/basic/aad/'},
          {text: 'LeetCode', link: '/basic/leetcode/'}
        ]
      },
      {text: 'Linux', link: "/linux/"}
    ],
    sidebar: {
      '/fe/css': [
        {
          title: '基础',
          collapsible: true,
        }
      ],
      '/basic/aad': [
        {
          title: '线性数据结构',
          collapsible: true
        },
        {
          title: '排序算法',
          collapsible: true
        }
      ]
    }
  }
}
